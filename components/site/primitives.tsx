import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Eyebrow({ number, label, className }: { number?: string; label: string; className?: string }) {
  return (
    <p className={cn('flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em]', className)}>
      {number && (
        <>
          <span className="text-muted-foreground">/ {number}</span>
          <span aria-hidden="true" className="h-5 w-px bg-input" />
        </>
      )}
      <span className="text-accent">{label}</span>
    </p>
  )
}

export function SectionHeading({
  number,
  label,
  title,
  intro,
  className,
}: {
  number: string
  label: string
  title: React.ReactNode
  intro?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <Eyebrow number={number} label={label} />
      <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h2>
      {intro && <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  )
}

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'dark' | 'outline' | 'ghost'
  className?: string
  external?: boolean
}

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-[#9b6cdc] hover:text-white',
  dark: 'bg-secondary text-secondary-foreground hover:bg-accent',
  outline: 'border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background',
  ghost: 'text-foreground underline-offset-4 hover:underline',
}

export const buttonClass = (variant: keyof typeof variants = 'primary', className?: string) =>
  cn(
    'group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
    variants[variant],
    className,
  )

export function ButtonLink({ href, children, variant = 'primary', className, external }: ButtonLinkProps) {
  const content = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        {'→'}
      </span>
    </>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)}>
        {content}
        <span className="sr-only">(se abre en una pestaña nueva)</span>
      </a>
    )
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {content}
    </Link>
  )
}
