"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function OwnableAPIPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Ownable API Reference</h1>
        <p className="text-muted-foreground mb-12">Complete API reference for the Ownable access control pattern.</p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">State Functions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">owner()</h3>
              <CodeBlock code="fn owner(&self) -> Address" language="rust" />
              <p className="text-muted-foreground mt-3">Returns the current owner of the contract.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">State-Changing Functions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">transfer_ownership(new_owner)</h3>
              <CodeBlock
                code="fn transfer_ownership(&mut self, new_owner: Address) -> Result<bool, String>"
                language="rust"
              />
              <p className="text-muted-foreground mt-3">
                Transfers contract ownership to a new address. Only callable by current owner.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">renounce_ownership()</h3>
              <CodeBlock code="fn renounce_ownership(&mut self) -> Result<bool, String>" language="rust" />
              <p className="text-muted-foreground mt-3">
                Renounces ownership, making the contract truly decentralized. Only callable by owner.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Usage Example</h3>
          <CodeBlock
            code={`pub fn critical_operation(&mut self) -> Result<(), String> {
    // Check ownership
    if msg::sender() != self.owner() {
        return Err("Only owner can call this".to_string());
    }
    
    // Perform critical operation
    Ok(())
}`}
            language="rust"
          />
        </div>
      </div>
    </LayoutWrapper>
  )
}
