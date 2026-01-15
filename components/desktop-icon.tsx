"use client"

interface DesktopIconProps {
  icon: string
  label: string
  onClick: () => void
}

export function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 min-w-[80px] min-h-[80px] hover:bg-secondary/20 transition-colors group"
    >
      <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-xs md:text-sm text-neon-cyan text-center leading-tight neon-glow">{label}</span>
    </button>
  )
}
