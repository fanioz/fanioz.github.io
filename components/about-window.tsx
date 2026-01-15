"use client"

import { RetroWindow } from "./retro-window"

interface AboutWindowProps {
  onClose: () => void
  onMinimize: () => void
  isMinimized: boolean
}

export function AboutWindow({ onClose, onMinimize, isMinimized }: AboutWindowProps) {
  return (
    <RetroWindow title="C:\ABOUT\README.txt" onClose={onClose} onMinimize={onMinimize} isMinimized={isMinimized}>
      <div className="space-y-6">
        <pre className="text-primary neon-glow text-xs md:text-sm leading-tight">
          {`
 ██████╗ ███████╗██╗   ██╗    ██████╗ ██╗      ██████╗  ██████╗ 
 ██╔══██╗██╔════╝██║   ██║    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
 ██║  ██║█████╗  ██║   ██║    ██████╔╝██║     ██║   ██║██║  ███╗
 ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔══██╗██║     ██║   ██║██║   ██║
 ██████╔╝███████╗ ╚████╔╝     ██████╔╝███████╗╚██████╔╝╚██████╔╝
 ╚═════╝ ╚══════╝  ╚═══╝      ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
`}
        </pre>

        <div className="border-2 border-border p-4">
          <div className="text-secondary text-lg mb-4">{">"} whoami</div>
          <p className="text-foreground leading-relaxed mb-4">
            Halo! Nama saya <span className="text-primary">Andi</span>, seorang developer hobbyist yang suka ngulik
            teknologi di waktu luang. By day, saya kerja sebagai
            <span className="text-accent"> IT Support</span>, by night... masih IT Support juga sih, tapi buat project
            sendiri! 😄
          </p>

          <div className="text-secondary text-lg mb-4">{">"} cat interests.txt</div>
          <ul className="text-foreground space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> Web Development (React, Next.js)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> System Programming (Rust, Go)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> Homelab & Self-Hosting
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> Retro Computing & Gaming
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> Mechanical Keyboards
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> Linux Rice 🍚
            </li>
          </ul>
        </div>

        <div className="border-2 border-border p-4">
          <div className="text-secondary text-lg mb-4">{">"} neofetch --skills</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">OS:</span>
              <span className="text-foreground ml-2">Arch Linux btw</span>
            </div>
            <div>
              <span className="text-muted-foreground">Editor:</span>
              <span className="text-foreground ml-2">Neovim + VSCode</span>
            </div>
            <div>
              <span className="text-muted-foreground">Shell:</span>
              <span className="text-foreground ml-2">zsh + oh-my-zsh</span>
            </div>
            <div>
              <span className="text-muted-foreground">Terminal:</span>
              <span className="text-foreground ml-2">Alacritty</span>
            </div>
            <div>
              <span className="text-muted-foreground">WM:</span>
              <span className="text-foreground ml-2">i3-gaps</span>
            </div>
            <div>
              <span className="text-muted-foreground">Coffee:</span>
              <span className="text-foreground ml-2">Infinite ☕</span>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-sm">--- EOF ---</div>
      </div>
    </RetroWindow>
  )
}
