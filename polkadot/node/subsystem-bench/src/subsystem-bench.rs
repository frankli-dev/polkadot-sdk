// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.

//! A tool for running subsystem benchmark tests designed for development and
//! CI regression testing.
use approval::ApprovalSubsystemInstance;
use clap::Parser;
use color_eyre::eyre;

use colored::Colorize;
use prometheus::Registry;
use sc_service::TaskManager;
use std::{path::Path, time::Duration};

pub(crate) mod approval;
pub(crate) mod availability;
pub(crate) mod cli;
pub(crate) mod core;

use availability::{
	AvailabilityRecoveryConfiguration, DataAvailabilityReadOptions, NetworkEmulation,
	TestEnvironment, TestState,
};
use cli::TestObjective;

use core::configuration::{PeerLatency, TestConfiguration, TestSequence};

use clap_num::number_range;
const LOG_TARGET: &str = "subsystem-bench";

fn le_100(s: &str) -> Result<usize, String> {
	number_range(s, 0, 100)
}

fn le_5000(s: &str) -> Result<usize, String> {
	number_range(s, 0, 5000)
}

#[derive(Debug, Parser)]
#[allow(missing_docs)]
struct BenchCli {
	#[arg(long, value_enum, ignore_case = true, default_value_t = NetworkEmulation::Ideal)]
	/// The type of network to be emulated
	pub network: NetworkEmulation,

	#[clap(flatten)]
	pub standard_configuration: cli::StandardTestOptions,

	#[clap(short, long)]
	/// The bandwidth of simulated remote peers in KiB
	pub peer_bandwidth: Option<usize>,

	#[clap(short, long)]
	/// The bandwidth of our simulated node in KiB
	pub bandwidth: Option<usize>,

	#[clap(long, value_parser=le_100)]
	/// Simulated connection error rate [0-100].
	pub peer_error: Option<usize>,

	#[clap(long, value_parser=le_5000)]
	/// Minimum remote peer latency in milliseconds [0-5000].
	pub peer_min_latency: Option<u64>,

	#[clap(long, value_parser=le_5000)]
	/// Maximum remote peer latency in milliseconds [0-5000].
	pub peer_max_latency: Option<u64>,

	#[command(subcommand)]
	pub objective: cli::TestObjective,
}

pub fn new_runtime() -> tokio::runtime::Runtime {
	tokio::runtime::Builder::new_multi_thread()
		.thread_name("subsystem-bench")
		.enable_all()
		.thread_stack_size(3 * 1024 * 1024)
		.build()
		.unwrap()
}

impl BenchCli {
	fn launch(self) -> eyre::Result<()> {
		use prometheus::Registry;

		let runtime = new_runtime();

		let configuration = self.standard_configuration;
		let mut test_config = match self.objective {
			TestObjective::TestSequence(options) => {
				let test_sequence =
					core::configuration::TestSequence::new_from_file(Path::new(&options.path))
						.expect("File exists")
						.to_vec();
				let num_steps = test_sequence.len();
				gum::info!(
					"{}",
					format!("Sequence contains {} step(s)", num_steps).bright_purple()
				);
				for (index, test_config) in test_sequence.into_iter().enumerate() {
					gum::info!(
						"{}, {}, {}, {}, {}, {}",
						format!("Step {}/{}", index + 1, num_steps).bright_purple(),
						format!("n_validators = {}", test_config.n_validators).blue(),
						format!("n_cores = {}", test_config.n_cores).blue(),
						format!(
							"pov_size = {} - {}",
							test_config.min_pov_size, test_config.max_pov_size
						)
						.bright_black(),
						format!("error = {}", test_config.error).bright_black(),
						format!("latency = {:?}", test_config.latency).bright_black(),
					);

					let candidate_count = test_config.n_cores * test_config.num_blocks;

					let mut state = TestState::new(test_config);
					state.generate_candidates(candidate_count);
					let mut env =
						TestEnvironment::new(runtime.handle().clone(), state, Registry::new());

					runtime.block_on(availability::bench_chunk_recovery(&mut env));
				}
				return Ok(())
			},
			TestObjective::DataAvailabilityRead(ref options) => match self.network {
				NetworkEmulation::Healthy => TestConfiguration::healthy_network(
					self.objective,
					configuration.num_blocks,
					configuration.n_validators,
					configuration.n_cores,
					configuration.min_pov_size,
					configuration.max_pov_size,
				),
				NetworkEmulation::Degraded => TestConfiguration::degraded_network(
					self.objective,
					configuration.num_blocks,
					configuration.n_validators,
					configuration.n_cores,
					configuration.min_pov_size,
					configuration.max_pov_size,
				),
				NetworkEmulation::Ideal => TestConfiguration::ideal_network(
					self.objective,
					configuration.num_blocks,
					configuration.n_validators,
					configuration.n_cores,
					configuration.min_pov_size,
					configuration.max_pov_size,
				),
			},
		};

		let mut latency_config = test_config.latency.clone().unwrap_or_default();

		if let Some(latency) = self.peer_min_latency {
			latency_config.min_latency = Duration::from_millis(latency);
		}

		if let Some(latency) = self.peer_max_latency {
			latency_config.max_latency = Duration::from_millis(latency);
		}

		if let Some(error) = self.peer_error {
			test_config.error = error;
		}

		if let Some(bandwidth) = self.peer_bandwidth {
			// CLI expects bw in KiB
			test_config.peer_bandwidth = bandwidth * 1024;
		}

		if let Some(bandwidth) = self.bandwidth {
			// CLI expects bw in KiB
			test_config.bandwidth = bandwidth * 1024;
		}

		let candidate_count = test_config.n_cores * test_config.num_blocks;
		test_config.write_to_disk();

		let mut state = TestState::new(test_config);
		state.generate_candidates(candidate_count);
		let mut env = TestEnvironment::new(runtime.handle().clone(), state, Registry::new());

		runtime.block_on(availability::bench_chunk_recovery(&mut env));

		Ok(())
	}
}

fn main() -> eyre::Result<()> {
	color_eyre::install()?;
	let _ = env_logger::builder()
		.filter(Some("hyper"), log::LevelFilter::Info)
		.filter(None, log::LevelFilter::Info)
		.try_init()
		.unwrap();

	// let cli: BenchCli = BenchCli::parse();
	// cli.launch()?;

	let registry = Registry::new();
	let runtime = new_runtime();
	let task_manager: TaskManager =
		TaskManager::new(runtime.handle().clone(), Some(&registry)).unwrap();

	let approval_subsystem = ApprovalSubsystemInstance::new(task_manager.spawn_handle());

	println!("RUNTIME ====");
	runtime.block_on(async {
		approval_subsystem.run_approval_voting().await;
	});

	Ok(())
}

#[cfg(test)]
mod tests {
	use super::*;
}
