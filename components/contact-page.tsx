"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, MapPin, Send, Github, Linkedin, Globe } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function ContactPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:connect.saranyasasikumar06@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Portfolio",
    )}&body=${encodeURIComponent(
      `Hi Saranya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`,
    )}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      }`}
    >
      <Header />

      <div className="px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
        {/* Header */}
        <div className={`pt-20 pb-8 border-b ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}>
          <div className="container mx-auto">
            <div className="flex items-center mb-6">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className={
                    theme === "dark"
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                  }
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                    : "text-gray-900"
                }`}
              >
                Get In Touch
              </h1>
              <p className={`text-xl max-w-2xl mx-auto ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                Let's discuss your next project and bring your ideas to life
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="py-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-white/5 backdrop-blur-xl border border-white/20"
                      : "bg-white/90 backdrop-blur-xl border border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className={`text-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Send a Message
                    </CardTitle>
                    <CardDescription className={theme === "dark" ? "text-white/60" : "text-gray-500"}>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className={theme === "dark" ? "text-white" : "text-gray-700"}>
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className={`mt-1 ${
                              theme === "dark"
                                ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                : "bg-white border-gray-300 text-gray-900"
                            }`}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className={theme === "dark" ? "text-white" : "text-gray-700"}>
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className={`mt-1 ${
                              theme === "dark"
                                ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                : "bg-white border-gray-300 text-gray-900"
                            }`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject" className={theme === "dark" ? "text-white" : "text-gray-700"}>
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`mt-1 ${
                            theme === "dark"
                              ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                          placeholder="Project discussion, collaboration, etc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className={theme === "dark" ? "text-white" : "text-gray-700"}>
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className={`mt-1 ${
                            theme === "dark"
                              ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                          placeholder="Tell me about your project, timeline, and requirements..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-white/5 backdrop-blur-xl border border-white/20"
                      : "bg-white/90 backdrop-blur-xl border border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className={`text-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Email</h3>
                        <p className={theme === "dark" ? "text-white/70" : "text-gray-600"}>
                          connect.saranyasasikumar06@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          Location
                        </h3>
                        <p className={theme === "dark" ? "text-white/70" : "text-gray-600"}>Auckland, New Zealand</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-white/5 backdrop-blur-xl border border-white/20"
                      : "bg-white/90 backdrop-blur-xl border border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className={`text-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Follow Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open("https://github.com/SaranyaSkumar", "_blank")}
                        className={`${
                          theme === "dark"
                            ? "border-white/20 text-white hover:bg-white/10"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open("https://www.linkedin.com/in/saranya-s-kumar/", "_blank")}
                        className={`${
                          theme === "dark"
                            ? "border-white/20 text-white hover:bg-white/10"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`${
                          theme === "dark"
                            ? "border-white/20 text-white hover:bg-white/10"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Globe className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
