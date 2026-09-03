'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import VideoCard from '@/components/ui/VideoCard'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const colY = useTransform(scrollY, [0, 600], [0, 30])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Dot grid background texture */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="container-site w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-16 items-center py-20 lg:py-0 lg:min-h-[calc(100vh-64px)]">

          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="label-sm mb-6"
            >
              秦若楠 · Qin Ruonan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-text-1 leading-[1.08] tracking-tight mb-6"
            >
              以内容逻辑
              <br />
              与审美判断驱动的
              <br />
              <span className="relative">
                <span className="text-text-2">AIGC 视听创作者</span>
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-warm-yellow opacity-80 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base lg:text-lg text-text-2 leading-relaxed max-w-lg mb-10"
            >
              我关心的不是 AI 能生成多少内容，而是人在其中如何继续决定情绪、风格与表达是否成立。
              目前持续围绕 AIGC 短内容创作、人机协作工作流与视觉语言控制进行实践。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <Button href="/projects" variant="primary" size="lg">
                查看项目
              </Button>
              <Button href="/method" variant="secondary" size="lg">
                我如何工作
              </Button>
              <Button href="/resume.pdf" variant="ghost" size="lg" download>
                ↓ 下载简历
              </Button>
            </motion.div>
          </div>

          {/* Right: video stack */}
          <motion.div
            style={{ y: colY }}
            className="hidden lg:flex flex-col gap-3 relative"
          >
            {/* Main video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-frame overflow-hidden"
            >
              <VideoCard src="/videos/aigc/bigcat-cape.mp4" aspectRatio="16/9" />
            </motion.div>

            {/* Two smaller videos side by side */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="card-frame overflow-hidden"
              >
                <VideoCard src="/videos/aigc/bohemian.mp4" aspectRatio="1/1" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="card-frame overflow-hidden"
              >
                <VideoCard src="/videos/aigc/sweet-girl.mp4" aspectRatio="1/1" />
              </motion.div>
            </div>

            {/* Caption row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-between"
            >
              <p className="text-xs text-text-3 font-medium tracking-widest uppercase">
                ✦ AIGC 短片 · 2026
              </p>
              <p className="text-xs text-text-3">
                ComfyUI · Blender · AE
              </p>
            </motion.div>

            {/* Star decoration */}
            <div className="absolute -top-4 -right-4 text-warm-yellow text-2xl opacity-60 select-none pointer-events-none">
              ✦
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="text-text-3">
            <path d="M8 1v18M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
