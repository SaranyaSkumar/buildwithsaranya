"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Node.js", color: "#68A063", category: "Backend" },
  { name: "React.js", color: "#61DAFB", category: "Frontend" },
  { name: "Angular", color: "#DD0031", category: "Frontend" },
  { name: "Python", color: "#3776AB", category: "Backend" },
  { name: "PostgreSQL", color: "#336791", category: "Database" },
  { name: "MongoDB", color: "#47A248", category: "Database" },
  { name: "Redis", color: "#DC382D", category: "Database" },
  { name: "AWS", color: "#FF9900", category: "Cloud" },
  { name: "HTML/CSS", color: "#E34F26", category: "Frontend" },
  { name: "Figma", color: "#F24E1E", category: "Design" },
]

export default function CreativeSkills() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Tech Arsenal</h2>
          <p className="text-xl text-muted-foreground">Technologies brewing in my developer toolkit</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glass Jar Container */}
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-transparent via-blue-50/20 to-blue-100/30 dark:from-transparent dark:via-blue-950/20 dark:to-blue-900/30 rounded-t-full border-4 border-blue-200/50 dark:border-blue-800/50 overflow-hidden backdrop-blur-sm">
              {/* Jar Lid */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full border-2 border-amber-700 shadow-lg">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-amber-500 rounded-full"></div>
              </div>

              {/* Floating Skills */}
              <div className="absolute inset-0 p-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      y: 400,
                      x: Math.random() * 200 - 100,
                      rotate: Math.random() * 360,
                    }}
                    animate={{
                      opacity: 1,
                      y: Math.random() * 300 + 50,
                      x: Math.random() * 200 - 100,
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 2,
                      type: "spring",
                      stiffness: 50,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 0,
                      transition: { duration: 0.3 },
                    }}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${20 + (index % 3) * 25}%`,
                      top: `${20 + Math.floor(index / 3) * 15}%`,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Badge
                        className="px-3 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{
                          backgroundColor: skill.color + "20",
                          borderColor: skill.color,
                          color: skill.color,
                        }}
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Sparkle Effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 300,
                    y: Math.random() * 350,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Jar Base */}
            <div className="mx-auto w-80 h-8 bg-gradient-to-r from-blue-200/50 to-blue-300/50 dark:from-blue-800/50 dark:to-blue-700/50 rounded-b-lg border-4 border-t-0 border-blue-200/50 dark:border-blue-800/50"></div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {["Frontend", "Backend", "Database", "Cloud"].map((category, index) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} className="text-center">
                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-primary">{category}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {skills.filter((skill) => skill.category === category).length} skills
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
