"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function QuickStartPage() {
  const createProject = `cargo stylus new my-awesome-token
cd my-awesome-token`

  const cargoToml = `[dependencies]
# ... other dependencies
kairo = { git = "https://github.com/Team-Oracle/kairo.git", branch = "main" }`

  const tokenExample = `#![cfg_attr(not(any(feature = "export-abi", test)), no_main)]
extern crate alloc;

// 1. Import Kairo ERC20 components
use kairo::erc20::{Erc20, Erc20Params, Erc20Error};
use stylus_sdk::{alloy_primitives::U256, prelude::*};

// 2. Define token properties
struct MyTokenParams;

impl Erc20Params for MyTokenParams {
    const NAME: &'static str = "My Awesome Token";
    const SYMBOL: &'static str = "MAT";
    const DECIMALS: u8 = 18;
}

// 3. Define storage and inherit ERC20 logic
sol_storage! {
    #[entrypoint]
    struct MyAwesomeToken {
        #[borrow]
        Erc20<MyTokenParams> erc20;
    }
}

// 4. (Optional) Add custom functions (e.g., mint initial supply)
#[public]
#[inherit(Erc20<MyTokenParams>)]
impl MyAwesomeToken
where
    Self: HostAccess,
{
    pub fn init(&mut self) -> Result<(), Erc20Error> {
        let initial_supply = U256::from(1_000_000) * U256::from(10).pow(U256::from(MyTokenParams::DECIMALS));
        self.erc20.mint(self.vm().msg_sender(), initial_supply)
    }
}`

  const deployCommand = `cargo stylus deploy --no-verify \\
  -e <YOUR_SEPOLIA_RPC_URL> \\
  --private-key <YOUR_WALLET_PRIVATE_KEY>`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Getting Started</h1>
        <p className="text-muted-foreground mb-12">Build and deploy your own custom ERC20 token in minutes!</p>

        {/* Prerequisites */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Rust</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>cargo-stylus</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>foundry</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Wallet with testnet funds</span>
            </li>
          </ul>
        </div>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold">Create a New Stylus Project</h2>
          </div>
          <CodeBlock code={createProject} language="bash" />
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold">Add Kairo as a Dependency</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Open your <code className="bg-muted px-2 py-1 rounded">Cargo.toml</code> and add Kairo to{" "}
            <code className="bg-muted px-2 py-1 rounded">[dependencies]</code>:
          </p>
          <CodeBlock code={cargoToml} language="toml" filename="Cargo.toml" />
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold">Write Your Custom Token Contract</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Open <code className="bg-muted px-2 py-1 rounded">src/lib.rs</code> (or{" "}
            <code className="bg-muted px-2 py-1 rounded">src/main.rs</code>) and replace its contents:
          </p>
          <CodeBlock code={tokenExample} language="rust" filename="src/lib.rs" />
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              4
            </div>
            <h2 className="text-2xl font-bold">Deploy to a Testnet</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Use <code className="bg-muted px-2 py-1 rounded">cargo stylus</code> to deploy to Sepolia (or another
            supported testnet):
          </p>
          <CodeBlock code={deployCommand} language="bash" />
          <p className="text-muted-foreground text-sm mt-4">
            Your custom token is now live, inheriting all of Kairo's security and functionality!
          </p>
        </div>
      </div>
    </LayoutWrapper>
  )
}
