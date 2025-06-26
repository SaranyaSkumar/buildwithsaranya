"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import ExperienceContent from "@/components/experience-content"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Header />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
        {/* Header */}
        <div className="pt-20 pb-8">
          <div className="container mx-auto">
            <div className="flex items-center mb-6">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Professional Journey
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                My career progression in software development and the impact I've made
              </p>
            </div>
          </div>
        </div>

        <ExperienceContent />
      </div>
    </div>
  )
}
