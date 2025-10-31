"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function ERC721APIPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">ERC721 API Reference</h1>
        <p className="text-muted-foreground mb-12">
          Complete API reference for the ERC721 NFT standard implementation.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">State Functions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">name()</h3>
              <CodeBlock code="fn name(&self) -> String" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the name of the NFT collection.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">symbol()</h3>
              <CodeBlock code="fn symbol(&self) -> String" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the symbol of the NFT collection.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">total_supply()</h3>
              <CodeBlock code="fn total_supply(&self) -> U256" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the total number of NFTs minted.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">balance_of(owner)</h3>
              <CodeBlock code="fn balance_of(&self, owner: Address) -> U256" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the number of NFTs owned by an address.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">owner_of(token_id)</h3>
              <CodeBlock code="fn owner_of(&self, token_id: U256) -> Address" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the owner of a specific NFT.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">State-Changing Functions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">transfer_from(from, to, token_id)</h3>
              <CodeBlock
                code="fn transfer_from(&mut self, from: Address, to: Address, token_id: U256) -> Result<bool, String>"
                language="rust"
              />
              <p className="text-muted-foreground mt-3">Transfers an NFT from one owner to another.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">approve(to, token_id)</h3>
              <CodeBlock
                code="fn approve(&mut self, to: Address, token_id: U256) -> Result<bool, String>"
                language="rust"
              />
              <p className="text-muted-foreground mt-3">Approves an address to transfer a specific NFT.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">set_approval_for_all(operator, approved)</h3>
              <CodeBlock
                code="fn set_approval_for_all(&mut self, operator: Address, approved: bool) -> Result<bool, String>"
                language="rust"
              />
              <p className="text-muted-foreground mt-3">Approves an operator to manage all NFTs of the caller.</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Events</h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li>
              • <code className="bg-muted px-2 py-1 rounded">Transfer(from, to, token_id)</code> - NFT transferred
            </li>
            <li>
              • <code className="bg-muted px-2 py-1 rounded">Approval(owner, approved, token_id)</code> - Approval
              granted
            </li>
            <li>
              • <code className="bg-muted px-2 py-1 rounded">ApprovalForAll(owner, operator, approved)</code> - Batch
              approval
            </li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
