"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function DevelopmentPage() {
  const runDevNode = `./run-dev-node.sh`

  const runTests = `./run_tests.sh`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Local Development & Testing</h1>
        <p className="text-muted-foreground mb-12">
          Set up a local development environment for Kairo development and testing.
        </p>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground">
            Want to contribute to Kairo or run the full test suite locally? This guide walks you through setting up a
            local node and running comprehensive tests.
          </p>
        </div>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold">Clone the Repository</h2>
          </div>
          <CodeBlock
            code={`git clone https://github.com/Team-Oracle/kairo.git
cd kairo`}
            language="bash"
          />
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold">Run a Local Node</h2>
          </div>
          <p className="text-muted-foreground mb-4">In your first terminal, run the development node script:</p>
          <CodeBlock code={runDevNode} language="bash" />
          <p className="text-muted-foreground text-sm mt-4">
            This starts a local Arbitrum Stylus node that you can deploy contracts to for testing.
          </p>
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold">Run the Test Suite</h2>
          </div>
          <p className="text-muted-foreground mb-4">In a second terminal, run the comprehensive test suite:</p>
          <CodeBlock code={runTests} language="bash" />
          <p className="text-muted-foreground text-sm mt-4">
            You'll see detailed test output, ending with a success message showing all tests passed.
          </p>
        </div>

        {/* What Gets Tested */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Gets Tested</h2>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>ERC20 token transfers and approvals</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>ERC721 NFT minting and transfers</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Access control and ownership patterns</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Edge cases and security scenarios</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Gas efficiency benchmarks</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Contribute to Kairo</h3>
          <p className="text-muted-foreground mb-4">Now that you have a local dev environment set up, you can:</p>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Make changes to the library and see tests pass</li>
            <li>• Create new contract standards and add tests</li>
            <li>• Benchmark gas efficiency improvements</li>
            <li>• Submit pull requests to the main repository</li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  )
}
