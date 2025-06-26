"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface MirrorCardProps {
  children: React.ReactNode
  className?: string
}

export default function MirrorCard({ children, className }: MirrorCardProps) {
  const { theme } = useTheme()

  return (
    <Card
      className={cn(
        "backdrop-blur-xl border shadow-2xl transition-all duration-300 relative overflow-hidden",
        theme === "dark"
          ? "bg-white/5 border-white/20 hover:bg-white/10"
          : "bg-white/80 border-gray-200/50 hover:bg-white/90",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none",
        className,
      )}
    >
      {children}
    </Card>
  )
}
