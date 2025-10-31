"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function AccessControlPage() {
  const ownableImpl = `use stylus_sdk::prelude::*;

#[solidity_interface]
pub trait Ownable {
    fn owner(&self) -> Address;
    fn transfer_ownership(&mut self, new_owner: Address) -> bool;
    fn renounce_ownership(&mut self) -> bool;
}

pub struct OwnableContract {
    owner: Address,
}`

  const roleBasedExample = `pub enum Role {
    Admin,
    Minter,
    Burner,
}

pub struct AccessControl {
    owner: Address,
    roles: HashMap<Address, Vec<Role>>,
}

impl AccessControl {
    pub fn grant_role(&mut self, account: Address, role: Role) -> bool {
        if msg::sender() != self.owner {
            return false;
        }
        
        self.roles
            .entry(account)
            .or_insert_with(Vec::new)
            .push(role);
        true
    }
}`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Access Control</h1>
        <p className="text-muted-foreground mb-12">
          Manage permissions and ownership with secure access control patterns.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            Access control ensures that only authorized addresses can execute sensitive operations. Kairo provides two
            main patterns:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-4">
            <li>• Ownable: Simple owner-based access control</li>
            <li>• Role-Based Access Control (RBAC): Flexible multi-role permission system</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ownable Pattern</h2>
          <p className="text-muted-foreground mb-4">
            The simplest access control, perfect for straightforward permissions:
          </p>
          <CodeBlock code={ownableImpl} language="rust" filename="src/ownable.rs" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Role-Based Access Control</h2>
          <p className="text-muted-foreground mb-4">For complex permission requirements with multiple roles:</p>
          <CodeBlock code={roleBasedExample} language="rust" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Patterns</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Ownership Transfer</h3>
              <p className="text-muted-foreground">
                Safely hand over contract control to another address or renounce ownership.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Role-Based Functions</h3>
              <p className="text-muted-foreground">Restrict function calls to addresses with specific roles.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Pause Mechanisms</h3>
              <p className="text-muted-foreground">Allow admin to pause contract functionality during emergencies.</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Security Best Practices</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Always validate caller permissions before critical operations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Use two-step ownership transfer to prevent accidents</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Log role changes and ownership transfers as events</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Never hardcode addresses—use configuration</span>
            </li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
