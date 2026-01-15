"use client"

import { useState, useEffect } from "react"
import { RetroTaskbar } from "./retro-taskbar"
import { DesktopIcon } from "./desktop-icon"
import { BlogWindow } from "./blog-window"
import { AboutWindow } from "./about-window"
import { ProjectsWindow } from "./projects-window"
import { ContactWindow } from "./contact-window"

type WindowType = "blog" | "about" | "projects" | "contact" | null

export function RetroDesktop() {
  const [activeWindow, setActiveWindow] = useState<WindowType>(null)
  const [minimizedWindows, setMinimizedWindows] = useState<Set<string>>(new Set())
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const handleMinimize = (window: WindowType) => {
    if (window) {
      setMinimizedWindows((prev) => new Set(prev).add(window))
    }
  }

  const handleRestore = (window: WindowType) => {
    if (window) {
      setMinimizedWindows((prev) => {
        const next = new Set(prev)
        next.delete(window)
        return next
      })
      setActiveWindow(window)
    }
  }

  const handleClose = (window: WindowType) => {
    setActiveWindow(null)
    if (window) {
      setMinimizedWindows((prev) => {
        const next = new Set(prev)
        next.delete(window)
        return next
      })
    }
  }

  const handleOpenWindow = (window: string) => {
    handleRestore(window as WindowType)
    setActiveWindow(window as WindowType)
  }

  return (
    <div className="min-h-screen bg-background scanlines relative overflow-hidden">
      {/* Desktop Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Desktop Icons */}
      <div className="relative z-10 p-4 md:p-6 grid gap-6 md:gap-8">
        <div className="flex flex-wrap gap-6 md:gap-8">
          <DesktopIcon icon="📝" label="BLOG.exe" onClick={() => handleOpenWindow("blog")} />
          <DesktopIcon icon="👤" label="ABOUT.txt" onClick={() => handleOpenWindow("about")} />
          <DesktopIcon icon="💾" label="PROJECTS" onClick={() => handleOpenWindow("projects")} />
          <DesktopIcon icon="📧" label="CONTACT.bat" onClick={() => handleOpenWindow("contact")} />
        </div>
      </div>

      {/* Windows */}
      {activeWindow === "blog" && (
        <BlogWindow
          onClose={() => handleClose("blog")}
          onMinimize={() => handleMinimize("blog")}
          isMinimized={minimizedWindows.has("blog")}
        />
      )}
      {activeWindow === "about" && (
        <AboutWindow
          onClose={() => handleClose("about")}
          onMinimize={() => handleMinimize("about")}
          isMinimized={minimizedWindows.has("about")}
        />
      )}
      {activeWindow === "projects" && (
        <ProjectsWindow
          onClose={() => handleClose("projects")}
          onMinimize={() => handleMinimize("projects")}
          isMinimized={minimizedWindows.has("projects")}
        />
      )}
      {activeWindow === "contact" && (
        <ContactWindow
          onClose={() => handleClose("contact")}
          onMinimize={() => handleMinimize("contact")}
          isMinimized={minimizedWindows.has("contact")}
        />
      )}

      {/* Taskbar - Added onOpenWindow prop */}
      <RetroTaskbar
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        time={time}
        minimizedWindows={minimizedWindows}
        onRestore={handleRestore}
        onOpenWindow={handleOpenWindow}
      />
    </div>
  )
}
