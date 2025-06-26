"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

interface Skill {
  name: string
  color: string
  category: string
  size: number
  icon: string
}

const skills: Skill[] = [
  { name: "Node.js", color: "#68A063", category: "Backend", size: 1.2, icon: "⚡" },
  { name: "React.js", color: "#61DAFB", category: "Frontend", size: 1.3, icon: "⚛️" },
  { name: "Angular", color: "#DD0031", category: "Frontend", size: 1.1, icon: "🅰️" },
  { name: "Python", color: "#3776AB", category: "Backend", size: 1.2, icon: "🐍" },
  { name: "PostgreSQL", color: "#336791", category: "Database", size: 1, icon: "🐘" },
  { name: "MongoDB", color: "#47A248", category: "Database", size: 0.9, icon: "🍃" },
  { name: "Redis", color: "#DC382D", category: "Database", size: 0.8, icon: "📦" },
  { name: "AWS", color: "#FF9900", category: "Cloud", size: 1.1, icon: "☁️" },
  { name: "HTML/CSS", color: "#E34F26", category: "Frontend", size: 1, icon: "🎨" },
  { name: "Figma", color: "#F24E1E", category: "Design", size: 0.9, icon: "🎯" },
]

export default function AnimatedSkills() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [skillPositions, setSkillPositions] = useState<
    Array<{ x: number; y: number; vx: number; vy: number; skill: Skill; angle: number }>
  >([])

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      if (canvasRef.current) {
        const width = canvasRef.current.offsetWidth
        const height = canvasRef.current.offsetHeight
        setDimensions({ width, height })

        const positions = skills.map((skill) => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          skill,
          angle: Math.random() * Math.PI * 2,
        }))
        setSkillPositions(positions)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !mounted || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const updatedPositions = skillPositions.map((pos) => {
        let { x, y, vx, vy, skill, angle } = pos

        if (x < 50 || x > canvas.width - 50) vx = -vx
        if (y < 50 || y > canvas.height - 50) vy = -vy

        x += vx
        y += vy
        angle += 0.01

        return { x, y, vx, vy, skill, angle }
      })
      setSkillPositions(updatedPositions)

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      for (let i = 0; i < updatedPositions.length; i++) {
        for (let j = i + 1; j < updatedPositions.length; j++) {
          const dx = updatedPositions[i].x - updatedPositions[j].x
          const dy = updatedPositions[i].y - updatedPositions[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(updatedPositions[i].x, updatedPositions[i].y)
            ctx.lineTo(updatedPositions[j].x, updatedPositions[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw skills
      updatedPositions.forEach((pos) => {
        const isHovered = hoveredSkill === pos.skill.name
        const scale = isHovered ? 1.3 : 1
        const fontSize = 16 * pos.skill.size * scale

        // Draw glow effect
        if (isHovered) {
          ctx.shadowColor = pos.skill.color
          ctx.shadowBlur = 20
        }

        // Draw skill badge
        ctx.font = `bold ${fontSize}px Inter, sans-serif`
        ctx.fillStyle = isHovered ? pos.skill.color : "rgba(255, 255, 255, 0.9)"

        const text = `${pos.skill.icon} ${pos.skill.name}`
        const textWidth = ctx.measureText(text).width

        // Background
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        ctx.fillRect(pos.x - textWidth / 2 - 10, pos.y - fontSize / 2 - 5, textWidth + 20, fontSize + 10)

        // Text
        ctx.fillStyle = isHovered ? pos.skill.color : "rgba(255, 255, 255, 0.9)"
        ctx.fillText(text, pos.x - textWidth / 2, pos.y + fontSize / 4)

        ctx.shadowBlur = 0
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions, skillPositions, theme, mounted, hoveredSkill])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    let found = false
    for (const pos of skillPositions) {
      const ctx = canvasRef.current.getContext("2d")
      if (!ctx) continue

      ctx.font = `${16 * pos.skill.size}px Inter, sans-serif`
      const text = `${pos.skill.icon} ${pos.skill.name}`
      const textWidth = ctx.measureText(text).width

      if (x >= pos.x - textWidth / 2 - 10 && x <= pos.x + textWidth / 2 + 10 && y >= pos.y - 20 && y <= pos.y + 20) {
        setHoveredSkill(pos.skill.name)
        found = true
        break
      }
    }

    if (!found) {
      setHoveredSkill(null)
    }
  }

  if (!mounted) return null

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">Technical Universe</h2>
          <p className="text-xl text-white/70">My interconnected technology ecosystem</p>
        </motion.div>

        <div
          className="relative mx-auto bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden"
          style={{ height: "600px" }}
        >
          <canvas ref={canvasRef} className="w-full h-full cursor-pointer" onMouseMove={handleMouseMove} />

          <div className="absolute bottom-6 right-6 flex gap-3">
            {["Frontend", "Backend", "Database", "Cloud", "Design"].map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="bg-white/10 backdrop-blur-xl border-white/30 text-white"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* 3D floating elements */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
          <div className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full animate-ping" />
        </div>
      </div>
    </section>
  )
}
