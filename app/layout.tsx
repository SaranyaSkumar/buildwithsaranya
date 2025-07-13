import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GradioChatbot from "@/components/gradio-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saranya Sasi Kumar - Full-stack Developer",
  description:
    "Portfolio of Saranya Sasi Kumar, a passionate full-stack developer specializing in Node.js, React.js, and cloud technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="saranya-theme-preference">
          {children}
          <GradioChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
