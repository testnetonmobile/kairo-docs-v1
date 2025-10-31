"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"

export default function FAQPage() {
  const faqs = [
    {
      q: "What is Arbitrum Stylus?",
      a: "Arbitrum Stylus is a technology that allows developers to write smart contracts in Rust, C, and C++ instead of just Solidity. These contracts are compiled to WebAssembly (WASM), making them significantly faster and cheaper than their Solidity equivalents.",
    },
    {
      q: "Why should I use Kairo instead of writing contracts from scratch?",
      a: "Kairo provides battle-tested, audited implementations of common standards like ERC20 and ERC721. This saves development time and, most importantly, prevents security vulnerabilities that come with reinventing the wheel.",
    },
    {
      q: "Is Kairo compatible with existing Solidity tools?",
      a: "Kairo is written in Rust for Stylus, so it's not directly compatible with Solidity tools. However, the compiled WASM contracts work seamlessly on Arbitrum Stylus and can be interacted with via standard blockchain tools.",
    },
    {
      q: "How much faster is Rust compared to Solidity on Stylus?",
      a: "Rust contracts on Stylus are typically 10-100x faster than equivalent Solidity contracts, with proportionally lower gas costs. The exact improvement depends on the contract complexity and operations.",
    },
    {
      q: "Do I need to know Rust to use Kairo?",
      a: "You need basic Rust knowledge to use Kairo effectively. If you're new to Rust, the official Rust book and hands-on examples in Kairo's documentation will help you get up to speed.",
    },
    {
      q: "Can I customize Kairo's standard implementations?",
      a: "Kairo provides a solid foundation that you can extend with your own custom logic. Simply import the standard implementations and add your specific features on top.",
    },
    {
      q: "How do I deploy my Kairo contract to testnet?",
      a: "First, build your contract with `cargo stylus build`. Then use Stylus CLI or deployment tools to deploy the generated WASM to Arbitrum Stylus testnet. See the installation guide for more details.",
    },
    {
      q: "Is there a mainnet version of Arbitrum Stylus?",
      a: "Yes! Stylus is now live on Arbitrum One mainnet. You can deploy production contracts directly to mainnet after thorough testing on testnet.",
    },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-12">Find answers to common questions about Kairo and Arbitrum Stylus.</p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-bold mb-3 text-lg">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground">
            Join our community Discord or open an issue on GitHub for additional support.
          </p>
        </div>
      </div>
    </LayoutWrapper>
  )
}
