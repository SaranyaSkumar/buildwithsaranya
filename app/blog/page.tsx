import { getMediumPosts } from "@/lib/medium"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import BlogPostCard from "@/components/blog-post-card"

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts = await getMediumPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Header />
      {/* Header */}
      <div className="pt-20 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
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
              Tech Blog
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-4">
              Insights, tutorials, and thoughts on modern software development
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.length > 0 ? (
              posts.map((post, index) => <BlogPostCard key={post.guid} post={post} index={index} />)
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground text-lg">No blog posts found. Check back later!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
