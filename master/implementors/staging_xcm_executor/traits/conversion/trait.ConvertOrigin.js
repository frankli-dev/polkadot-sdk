(function() {var implementors = {
"pallet_xcm":[["impl&lt;RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_xcm/pallet/enum.Origin.html\" title=\"enum pallet_xcm::pallet::Origin\">Origin</a>&gt;&gt; ConvertOrigin&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"pallet_xcm/struct.XcmPassthrough.html\" title=\"struct pallet_xcm::XcmPassthrough\">XcmPassthrough</a>&lt;RuntimeOrigin&gt;"]],
"staging_xcm_builder":[["impl&lt;ParaId: <a class=\"trait\" href=\"polkadot_parachain_primitives/primitives/trait.IsSystem.html\" title=\"trait polkadot_parachain_primitives::primitives::IsSystem\">IsSystem</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;, RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.ChildSystemParachainAsSuperuser.html\" title=\"struct staging_xcm_builder::ChildSystemParachainAsSuperuser\">ChildSystemParachainAsSuperuser</a>&lt;ParaId, RuntimeOrigin&gt;"],["impl&lt;RelayOrigin: Get&lt;RuntimeOrigin&gt;, RuntimeOrigin&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.RelayChainAsNative.html\" title=\"struct staging_xcm_builder::RelayChainAsNative\">RelayChainAsNative</a>&lt;RelayOrigin, RuntimeOrigin&gt;"],["impl&lt;LocationConverter: ConvertLocation&lt;RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.AccountId\" title=\"type frame_support::traits::dispatch::OriginTrait::AccountId\">AccountId</a>&gt;, RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SovereignSignedViaLocation.html\" title=\"struct staging_xcm_builder::SovereignSignedViaLocation\">SovereignSignedViaLocation</a>&lt;LocationConverter, RuntimeOrigin&gt;<span class=\"where fmt-newline\">where\n    RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.AccountId\" title=\"type frame_support::traits::dispatch::OriginTrait::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SignedAccountKey20AsNative.html\" title=\"struct staging_xcm_builder::SignedAccountKey20AsNative\">SignedAccountKey20AsNative</a>&lt;Network, RuntimeOrigin&gt;<span class=\"where fmt-newline\">where\n    RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.AccountId\" title=\"type frame_support::traits::dispatch::OriginTrait::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">20</a>]&gt;,</span>"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SignedAccountId32AsNative.html\" title=\"struct staging_xcm_builder::SignedAccountId32AsNative\">SignedAccountId32AsNative</a>&lt;Network, RuntimeOrigin&gt;<span class=\"where fmt-newline\">where\n    RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.AccountId\" title=\"type frame_support::traits::dispatch::OriginTrait::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt;,</span>"],["impl&lt;ParachainOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;, RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ParachainOrigin&gt;&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SiblingParachainAsNative.html\" title=\"struct staging_xcm_builder::SiblingParachainAsNative\">SiblingParachainAsNative</a>&lt;ParachainOrigin, RuntimeOrigin&gt;"],["impl&lt;RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.ParentAsSuperuser.html\" title=\"struct staging_xcm_builder::ParentAsSuperuser\">ParentAsSuperuser</a>&lt;RuntimeOrigin&gt;"],["impl&lt;ParaId: <a class=\"trait\" href=\"polkadot_parachain_primitives/primitives/trait.IsSystem.html\" title=\"trait polkadot_parachain_primitives::primitives::IsSystem\">IsSystem</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;, RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SiblingSystemParachainAsSuperuser.html\" title=\"struct staging_xcm_builder::SiblingSystemParachainAsSuperuser\">SiblingSystemParachainAsSuperuser</a>&lt;ParaId, RuntimeOrigin&gt;"],["impl&lt;ParachainOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;, RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ParachainOrigin&gt;&gt; <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ConvertOrigin.html\" title=\"trait staging_xcm_builder::test_utils::ConvertOrigin\">ConvertOrigin</a>&lt;RuntimeOrigin&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.ChildParachainAsNative.html\" title=\"struct staging_xcm_builder::ChildParachainAsNative\">ChildParachainAsNative</a>&lt;ParachainOrigin, RuntimeOrigin&gt;"]],
"staging_xcm_executor":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()