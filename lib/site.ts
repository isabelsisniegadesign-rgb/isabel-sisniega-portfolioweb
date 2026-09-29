export const SITE = {
  name: 'Isabel Sisniega',
  email: 'isabel.sisniega.design@gmail.com',
  instagram: 'https://instagram.com/soyvallisa',
  instagramHandle: '@soyvallisa',
  calendlyUrl: 'https://calendly.com/isabel-sisniega-design/30min',
}

export const NAV_LINKS = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#formacion', label: 'Sobre mí' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/#contacto', label: 'Contacto' },
]

export type Category = 'Branding' | 'Redes sociales' | 'Motion Graphics' | 'Diseño editorial'

export const CATEGORIES: Category[] = ['Branding', 'Redes sociales', 'Motion Graphics', 'Diseño editorial']

export type GalleryItem = { src: string; alt: string; caption?: string }

export type Project = {
  slug: string
  name: string
  year: string
  tagline: string
  categories: Category[]
  cover: string
  coverAlt: string
  meta: { label: string; value: string }[]
  intro?: string[]
  necesidad: string
  proceso: string
  solucion: string
  resultado: string
  video?: { src: string; poster: string; caption: string }
  gallery: GalleryItem[]
  link?: { href: string; label: string }
}

export const PROJECTS: Project[] = [
  {
    slug: 'vallisa',
    name: 'Vallisa',
    year: '2026',
    tagline:
      'Identidad de marca personal con una estética artesanal-digital: el proyecto donde pruebo sin encargo y sin límites.',
    categories: ['Branding', 'Motion Graphics', 'Redes sociales'],
    cover: '/images/brand-board.webp',
    coverAlt: 'Brandboard de Vallisa con logotipo, paleta cromática y aplicaciones',
    meta: [
      { label: 'Disciplina', value: 'Identidad de marca' },
      { label: 'Año', value: '2026' },
      { label: 'Mi papel', value: 'Creación y dirección de la marca' },
      { label: 'Herramientas', value: 'Illustrator, Photoshop, After Effects' },
    ],
    intro: [
      'Vallisa es la marca que he creado para reunir y dar forma a mis proyectos creativos. No quería limitarla a una sola disciplina, sino que pudiera abarcar todo lo que me gusta crear: desde piezas artesanales y trabajos con resina hasta identidad visual, diseño gráfico, contenido digital, vídeo y animación.',
    ],
    necesidad:
      'Reunir y dar forma a mis proyectos creativos bajo una misma marca, sin limitarla a una sola disciplina: piezas artesanales y resina, identidad visual, diseño gráfico, contenido digital, vídeo y animación.',
    proceso:
      'Creación y dirección de la marca de principio a fin, trabajando en Illustrator, Photoshop y After Effects: desde el brandboard hasta la animación del isotipo y su aplicación en redes sociales.',
    solucion:
      'Un brandboard con logotipo, isotipo y paleta cromática; la animación del isotipo en After Effects; contenido para Instagram y una presentación de la marca.',
    resultado:
      'Es, en cierto modo, mi espacio creativo: una marca que me permite experimentar con distintas formas de hacer, y en la que los proyectos van cambiando conmigo.',
    video: {
      src: '/videos/vallisa-isotipo-animado.mp4',
      poster: '/images/poster-isotipo-animado.jpg',
      caption: 'Animación del isotipo de Vallisa · Motion design en Adobe After Effects',
    },
    gallery: [
      { src: '/images/brand-board.webp', alt: 'Brandboard de Vallisa', caption: 'Brandboard' },
      { src: '/images/presentacion-bienvenidos.webp', alt: 'Presentación de la marca Vallisa: bienvenidos', caption: 'Presentación de la marca' },
      { src: '/images/presentacion-origen.webp', alt: 'Presentación de la marca Vallisa: origen', caption: 'Presentación de la marca' },
      { src: '/images/presentacion-moodboard.webp', alt: 'Moodboard de la presentación de Vallisa', caption: 'Presentación de la marca' },
      { src: '/images/presentacion-que-vas-a-encontrar.webp', alt: 'Presentación de Vallisa: qué vas a encontrar', caption: 'Presentación de la marca' },
      { src: '/images/thor-nombre-post.webp', alt: 'Publicación de Instagram de Vallisa', caption: 'Contenido de redes sociales (Instagram)' },
      { src: '/images/thor-idea-inicial.webp', alt: 'Publicación de Instagram de Vallisa sobre la idea inicial', caption: 'Contenido de redes sociales (Instagram)' },
      { src: '/images/thor-encargos-post.webp', alt: 'Publicación de Instagram de Vallisa sobre encargos', caption: 'Contenido de redes sociales (Instagram)' },
      { src: '/images/thor-dos-llaveros.webp', alt: 'Dos llaveros de resina de Vallisa', caption: 'Recuerdos encapsulados con resina' },
      { src: '/images/thor-colmillos.webp', alt: 'Pieza de resina de Vallisa', caption: 'Recuerdos encapsulados con resina' },
      { src: '/images/flores-collar.webp', alt: 'Collar de resina con flores de Vallisa', caption: 'Piezas de resina' },
      { src: '/images/flores-pendientes.webp', alt: 'Pendientes de resina con flores de Vallisa', caption: 'Piezas de resina' },
      { src: '/images/flores-colgante-margaritas.webp', alt: 'Colgante de resina con margaritas de Vallisa', caption: 'Piezas de resina' },
      { src: '/images/flores-llavero-abejas.webp', alt: 'Llavero de resina con abejas de Vallisa', caption: 'Piezas de resina' },
    ],
    link: { href: 'https://instagram.com/soyvallisa', label: 'Ver en Instagram' },
  },
  {
    slug: 'kanto-tcg',
    name: 'KANTO TCG',
    year: '2026',
    tagline:
      'Identidad e ilustración para un proyecto de cartas coleccionables: un sistema gráfico que sostiene un universo entero.',
    categories: ['Branding'],
    cover: '/images/sistema-identidad.webp',
    coverAlt: 'Sistema de identidad de KANTO TCG con logotipo, isotipo y patrón de formas circulares',
    meta: [
      { label: 'Disciplina', value: 'Identidad de marca' },
      { label: 'Año', value: '2026' },
      { label: 'Mi papel', value: 'Identidad visual e ilustración' },
      { label: 'Herramientas', value: 'Illustrator, Photoshop' },
    ],
    necesidad:
      'Desarrollar la identidad visual de Kanto TCG, una marca vinculada al universo de los juegos de cartas coleccionables. La propuesta debía trasladar la identidad a diferentes soportes y aplicaciones, tanto físicos como digitales.',
    proceso:
      'El desarrollo parte de la construcción de una identidad visual reconocible, trabajando el logotipo, el isotipo y un sistema gráfico basado en formas circulares y una paleta cromática definida.',
    solucion:
      'A partir de estos elementos se desarrollaron diferentes aplicaciones de la marca: packaging, papelería, pegatinas y aplicaciones digitales.',
    resultado:
      'Una identidad visual aplicada a diferentes soportes, desde packaging y piezas gráficas hasta aplicaciones digitales, manteniendo una estética coherente y reconocible en todo el sistema.',
    gallery: [
      { src: '/images/sistema-identidad.webp', alt: 'Sistema de identidad de KANTO TCG', caption: 'Sistema de identidad' },
      { src: '/images/packaging-caja-patron.webp', alt: 'Caja de packaging con patrón de KANTO TCG', caption: 'Packaging' },
      { src: '/images/packaging-caja-kraft.webp', alt: 'Caja kraft de KANTO TCG', caption: 'Packaging' },
      { src: '/images/packaging-joyeria.webp', alt: 'Packaging de KANTO TCG', caption: 'Packaging' },
      { src: '/images/tarjetas-papeleria.webp', alt: 'Tarjetas y papelería de KANTO TCG', caption: 'Papelería' },
      { src: '/images/pegatinas.webp', alt: 'Pegatinas de KANTO TCG', caption: 'Pegatinas' },
      { src: '/images/aplicacion-instagram.webp', alt: 'Aplicación de KANTO TCG en Instagram', caption: 'Aplicaciones digitales' },
      { src: '/images/aplicacion-portatil.webp', alt: 'Aplicación de KANTO TCG en un portátil', caption: 'Aplicaciones digitales' },
    ],
  },
  {
    slug: 'agnexo',
    name: 'AGnexo',
    year: '2025',
    tagline:
      'Identidad corporativa para una marca de servicios: un sistema sobrio, flexible y fácil de aplicar por el propio cliente.',
    categories: ['Branding'],
    cover: '/images/papeleria-aplicaciones.webp',
    coverAlt: 'Papelería y aplicaciones digitales de la identidad de AGnexo',
    meta: [
      { label: 'Cliente', value: 'AGnexo' },
      { label: 'Disciplina', value: 'Identidad de marca' },
      { label: 'Año', value: '2025' },
      { label: 'Mi papel', value: 'Investigación, conceptualización, bocetos, mockups y patrón gráfico' },
    ],
    necesidad:
      'Proyecto académico desarrollado en equipo para una marca del sector de las telecomunicaciones. El objetivo era desarrollar una propuesta de identidad visual y trasladarla a diferentes aplicaciones de la marca.',
    proceso:
      'El proyecto comenzó con una fase de investigación y conceptualización de la propuesta. Mi participación se centró en la investigación, la conceptualización, los bocetos iniciales, el desarrollo de mockups y la creación del patrón gráfico.',
    solucion:
      'Construcción del logotipo y un patrón derivado del símbolo, con sus proporciones y área de respeto definidas, aplicados a papelería y soportes digitales.',
    resultado:
      'Una propuesta de identidad visual aplicada a diferentes soportes, desarrollada de forma conjunta con el resto del equipo.',
    gallery: [
      { src: '/images/papeleria-aplicaciones.webp', alt: 'Papelería y aplicaciones de AGnexo', caption: 'Aplicaciones' },
      { src: '/images/construccion-logotipo.webp', alt: 'Construcción del logotipo de AGnexo', caption: 'Construcción del logotipo y patrón derivado del símbolo.' },
      { src: '/images/reticula-distancias.webp', alt: 'Retícula y distancias del logotipo de AGnexo', caption: 'Proporciones y área de respeto del logotipo.' },
    ],
  },
  {
    slug: 'cafe-umo',
    name: 'Café UMO',
    year: '2025',
    tagline: 'Marca e imagen para una cafetería de especialidad, desde el logotipo hasta el packaging.',
    categories: ['Branding', 'Redes sociales'],
    cover: '/images/packaging-aplicaciones.webp',
    coverAlt: 'Packaging y aplicaciones de la marca Café UMO',
    meta: [
      { label: 'Cliente', value: 'Café UMO' },
      { label: 'Disciplina', value: 'Identidad de marca' },
      { label: 'Año', value: '2025' },
      { label: 'Mi papel', value: 'Aplicación del logotipo, tipografía y paleta cromática' },
    ],
    necesidad:
      'Proyecto académico desarrollado en equipo para una marca de café. El objetivo era construir una propuesta visual coherente para la marca y trasladarla a diferentes aplicaciones.',
    proceso:
      'El desarrollo se realizó de forma conjunta, trabajando sobre la identidad visual y sus diferentes aplicaciones. Mi aportación se centró en la aplicación del logotipo, la selección de la tipografía y la definición de la paleta cromática.',
    solucion:
      'Un moodboard, Bodoni para el matiz clásico e Instrument Sans para la voz actual, packaging y plantillas de contenido para redes.',
    resultado:
      'Una propuesta visual aplicada a diferentes soportes, manteniendo una identidad coherente entre sus distintas aplicaciones.',
    gallery: [
      { src: '/images/packaging-aplicaciones.webp', alt: 'Packaging y aplicaciones de Café UMO', caption: 'Packaging y aplicaciones' },
      { src: '/images/moodboard.webp', alt: 'Moodboard de Café UMO', caption: 'Moodboard' },
      { src: '/images/tipografia-color.webp', alt: 'Tipografía y color de Café UMO', caption: 'Bodoni para el matiz clásico, Instrument Sans para la voz actual.' },
      { src: '/images/redes-sociales.webp', alt: 'Plantillas de redes sociales de Café UMO', caption: 'Plantillas de contenido para redes.' },
    ],
  },
  {
    slug: 'poemario',
    name: 'Poemario',
    year: '2022',
    tagline:
      'Escritura, diseño de portada e ilustración de un poemario que una editorial me propuso tras conocer mi escritura.',
    categories: ['Diseño editorial'],
    cover: '/images/cubierta-completa.webp',
    coverAlt: 'Cubierta completa del poemario con ilustración de peces koi',
    meta: [
      { label: 'Disciplina', value: 'Diseño editorial' },
      { label: 'Año', value: '2022' },
      { label: 'Mi papel', value: 'Escritura, diseño de portada e ilustración' },
    ],
    necesidad:
      'La editorial se puso en contacto conmigo al gustarle mi escritura y me propuso desarrollar este proyecto, que posteriormente escribí e ilustré yo misma.',
    proceso:
      'El proyecto comenzó con la escritura de los poemas y continuó con el desarrollo de su propuesta visual.',
    solucion:
      'Me encargué del diseño de la portada y de las ilustraciones, buscando crear una relación coherente entre el contenido escrito y la parte visual.',
    resultado:
      'Un poemario creado desde cero, en el que combiné escritura, diseño e ilustración para desarrollar una propuesta editorial completa.',
    gallery: [
      { src: '/images/cubierta-completa.webp', alt: 'Cubierta completa del poemario', caption: 'Cubierta' },
      { src: '/images/pagina-cofre-de-emociones.webp', alt: 'Página ilustrada Cofre de emociones', caption: 'Cofre de emociones' },
      { src: '/images/pagina-cae-la-noche.webp', alt: 'Página ilustrada Cae la noche', caption: 'Cae la noche' },
      { src: '/images/pagina-invierno.webp', alt: 'Página ilustrada Invierno', caption: 'Invierno' },
      { src: '/images/pagina-shinrin-yoku.webp', alt: 'Página ilustrada Shinrin-yoku', caption: 'Shinrin-yoku' },
    ],
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

export const SERVICE_OPTIONS = [
  'Gestión de contenido para redes sociales',
  'Manual de marca e identidad visual',
  'Manual de marca + animación',
  'Aún no lo tengo claro',
] as const

export const BUDGET_OPTIONS = [
  'Menos de 200 €',
  'Entre 200 € y 500 €',
  'Más de 500 €',
  'Prefiero comentarlo en la llamada',
] as const

export type Service = {
  number: string
  name: string
  description: string
  benefit: string
  includes: string[]
  note?: string
  project?: { slug: string; name: string; image: string; alt: string }
}

export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Gestión de contenido para redes sociales',
    description:
      'Me encargo del contenido visual de tus redes de principio a fin: desde la idea y el guion hasta el diseño, la edición y la publicación, coordinándolo todo contigo.',
    benefit: 'Una comunicación visual coherente, cuidada y activa en las redes de tu marca, sin que tengas que ocuparte de cada pieza.',
    includes: [
      'Propuesta de ideas de contenido',
      'Elaboración de guiones',
      'Coordinación y revisión de guiones contigo',
      'Diseño de carruseles',
      'Diseño de carruseles animados',
      'Edición de vídeos para redes sociales',
      'Adaptación de contenidos',
      'Programación de publicaciones',
    ],
    note: 'Actualmente desarrollo este servicio con un cliente real.',
    project: {
      slug: 'cafe-umo',
      name: 'Café UMO',
      image: '/images/redes-sociales.webp',
      alt: 'Plantillas de redes sociales de Café UMO',
    },
  },
  {
    number: '02',
    name: 'Manual de marca e identidad visual',
    description:
      'Construyo la identidad de tu marca y la recojo en un manual claro, para que sepas exactamente cómo aplicarla en cada soporte.',
    benefit: 'Una imagen reconocible y consistente en todos los puntos de contacto de tu marca, fácil de aplicar por ti o por tu equipo.',
    note: 'Tengo experiencia previa trabajando con clientes en manuales de marca e identidad visual.',
    includes: [
      'Logotipo',
      'Isotipo',
      'Paleta cromática',
      'Tipografías',
      'Recursos gráficos',
      'Aplicaciones',
      'Manual de uso de la identidad',
    ],
    project: {
      slug: 'kanto-tcg',
      name: 'KANTO TCG',
      image: '/images/sistema-identidad.webp',
      alt: 'Sistema de identidad de KANTO TCG',
    },
  },
  {
    number: '03',
    name: 'Identidad visual + animación',
    description:
      'Llevamos tu identidad visual también al movimiento: la misma marca, preparada para vivir en redes, vídeos, presentaciones e intros.',
    benefit: 'Una marca sólida en lo estático y viva en lo digital, con recursos de movimiento listos para usar.',
    note: 'Servicio activo, listo para aportar movimiento y dinamismo a nuevas marcas.',
    includes: [
      'Desarrollo de identidad visual',
      'Manual de marca',
      'Animación de logotipo',
      'Animación de isotipo',
      'Recursos de movimiento para aplicaciones digitales',
    ],
    project: {
      slug: 'vallisa',
      name: 'Vallisa',
      image: '/images/poster-isotipo-animado.jpg',
      alt: 'Isotipo animado de Vallisa',
    },
  },
]

