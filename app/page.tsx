"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"
import { ArrowRight, Zap, Shield, Boxes } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const erc20Example = `use stylus_sdk::prelude::*;
use crate::erc20::{Erc20, ERC20_TRANSFER};

#[solidity_interface]
pub trait Token {
    fn transfer(&mut self, to: Address, value: U256) -> bool;
}

#[entrypoint]
pub fn main() {
    let mut token = Erc20::new();
    // Your logic here
}`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Welcome to Kairo</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Secure Smart Contracts for <span className="text-primary">Arbitrum Stylus</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            A foundational library of battle-tested smart contracts written natively in Rust. Build high-performance
            dApps with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/quick-start"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/arbitrum/stylus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
            <Shield className="mb-4 text-primary" size={28} />
            <h3 className="font-bold text-lg mb-2">Battle-Tested Security</h3>
            <p className="text-muted-foreground">
              Audited implementations of ERC20, ERC721, and access control standards built for the Stylus runtime.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
            <Zap className="mb-4 text-primary" size={28} />
            <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Rust-based contracts are 10-100x faster than Solidity, with significantly lower gas costs.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
            <Boxes className="mb-4 text-primary" size={28} />
            <h3 className="font-bold text-lg mb-2">Easy Integration</h3>
            <p className="text-muted-foreground">
              Drop in as a dependency. Import, extend, and deploy. No reinventing the wheel.
            </p>
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Get Started in Minutes</h2>
          <p className="text-muted-foreground mb-6">
            Kairo makes it simple to build secure contracts. Here's a basic example:
          </p>
          <CodeBlock code={erc20Example} language="rust" filename="src/lib.rs" />
        </div>

        {/* Core Standards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Core Standards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/guides/erc20"
              className="p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-md group"
            >
              <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">ERC20 Tokens</div>
              <p className="text-muted-foreground mb-4">
                Fungible token implementation with transfer, approve, and balance tracking.
              </p>
              <div className="text-primary font-medium flex items-center gap-2">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>
            <Link
              href="/guides/erc721"
              className="p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-md group"
            >
              <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">ERC721 NFTs</div>
              <p className="text-muted-foreground mb-4">
                Non-fungible token standard for unique digital assets and collectibles.
              </p>
              <div className="text-primary font-medium flex items-center gap-2">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>
            <Link
              href="/guides/access-control"
              className="p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-md group"
            >
              <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Access Control</div>
              <p className="text-muted-foreground mb-4">
                Role-based permission system to manage contract ownership and operator roles.
              </p>
              <div className="text-primary font-medium flex items-center gap-2">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>

        {/* Why Stylus */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Why Arbitrum Stylus?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1">Write in Rust, C, or C++</h3>
                <p className="text-muted-foreground">
                  Move beyond Solidity to languages with superior performance and safety.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">10-100x Faster Execution</h3>
                <p className="text-muted-foreground">WebAssembly provides near-native performance on Arbitrum.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Dramatically Lower Gas Costs</h3>
                <p className="text-muted-foreground">Efficient execution means cheaper transactions for your users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
