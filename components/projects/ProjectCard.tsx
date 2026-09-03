'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Tag from '@/components/ui/Tag'
import { MediaCover } from '@/components/ui/VideoCard'
import type { Project } from '@/data/projects'
import type { TagVariant } from '@/components/ui/Tag'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  tagVariant?: TagVariant
}

export default function ProjectCard({ project, featured = false, tagVariant = 'subtle' }: ProjectCardProps) {
  const aspectRatio = featured ? '16/9' : '4/3'

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative">
        {/* Image container */}
        <div className="card-frame mb-4 relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <MediaCover
              coverVideo={project.coverVideo}
              coverImage={project.coverImage}
              aspectRatio={aspectRatio}
              label={project.title}
              className="w-full"
            />
          </motion.div>
          {/* Color accent line on card hover */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-warm-yellow origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} variant={tagVariant} />
          ))}
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-text-1 mb-2 group-hover:text-text-2 transition-colors leading-snug ${
            featured ? 'text-xl' : 'text-base'
          }`}
        >
          {project.title}
        </h3>

        <p className="text-sm text-text-2 leading-relaxed line-clamp-2">{project.summary}</p>

        <div className="mt-3 flex items-center gap-1 text-xs text-text-3 group-hover:text-text-1 transition-colors">
          <span>查看详情</span>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
