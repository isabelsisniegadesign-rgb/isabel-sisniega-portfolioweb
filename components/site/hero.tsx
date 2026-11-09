
'use client'

import Image from 'next/image'
import { CATEGORIES } from '@/lib/site'

const OFFSETS = ['', 'lg:ml-8', 'lg:ml-3']

export function Hero() {
  const pick = (c: string) => window.dispatchEvent(new CustomEvent('portfolio-filter', { detail: c }))

  return (
    <section id="inicio" aria-labelledby="hero-title" className="mx-auto max-w-7xl overflow-x-clip px-4 pb-12 pt-8 md:px-10 md:pb-20 md:pt-16">
      <h1 id="hero-title" className="sr-only">
        Isabel Sisniega, diseñadora digital
      </h1>

      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-3 gap-y-6 lg:grid-cols-[1fr_340px_1fr] lg:gap-8">

        <div className="hero-name col-span-2 lg:col-span-1">
          <p
            aria-hidden="true"
            className="text-[clamp(3rem,14vw,6rem)] font-semibold leading-[0.92] tracking-tight lg:text-[clamp(2.5rem,5vw,5rem)]"
          >
            Isabel
            <br />
            Sisniega
          </p>
          <p className="mt-3 text-base font-medium text-muted-foreground md:mt-5 md:text-2xl">
            Diseñadora digital
          </p>
        </div>

        <div className="hero-photo relative aspect-[4/5] w-full max-w-[340px] justify-self-center bg-card lg:row-auto">
          <Image
            src="/images/isabel-retrato.webp"
            alt="Retrato de Isabel Sisniega"
            fill
            priority
            sizes="(min-width: 1024px) 340px, 45vw"
            className="object-cover"
          />
        </div>

        <ul className="flex flex-col items-start justify-center gap-3 lg:items-start lg:gap-4">
          {CATEGORIES.map((c, i) => (
            <li key={c} className={`hero-btn ${OFFSETS[i] ?? ''}`} style={{ ['--d' as string]: `${0.7 + i * 0.15}s` }}>
              <a
                href="#portfolio"
                onClick={() => pick(c)}
                className="inline-flex max-w-full rounded-full bg-accent px-3 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground sm:px-5 sm:text-base lg:px-7 lg:py-3.5 lg:text-xl"
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
