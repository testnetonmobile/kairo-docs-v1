"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-muted">
      {filename && (
        <div className="px-4 py-2 bg-muted-foreground/5 border-b border-border text-sm font-mono text-muted-foreground">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="bg-transparent">{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded hover:bg-background/20 transition-colors"
          title="Copy code"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  )
}
