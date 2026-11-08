import { SITE } from '@/lib/site'
import { ButtonLink, buttonClass } from './primitives'
import { Reveal } from './reveal'

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-col gap-10">
        <h2 id="contacto-title" className="max-w-4xl text-balance text-5xl font-semibold leading-[1] tracking-tight md:text-8xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${SITE.email}`} className={buttonClass('primary')}>
            {SITE.email}
          </a>
          <ButtonLink href={SITE.calendlyUrl} external variant="outline">
            Agendar una llamada
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
