"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Reduce particle count for cleaner look:
    const particleCount = 50 // Reduced from 100
    const particles: {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      opacity: number
      color: string
    }[] = []

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      // Make particles more subtle:
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5, // Smaller particles
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1, // More subtle opacity
        color:
          theme === "dark"
            ? ["#00f5ff", "#8a2be2", "#ff1493"][Math.floor(Math.random() * 3)]
            : ["#3b82f6", "#8b5cf6", "#ec4899"][Math.floor(Math.random() * 3)],
      })
    }

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 15
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Reduce connection distance for cleaner look:
          if (distance < 80) {
            // Reduced from 120
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(255, 255, 255, ${0.1 * (1 - distance / 80)})`
                : `rgba(100, 100, 100, ${0.1 * (1 - distance / 80)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" />
}
