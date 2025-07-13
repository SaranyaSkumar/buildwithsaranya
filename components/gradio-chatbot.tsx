"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

export default function GradioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Simple click handler
  const handleOpenChat = () => {
    console.log("Chat button clicked!") // Debug log
    setIsOpen(true)
  }

  const handleCloseChat = () => {
    console.log("Closing chat") // Debug log
    setIsOpen(false)
  }

  const openInNewTab = () => {
    window.open("https://saranyasasikumar-career-talk.hf.space", "_blank")
  }

  if (!mounted) return null

  return (
    <>
      {/* Simple Floating Chat Button - Always Visible for Testing */}
      <div className="fixed bottom-6 right-6" style={{ zIndex: 9999 }}>
        <button
          onClick={handleOpenChat}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500"
              : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500"
          } text-white border-0 cursor-pointer`}
          style={{
            pointerEvents: "auto",
            position: "relative",
            zIndex: 9999,
          }}
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Chat Modal - Positioned at Bottom Right */}
      {isOpen && (
        <div className="fixed inset-0" style={{ zIndex: 10000 }} onClick={handleCloseChat}>
          {/* Backdrop for mobile only */}
          <div className="absolute inset-0 bg-black/20 md:bg-transparent" />

          {/* Chat Container - Bottom Right */}
          <div
            className={`absolute bottom-6 right-6 w-[400px] h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] rounded-2xl shadow-2xl overflow-hidden ${
              theme === "dark" ? "bg-slate-900 border border-white/20" : "bg-white border border-gray-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between p-4 border-b ${
                theme === "dark" ? "border-white/10" : "border-gray-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Career Assistant
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}>
                    Ask about my experience
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={openInNewTab}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === "dark"
                      ? "text-white/60 hover:text-white hover:bg-white/10"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCloseChat}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === "dark"
                      ? "text-white/60 hover:text-white hover:bg-white/10"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="h-[calc(100%-73px)] relative">
              <iframe
                src="https://saranyasasikumar-career-talk.hf.space"
                className="w-full h-full border-none"
                allow="microphone; camera; clipboard-read; clipboard-write"
                title="Career Chat Assistant"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
