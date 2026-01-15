"use client"

import { useState, useRef, useEffect } from "react"

interface RetroTaskbarProps {
  activeWindow: string | null
  setActiveWindow: (window: any) => void
  time: Date
  minimizedWindows: Set<string>
  onRestore: (window: string) => void
  onOpenWindow: (window: string) => void
}

function StartMenu({ onClose, onOpenWindow }: { onClose: () => void; onOpenWindow: (window: string) => void }) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  const menuItems = [
    { icon: "📝", label: "Blog.exe", window: "blog" },
    { icon: "👤", label: "About.txt", window: "about" },
    { icon: "💾", label: "Projects", window: "projects" },
    { icon: "📧", label: "Contact.bat", window: "contact" },
  ]

  const socialLinks = [
    { icon: "🐙", label: "GitHub", href: "https://github.com" },
    { icon: "🐦", label: "Twitter", href: "https://twitter.com" },
    { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
  ]

  return (
    <div
      ref={menuRef}
      className="absolute bottom-full left-0 mb-1 w-56 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] shadow-lg"
    >
      {/* Header */}
      <div className="bg-gradient-to-b from-[#000080] to-[#1084d0] p-2 flex items-center gap-2">
        <span className="text-white font-bold text-sm rotate-[-90deg] origin-left translate-y-16 absolute left-2">
          RETRO_DEV
        </span>
      </div>

      {/* Programs Section */}
      <div className="p-1">
        <div className="text-xs text-[#808080] px-2 py-1 border-b border-[#808080] mb-1">Programs</div>
        {menuItems.map((item) => (
          <button
            key={item.window}
            onClick={() => {
              onOpenWindow(item.window)
              onClose()
            }}
            className="w-full flex items-center gap-3 px-2 py-1 hover:bg-[#000080] hover:text-white text-black text-sm"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Separator */}
      <div className="border-t border-[#808080] border-b border-b-white mx-1" />

      {/* Social Links */}
      <div className="p-1">
        <div className="text-xs text-[#808080] px-2 py-1 border-b border-[#808080] mb-1">Find Me</div>
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center gap-3 px-2 py-1 hover:bg-[#000080] hover:text-white text-black text-sm"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* Separator */}
      <div className="border-t border-[#808080] border-b border-b-white mx-1" />

      {/* Shutdown */}
      <div className="p-1">
        <button
          onClick={() => {
            onClose()
            alert("ERROR: Cannot shutdown. This is a website! 😄")
          }}
          className="w-full flex items-center gap-3 px-2 py-1 hover:bg-[#000080] hover:text-white text-black text-sm"
        >
          <span className="text-lg">🔌</span>
          <span>Shut Down...</span>
        </button>
      </div>
    </div>
  )
}

export function RetroTaskbar({
  activeWindow,
  setActiveWindow,
  time,
  minimizedWindows,
  onRestore,
  onOpenWindow,
}: RetroTaskbarProps) {
  const [startMenuOpen, setStartMenuOpen] = useState(false)

  const allWindows = new Set<string>()
  if (activeWindow) allWindows.add(activeWindow)
  minimizedWindows.forEach((w) => allWindows.add(w))

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-[#c0c0c0] border-t-2 border-white h-12 md:h-10 flex items-center px-1 gap-1">
        {/* Start Button with Menu */}
        <div className="relative">
          {startMenuOpen && <StartMenu onClose={() => setStartMenuOpen(false)} onOpenWindow={onOpenWindow} />}
          <button
            onClick={() => setStartMenuOpen(!startMenuOpen)}
            className={`h-8 md:h-7 px-2 md:px-3 bg-[#c0c0c0] border-2 flex items-center gap-1 hover:bg-[#d0d0d0] min-w-[70px] ${
              startMenuOpen
                ? "border-t-[#808080] border-l-[#808080] border-b-white border-r-white"
                : "border-t-white border-l-white border-b-[#808080] border-r-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white"
            }`}
          >
            <span className="text-lg">🖥️</span>
            <span className="font-bold text-black text-sm hidden md:inline">Start</span>
          </button>
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-[#808080] mx-1" />

        {/* Active Windows */}
        <div className="flex-1 flex items-center gap-1 overflow-x-auto">
          {Array.from(allWindows).map((window) => {
            const isMinimized = minimizedWindows.has(window)
            const isActive = activeWindow === window && !isMinimized
            return (
              <button
                key={window}
                onClick={() => onRestore(window)}
                className={`h-8 md:h-7 px-2 md:px-3 bg-[#c0c0c0] border-2 flex items-center gap-1 min-w-[100px] md:min-w-[120px] ${
                  isActive
                    ? "border-t-[#808080] border-l-[#808080] border-b-white border-r-white bg-[#a0a0a0]"
                    : "border-t-white border-l-white border-b-[#808080] border-r-[#808080] hover:bg-[#d0d0d0]"
                }`}
              >
                <span className="text-sm">{isMinimized ? "📄" : "📂"}</span>
                <span className="text-xs text-black truncate uppercase">{window}.exe</span>
              </button>
            )
          })}
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-2 px-2 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white h-8 md:h-7">
          <span className="text-sm">🔊</span>
          <span className="text-xs md:text-sm text-black font-mono">
            {time.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>
    </div>
  )
}
