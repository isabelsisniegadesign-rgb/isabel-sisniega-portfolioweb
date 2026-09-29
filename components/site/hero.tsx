import { ButtonLink } from './primitives'
import { MotionVideo } from './motion-video'

const MARQUEE_ITEMS = [
  { number: '01', label: 'Identidad visual', style: 'area' },
  { number: '02', label: 'Contenido digital', style: 'area' },
  { number: '03', label: 'Motion Graphics', style: 'area' },
  { label: 'Cantabria', style: 'location' },
  { label: 'Trabajo en remoto', style: 'location' },
]

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:px-10 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <p className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl md:text-6xl">Isabel Sisniega.</p>
          <h1 id="hero-title" className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
            Diseño con identidad y movimiento.
          </h1>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contacto">Cuéntame tu proyecto</ButtonLink>
            <ButtonLink href="#portfolio" variant="outline">
              Ver portfolio
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <figure className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-card p-3 shadow-[0_30px_80px_-40px_rgba(27,34,52,0.45)]">
              <MotionVideo
                src="/videos/vallisa-isotipo-animado.mp4"
                poster="/images/poster-isotipo-animado.jpg"
                label="Animación del isotipo de Vallisa"
                className="aspect-square w-full rounded-[1.5rem]"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Vallisa · Isotipo animado</span>
              <span>After Effects</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="overflow-hidden border-y border-border" aria-label="Áreas de trabajo y ubicación">
        <div className="marquee-track flex min-w-full" role="presentation">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-24 px-8 py-6 pr-32 md:gap-40 md:px-16 md:pr-56 lg:gap-56 lg:pr-72"
            >
              {MARQUEE_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className={
                    item.style === 'location'
                      ? 'whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'
                      : 'flex items-center gap-3 whitespace-nowrap text-sm font-medium md:text-base'
                  }
                >
                  {item.style === 'area' && <span className="font-mono text-xs text-accent">{item.number}</span>}
                  {item.label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
