import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Eyebrow({ label, className }: { number?: string; label: string; className?: string }) {
  return <p className={cn('text-sm font-semibold text-accent', className)}>{label}</p>
}

export function SectionHeading({
  label,
  title,
  intro,
  className,
}: {
  number?: string
  label: string
  title: React.ReactNode
  intro?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <Eyebrow label={label} />
      <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
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
  primary: 'border border-foreground bg-foreground text-background hover:border-accent hover:bg-accent',
  dark: 'border border-foreground bg-foreground text-background hover:border-accent hover:bg-accent',
  outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-background',
  ghost: 'text-foreground underline-offset-4 hover:underline',
}

export const buttonClass = (variant: keyof typeof variants = 'primary', className?: string) =>
  cn(
    'group inline-flex min-h-12 items-center justify-center gap-3 px-7 text-sm font-semibold tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
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
