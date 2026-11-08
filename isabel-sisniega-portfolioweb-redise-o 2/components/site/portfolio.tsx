'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CATEGORIES, PROJECTS, type Category } from '@/lib/site'
import { cn } from '@/lib/utils'
import { MotionVideo } from './motion-video'

type Filter = 'Todos' | Category

const LAYOUT: Record<string, { col: string; ratio: string }> = {
  vallisa: { col: 'md:col-span-12', ratio: 'aspect-[4/3] md:aspect-[16/9]' },
  'kanto-tcg': { col: 'md:col-span-7', ratio: 'aspect-[3508/2481]' },
  agnexo: { col: 'md:col-span-5 md:mt-24', ratio: 'aspect-[4/3]' },
  'cafe-umo': { col: 'md:col-span-5', ratio: 'aspect-[4/3]' },
  poemario: { col: 'md:col-span-7 md:mt-24', ratio: 'aspect-[3129/1417]' },
}
const FALLBACK = { col: 'md:col-span-6', ratio: 'aspect-[4/3]' }

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const filters: Filter[] = ['Todos', ...CATEGORIES]

  useEffect(() => {
    const onPick = (e: Event) => {
      const c = (e as CustomEvent<string>).detail as Category
      if (CATEGORIES.includes(c)) setFilter(c)
    }
    window.addEventListener('portfolio-filter', onPick)
    return () => window.removeEventListener('portfolio-filter', onPick)
  }, [])

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <h2 id="portfolio-title" className="text-5xl font-semibold leading-none tracking-tight md:text-7xl">
          Portfolio
        </h2>
        <div role="group" aria-label="Filtrar proyectos por categoría" className="flex flex-wrap gap-x-7 gap-y-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                'text-base font-medium underline-offset-8 transition-colors',
                filter === f ? 'text-accent underline' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-14 grid grid-cols-1 items-start gap-x-10 gap-y-14 md:grid-cols-12">
        {PROJECTS.map((p) => {
          const l = LAYOUT[p.slug] ?? FALLBACK
          const dim = filter !== 'Todos' && !p.categories.includes(filter)
          return (
            <li key={p.slug} className={cn(l.col, 'transition-opacity duration-500', dim && 'pointer-events-none opacity-15')}>
              <Link href={`/proyectos/${p.slug}`} className="group block" tabIndex={dim ? -1 : 0}>
                <div className={cn('relative overflow-hidden bg-card', l.ratio)}>
                  {p.slug === 'vallisa' && p.video ? (
                    <MotionVideo
                      src={p.video.src}
                      poster={p.video.poster}
                      label={p.coverAlt}
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <Image
                      src={p.cover || '/placeholder.svg'}
                      alt={p.coverAlt}
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight group-hover:text-accent">{p.name}</h3>
                  <p className="text-right text-sm text-muted-foreground">
                    {p.year} · {p.categories.join(' · ')}
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <p aria-live="polite" className="sr-only">
        {filter === 'Todos' ? 'Todos los proyectos' : `Proyectos de ${filter}`}
      </p>
    </section>
  )
}
