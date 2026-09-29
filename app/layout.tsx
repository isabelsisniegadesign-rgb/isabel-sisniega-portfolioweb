import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Isabel Sisniega — Identidad visual, contenido para redes y Motion Graphics',
    template: '%s — Isabel Sisniega',
  },
  description:
    'Diseñadora de Cantabria especializada en identidad visual, manuales de marca, gestión de contenido para redes sociales y Motion Graphics. Cuéntame tu proyecto y agenda una llamada de valoración de 15 minutos.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Isabel Sisniega — Diseño gráfico, identidad visual y motion',
    description: 'Identidad visual, contenido para redes y Motion Graphics para marcas que quieren reconocerse.',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/isabel-retrato.webp'],
  },
}

export const viewport: Viewport = {
  themeColor: '#f4efe6',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${manrope.variable} ${jetbrains.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
