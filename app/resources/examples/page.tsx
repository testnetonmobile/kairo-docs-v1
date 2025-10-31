"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function ExamplesPage() {
  const simpleTokenExample = `#![no_main]
use stylus_sdk::prelude::*;
use kairo::erc20::Erc20;

#[entrypoint]
fn user_main(input: Vec<u8>) -> ArbResult {
    let mut token = Erc20::new(
        "My Token".to_string(),
        "MTK".to_string(),
        18,
    );
    
    // Initialize total supply
    token.mint(msg::sender(), U256::from(1_000_000_000));
    
    Ok(Vec::new())
}`

  const nftMintExample = `fn mint_nft(
    &mut self,
    to: Address,
    token_id: U256,
    metadata_uri: String,
) -> Result<bool, String> {
    // Verify mint permission
    if msg::sender() != self.owner {
        return Err("Only owner can mint".to_string());
    }
    
    // Check token doesn't exist
    if self.owners.contains_key(&token_id) {
        return Err("Token already exists".to_string());
    }
    
    // Mint NFT
    self.owners.insert(token_id, to);
    self.uris.insert(token_id, metadata_uri);
    
    Ok(true)
}`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Examples</h1>
        <p className="text-muted-foreground mb-12">Practical code examples for common use cases.</p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Simple Token Contract</h2>
          <p className="text-muted-foreground mb-4">A basic ERC20 token with minting functionality:</p>
          <CodeBlock code={simpleTokenExample} language="rust" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">NFT Minting</h2>
          <p className="text-muted-foreground mb-4">Implement custom minting logic for your NFT collection:</p>
          <CodeBlock code={nftMintExample} language="rust" />
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">More Examples</h3>
          <p className="text-muted-foreground mb-4">
            Check out the Kairo repository for more complete examples and templates:
          </p>
          <a
            href="https://github.com/kairo/examples"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            View Examples on GitHub →
          </a>
        </div>
      </div>
    </LayoutWrapper>
  )
}
