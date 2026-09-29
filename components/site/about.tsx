import Image from 'next/image'
import { EDUCATION, TOOLS } from '@/lib/site'
import { SectionHeading } from './primitives'
import { Reveal } from './reveal'

function ToolRing({ short, name, level, value }: (typeof TOOLS)[number]) {
  const r = 34
  const c = 2 * Math.PI * r
  return (
    <li className="flex flex-col items-center gap-3 text-center">
      <div className="relative size-20">
        <svg viewBox="0 0 80 80" className="size-full -rotate-90" aria-hidden="true">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#c8c7c7" strokeWidth="5" />
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="#9b6cdc"
            strokeWidth="5"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - value / 100)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold">{short}</span>
      </div>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          <span className="sr-only">Nivel </span>
          {level}
        </p>
      </div>
    </li>
  )
}

export function About() {
  return (
    <section id="formacion" aria-labelledby="formacion-title" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card">
              <Image
                src="/images/isabel-retrato.webp"
                alt="Retrato de Isabel Sisniega"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ['Desde', 'Cantabria'],
                ['Estudio', 'Diseño Digital · UNIR'],
                ['Trabajo', 'En remoto'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16 lg:col-span-7">
          <Reveal>
            <SectionHeading
              number="03"
              label="Sobre mí · Formación"
              title={<span id="formacion-title">De la ilustración al movimiento</span>}
            />
            <div className="mt-8 flex max-w-2xl flex-col gap-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Soy <strong className="font-semibold text-foreground">Isabel Sisniega</strong>, de Cantabria, y estudio
                el Grado en Diseño Digital en la UNIR, una formación que me permite mantenerme al día con las
                herramientas y recursos que se utilizan actualmente en el sector.
              </p>
              <p>
                Mi interés por el diseño comenzó de una forma más personal, a través de la ilustración y de la creación
                de mi propio poemario. Aquellos primeros proyectos despertaron mi interés por el mundo visual.
              </p>
              <p>
                Ahora llevo mis proyectos de lo estático a lo dinámico mediante la edición de vídeo, el Motion Graphics
                y nuevas formas de comunicar visualmente una idea.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Recorrido y formación</h3>
            <ol className="relative mt-8 flex flex-col gap-10 border-l border-input pl-8">
              {EDUCATION.map((item) => (
                <li key={item.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[39px] top-1 size-4 rounded-full border-4 border-background bg-primary"
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary-foreground">
                      {item.period}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-xl font-semibold tracking-tight">{item.title}</p>
                  <p className="text-sm font-medium text-accent">{item.place}</p>
                  <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Con qué trabajo</h3>
            <ul className="mt-8 grid grid-cols-3 gap-y-10 sm:grid-cols-6">
              {TOOLS.map((tool) => (
                <ToolRing key={tool.short} {...tool} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
