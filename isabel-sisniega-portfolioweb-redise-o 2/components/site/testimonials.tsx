import { ButtonLink } from './primitives'
import { Reveal } from './reveal'

const SENJA_FORM_URL = 'https://senja.io/p/v0/r/NU5aSK'

export function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 id="testimonios-title" className="text-5xl font-semibold leading-none tracking-tight md:text-7xl">
              Testimonios
            </h2>
            <ButtonLink href={SENJA_FORM_URL} external variant="outline">
              Deja tu opinión
            </ButtonLink>
          </div>
        </Reveal>

        <iframe
          src="https://widget.senja.io/widget/e09f8b3d-67ce-4458-9b3d-de41446f39e7"
          title="Testimonios"
          style={{ width: '100%', height: '600px', border: 0, marginTop: '40px' }}
        />

        <div data-senja-widget className="mt-14 empty:hidden" aria-live="polite" />
      </div>
    </section>
  )
}
