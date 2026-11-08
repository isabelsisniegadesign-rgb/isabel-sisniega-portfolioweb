'use client'

import Image from 'next/image'
import { CATEGORIES } from '@/lib/site'

const OFFSETS = ['', 'lg:ml-8', 'lg:ml-3']

export function Hero() {
  const pick = (c: string) => window.dispatchEvent(new CustomEvent('portfolio-filter', { detail: c }))

  return (
    <section id="inicio" aria-labelledby="hero-title" className="mx-auto max-w-7xl overflow-x-clip px-5 pb-20 pt-10 md:px-10 md:pt-16">
      <h1 id="hero-title" className="sr-only">
        Isabel Sisniega, diseñadora digital
      </h1>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_340px_1fr] lg:gap-8">
        <div className="hero-name">
          <p
            aria-hidden="true"
            className="text-[clamp(3rem,14vw,6rem)] font-semibold leading-[0.92] tracking-tight lg:text-[clamp(2.5rem,5vw,5rem)]"
          >
            Isabel
            <br />
            Sisniega
          </p>
          <p className="mt-5 text-xl font-medium text-muted-foreground md:text-2xl">Diseñadora digital</p>
        </div>

        <div className="hero-photo relative aspect-[4/5] w-full max-w-[340px] justify-self-center bg-card">
          <Image
            src="/images/isabel-retrato.webp"
            alt="Retrato de Isabel Sisniega"
            fill
            priority
            sizes="(min-width: 1024px) 340px, 80vw"
            className="object-cover"
          />
        </div>

        <ul className="flex flex-wrap gap-4 lg:flex-col lg:items-start">
          {CATEGORIES.map((c, i) => (
            <li key={c} className={`hero-btn ${OFFSETS[i] ?? ''}`} style={{ ['--d' as string]: `${0.7 + i * 0.15}s` }}>
              <a
                href="#portfolio"
                onClick={() => pick(c)}
                className="inline-flex rounded-full bg-accent px-7 py-3.5 text-lg font-semibold text-accent-foreground transition-colors hover:bg-foreground md:text-xl"
              >
                {c}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
