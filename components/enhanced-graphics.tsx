"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Code, Zap, Heart, Globe } from "lucide-react"

export default function EnhancedGraphics() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Subtle geometric shapes */}
      <motion.div
        className={`absolute top-20 right-20 w-32 h-32 rounded-full border-2 opacity-10 ${
          theme === "dark" ? "border-cyan-400" : "border-blue-400"
        }`}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className={`absolute bottom-32 left-16 w-24 h-24 border-2 opacity-10 ${
          theme === "dark" ? "border-purple-400" : "border-purple-500"
        }`}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Interactive corner elements */}
      <div className="absolute top-10 left-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 180 }}
          className={`w-8 h-8 rounded-lg ${
            theme === "dark" ? "bg-cyan-400/20" : "bg-blue-400/20"
          } flex items-center justify-center cursor-pointer`}
        >
          <Code className={`w-4 h-4 ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`} />
        </motion.div>
      </div>

      <div className="absolute top-10 right-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: -180 }}
          className={`w-8 h-8 rounded-lg ${
            theme === "dark" ? "bg-purple-400/20" : "bg-purple-400/20"
          } flex items-center justify-center cursor-pointer`}
        >
          <Zap className={`w-4 h-4 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 180 }}
          className={`w-8 h-8 rounded-lg ${
            theme === "dark" ? "bg-pink-400/20" : "bg-pink-400/20"
          } flex items-center justify-center cursor-pointer`}
        >
          <Heart className={`w-4 h-4 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: -180 }}
          className={`w-8 h-8 rounded-lg ${
            theme === "dark" ? "bg-green-400/20" : "bg-green-400/20"
          } flex items-center justify-center cursor-pointer`}
        >
          <Globe className={`w-4 h-4 ${theme === "dark" ? "text-green-400" : "text-green-600"}`} />
        </motion.div>
      </div>
    </div>
  )
}
