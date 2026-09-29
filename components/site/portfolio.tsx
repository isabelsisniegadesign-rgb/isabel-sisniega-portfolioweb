'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CATEGORIES, PROJECTS, type Category } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SectionHeading } from './primitives'
import { Reveal } from './reveal'

type Filter = 'Todos' | Category

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const projects = filter === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))
  const filters: Filter[] = ['Todos', ...CATEGORIES]

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-[#ebe6dd]/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <SectionHeading
              number="02"
              label="Portfolio"
              title={<span id="portfolio-title">Portfolio</span>}
              intro="Una selección de proyectos de identidad visual, diseño gráfico y animación."
            />
            <div role="group" aria-label="Filtrar proyectos por categoría" className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors',
                    filter === f
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-foreground/20 hover:border-foreground',
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <p aria-live="polite" className="sr-only">
          {`${projects.length} proyectos`}
        </p>

        <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const featured = project.slug === 'vallisa' && filter === 'Todos'
            return (
              <li key={project.slug} className={cn(featured && 'md:col-span-2 lg:col-span-2 lg:row-span-2')}>
                <Link href={`/proyectos/${project.slug}`} className="group flex h-full flex-col gap-5">
                  <div
                    className={cn(
                      'relative overflow-hidden rounded-2xl bg-[#e6e2dc]',
                      featured ? 'aspect-[4/3] lg:aspect-auto lg:flex-1' : 'aspect-square',
                    )}
                  >
                    <Image
                      src={project.cover || '/placeholder.svg'}
                      alt={project.coverAlt}
                      fill
                      sizes={featured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 30vw, 90vw'}
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04] md:p-12"
                    />
                    {featured && (
                      <span className="absolute left-5 top-5 rounded-full bg-secondary px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary-foreground">
                        Proyecto destacado · Branding + Motion
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className={cn('font-semibold tracking-tight', featured ? 'text-3xl' : 'text-xl')}>
                        {project.name}
                      </h3>
                      <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
                    <ul className="mt-1 flex flex-wrap gap-2" aria-label="Categorías">
                      {project.categories.map((c) => (
                        <li
                          key={c}
                          className="rounded-full bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
