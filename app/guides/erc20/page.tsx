"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function ERC20Page() {
  const erc20Impl = `use stylus_sdk::prelude::*;
use std::collections::HashMap;

#[solidity_interface]
pub trait Erc20 {
    fn name(&self) -> String;
    fn symbol(&self) -> String;
    fn decimals(&self) -> u8;
    fn total_supply(&self) -> U256;
    fn balance_of(&self, account: Address) -> U256;
    fn transfer(&mut self, to: Address, amount: U256) -> bool;
    fn approve(&mut self, spender: Address, amount: U256) -> bool;
    fn transfer_from(&mut self, from: Address, to: Address, amount: U256) -> bool;
}

pub struct Erc20Token {
    name: String,
    symbol: String,
    decimals: u8,
    total_supply: U256,
    balances: HashMap<Address, U256>,
    allowances: HashMap<(Address, Address), U256>,
}`

  const deployExample = `let mut token = Erc20Token::new(
    "My Token".to_string(),
    "MTK".to_string(),
    18,
    U256::from(1_000_000),
);

// Mint tokens to deployer
token.balances.insert(msg::sender(), U256::from(1_000_000));`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">ERC20 Tokens</h1>
        <p className="text-muted-foreground mb-12">Create fungible tokens with the Kairo ERC20 implementation.</p>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            ERC20 is the standard for fungible tokens on blockchain. With Kairo, you get a production-ready
            implementation that includes:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-4">
            <li>• Transfer and approval mechanisms</li>
            <li>• Balance tracking with efficient storage</li>
            <li>• Secure arithmetic operations</li>
            <li>• Event emission support</li>
          </ul>
        </div>

        {/* Implementation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Basic Implementation</h2>
          <CodeBlock code={erc20Impl} language="rust" filename="src/lib.rs" />
        </div>

        {/* Deployment */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Deploying Your Token</h2>
          <CodeBlock code={deployExample} language="rust" />
        </div>

        {/* Key Functions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Functions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">transfer(to, amount)</code>
              </h3>
              <p className="text-muted-foreground">
                Transfer tokens from sender to recipient. Returns true if successful.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">approve(spender, amount)</code>
              </h3>
              <p className="text-muted-foreground">Approve a spender to transfer tokens on your behalf.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">transfer_from(from, to, amount)</code>
              </h3>
              <p className="text-muted-foreground">Transfer tokens from one address to another if approved.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">balance_of(account)</code>
              </h3>
              <p className="text-muted-foreground">Get the token balance of an account.</p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Best Practices</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>
                Always use the <code className="bg-muted px-2 py-1 rounded">approve</code> pattern for token spending
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Emit transfer events for better indexing and tracking</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Validate inputs to prevent overflow attacks</span>
            </li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
