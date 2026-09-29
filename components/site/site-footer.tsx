import Link from 'next/link'
import { NAV_LINKS, SITE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-semibold tracking-tight">
            {SITE.name}
            <span className="text-primary">.</span>
          </p>
          <a href={`mailto:${SITE.email}`} className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            {SITE.email}
          </a>
        </div>
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {SITE.instagramHandle} <span aria-hidden="true">{'↗'}</span>
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto max-w-7xl px-5 pb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:px-10">
        © 2026 {SITE.name} · Cantabria, España · Trabajo en remoto
      </p>
    </footer>
  )
}
