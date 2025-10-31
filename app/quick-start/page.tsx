"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function QuickStartPage() {
  const rustupInstall = `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

  const cargoNew = `cargo new my_stylus_project
cd my_stylus_project`

  const cargoToml = `[package]
name = "my_stylus_project"
version = "0.1.0"
edition = "2021"

[dependencies]
stylus-sdk = { version = "0.4", features = ["export-abi"] }
kairo = { path = "../kairo" }`

  const libExample = `#![no_main]
use stylus_sdk::prelude::*;
use kairo::erc20::Erc20;

#[entrypoint]
fn user_main(input: Vec<u8>) -> ArbResult {
    let mut token = Erc20::new();
    // Initialize your token
    Ok(Vec::new())
}`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Quick Start</h1>
        <p className="text-muted-foreground mb-12">Get up and running with Kairo in just a few minutes.</p>

        {/* Prerequisites */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Rust 1.77 or later</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Cargo (comes with Rust)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Basic knowledge of Rust or Web3 development</span>
            </li>
          </ul>
        </div>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold">Install Rust</h2>
          </div>
          <CodeBlock code={rustupInstall} language="bash" />
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold">Create a New Project</h2>
          </div>
          <CodeBlock code={cargoNew} language="bash" />
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold">Add Kairo as a Dependency</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Update your <code>Cargo.toml</code>:
          </p>
          <CodeBlock code={cargoToml} language="toml" filename="Cargo.toml" />
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              4
            </div>
            <h2 className="text-2xl font-bold">Write Your Contract</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Create your first contract in <code>src/lib.rs</code>:
          </p>
          <CodeBlock code={libExample} language="rust" filename="src/lib.rs" />
        </div>

        {/* Next Steps */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">What's Next?</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <a href="/guides/erc20" className="text-primary hover:underline font-medium">
                Build an ERC20 Token →
              </a>
            </li>
            <li>
              <a href="/guides/erc721" className="text-primary hover:underline font-medium">
                Create an NFT Contract →
              </a>
            </li>
            <li>
              <a href="/installation" className="text-primary hover:underline font-medium">
                Detailed Installation Guide →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
