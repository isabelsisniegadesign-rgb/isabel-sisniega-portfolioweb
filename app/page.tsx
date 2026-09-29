import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { Portfolio } from '@/components/site/portfolio'
import { About } from '@/components/site/about'
import { Testimonials } from '@/components/site/testimonials'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

