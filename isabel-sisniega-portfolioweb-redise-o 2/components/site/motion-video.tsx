import { cn } from '@/lib/utils'

export function MotionVideo({
  src,
  poster,
  label,
  className,
}: {
  src: string
  poster: string
  label: string
  className?: string
}) {
  return (
    <div className={cn('relative overflow-hidden bg-[#f7f4ee]', className)}>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}
