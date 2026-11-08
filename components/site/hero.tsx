'use client'

import Image from 'next/image'
import { CATEGORIES } from '@/lib/site'

const NAME = 'text-[clamp(3rem,14vw,6rem)] font-semibold leading-[0.9] tracking-tight lg:text-[clamp(2.5rem,5.6vw,5.5rem)]'

export function Hero() {
  const pick = (c: string) => window.dispatchEvent(new CustomEvent('portfolio-filter', { detail: c }))

  return (
    <section id="inicio" aria-labelledby="hero-title" className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-10 md:pt-16">
      <h1 id="hero-title" className="sr-only">
        Isabel Sisniega, diseñadora digital
      </h1>
      <div className="grid items-center justify-items-center gap-6 lg:grid-cols-[1fr_340px_1fr] lg:gap-4">
        <p aria-hidden="true" className={`${NAME} lg:justify-self-end`}>
          Isabel
        </p>
        <div className="relative aspect-[4/5] w-full max-w-[340px] bg-card">
          <Image
            src="/images/isabel-retrato.webp"
            alt="Retrato de Isabel Sisniega"
            fill
            priority
            sizes="(min-width: 1024px) 340px, 80vw"
            className="object-cover"
          />
        </div>
        <p aria-hidden="true" className={`${NAME} lg:justify-self-start`}>
          Sisniega
        </p>
      </div>

      <p className="mt-10 text-center text-xl font-medium md:text-2xl">
        Diseñadora digital <span aria-hidden="true">💜</span>
      </p>

      <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 border-t border-border pt-8">
        {CATEGORIES.map((c) => (
          <li key={c}>
            <a
              href="#portfolio"
              onClick={() => pick(c)}
              className="text-2xl font-semibold tracking-tight decoration-accent underline-offset-8 transition-colors hover:text-accent hover:underline md:text-4xl"
            >
              {c}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
