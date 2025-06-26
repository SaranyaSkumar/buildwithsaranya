"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  Code,
  ChevronDown,
  GraduationCap,
  Star,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import SkillsShowcase from "@/components/skills-showcase"
import AnimatedBackground from "@/components/animated-background"
import Header from "@/components/header"
import MirrorCard from "@/components/mirror-card"
import EnhancedGraphics from "@/components/enhanced-graphics"

const education = [
  {
    degree: "Postgraduate Diploma in Information Technology",
    institution: "Eastern Institute of Technology, Auckland",
    period: "2023 - Present",
  },
  {
    degree: "Computer Science and Engineering",
    institution: "Cochin University of Science and Technology",
    period: "2014 - 2018",
  },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

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
    } else {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/saranya-cv.pdf"
    link.download = "Saranya_Sasi_Kumar_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleEmailContact = () => {
    window.location.href =
      "mailto:connect.saranyasasikumar06@gmail.com?subject=Let's Work Together&body=Hi Saranya,%0D%0A%0D%0AI would like to discuss a project opportunity with you.%0D%0A%0D%0ABest regards"
  }

  if (!mounted) return null

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      }`}
    >
      <AnimatedBackground />

      {/* Mirror reflection effect */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === "dark"
            ? "bg-gradient-to-t from-transparent via-transparent to-white/5"
            : "bg-gradient-to-t from-transparent via-transparent to-white/20"
        }`}
      />

      <Header />
      <EnhancedGraphics />

      {/* Main Content Container with Mobile-First Padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
        {/* Hero Section */}
        <section id="home" className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-8 sm:mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl animate-pulse-glow"
                >
                  <div
                    className={`w-full h-full rounded-full backdrop-blur-xl flex items-center justify-center border border-white/20 ${
                      theme === "dark" ? "bg-slate-900/90" : "bg-white/90"
                    }`}
                  >
                    <Code className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-cyan-400 animate-float" />
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      : "text-gray-900"
                  }`}
                >
                  Saranya Sasi Kumar
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 ${
                    theme === "dark" ? "text-white/80" : "text-gray-700"
                  }`}
                >
                  Full-stack Developer
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className={`text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 ${
                    theme === "dark" ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  A committed and dynamic software developer with extensive experience in NodeJS, ReactJS, Angular,
                  PostgreSQL, and cloud technologies. Passionate about developing cutting-edge software solutions and
                  contributing to progressive organizations.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
              >
                <Button
                  size="lg"
                  onClick={handleEmailContact}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCV}
                  className={`px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 ${
                    theme === "dark"
                      ? "border-white/30 text-white hover:bg-white/10 backdrop-blur-xl"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 backdrop-blur-xl"
                  }`}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Download CV
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className={`flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm sm:text-base ${
                  theme === "dark" ? "text-white/60" : "text-gray-500"
                }`}
              >
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Auckland, New Zealand
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  0224669982
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className={`animate-bounce ${
                  theme === "dark" ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 lg:py-20">
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
                About Me
              </h2>
              <p
                className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
                  theme === "dark" ? "text-white/70" : "text-gray-600"
                }`}
              >
                Passionate about creating innovative solutions and staying at the forefront of technology
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <MirrorCard className="p-6 sm:p-8">
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center text-xl sm:text-2xl ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-yellow-400" />
                      Professional Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`leading-relaxed text-base sm:text-lg ${
                        theme === "dark" ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      A committed and dynamic software developer, I bring extensive experience in NodeJS, ReactJS,
                      Angular, PostgreSQL, and Sequelize. Driven by a passion for developing cutting-edge software
                      solutions, I am keen to contribute my skills to a progressive organization. I look forward to
                      enhancing my proficiency with emerging technologies, making significant contributions to key
                      projects, and working collaboratively to achieve company goals and ambitions.
                    </p>
                  </CardContent>
                </MirrorCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <MirrorCard className="p-6 sm:p-8">
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center text-xl sm:text-2xl ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-400" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-cyan-400 pl-4 sm:pl-6">
                        <h4
                          className={`font-semibold text-base sm:text-lg ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {edu.degree}
                        </h4>
                        <p className={`text-sm sm:text-base ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                          {edu.institution}
                        </p>
                        <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}>
                          {edu.period}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </MirrorCard>

                <MirrorCard className="p-6 sm:p-8">
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center text-xl sm:text-2xl ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-green-400" />
                      Contact Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-400 flex-shrink-0" />
                      <span
                        className={`text-sm sm:text-base break-all ${
                          theme === "dark" ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        connect.saranyasasikumar06@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-400 flex-shrink-0" />
                      <span className={`text-sm sm:text-base ${theme === "dark" ? "text-white/80" : "text-gray-600"}`}>
                        www.saranyadevspace.com
                      </span>
                    </div>
                  </CardContent>
                </MirrorCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsShowcase />

        {/* Projects Preview */}
        <section id="projects" className="py-12 sm:py-16 lg:py-20">
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
                Featured Projects
              </h2>
              <p className={`text-lg sm:text-xl ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                Some highlights from my portfolio
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                { title: "Healthcare Management System", tech: "Node.js, React, AWS" },
                { title: "E-commerce Platform", tech: "Next.js, MongoDB, Stripe" },
                { title: "Doctor Consultation Platform", tech: "Angular, PostgreSQL, WebRTC" },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <MirrorCard className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden">
                    <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <Code className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle
                        className={`group-hover:text-cyan-400 transition-colors text-lg sm:text-xl ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {project.title}
                      </CardTitle>
                      <CardDescription
                        className={`text-sm sm:text-base ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}
                      >
                        {project.tech}
                      </CardDescription>
                    </CardHeader>
                  </MirrorCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="py-12 sm:py-16 lg:py-20">
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
                Latest from Blog
              </h2>
              <p className={`text-lg sm:text-xl ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                Thoughts on technology and development
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                {
                  title: "Building Scalable Microservices with Node.js",
                  date: "Dec 20, 2024",
                  category: "Architecture",
                  image: "/placeholder.svg?height=200&width=300",
                  excerpt:
                    "Learn how to architect and deploy microservices using modern containerization techniques and best practices for scalability.",
                },
                {
                  title: "React Performance Optimization Techniques",
                  date: "Dec 15, 2024",
                  category: "Frontend",
                  image: "/placeholder.svg?height=200&width=300",
                  excerpt:
                    "Discover advanced techniques to optimize React applications for better performance and user experience.",
                },
                {
                  title: "AWS Cloud Architecture Best Practices",
                  date: "Dec 10, 2024",
                  category: "Cloud",
                  image: "/placeholder.svg?height=200&width=300",
                  excerpt: "A comprehensive guide to designing robust and cost-effective cloud architectures on AWS.",
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <MirrorCard className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden">
                    <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 sm:p-6">
                      <Badge className="w-fit mb-2 sm:mb-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0 text-xs sm:text-sm">
                        {post.category}
                      </Badge>
                      <CardTitle
                        className={`group-hover:text-purple-400 transition-colors text-base sm:text-lg leading-tight mb-2 sm:mb-3 ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {post.title}
                      </CardTitle>
                      <CardDescription
                        className={`mb-2 sm:mb-3 text-sm sm:text-base ${
                          theme === "dark" ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        {post.excerpt}
                      </CardDescription>
                      <CardDescription
                        className={`text-xs sm:text-sm ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}
                      >
                        {post.date} • 5 min read
                      </CardDescription>
                    </CardHeader>
                  </MirrorCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className={`px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 ${
                    theme === "dark"
                      ? "border-white/30 text-white hover:bg-white/10 backdrop-blur-xl"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 backdrop-blur-xl"
                  }`}
                >
                  Read All Posts
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto px-4"
            >
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Let's Work Together
              </h2>
              <p className={`text-lg sm:text-xl mb-8 sm:mb-12 ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
                <Button
                  size="lg"
                  onClick={handleEmailContact}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Send Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "tel:0224669982")}
                  className={`px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 ${
                    theme === "dark"
                      ? "border-white/30 text-white hover:bg-white/10 backdrop-blur-xl"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 backdrop-blur-xl"
                  }`}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Call Me
                </Button>
              </div>

              <div className="flex justify-center space-x-4 sm:space-x-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`hover:bg-white/10 ${
                    theme === "dark" ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`hover:bg-white/10 ${
                    theme === "dark" ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`hover:bg-white/10 ${
                    theme === "dark" ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        className={`py-8 sm:py-12 border-t backdrop-blur-xl ${
          theme === "dark" ? "border-white/10 bg-black/20" : "border-gray-200 bg-white/20"
        }`}
      >
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
          <p className={`text-sm sm:text-base ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}>
            © 2024 Saranya Sasi Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
