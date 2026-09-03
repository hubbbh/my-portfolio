'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/method', label: 'Method' },
  { href: '/experiments', label: 'Experiments' },
  { href: '/about', label: 'About' },
  { href: '/resume.pdf', label: 'Resume'  },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border-subtle' : 'bg-transparent'
      )}
    >
      <div className="container-site flex items-center justify-between h-16 lg:h-18">
        <Link
          href="/"
          className="font-medium text-text-1 hover:text-text-2 transition-colors tracking-tight"
        >
          秦若楠
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'text-sm transition-colors',
                pathname === href
                  ? 'text-text-1 font-medium'
                  : 'text-text-3 hover:text-text-1'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="菜单"
        >
          <motion.span
            className="block w-5 h-[1.5px] bg-text-1 origin-center"
            animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-text-1"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-text-1 origin-center"
            animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg border-b border-border-subtle overflow-hidden"
          >
            <nav className="container-site py-6 flex flex-col gap-5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'text-base transition-colors',
                    pathname === href
                      ? 'text-text-1 font-medium'
                      : 'text-text-2 hover:text-text-1'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
