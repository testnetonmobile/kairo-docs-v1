"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  const rustInstall = `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

  const cargoStylusSetup = `rustup target add wasm32-unknown-unknown
cargo install cargo-stylus`

  const foundrySetup = `curl -L https://foundry.paradigm.xyz | bash
foundryup`

  const verifySetup = `rustc --version
cargo --version
cargo stylus --version
forge --version`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Installation Guide</h1>
        <p className="text-muted-foreground mb-12">
          Complete setup instructions for Arbitrum Stylus development with Kairo.
        </p>

        {/* Prerequisites */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Rust 1.77.0 or later</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Cargo and Rustup</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>WebAssembly target support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>4GB RAM minimum</span>
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
          <p className="text-muted-foreground mb-4">
            If you don't have Rust installed, download it from{" "}
            <a href="https://rustup.rs" className="text-primary hover:underline">
              rustup.rs
            </a>
            :
          </p>
          <CodeBlock code={rustInstall} language="bash" />
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold">Install cargo-stylus and WebAssembly Target</h2>
          </div>
          <CodeBlock code={cargoStylusSetup} language="bash" />
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold">Install Foundry</h2>
          </div>
          <CodeBlock code={foundrySetup} language="bash" />
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              4
            </div>
            <h2 className="text-2xl font-bold">Verify Installation</h2>
          </div>
          <p className="text-muted-foreground mb-4">Verify that all tools are installed correctly:</p>
          <CodeBlock code={verifySetup} language="bash" />
        </div>

        {/* Troubleshooting */}
        <div className="bg-card border border-border rounded-xl p-6 mb-12">
          <h3 className="font-bold mb-4">Troubleshooting</h3>
          <div className="space-y-4 text-muted-foreground text-sm">
            <div>
              <p className="font-medium mb-2">Rust target not found?</p>
              <p className="text-muted-foreground">
                <code className="bg-muted px-2 py-1 rounded">rustup target add wasm32-unknown-unknown</code>
              </p>
            </div>
            <div>
              <p className="font-medium mb-2">cargo-stylus not found?</p>
              <p className="text-muted-foreground">
                <code className="bg-muted px-2 py-1 rounded">cargo install cargo-stylus --locked</code>
              </p>
            </div>
            <div>
              <p className="font-medium mb-2">Build errors?</p>
              <p className="text-muted-foreground">
                Ensure Rust is fully updated: <code className="bg-muted px-2 py-1 rounded">rustup update</code>
              </p>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="text-center">
          <a
            href="/quick-start"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Next: Quick Start Guide
          </a>
        </div>
      </div>
    </LayoutWrapper>
  )
}
