"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  const rustInstall = `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

  const cargoStylusSetup = `cargo install cargo-stylus`

  const foundrySetup = `curl -L https://foundry.paradigm.xyz | bash
foundryup`

  const verifySetup = `rustc --version
cargo --version
cargo stylus --version
forge --version`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Installation</h1>
        <p className="text-muted-foreground mb-12">Set up the prerequisites needed to build with Kairo.</p>

        {/* Required Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Required Tools</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Rust</h3>
              <p className="text-muted-foreground">
                Install Rust from{" "}
                <a
                  href="https://rustup.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  rustup.rs
                </a>
                . Make sure you have the latest stable version.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">cargo-stylus</h3>
              <p className="text-muted-foreground mb-3">The Stylus CLI tool for creating and deploying projects:</p>
              <CodeBlock code={`cargo install cargo-stylus`} language="bash" />
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">foundry</h3>
              <p className="text-muted-foreground mb-3">
                Install Foundry from{" "}
                <a
                  href="https://book.getfoundry.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  book.getfoundry.sh
                </a>{" "}
                for testing and deployment utilities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Wallet with Testnet Funds</h3>
              <p className="text-muted-foreground">
                You'll need a wallet (such as MetaMask) with testnet ETH on Sepolia or another Arbitrum testnet to
                deploy contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Next Steps</h3>
          <p className="text-muted-foreground">
            Once you have these tools installed, head over to the{" "}
            <a href="/quick-start" className="text-primary hover:underline">
              Getting Started guide
            </a>{" "}
            to create and deploy your first token.
          </p>
        </div>
      </div>
    </LayoutWrapper>
  )
}
