"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CodeBlock } from "@/components/code-block"

export default function DevelopmentPage() {
  const runDevNode = `# In the kairo/ project root
./run-dev-node.sh`

  const runTests = `# In the kairo/ project root
./run_tests.sh`

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Local Development & Testing</h1>
        <p className="text-muted-foreground mb-12">Want to contribute to Kairo? Run the test suite as follows.</p>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold">Run a Local Node</h2>
          </div>
          <p className="text-muted-foreground mb-4">In your first terminal:</p>
          <CodeBlock code={runDevNode} language="bash" />
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold">Run the Test Suite</h2>
          </div>
          <p className="text-muted-foreground mb-4">In a second terminal:</p>
          <CodeBlock code={runTests} language="bash" />
          <p className="text-muted-foreground text-sm mt-4">
            You'll see detailed test output, ending with a final success message.
          </p>
        </div>
      </div>
    </LayoutWrapper>
  )
}
