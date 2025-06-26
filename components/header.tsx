"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "experience") {
      window.location.href = "/experience"
    } else if (sectionId === "projects") {
      window.location.href = "/projects"
    } else if (sectionId === "blog") {
      window.location.href = "/blog"
    } else if (sectionId === "contact") {
      // If we're not on the homepage, go to homepage first
      if (window.location.pathname !== "/") {
        window.location.href = "/#contact"
      } else {
        // If we're on homepage, scroll to contact section
        const element = document.getElementById("contact")
        element?.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b ${
        theme === "dark" ? "bg-black/20 border-white/10" : "bg-white/20 border-gray-200/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          <Link href="/">
            <span className="hidden sm:inline">Saranya Sasi Kumar</span>
            <span className="sm:hidden">Saranya</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {["Home", "Experience", "Projects", "Blog", "Contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`transition-colors text-sm xl:text-base ${
                theme === "dark"
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`transition-colors ${
              theme === "dark"
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
            }`}
          >
            {theme === "dark" ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors ${
              theme === "dark"
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
            }`}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden backdrop-blur-xl border-b overflow-hidden ${
              theme === "dark" ? "bg-black/90 border-white/10" : "bg-white/90 border-gray-200/50"
            }`}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {["Home", "Experience", "Projects", "Blog", "Contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`w-full text-left justify-start transition-colors ${
                    theme === "dark"
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                  }`}
                >
                  {item}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
