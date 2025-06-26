"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Zap } from "lucide-react"
import { useTheme } from "next-themes"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: string
  year: string
  features: string[]
  challenges: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { theme } = useTheme()

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
      <Card
        className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-white/5 backdrop-blur-xl border border-white/20"
            : "bg-white/90 backdrop-blur-xl border border-gray-200"
        }`}
      >
        <div className="lg:flex">
          <div className="lg:w-1/3 bg-gradient-to-br from-primary/10 to-purple-600/10 p-6 sm:p-8 flex items-center justify-center">
            <div className="text-center">
              <Code className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-primary" />
              <Badge variant="outline" className="mb-2 text-xs sm:text-sm">
                {project.category}
              </Badge>
              <div className="text-sm text-muted-foreground">{project.year}</div>
            </div>
          </div>

          <div className="lg:w-2/3 p-4 sm:p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <CardTitle
                    className={`text-xl sm:text-2xl mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-sm sm:text-base ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}
                  >
                    {project.description}
                  </CardDescription>
                </div>
                <Badge
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className="mt-2 sm:mt-0 sm:ml-4 text-xs sm:text-sm"
                >
                  {project.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center text-sm sm:text-base">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Key Features
                </h4>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies Used</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button size="sm" className="text-xs sm:text-sm">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  View Code
                </Button>
                <Button size="sm" variant="outline" className="text-xs sm:text-sm bg-transparent">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
