"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function ERC721Page() {
  const erc721Impl = `use stylus_sdk::prelude::*;
use std::collections::HashMap;

#[solidity_interface]
pub trait Erc721 {
    fn name(&self) -> String;
    fn symbol(&self) -> String;
    fn total_supply(&self) -> U256;
    fn balance_of(&self, owner: Address) -> U256;
    fn owner_of(&self, token_id: U256) -> Address;
    fn transfer_from(&mut self, from: Address, to: Address, token_id: U256) -> bool;
    fn approve(&mut self, to: Address, token_id: U256) -> bool;
    fn set_approval_for_all(&mut self, operator: Address, approved: bool) -> bool;
}

pub struct Erc721Token {
    name: String,
    symbol: String,
    token_ids: Vec<U256>,
    owners: HashMap<U256, Address>,
    balances: HashMap<Address, U256>,
    approvals: HashMap<U256, Address>,
}`

  const mintExample = `fn mint(&mut self, to: Address, token_id: U256) -> Result<(), String> {
    if self.owners.contains_key(&token_id) {
        return Err("Token already exists".to_string());
    }
    
    self.owners.insert(token_id, to);
    *self.balances.entry(to).or_insert(U256::zero()) += U256::one();
    
    Ok(())
}`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">ERC721 NFTs</h1>
        <p className="text-muted-foreground mb-12">Create non-fungible tokens with the Kairo ERC721 implementation.</p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            ERC721 is the standard for non-fungible tokens on blockchain. Each token is unique and can represent digital
            assets like:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-4">
            <li>• Digital art and collectibles</li>
            <li>• Gaming assets and in-game items</li>
            <li>• Real-world asset representations</li>
            <li>• Domain names and identities</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Implementation</h2>
          <CodeBlock code={erc721Impl} language="rust" filename="src/lib.rs" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Minting NFTs</h2>
          <CodeBlock code={mintExample} language="rust" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Functions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">owner_of(token_id)</code>
              </h3>
              <p className="text-muted-foreground">Get the current owner of a specific NFT.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">balance_of(owner)</code>
              </h3>
              <p className="text-muted-foreground">Get the number of NFTs owned by an address.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">transfer_from(from, to, token_id)</code>
              </h3>
              <p className="text-muted-foreground">Transfer an NFT from one owner to another.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                <code className="bg-muted px-2 py-1 rounded">approve(to, token_id)</code>
              </h3>
              <p className="text-muted-foreground">Approve an address to transfer a specific NFT.</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">NFT Best Practices</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Use unique token IDs to prevent collisions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Implement metadata URIs for off-chain data</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Emit Transfer events for marketplace indexing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Validate ownership before transfers</span>
            </li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
