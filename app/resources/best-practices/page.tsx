"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"

export default function BestPracticesPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Best Practices</h1>
        <p className="text-muted-foreground mb-12">
          Essential development patterns for writing secure Stylus contracts.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Security Fundamentals</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Input Validation:</strong> Always validate external inputs before
                processing. Check for zero addresses, overflow conditions, and boundary violations.
              </p>
              <p>
                <strong className="text-foreground">State Consistency:</strong> Ensure contract state remains consistent
                after operations. Use checks-effects-interactions pattern for state changes.
              </p>
              <p>
                <strong className="text-foreground">Access Control:</strong> Implement proper authorization checks.
                Never trust external inputs or user-provided addresses.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Storage Layout:</strong> Plan storage carefully. Use Rust's memory
                model efficiently to reduce gas costs.
              </p>
              <p>
                <strong className="text-foreground">Caching:</strong> Avoid repeated storage reads. Cache
                frequently-accessed values when safe to do so.
              </p>
              <p>
                <strong className="text-foreground">Batch Operations:</strong> When possible, combine multiple
                operations into single transactions.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Code Quality</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Testing:</strong> Write comprehensive unit and integration tests.
                Test edge cases and error conditions.
              </p>
              <p>
                <strong className="text-foreground">Documentation:</strong> Document all public functions and state
                variables. Include examples of correct usage.
              </p>
              <p>
                <strong className="text-foreground">Error Handling:</strong> Provide clear error messages. Handle
                failures gracefully without exposing internal state.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✗</span>
                <span>Don't rely on msg.sender for critical checks—verify ownership properly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✗</span>
                <span>Don't use uninitialized variables or state fields</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✗</span>
                <span>Don't forget to emit events for critical state changes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✗</span>
                <span>Don't mix business logic with infrastructure code</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
