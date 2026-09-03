'use client'

import { clsx } from 'clsx'
import { useState } from 'react'

interface ImagePlaceholderProps {
  src?: string
  alt?: string
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '2/3' | '3/4'
  className?: string
  label?: string
  bg?: string
}

const ratioMap: Record<string, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '2/3': 'aspect-[2/3]',
  '3/4': 'aspect-[3/4]',
}

export default function ImagePlaceholder({
  src,
  alt,
  aspectRatio = '4/3',
  className,
  label = '图片占位',
  bg = 'bg-surface',
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false)
  const ratioClass = ratioMap[aspectRatio]

  if (src && !failed) {
    return (
      <div className={clsx('relative overflow-hidden', ratioClass, className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? label}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-lg flex items-center justify-center',
        ratioClass,
        bg,
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-text-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-xs font-medium">{src ? '加载失败' : label}</span>
      </div>
    </div>
  )
}

interface VideoPlaceholderProps {
  src?: string
  aspectRatio?: '16/9' | '4/3'
  className?: string
  label?: string
}

export function VideoPlaceholder({
  src,
  aspectRatio = '16/9',
  className,
  label = '视频占位',
}: VideoPlaceholderProps) {
  if (src) {
    return (
      <div className={clsx('relative overflow-hidden rounded-lg', ratioMap[aspectRatio], className)}>
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-lg flex items-center justify-center bg-[#1A1917]',
        ratioMap[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 text-white/30">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  )
}
