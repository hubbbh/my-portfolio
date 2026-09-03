import { clsx } from 'clsx'

export type TagVariant = 'default' | 'subtle' | 'film' | 'product' | 'content' | 'visual'

interface TagProps {
  label: string
  className?: string
  variant?: TagVariant
}

const variants: Record<TagVariant, string> = {
  default: 'bg-surface text-text-2 border border-border-subtle',
  subtle: 'bg-transparent text-text-3 border border-border-subtle',
  film: 'bg-ice-blue-light text-[#1a4a80] border border-ice-blue/40',
  product: 'bg-peach-light text-[#7a3020] border border-peach/40',
  content: 'bg-warm-yellow-light text-[#7a5e00] border border-warm-yellow/50',
  visual: 'bg-forest-light text-forest border border-forest/30',
}

export default function Tag({ label, className, variant = 'default' }: TagProps) {
  return (
    <span
      className={clsx(
        'inline-block px-2.5 py-1 text-xs font-medium rounded-sm',
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
