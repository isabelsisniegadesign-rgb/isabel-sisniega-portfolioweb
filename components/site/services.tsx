import Image from 'next/image'
import Link from 'next/link'
import { MotionVideo } from './motion-video'
import { Check } from 'lucide-react'
import { SERVICES } from '@/lib/site'
import { ButtonLink, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          number="01"
          label="Servicios"
          title={<span id="servicios-title">En qué puedo ayudarte</span>}
        />
      </Reveal>

      <ol className="mt-16 flex flex-col gap-6">
        {SERVICES.map((service) => (
          <li key={service.number}>
            <Reveal>
              <article className="grid gap-10 rounded-[2rem] bg-card p-6 md:p-10 lg:grid-cols-12 lg:gap-12">
                <div className="flex flex-col gap-6 lg:col-span-7">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-sm text-accent">{service.number}</span>
                    <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">{service.name}</h3>
                  </div>
                  <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="rounded-2xl border-l-4 border-primary bg-background/70 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Lo que consigues</p>
                    <p className="mt-2 text-pretty font-medium leading-relaxed">{service.benefit}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Qué incluye</p>
                    <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.note && (
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span aria-hidden="true" className="size-2 animate-pulse rounded-full bg-primary" />
                      {service.note}
                    </p>
                  )}
                  <div className="mt-auto pt-2">
                    <ButtonLink href="#contacto" variant="dark">
                      Hablar sobre mi proyecto
                    </ButtonLink>
                  </div>
                </div>

                {service.project && (
                  <div className="lg:col-span-5">
                    <Link
                      href={`/proyectos/${service.project.slug}`}
                      className="group flex h-full flex-col gap-4 rounded-[1.5rem] bg-background p-4 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(27,34,52,0.5)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted lg:aspect-auto lg:flex-1">
                        {service.project.slug === 'vallisa' ? (
                          <MotionVideo
                            src="/videos/vallisa-isotipo-animado.mp4"
                            poster="/images/poster-isotipo-animado.jpg"
                            label="Animación del isotipo de Vallisa"
                            className="absolute inset-0 size-full rounded-xl"
                          />
                        ) : (
                          <Image
                            src={service.project.image || '/placeholder.svg'}
                            alt={service.project.alt}
                            fill
                            sizes="(min-width: 1024px) 35vw, 90vw"
                            className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.02] md:p-5"
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-between gap-4 px-1">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                            Un ejemplo
                          </p>
                          <p className="font-semibold">{service.project.name}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors group-hover:bg-foreground group-hover:text-background">
                          Ver proyecto <span aria-hidden="true">{'→'}</span>
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
