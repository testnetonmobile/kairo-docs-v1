"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface NavSection {
  title: string
  items: { label: string; href: string }[]
}

const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/" },
      { label: "Quick Start", href: "/quick-start" },
      { label: "Installation", href: "/installation" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "ERC20 Tokens", href: "/guides/erc20" },
      { label: "ERC721 NFTs", href: "/guides/erc721" },
      { label: "Access Control", href: "/guides/access-control" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "ERC20 API", href: "/api/erc20" },
      { label: "ERC721 API", href: "/api/erc721" },
      { label: "Ownable API", href: "/api/ownable" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Best Practices", href: "/resources/best-practices" },
      { label: "Examples", href: "/resources/examples" },
      { label: "FAQ", href: "/resources/faq" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>(["Getting Started"])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]))
  }

  return (
    <div className="w-64 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border overflow-y-auto sticky top-0 hidden lg:flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Image src="/kairo-logo.png" alt="Kairo" width={32} height={32} />
          </div>
          <span className="font-bold text-lg">Kairo</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-4">
        {navSections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sm font-medium"
            >
              {section.title}
              <ChevronDown
                size={16}
                className={`transition-transform ${expandedSections.includes(section.title) ? "" : "-rotate-90"}`}
              />
            </button>
            {expandedSections.includes(section.title) && (
              <div className="mt-2 space-y-1 ml-2">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
