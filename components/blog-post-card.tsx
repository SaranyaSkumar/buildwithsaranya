"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import type { MediumPost } from "@/lib/medium"

interface BlogPostCardProps {
  post: MediumPost
  index: number
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  const { theme } = useTheme()

  // Format date
  const pubDate = new Date(post.pubDate)
  const formattedDate = pubDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Estimate read time (rough calculation: 200 words per minute)
  const wordCount = post.content.split(/\s+/).length
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <Card
      className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-white/5 backdrop-blur-xl border border-white/20"
          : "bg-white/90 backdrop-blur-xl border border-gray-200"
      }`}
    >
      {/* Image at the top */}
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
        <Image
          src={
            post.thumbnail ||
            `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(post.title.slice(0, 20))}`
          }
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => {
            // Fallback to a styled placeholder if image fails to load
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=300&width=400&text=Blog+Post`
          }}
        />
      </div>

      {/* Content below image */}
      <div className="p-6">
        <CardHeader className="p-0 mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className={theme === "dark" ? "bg-purple-500/20 text-purple-300" : "bg-blue-100 text-blue-700"}
              >
                {category}
              </Badge>
            ))}
          </div>

          <CardTitle
            className={`text-xl mb-3 hover:text-primary transition-colors line-clamp-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            <Link href={post.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {post.title}
            </Link>
          </CardTitle>

          <CardDescription
            className={`flex items-center justify-between text-sm ${
              theme === "dark" ? "text-white/60" : "text-gray-500"
            }`}
          >
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {readTime} min read
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <p className={`mb-4 leading-relaxed line-clamp-3 ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
            {post.description}
          </p>

          <Link href={post.link} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white">
              Read on Medium
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  )
}
