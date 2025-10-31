"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function ERC20APIPage() {
  const transferSignature = `fn transfer(&mut self, to: Address, amount: U256) -> Result<bool, String>`

  const approveSignature = `fn approve(&mut self, spender: Address, amount: U256) -> Result<bool, String>`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">ERC20 API Reference</h1>
        <p className="text-muted-foreground mb-12">
          Complete API reference for the ERC20 token standard implementation.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">State Functions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">name()</h3>
              <CodeBlock code="fn name(&self) -> String" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the name of the token.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">symbol()</h3>
              <CodeBlock code="fn symbol(&self) -> String" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the symbol of the token (e.g., "KAIRO").</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">decimals()</h3>
              <CodeBlock code="fn decimals(&self) -> u8" language="rust" />
              <p className="text-muted-foreground mt-3">
                Returns the number of decimals for token amounts. Standard is 18.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">total_supply()</h3>
              <CodeBlock code="fn total_supply(&self) -> U256" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the total supply of tokens in circulation.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">balance_of(account)</h3>
              <CodeBlock code="fn balance_of(&self, account: Address) -> U256" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the balance of tokens held by an address.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">State-Changing Functions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">transfer(to, amount)</h3>
              <CodeBlock code={transferSignature} language="rust" />
              <p className="text-muted-foreground mt-3">
                Transfers tokens from caller to recipient. Emits Transfer event.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">approve(spender, amount)</h3>
              <CodeBlock code={approveSignature} language="rust" />
              <p className="text-muted-foreground mt-3">
                Approves spender to transfer specified amount on caller's behalf.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">transfer_from(from, to, amount)</h3>
              <CodeBlock
                code="fn transfer_from(&mut self, from: Address, to: Address, amount: U256) -> Result<bool, String>"
                language="rust"
              />
              <p className="text-muted-foreground mt-3">
                Transfers tokens from one address to another if approved by the owner.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Error Codes</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• "Insufficient balance" - Not enough tokens to transfer</li>
            <li>• "Insufficient allowance" - Spending limit exceeded</li>
            <li>• "Overflow" - Arithmetic overflow detected</li>
            <li>• "Invalid address" - Zero address operation</li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
