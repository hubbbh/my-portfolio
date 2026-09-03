import { clsx } from 'clsx'

export type DoodleType =
  | 'star'
  | 'star-4'
  | 'dots'
  | 'slash'
  | 'double-slash'
  | 'arrow-right'
  | 'arrow-diagonal'
  | 'cross'
  | 'circle'
  | 'squiggle'

interface DoodleProps {
  type: DoodleType
  size?: number
  className?: string
  color?: string
}

const shapes: Record<DoodleType, (s: number) => React.ReactNode> = {
  // 6-pointed asterisk / spark
  star: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.54 15.54l2.83 2.83M18.36 5.64l-2.83 2.83M8.46 15.54l-2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  // 4-pointed geometric star ✦
  'star-4': (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  ),
  // 2×2 dot grid
  dots: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="7" cy="17" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  ),
  // Single diagonal slash
  slash: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <line x1="5" y1="19" x2="19" y2="5" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  // Double diagonal slashes
  'double-slash': (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <line x1="4" y1="19" x2="14" y2="5" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="19" x2="20" y2="5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  // Right arrow
  'arrow-right': (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
      <polyline points="14 5 21 12 14 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Diagonal arrow (NE)
  'arrow-diagonal': (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <line x1="5" y1="19" x2="19" y2="5" strokeWidth="2" strokeLinecap="round" />
      <polyline points="9 5 19 5 19 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Thick plus cross
  cross: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <line x1="12" y1="3" x2="12" y2="21" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  // Circle outline
  circle: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
    </svg>
  ),
  // Wavy squiggle
  squiggle: (s) => (
    <svg width={s} height={s / 2} viewBox="0 0 40 20" stroke="currentColor" fill="none">
      <path d="M2 10 Q8 3 14 10 Q20 17 26 10 Q32 3 38 10" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
}

export default function Doodle({ type, size = 24, className, color }: DoodleProps) {
  return (
    <span
      className={clsx('inline-flex items-center justify-center select-none', className)}
      style={color ? { color } : undefined}
    >
      {shapes[type](size)}
    </span>
  )
}
