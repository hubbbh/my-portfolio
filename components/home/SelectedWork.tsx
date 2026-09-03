'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import Tag from '@/components/ui/Tag'
import { MediaCover } from '@/components/ui/VideoCard'
import type { TagVariant } from '@/components/ui/Tag'

const selectedWork = [
  {
    slug: 'aigc-short-films',
    title: 'AIGC短片系列创作',
    tags: ['AIGC Short Film', 'Visual Direction', 'Human-AI Workflow'],
    tagVariant: 'film' as const,
    description:
      '围绕统一视觉风格完成多支 15 秒短片，探索 AI 辅助下情绪表达、风格控制与短内容节奏之间的关系。',
    index: '01',
    coverVideo: '/videos/aigc/bigcat-cape.mp4',
  },
  {
    slug: 'magic-moment',
    title: '魔幻时刻',
    tags: ['AI Product', 'User Research', 'Content Thinking'],
    tagVariant: 'product' as const,
    description:
      '从用户研究到产品定义，主导一款 AI 人像艺术风格转换工具的完整项目过程，建立对"AI能力如何转化为用户价值"的理解。',
    index: '02',
    coverVideo: undefined,
  },
  {
    slug: 'ai-content-system',
    title: 'AI内容系统 / 系列化表达探索',
    tags: ['Content System', 'Audience Thinking', 'Visual Identity'],
    tagVariant: 'content' as const,
    description:
      '围绕统一主题、受众与视觉规则，尝试将单条内容扩展为可持续的内容系统与表达框架。',
    index: '03',
    coverVideo: undefined,
  },
]

export default function SelectedWork() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="label-sm mb-3">Selected Work</p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-text-1 heading-accent">
                精选项目
              </h2>
            </div>
            <p className="text-sm text-text-3 max-w-xs sm:text-right hidden sm:block">
              围绕 AIGC 短内容、视觉实验与 AI 产品实践的阶段性作品。
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedWork.map((work, i) => (
            <FadeIn key={work.slug} delay={i * 0.1}>
              <Link href={`/projects/${work.slug}`} className="group block">
                {/* Image */}
                <motion.div
                  className="card-frame mb-4 relative"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <MediaCover
                    coverVideo={work.coverVideo}
                    aspectRatio="4/3"
                    label={`${work.index}`}
                    className="w-full"
                  />
                  {/* Index badge */}
                  <span className="absolute top-3 left-3 text-xs font-medium text-white/70 bg-black/30 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                    {work.index}
                  </span>
                </motion.div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {work.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant={work.tagVariant} />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-text-1 mb-2 group-hover:text-text-2 transition-colors leading-snug">
                  {work.title}
                </h3>

                <p className="text-sm text-text-2 leading-relaxed line-clamp-2">{work.description}</p>

                <div className="mt-3 flex items-center gap-1 text-xs text-text-3 group-hover:text-text-1 transition-colors">
                  <span>查看项目</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
