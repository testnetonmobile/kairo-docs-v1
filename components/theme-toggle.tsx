"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const htmlElement = document.documentElement
    htmlElement.classList.toggle("dark")
    setIsDark(htmlElement.classList.contains("dark"))
    localStorage.setItem("theme", htmlElement.classList.contains("dark") ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Toggle theme">
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
