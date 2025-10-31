"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  const cargoInstall = `cargo add stylus-sdk --features "export-abi"
cargo add kairo`

  const setupStylus = `rustup target add wasm32-unknown-unknown
cargo install cargo-stylus`

  const buildCommand = `cargo stylus build`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Installation Guide</h1>
        <p className="text-muted-foreground mb-12">
          Detailed setup instructions for getting Kairo and Arbitrum Stylus ready.
        </p>

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

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Step 1: Install Rust</h2>
          <p className="text-muted-foreground mb-4">
            If you don't have Rust installed, download it from{" "}
            <a href="https://rustup.rs" className="text-primary hover:underline">
              rustup.rs
            </a>
            :
          </p>
          <CodeBlock code={cargoInstall} language="bash" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Step 2: Setup Stylus</h2>
          <p className="text-muted-foreground mb-4">Install the Stylus toolchain and target:</p>
          <CodeBlock code={setupStylus} language="bash" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Step 3: Create Your Project</h2>
          <CodeBlock code={buildCommand} language="bash" />
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Troubleshooting</h3>
          <div className="space-y-4 text-muted-foreground text-sm">
            <div>
              <p className="font-medium mb-2">Rust target not found?</p>
              <p>Run: rustup target add wasm32-unknown-unknown</p>
            </div>
            <div>
              <p className="font-medium mb-2">Cargo stylus not found?</p>
              <p>Run: cargo install cargo-stylus --locked</p>
            </div>
            <div>
              <p className="font-medium mb-2">Build errors?</p>
              <p>Ensure Rust is fully updated: rustup update</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
