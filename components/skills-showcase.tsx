"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { Code, Database, Cloud, Palette, Brain, Server, Monitor, Cpu, Zap, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-400 to-emerald-600",
    skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
    description: "Building robust server-side applications and APIs with modern technologies and best practices.",
    projects: "15+ Projects",
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "from-blue-400 to-cyan-600",
    skills: ["React.js", "Angular", "Next.js", "TypeScript", "HTML/CSS", "Tailwind"],
    description: "Creating responsive and interactive user interfaces with cutting-edge frontend frameworks.",
    projects: "20+ Projects",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-400 to-red-600",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Microservices", "Serverless"],
    description: "Deploying scalable applications on cloud platforms with automated deployment pipelines.",
    projects: "10+ Projects",
  },
  {
    title: "Database Design",
    icon: Database,
    color: "from-purple-400 to-pink-600",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Database Optimization", "Data Modeling"],
    description: "Designing efficient database schemas and optimizing query performance for large-scale applications.",
    projects: "12+ Projects",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "from-pink-400 to-rose-600",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems", "Wireframing"],
    description: "Creating intuitive user experiences through research-driven design and prototyping.",
    projects: "8+ Projects",
  },
  {
    title: "Exploring AI",
    icon: Brain,
    color: "from-indigo-400 to-purple-600",
    skills: ["Machine Learning", "AI Integration", "OpenAI APIs", "Data Analysis", "Python ML", "TensorFlow"],
    description: "Integrating AI capabilities into applications and exploring machine learning solutions.",
    projects: "5+ Projects",
  },
]

export default function SkillsShowcase() {
  const { theme } = useTheme()

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Technical Expertise
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
              theme === "dark" ? "text-white/70" : "text-gray-600"
            }`}
          >
            My comprehensive skill set across the full development stack
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full transition-all duration-300 hover:shadow-2xl overflow-hidden ${
                  theme === "dark"
                    ? "bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10"
                    : "bg-white/80 backdrop-blur-xl border border-gray-200 hover:bg-white/90"
                }`}
              >
                <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${category.color} p-3 sm:p-4 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </div>

                  <CardTitle className={`text-lg sm:text-xl mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    {category.title}
                  </CardTitle>

                  <CardDescription
                    className={`text-xs sm:text-sm ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}
                  >
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-xs transition-all duration-200 hover:scale-105 ${
                          theme === "dark"
                            ? "bg-white/10 text-white/80 hover:bg-white/20"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        theme === "dark" ? "text-cyan-400" : "text-blue-600"
                      }`}
                    >
                      {category.projects}
                    </span>
                    <Zap
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        theme === "dark" ? "text-yellow-400" : "text-yellow-500"
                      } group-hover:animate-pulse`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
        >
          {[
            { label: "Years Experience", value: "6+", icon: Cpu },
            /* { label: "Projects Completed", value: "50+", icon: Code }, */
            { label: "Technologies", value: "20+", icon: Globe },
           /* { label: "Happy Clients", value: "15+", icon: Zap }, */
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10"
                  : "bg-white/80 backdrop-blur-xl border border-gray-200 hover:bg-white/90"
              }`}
            >
              <stat.icon
                className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              />
              <div
                className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
