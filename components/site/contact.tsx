import { Check } from 'lucide-react'
import { SITE } from '@/lib/site'
import { ButtonLink, Eyebrow } from './primitives'
import { Reveal } from './reveal'

const CALL_POINTS = [
  'Conocer tu proyecto',
  'Entender tus necesidades',
  'Resolver dudas iniciales',
  'Valorar qué servicio encaja mejor',
  'Conocer los siguientes pasos',
]

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-col items-center gap-10 rounded-[2rem] bg-card px-6 py-16 text-center md:px-16 md:py-24">
        <Eyebrow number="05" label="Contacto" />
        <div className="flex max-w-3xl flex-col gap-6">
          <h2 id="contacto-title" className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Da igual si está definido al detalle o si todavía es una idea suelta. Elige el día y la hora que mejor te
            vengan y hablamos de tu proyecto en una breve llamada de valoración.
          </p>
        </div>

        <ul className="flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3">
          {CALL_POINTS.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm">
              <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>

        <ButtonLink href={SITE.calendlyUrl} external className="min-h-16 px-10 text-sm">
          Agendar llamada de valoración
        </ButtonLink>

        <p className="text-sm text-muted-foreground">
          ¿Prefieres escribirme?{' '}
          <a href={`mailto:${SITE.email}`} className="font-medium text-foreground underline underline-offset-4">
            {SITE.email}
          </a>
        </p>
      </Reveal>
    </section>
  )
}
