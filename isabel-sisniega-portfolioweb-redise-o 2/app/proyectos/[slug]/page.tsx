import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS, getProject } from '@/lib/site'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { MotionVideo } from '@/components/site/motion-video'
import { ButtonLink, Eyebrow } from '@/components/site/primitives'
import { ScrollToTop } from '../scroll-to-top'
import { VallisaGallery } from '../vallisa-gallery'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: project.name, description: project.tagline, openGraph: { images: [project.cover] } }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  const steps = [
    { label: 'Necesidad', text: project.necesidad },
    { label: 'Proceso', text: project.proceso },
    { label: 'Solución', text: project.solucion },
    { label: 'Resultado', text: project.resultado },
  ]

  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main id="contenido">
        <article>
          <header className="mx-auto max-w-7xl px-5 pb-14 pt-12 md:px-10 md:pt-20">
            <nav aria-label="Ruta" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Link href="/#portfolio" className="hover:text-accent">
                Portfolio
              </Link>{' '}
              / <span className="text-accent">{project.categories[0]}</span>
            </nav>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">{project.name}</h1>
            <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-muted-foreground">{project.tagline}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Categorías">
              {project.categories.map((c) => (
                <li key={c} className="rounded-full bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  {c}
                </li>
              ))}
            </ul>
          </header>

          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-card">
              <Image src={project.cover || '/placeholder.svg'} alt={project.coverAlt} fill priority sizes="100vw" className="object-contain p-6 md:p-14" />
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-b border-border pb-10 md:grid-cols-4">
              {project.meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.label}</dt>
                  <dd className="mt-1 font-semibold">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {project.intro && (
            <div className="mx-auto max-w-7xl px-5 pt-16 md:px-10">
              {project.intro.map((p) => (
                <p key={p} className="max-w-3xl text-pretty text-xl leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          )}

          <section aria-label="Caso de estudio" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <ol className="grid gap-6 md:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s.label} className="flex flex-col gap-4 rounded-[1.75rem] bg-card p-8">
                  <Eyebrow
                    number={String(i + 1).padStart(2, '0')}
                    label={s.label}
                    className={project.slug === 'cafe-umo' && s.label === 'moodboard' ? 'normal-case' : undefined}
                  />
                  <p className="text-pretty text-lg leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {project.video && (
            <section aria-label="Animación" className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
              <div className="grid items-center gap-10 rounded-[2rem] bg-secondary p-6 text-secondary-foreground md:grid-cols-2 md:p-12">
                <MotionVideo src={project.video.src} poster={project.video.poster} label={project.video.caption} className="aspect-square w-full rounded-[1.5rem]" />
                <div className="flex flex-col gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Animación</p>
                  <p className="text-balance text-3xl font-semibold tracking-tight">{project.video.caption}</p>
                </div>
              </div>
            </section>
          )}

          <section aria-label="Galería" className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
            {project.slug === 'vallisa' ? (
              <VallisaGallery
                groups={[
                  [
                    '/images/presentacion-bienvenidos.webp',
                    '/images/presentacion-moodboard.webp',
                    '/images/presentacion-que-vas-a-encontrar.webp',
                    '/images/presentacion-origen.webp',
                  ],
                  [
                    '/images/thor-idea-inicial.webp',
                    '/images/thor-colmillos.webp',
                    '/images/thor-dos-llaveros.webp',
                    '/images/thor-encargos-post.webp',
                  ],
                  [
                    '/images/flores-pendientes.webp',
                    '/images/flores-colgante-margaritas.webp',
                    '/images/flores-llavero-abejas.webp',
                    '/images/flores-collar.webp',
                  ],
                ].map((sources) => sources.map((source) => project.gallery.find((item) => item.src === source)).filter((item): item is NonNullable<typeof item> => Boolean(item)))}
              />
            ) : (
              <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-6">
                {project.gallery.map((g) => (
                  <li key={g.src} className="break-inside-avoid">
                    <figure>
                      <div className="overflow-hidden rounded-2xl bg-card">
                        <Image src={g.src || '/placeholder.svg'} alt={g.alt} width={1200} height={900} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-auto w-full" />
                      </div>
                      {g.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{g.caption}</figcaption>}
                    </figure>
                  </li>
                ))}
              </ul>
            )}
            {project.link && (
              <div className="mt-6">
                <ButtonLink href={project.link.href} variant="outline" external>
                  {project.link.label}
                </ButtonLink>
              </div>
            )}
          </section>
        </article>

        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Siguiente paso</p>
              <p className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">¿Quieres algo así para tu marca?</p>
            </div>
            <ButtonLink href="/#contacto">Agendar llamada de valoración · 15 min</ButtonLink>
          </div>
        </section>

        <nav aria-label="Siguiente proyecto" className="mx-auto max-w-7xl px-5 py-16 md:px-10">
          <Link href={`/proyectos/${next.slug}`} className="group flex items-center justify-between gap-6 border-b border-border pb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Siguiente proyecto</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-6xl">{next.name}</p>
            </div>
            <span aria-hidden="true" className="text-4xl transition-transform group-hover:translate-x-2">
              {'→'}
            </span>
          </Link>
          <Link href="/#portfolio" className="mt-6 inline-block text-sm font-medium underline-offset-4 hover:underline">
            Todos los proyectos
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  )
}
