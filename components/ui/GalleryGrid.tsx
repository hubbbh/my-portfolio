import { clsx } from 'clsx'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import VideoPlayer from '@/components/ui/VideoPlayer'

interface GalleryImage {
  src: string
  alt?: string
  caption?: string
}

interface GalleryVideo {
  src: string
  title?: string
}

type GalleryLayout = 'grid' | 'strip' | 'collage'

interface GalleryGridProps {
  images?: GalleryImage[]
  videos?: GalleryVideo[]
  layout?: GalleryLayout
  columns?: 2 | 3
  placeholderLabel?: string
  className?: string
}

export default function GalleryGrid({
  images = [],
  videos = [],
  layout = 'grid',
  columns = 2,
  placeholderLabel = '图片',
  className,
}: GalleryGridProps) {
  if (videos.length > 0) {
    return (
      <div
        className={clsx(
          layout === 'strip'
            ? 'flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2'
            : columns === 3
            ? 'grid sm:grid-cols-3 gap-4'
            : 'grid sm:grid-cols-2 gap-4',
          className
        )}
      >
        {videos.map((v, i) => (
          <div
            key={i}
            className={clsx(
              layout === 'strip' && 'flex-shrink-0 snap-start w-[80vw] sm:w-[460px]'
            )}
          >
            <VideoPlayer src={v.src} title={v.title} />
          </div>
        ))}
      </div>
    )
  }

  if (images.length === 0) return null

  if (layout === 'strip') {
    return (
      <div className={clsx('flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2', className)}>
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 snap-start w-[70vw] sm:w-[360px]">
            <ImagePlaceholder
              src={img.src}
              alt={img.alt}
              aspectRatio="4/3"
              label={img.alt ?? placeholderLabel}
              className="w-full rounded-lg"
            />
            {img.caption && (
              <p className="mt-2 text-xs text-text-3 leading-relaxed">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
    )
  }

  if (layout === 'collage' && images.length >= 3) {
    const [first, ...rest] = images
    return (
      <div className={clsx('grid grid-cols-2 gap-3', className)}>
        <div className="col-span-2">
          <ImagePlaceholder
            src={first.src}
            alt={first.alt}
            aspectRatio="16/9"
            label={first.alt ?? placeholderLabel}
            className="w-full rounded-lg"
          />
          {first.caption && (
            <p className="mt-2 text-xs text-text-3">{first.caption}</p>
          )}
        </div>
        {rest.map((img, i) => (
          <div key={i}>
            <ImagePlaceholder
              src={img.src}
              alt={img.alt}
              aspectRatio="4/3"
              label={img.alt ?? placeholderLabel}
              className="w-full rounded-lg"
            />
            {img.caption && (
              <p className="mt-2 text-xs text-text-3">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
    )
  }

  // Default: grid
  return (
    <div
      className={clsx(
        columns === 3 ? 'grid sm:grid-cols-3 gap-4' : 'grid sm:grid-cols-2 gap-4',
        className
      )}
    >
      {images.map((img, i) => (
        <div key={i}>
          <ImagePlaceholder
            src={img.src}
            alt={img.alt}
            aspectRatio="4/3"
            label={img.alt ?? placeholderLabel}
            className="w-full rounded-lg"
          />
          {img.caption && (
            <p className="mt-2 text-xs text-text-3 leading-relaxed">{img.caption}</p>
          )}
        </div>
      ))}
    </div>
  )
}
