(function() {var implementors = {
"assets_common":[["impl&lt;Assets, LocalAssetIdConverter, ForeignAssets&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Unbalanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Unbalanced\">Unbalanced</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt; for <a class=\"struct\" href=\"assets_common/local_and_foreign_assets/struct.LocalAndForeignAssets.html\" title=\"struct assets_common::local_and_foreign_assets::LocalAndForeignAssets\">LocalAndForeignAssets</a>&lt;Assets, LocalAssetIdConverter, ForeignAssets&gt;<span class=\"where fmt-newline\">where\n    Assets: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;<a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u128.html\">u128</a>, AssetId = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Unbalanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Unbalanced\">Unbalanced</a>&lt;<a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;<a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/metadata/trait.PalletInfoAccess.html\" title=\"trait frame_support::traits::metadata::PalletInfoAccess\">PalletInfoAccess</a>,\n    LocalAssetIdConverter: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;,\n    ForeignAssets: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;<a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u128.html\">u128</a>, AssetId = <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Unbalanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Unbalanced\">Unbalanced</a>&lt;<a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;<a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>&gt;,</span>"]],
"pallet_assets":[["impl&lt;T: <a class=\"trait\" href=\"pallet_assets/pallet/trait.Config.html\" title=\"trait pallet_assets::pallet::Config\">Config</a>&lt;I&gt;, I: 'static&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Unbalanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Unbalanced\">Unbalanced</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt; for <a class=\"struct\" href=\"pallet_assets/pallet/struct.Pallet.html\" title=\"struct pallet_assets::pallet::Pallet\">Pallet</a>&lt;T, I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()