"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { ArrowRight, AlertCircle, Zap, Package } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Smart Contracts for Stylus</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Kairo: A Stylus <span className="text-primary">Smart Contract Library</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            Production-ready smart contracts written natively in Rust for Arbitrum Stylus. Secure, gas-efficient, and
            inspired by OpenZeppelin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/quick-start"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/Team-Oracle/kairo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* The Problem */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-20">
          <div className="flex gap-4 items-start">
            <AlertCircle className="text-primary flex-shrink-0 mt-1" size={24} />
            <div>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-muted-foreground mb-4">
                Arbitrum Stylus is revolutionary—it lets developers write smart contracts in high-performance languages
                like Rust. But this new ecosystem faces a critical challenge: the "blank page" problem.
              </p>
              <p className="text-muted-foreground">
                Without a standard library, every developer must write their own ERC20 or NFT contracts from scratch.
                This is slow and a leading cause of security vulnerabilities.{" "}
                <strong>
                  Kairo solves this by providing a foundational, trusted, and battle-tested set of contracts.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
            <Package className="mb-4 text-primary" size={28} />
            <h3 className="font-bold text-lg mb-2">ERC20 & ERC721</h3>
            <p className="text-muted-foreground">
              Full-featured implementations of fungible tokens and NFTs, ready to extend and customize.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
            <Zap className="mb-4 text-primary" size={28} />
            <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Written in Rust for Stylus VM. Dramatically faster execution and lower gas costs than Solidity.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
            <AlertCircle className="mb-4 text-primary" size={28} />
            <h3 className="font-bold text-lg mb-2">Secure & Audited</h3>
            <p className="text-muted-foreground">
              Production-ready contracts inspired by OpenZeppelin, designed for safety and reliability.
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/quick-start"
              className="p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-md group"
            >
              <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Quick Start Guide</div>
              <p className="text-muted-foreground text-sm mb-4">
                Learn how to install Kairo and deploy your first token in minutes.
              </p>
              <div className="text-primary font-medium flex items-center gap-2 text-sm">
                Read guide <ArrowRight size={14} />
              </div>
            </Link>
            <Link
              href="/development"
              className="p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-md group"
            >
              <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Local Development</div>
              <p className="text-muted-foreground text-sm mb-4">
                Set up a local node and run the Kairo test suite for development.
              </p>
              <div className="text-primary font-medium flex items-center gap-2 text-sm">
                Learn more <ArrowRight size={14} />
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
                  High-performance languages with superior safety and speed compared to Solidity.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">Dramatically Lower Gas Costs</h3>
                <p className="text-muted-foreground">
                  Efficient WebAssembly execution means significantly cheaper transactions for your users.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Performance at Scale</h3>
                <p className="text-muted-foreground">
                  Build high-speed dApps for gaming, DeFi, and AI that are only possible with Stylus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
