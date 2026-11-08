'use client'

import Image from 'next/image'
import type { GalleryItem } from '@/lib/site'

const rowClasses = ['vallisa-row-left', 'vallisa-row-left', 'vallisa-row-left']

const carouselLabels = ['Carrusel de Vallisa', 'Carrusel de Thor', 'Carrusel de piezas de resina']

export function VallisaGallery({ groups }: { groups: GalleryItem[][] }) {
  return (
    <div className="space-y-14 overflow-hidden" aria-label="Galerías de Vallisa">
      {groups.map((group, groupIndex) => {
        const repeated = [...group, ...group]
        return (
          <section key={carouselLabels[groupIndex]} aria-label={carouselLabels[groupIndex]} className="overflow-hidden">
            <ul className={`vallisa-row flex w-max gap-8 ${rowClasses[groupIndex] ?? 'vallisa-row-left'} hover:[animation-play-state:paused]`}>
              {repeated.map((item, itemIndex) => (
                <li key={`${item.src}-${itemIndex}`} className="w-[min(76vw,24rem)] shrink-0 sm:w-[min(38vw,24rem)]">
                  <figure>
                    <div className="overflow-hidden rounded-2xl bg-card">
                      <Image src={item.src} alt={item.alt} width={1200} height={1200} sizes="(min-width: 640px) 38vw, 76vw" className="h-auto w-full object-contain" />
                    </div>
                    {item.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{item.caption}</figcaption>}
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
