'use client'

import { useEffect, useRef } from 'react'
import { clsx } from 'clsx'
import ImagePlaceholder from './ImagePlaceholder'

type AspectRatio = '16/9' | '4/3' | '3/2' | '1/1' | '3/4'

interface VideoCardProps {
  src: string
  aspectRatio?: AspectRatio
  className?: string
}

const ratioClass: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
}

export default function VideoCard({ src, aspectRatio = '4/3', className }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <div className={clsx('relative overflow-hidden bg-surface', ratioClass[aspectRatio], className)}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

interface MediaCoverProps {
  coverVideo?: string
  coverImage?: string
  aspectRatio?: AspectRatio
  label?: string
  className?: string
}

export function MediaCover({
  coverVideo,
  coverImage,
  aspectRatio = '4/3',
  label,
  className,
}: MediaCoverProps) {
  if (coverVideo) {
    return <VideoCard src={coverVideo} aspectRatio={aspectRatio} className={className} />
  }
  return (
    <ImagePlaceholder
      aspectRatio={aspectRatio === '3/4' ? '3/4' : (aspectRatio as '16/9' | '4/3' | '3/2' | '1/1')}
      label={label}
      bg="bg-surface"
      className={className}
    />
  )
}
