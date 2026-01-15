"use client"

import { RetroWindow } from "./retro-window"

interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Memulai Perjalanan dengan Rust 🦀",
    date: "2026-01-10",
    excerpt:
      "Akhirnya kesampaian juga belajar Rust! Bahasa yang katanya bikin pusing ownership-nya, tapi ternyata seru banget...",
    tags: ["rust", "programming", "learning"],
  },
  {
    id: 2,
    title: "Setup Homelab Pertama dengan Raspberry Pi",
    date: "2026-01-05",
    excerpt:
      "Weekend kemarin iseng-iseng setup Pi-hole sama Nextcloud di Raspberry Pi 4. Hasilnya? Iklan hilang, cloud pribadi jadi!",
    tags: ["homelab", "raspberry-pi", "self-hosted"],
  },
  {
    id: 3,
    title: "Review Mechanical Keyboard Budget 2025",
    date: "2025-12-28",
    excerpt:
      "Sebagai developer hobbyist, keyboard adalah senjata utama. Kali ini review beberapa mecha keyboard under 500k...",
    tags: ["gear", "keyboard", "review"],
  },
  {
    id: 4,
    title: "Bikin CLI Tool Sederhana dengan Go",
    date: "2025-12-20",
    excerpt:
      "Bosen sama task repetitif? Bikin aja CLI tool sendiri! Tutorial kali ini kita bikin todo app di terminal...",
    tags: ["golang", "cli", "tutorial"],
  },
  {
    id: 5,
    title: "Nostalgia: Game DOS Favorit Masa Kecil",
    date: "2025-12-15",
    excerpt:
      "Prince of Persia, Commander Keen, Dangerous Dave... Game-game legendaris yang bikin kita kenal komputer pertama kali.",
    tags: ["retro", "gaming", "nostalgia"],
  },
]

interface BlogWindowProps {
  onClose: () => void
  onMinimize: () => void
  isMinimized: boolean
}

export function BlogWindow({ onClose, onMinimize, isMinimized }: BlogWindowProps) {
  return (
    <RetroWindow title="C:\BLOG\POSTS.exe" onClose={onClose} onMinimize={onMinimize} isMinimized={isMinimized}>
      <div className="space-y-4">
        <div className="text-primary neon-glow text-xl md:text-2xl mb-4">
          {">"} BLOG POSTS_<span className="blink">▌</span>
        </div>

        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className="border-2 border-border p-3 md:p-4 hover:border-primary transition-colors cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <h2 className="text-lg md:text-xl text-secondary group-hover:text-primary transition-colors">
                [{String(index + 1).padStart(2, "0")}] {post.title}
              </h2>
              <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
            </div>
            <p className="text-sm md:text-base text-foreground/80 mb-3 leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-muted text-accent border border-accent">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}

        <div className="text-center text-muted-foreground text-sm pt-4">--- END OF FILE ---</div>
      </div>
    </RetroWindow>
  )
}
