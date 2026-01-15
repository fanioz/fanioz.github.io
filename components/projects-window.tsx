"use client"

import { RetroWindow } from "./retro-window"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  status: "completed" | "wip" | "abandoned"
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "dotfiles",
    description: "Konfigurasi Arch Linux + i3wm yang sudah di-rice habis. Tema: Catppuccin Mocha 🐱",
    tech: ["shell", "lua", "rice"],
    status: "wip",
    github: "#",
  },
  {
    id: 2,
    name: "tokoku-cli",
    description: "CLI untuk track pengeluaran bulanan. Simpel, cepat, no bloat.",
    tech: ["go", "sqlite", "cli"],
    status: "completed",
    github: "#",
  },
  {
    id: 3,
    name: "retro-weather",
    description: "Widget cuaca dengan tampilan ala MS-DOS. Nostalgia banget!",
    tech: ["react", "api", "css"],
    status: "completed",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    name: "homelab-ansible",
    description: "Ansible playbook untuk deploy services di Raspberry Pi cluster.",
    tech: ["ansible", "docker", "linux"],
    status: "wip",
    github: "#",
  },
  {
    id: 5,
    name: "pixel-art-maker",
    description: "Tool web sederhana untuk bikin pixel art. Project belajar canvas API.",
    tech: ["javascript", "canvas", "vanilla"],
    status: "abandoned",
  },
]

const statusColors = {
  completed: "text-green-400 border-green-400",
  wip: "text-yellow-400 border-yellow-400",
  abandoned: "text-red-400 border-red-400",
}

const statusLabels = {
  completed: "DONE",
  wip: "WIP",
  abandoned: "DEAD",
}

interface ProjectsWindowProps {
  onClose: () => void
  onMinimize: () => void
  isMinimized: boolean
}

export function ProjectsWindow({ onClose, onMinimize, isMinimized }: ProjectsWindowProps) {
  return (
    <RetroWindow title="C:\PROJECTS\DIR" onClose={onClose} onMinimize={onMinimize} isMinimized={isMinimized}>
      <div className="space-y-4">
        <div className="text-primary neon-glow text-xl md:text-2xl mb-4">
          {">"} ls -la ~/projects/<span className="blink">▌</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border text-left">
                <th className="py-2 px-2 text-secondary">NAME</th>
                <th className="py-2 px-2 text-secondary hidden md:table-cell">TECH</th>
                <th className="py-2 px-2 text-secondary">STATUS</th>
                <th className="py-2 px-2 text-secondary">LINKS</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-2">
                    <div className="text-foreground font-bold">📁 {project.name}</div>
                    <div className="text-muted-foreground text-xs mt-1 md:hidden">{project.tech.join(", ")}</div>
                    <div className="text-foreground/70 text-xs mt-1">{project.description}</div>
                  </td>
                  <td className="py-3 px-2 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-accent">
                          [{t}]
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span className={`text-xs px-2 py-0.5 border ${statusColors[project.status]}`}>
                      {statusLabels[project.status]}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} className="text-foreground hover:text-primary transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className="text-foreground hover:text-primary transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-muted-foreground text-sm pt-4">
          Total: {projects.length} directories | Done: {projects.filter((p) => p.status === "completed").length} | WIP:{" "}
          {projects.filter((p) => p.status === "wip").length}
        </div>
      </div>
    </RetroWindow>
  )
}
