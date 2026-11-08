'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-secondary focus:px-4 focus:py-2 focus:text-secondary-foreground"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <Link href="/#inicio" className="text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          {SITE.name} <span aria-hidden="true">💜</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center border border-foreground/20 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      <div
        id="menu-movil"
        className={cn(
          'absolute inset-x-0 top-full z-[60] h-[calc(100dvh-4rem)] overflow-y-auto bg-background transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none invisible opacity-0',
        )}
      >
        <nav aria-label="Móvil" className="flex h-full flex-col justify-between px-5 pb-10 pt-8">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-border">
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-5 text-3xl font-semibold tracking-tight">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`mailto:${SITE.email}`} className="text-sm text-muted-foreground">
            {SITE.email}
          </a>
        </nav>
      </div>
    </header>
  )
}
