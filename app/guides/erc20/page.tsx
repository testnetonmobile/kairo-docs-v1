"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function ERC20Page() {
  const erc20Example = `#![cfg_attr(not(any(feature = "export-abi", test)), no_main)]
extern crate alloc;

use kairo::erc20::{Erc20, Erc20Params, Erc20Error};
use stylus_sdk::{alloy_primitives::U256, prelude::*};

struct MyTokenParams;

impl Erc20Params for MyTokenParams {
    const NAME: &'static str = "My Awesome Token";
    const SYMBOL: &'static str = "MAT";
    const DECIMALS: u8 = 18;
}

sol_storage! {
    #[entrypoint]
    struct MyAwesomeToken {
        #[borrow]
        Erc20<MyTokenParams> erc20;
    }
}`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">ERC20 Tokens</h1>
        <p className="text-muted-foreground mb-12">Full-featured implementation of the fungible token standard.</p>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            ERC20 is the standard for fungible tokens on blockchain. It provides a common set of rules that allow tokens
            to be transferred, approved, and tracked across accounts.
          </p>
          <p className="text-muted-foreground">
            With Kairo, you get a production-ready, gas-efficient implementation written in Rust that includes transfer,
            approve, balance tracking, and all core ERC20 functionality.
          </p>
        </div>

        {/* Basic Implementation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Basic Implementation</h2>
          <p className="text-muted-foreground mb-4">Here's how to create your own ERC20 token with Kairo:</p>
          <CodeBlock code={erc20Example} language="rust" filename="src/lib.rs" />
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">1. Define Token Parameters</h3>
              <p className="text-muted-foreground">
                Create a struct implementing <code className="bg-muted px-2 py-1 rounded">Erc20Params</code> with your
                token's NAME, SYMBOL, and DECIMALS.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. Define Storage</h3>
              <p className="text-muted-foreground">
                Use <code className="bg-muted px-2 py-1 rounded">sol_storage!</code> to define your contract's storage,
                borrowing the Erc20 implementation.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. Add Custom Logic (Optional)</h3>
              <p className="text-muted-foreground">
                Implement additional functions or mint initial supply as needed for your use case.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">4. Deploy</h3>
              <p className="text-muted-foreground">
                Deploy your contract using <code className="bg-muted px-2 py-1 rounded">cargo stylus deploy</code> to
                Arbitrum Stylus.
              </p>
            </div>
          </div>
        </div>

        {/* Key Functions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Core Functions</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">transfer(to, amount)</code>
              </h3>
              <p className="text-muted-foreground text-sm">
                Transfer tokens from sender to recipient. Returns true if successful.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">approve(spender, amount)</code>
              </h3>
              <p className="text-muted-foreground text-sm">Approve a spender to transfer tokens on your behalf.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">transferFrom(from, to, amount)</code>
              </h3>
              <p className="text-muted-foreground text-sm">Transfer tokens from one address to another if approved.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">balanceOf(account)</code>
              </h3>
              <p className="text-muted-foreground text-sm">Get the token balance of an account.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">totalSupply()</code>
              </h3>
              <p className="text-muted-foreground text-sm">Get the total supply of tokens.</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Why Use Kairo for ERC20?</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Audited and battle-tested implementation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>10-100x faster than Solidity-based ERC20s</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Significantly lower gas costs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Easy to extend with custom functionality</span>
            </li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
