interface VideoPlayerProps {
  src: string
  title?: string
  className?: string
  autoPlay?: boolean
}

export default function VideoPlayer({ src, title, className, autoPlay = false }: VideoPlayerProps) {
  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-xl bg-[#111] aspect-video">
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          autoPlay={autoPlay}
          className="w-full h-full object-contain"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {title && (
        <p className="mt-3 text-sm text-text-3 font-medium">{title}</p>
      )}
    </div>
  )
}
