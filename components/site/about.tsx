import Image from 'next/image'
import { EDUCATION, SITE, TOOLS } from '@/lib/site'
import { ButtonLink } from './primitives'

export function About() {
  return (
    <section id="formacion" aria-labelledby="formacion-title" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] bg-card lg:sticky lg:top-24">
            <Image
              src="/images/isabel-retrato.webp"
              alt="Retrato de Isabel Sisniega"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:col-span-7">
          <div>
            <h2 id="formacion-title" className="text-5xl font-semibold leading-none tracking-tight md:text-7xl">
              Sobre mí
            </h2>
            <div className="mt-8 flex max-w-xl flex-col gap-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Soy <strong className="font-semibold text-foreground">Isabel Sisniega</strong>, de Cantabria, y estudio el
                Grado en Diseño Digital en la UNIR.
              </p>
              <p>
               Todo empezó con la ilustración y con un poemario que escribí y maqueté yo misma. Desde entonces no he parado de aprender, y ahora estoy formándome con especial interés en la identidad visual, el diseño editorial y el motion graphics.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={SITE.linkedin} external variant="outline">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={SITE.behance} external variant="outline">
                Behance
              </ButtonLink>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">Formación</h3>
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {EDUCATION.map((item) => (
                <li key={item.title} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4">
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-accent">{item.place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">Herramientas</h3>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {TOOLS.map((tool) => (
                <li key={tool.short} className="flex items-baseline justify-between border-b border-border py-3">
                  <span className="font-semibold">{tool.name}</span>
                  <span className="text-sm text-muted-foreground">{tool.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
