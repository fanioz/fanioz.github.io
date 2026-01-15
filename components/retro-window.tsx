"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { X, Minus, Square, Maximize2 } from "lucide-react"

interface RetroWindowProps {
  title: string
  children: ReactNode
  onClose: () => void
  onMinimize: () => void
  isMinimized: boolean
}

export function RetroWindow({ title, children, onClose, onMinimize, isMinimized }: RetroWindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)

  if (isMinimized) return null

  return (
    <div
      className={`fixed z-40 flex items-start justify-center ${
        isMaximized ? "inset-0 pt-0" : "inset-4 md:inset-8 lg:inset-16 pt-8 md:pt-16"
      }`}
    >
      <div
        className={`retro-window bg-card animate-in fade-in zoom-in-95 duration-200 ${
          isMaximized ? "w-full h-[calc(100vh-40px)]" : "w-full max-w-4xl"
        }`}
      >
        {/* Title Bar */}
        <div className="retro-titlebar flex items-center justify-between px-2 py-1">
          <div className="flex items-center gap-2">
            <span className="text-white text-sm md:text-base font-bold tracking-wider">{title}</span>
          </div>
          <div className="flex gap-1">
            <button
              onClick={onMinimize}
              className="w-6 h-6 md:w-7 md:h-7 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] flex items-center justify-center hover:bg-[#d0d0d0] active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white"
              title="Minimize"
            >
              <Minus className="w-3 h-3 text-black" />
            </button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-6 h-6 md:w-7 md:h-7 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] flex items-center justify-center hover:bg-[#d0d0d0] active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Square className="w-3 h-3 text-black" /> : <Maximize2 className="w-3 h-3 text-black" />}
            </button>
            <button
              onClick={onClose}
              className="w-6 h-6 md:w-7 md:h-7 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] flex items-center justify-center hover:bg-red-500 hover:text-white active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white"
              title="Close"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-[#c0c0c0] border-b-2 border-[#808080] px-2 py-0.5 flex gap-4 text-xs md:text-sm text-black">
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">File</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">Edit</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">View</span>
          <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">Help</span>
        </div>

        {/* Content - Dynamic height based on maximize state */}
        <div
          className={`bg-card p-4 overflow-y-auto ${
            isMaximized ? "h-[calc(100vh-120px)]" : "max-h-[60vh] md:max-h-[70vh]"
          }`}
        >
          {children}
        </div>

        {/* Status Bar */}
        <div className="bg-[#c0c0c0] border-t-2 border-white px-2 py-0.5 text-xs text-black">Ready</div>
      </div>
    </div>
  )
}