export const EDUCATION = [
  {
    period: '2022',
    status: 'El origen',
    title: 'Ilustración y poemario propio',
    place: 'Proyecto personal',
    description:
      'Mi interés por el diseño comenzó a través de la ilustración y de la creación de mi propio poemario, que me impulsó a estudiar Diseño Digital.',
  },
  {
    period: 'En curso',
    status: 'Formación universitaria',
    title: 'Grado en Diseño Digital',
    place: 'Universidad Internacional de La Rioja (UNIR)',
    description:
      'Fundamentos de diseño, tipografía, interacción y proyectos aplicados.',
  },
  {
    period: 'En curso',
    status: 'Formación especializada',
    title: 'Creator Club',
    place: 'Diego NXT',
    description: 'Programa especializado en vídeo y contenido digital: narrativa, producción y edición para plataformas.',
  },
  {
    period: 'En curso',
    status: 'Formación especializada',
    title: 'Content Agency Accelerator',
    place: 'Diego NXT',
    description:
      'Formación avanzada en edición de vídeo y creación de contenido digital, orientada a técnicas y recursos de edición más avanzados.',
  },
]

export const TOOLS = [
  { short: 'Ai', name: 'Illustrator', level: 'Avanzado', value: 100 },
  { short: 'Ps', name: 'Photoshop', level: 'Avanzado', value: 100 },
  { short: 'Id', name: 'InDesign', level: 'Avanzado', value: 100 },
  { short: 'Ae', name: 'After Effects', level: 'Intermedio', value: 50 },
  { short: 'Cc', name: 'CapCut', level: 'Intermedio', value: 50 },
  { short: 'Pr', name: 'Premiere Pro', level: 'Básico', value: 25 },
]

export type Testimonial = {
  name: string
  service: string
  quote: string
  avatar?: string
}

// Añade aquí los testimonios reales a medida que los recibas.
export const TESTIMONIALS: Testimonial[] = []
