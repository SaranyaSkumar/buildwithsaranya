"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

// Remove the floating icons component entirely to clean up the homepage
// Replace the entire content with a minimal version that only shows subtle particles

export default function InteractiveIcons() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Only show minimal floating particles, no animated icons */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full opacity-30 ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-400 to-purple-400"
              : "bg-gradient-to-r from-blue-300 to-purple-300"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
