"use client"

import { Search, Menu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Mobile logo and menu */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/kairo-logo.png" alt="Kairo" width={24} height={24} />
            <span className="font-bold">Kairo</span>
          </Link>
        </div>

        {/* Search bar - centered for desktop */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-auto px-4">
          <div className="w-full relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/arbitrum/stylus"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors text-sm font-medium hidden md:inline-block"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
