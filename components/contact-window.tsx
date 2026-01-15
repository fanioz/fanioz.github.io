"use client"

import { RetroWindow } from "./retro-window"
import { Github, Twitter, Mail, Linkedin } from "lucide-react"

interface ContactWindowProps {
  onClose: () => void
  onMinimize: () => void
  isMinimized: boolean
}

export function ContactWindow({ onClose, onMinimize, isMinimized }: ContactWindowProps) {
  return (
    <RetroWindow title="C:\CONTACT\SEND.bat" onClose={onClose} onMinimize={onMinimize} isMinimized={isMinimized}>
      <div className="space-y-6">
        <div className="text-primary neon-glow text-xl md:text-2xl mb-4">
          {">"} ./connect.sh<span className="blink">▌</span>
        </div>

        <div className="border-2 border-border p-4">
          <pre className="text-foreground text-sm leading-relaxed">
            {`
╔════════════════════════════════════════════════╗
║                                                ║
║   Mau ngobrol soal tech, project, atau        ║
║   sekadar say hi? Reach out via:              ║
║                                                ║
╚════════════════════════════════════════════════╝
`}
          </pre>
        </div>

        <div className="grid gap-3">
          <a
            href="#"
            className="flex items-center gap-4 p-4 border-2 border-border hover:border-primary hover:bg-muted/30 transition-all group"
          >
            <Github className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-secondary group-hover:text-primary transition-colors">GitHub</div>
              <div className="text-sm text-muted-foreground">@andi-dev</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 p-4 border-2 border-border hover:border-primary hover:bg-muted/30 transition-all group"
          >
            <Twitter className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-secondary group-hover:text-primary transition-colors">Twitter/X</div>
              <div className="text-sm text-muted-foreground">@andi_codes</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 p-4 border-2 border-border hover:border-primary hover:bg-muted/30 transition-all group"
          >
            <Linkedin className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-secondary group-hover:text-primary transition-colors">LinkedIn</div>
              <div className="text-sm text-muted-foreground">/in/andi-developer</div>
            </div>
          </a>

          <a
            href="mailto:hello@andidev.com"
            className="flex items-center gap-4 p-4 border-2 border-border hover:border-primary hover:bg-muted/30 transition-all group"
          >
            <Mail className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-secondary group-hover:text-primary transition-colors">Email</div>
              <div className="text-sm text-muted-foreground">hello@andidev.com</div>
            </div>
          </a>
        </div>

        <div className="border-2 border-accent p-4 bg-accent/10">
          <div className="text-accent text-sm">
            💡 TIP: Preferably reach out via Twitter DM atau email untuk diskusi project collaboration!
          </div>
        </div>

        <div className="text-center text-muted-foreground text-sm">Press any key to continue...</div>
      </div>
    </RetroWindow>
  )
}
