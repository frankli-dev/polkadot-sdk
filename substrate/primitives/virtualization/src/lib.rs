// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#![cfg_attr(not(feature = "std"), no_std)]

#[cfg(not(feature = "std"))]
mod forwarder;
#[cfg(not(feature = "std"))]
pub use forwarder::{Memory, Virt};

#[cfg(feature = "std")]
mod native;
#[cfg(feature = "std")]
pub use native::{Memory, Virt};

pub use sp_io::{
	VirtExecError as ExecError, VirtInstantiateError as InstantiateError,
	VirtMemoryError as MemoryError,
};

#[repr(C)]
pub struct SharedState<T> {
	pub gas_left: u64,
	pub exit: bool,
	pub user: T,
}

pub type SyscallHandler<T> = extern "C" fn(
	state: &mut SharedState<T>,
	syscall_no: u32,
	a0: u32,
	a1: u32,
	a2: u32,
	a3: u32,
	a4: u32,
	a5: u32,
) -> u64;

pub trait VirtT: Sized {
	type Memory: MemoryT;

	fn instantiate(program: &[u8]) -> Result<Self, InstantiateError>;

	fn execute<T>(
		self,
		function: &str,
		syscall_handler: SyscallHandler<T>,
		shared_state: &mut SharedState<T>,
	) -> Result<(), ExecError>;

	fn memory(&self) -> Self::Memory;
}

pub trait MemoryT: Clone {
	fn read(&self, offset: u32, dest: &mut [u8]) -> Result<(), MemoryError>;

	fn write(&self, offset: u32, src: &[u8]) -> Result<(), MemoryError>;
}
