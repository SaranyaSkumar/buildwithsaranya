export interface MediumPost {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  categories: string[]
}

export interface MediumFeed {
  status: string
  feed: {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: MediumPost[]
}

// Helper function to extract first image from HTML content
function extractFirstImage(content: string): string | null {
  const match = content.match(/<img[^>]+src="([^">]+)"/)
  return match ? match[1] : null
}

// Helper function to clean up description
function cleanDescription(description: string): string {
  // Remove HTML tags
  let cleaned = description.replace(/<[^>]*>/g, "")
  // Limit to 150 characters
  cleaned = cleaned.substring(0, 150) + (cleaned.length > 150 ? "..." : "")
  return cleaned
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    // Using a proxy service to avoid CORS issues
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@saranyasasikumar06`,
      { next: { revalidate: 3600 } }, // Revalidate every hour
    )

    if (!response.ok) {
      throw new Error("Failed to fetch Medium posts")
    }

    const data: MediumFeed = await response.json()

    if (data.status !== "ok") {
      throw new Error("Invalid response from Medium feed")
    }

    return data.items.map((post, index) => ({
      ...post,
      // Extract the first image from content if thumbnail is empty, or use placeholder
      thumbnail:
        post.thumbnail ||
        extractFirstImage(post.content) ||
        `/placeholder.svg?height=300&width=400&text=Blog+Post+${index + 1}`,
      // Clean up description
      description: cleanDescription(post.description),
    }))
  } catch (error) {
    console.error("Error fetching Medium posts:", error)
    return []
  }
}
