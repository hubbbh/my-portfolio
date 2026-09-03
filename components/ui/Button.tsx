import Link from 'next/link'
import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  download?: boolean | string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external,
  download,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-medium transition-all duration-200 rounded-full cursor-pointer'

  const variants = {
    primary:   'bg-text-1 text-bg hover:bg-text-2',
    secondary: 'bg-transparent border border-border-subtle text-text-1 hover:bg-surface hover:border-text-3',
    ghost:     'bg-transparent text-text-2 hover:text-text-1 underline-offset-4 hover:underline',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const cls = clsx(base, variants[variant], sizes[size], className)

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          download={download}
          className={cls}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
