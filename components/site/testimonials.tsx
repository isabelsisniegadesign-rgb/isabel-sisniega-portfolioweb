import { ButtonLink } from './primitives'
import { Reveal } from './reveal'

const SENJA_FORM_URL = 'https://senja.io/p/v0/r/NU5aSK'

export function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="bg-secondary py-24 text-secondary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-8">
            <h2 id="testimonios-title" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Testimonios
            </h2>
            <div>
              <ButtonLink href={SENJA_FORM_URL} external variant="primary">
                Deja tu opinión
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        {/* Pega aquí el widget oficial de Senja cuando tengas el código. */}
        <div data-senja-widget className="mt-14 empty:hidden" aria-live="polite" />
      </div>
    </section>
  )
}

