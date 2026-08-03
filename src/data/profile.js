// ─────────────────────────────────────────────────────────
// EDITA ESTE ARCHIVO PARA ACTUALIZAR TODO TU PORTAFOLIO
// Los campos con { es, en } son bilingües: escribe ambas versiones.
// Los proyectos de aquí son el FALLBACK que se muestra si Supabase
// no está configurado o no responde. Ver supabase/migration.sql
// para cargar los proyectos reales en tu base de datos.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Andrés Romero',
  handle: 'AndesRo',
  role: {
    es: 'Desarrollador Web & Automatización de Procesos',
    en: 'Web Developer & Process Automation'
  },
  tagline: {
    es: 'Construyo productos web, PWAs y flujos automatizados para la gestión de operaciones.',
    en: 'I build web products, PWAs and end-to-end automated workflows.'
  },
  bio: {
    es: 'Desarrollador y programador computacional enfocado en aplicaciones web modernas, soporte TI y automatización de procesos (Power Automate, SharePoint). Despliego en Vercel y uso Supabase como backend. Basado en Santiago, Chile.',
    en: 'Developer and computer programmer focused on modern web applications, IT support and process automation (Power Automate, SharePoint). I deploy on Vercel and use Supabase as backend. Based in Santiago, Chile.'
  },
  location: {
    city: 'Santiago',
    country: 'Chile',
    lat: -33.4489,
    lng: -70.6693,
    timezone: 'America/Santiago'
  },
  availability: {
    es: 'Disponible para proyectos freelance',
    en: 'Available for freelance projects'
  },
  photo: '/perfil.png', // Reemplaza este archivo en /public con tu foto real (recomendado: profile.jpg, 500x500px)
  cvFile: {
    es: '/cv.pdf', // Reemplaza con tu CV real en español
    en: '/cv-en.pdf' // Reemplaza con tu CV real en inglés (o duplica el mismo archivo)
  },
  email: 'andespart.ar@gmail.com', // TODO: reemplaza con tu email real
  phone: '+56 9 9741 6485', // TODO: reemplaza con tu número real
  socials: [
    { label: 'GitHub', url: 'https://github.com/AndesRo', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/romeromllq', icon: 'linkedin' }, // TODO
    { label: 'WhatsApp', url: 'https://wa.me/56997416485', icon: 'whatsapp' }, // TODO
    { label: 'Email', url: 'mailto:andespart.ar@gmail.com', icon: 'mail' }
  ],
  signature: 'Hecho con ❤️ en Santiago, Chile'
}

export const skills = [
  'React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Supabase',
  'PostgreSQL', 'Power Automate', 'SharePoint', 'Vercel', 'PWA'
]

// Fallback local — se usa solo si Supabase no está configurado o falla.
export const projects = [
  {
    id: 'driverboos',
    name: 'DriverBoos',
    tag: { es: 'PWA · Gestión operativa', en: 'PWA · Operations management' },
    description: {
      es: 'Aplicación web progresiva para gestión de conductores de reparto, orientada a operaciones Boosmap/Jumbo en Chile. Backend con Supabase, seguridad reforzada con RLS y expiración de suscripciones automatizada.',
      en: 'Progressive web app for delivery driver management, built for Boosmap/Jumbo operations in Chile. Supabase backend, RLS-hardened security and automated subscription expiry.'
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    url: 'https://driverboos.vercel.app',
    status: { es: 'En producción', en: 'In production' }
  },
  {
    id: 'servi-moto',
    name: 'Servi-Moto',
    tag: { es: 'Gestión de taller', en: 'Workshop management' },
    description: {
      es: 'Sistema de gestión para taller de motocicletas: generación de presupuestos, control de repuestos y flujo de trabajo del taller.',
      en: 'Management system for a motorcycle workshop: quote generation, parts tracking and workshop workflow.'
    },
    stack: ['JavaScript', 'PWA'],
    url: '#', // TODO: agrega la URL real del proyecto
    status: { es: 'Activo', en: 'Active' }
  },
  {
    id: 'portfolio-anterior',
    name: 'Portafolio Profesional',
    tag: { es: 'Sitio personal · i18n', en: 'Personal site · i18n' },
    description: {
      es: 'Portafolio profesional con soporte multi-idioma (ES/EN), modo oscuro, animaciones con Framer Motion y formulario de contacto vía EmailJS.',
      en: 'Professional portfolio with multi-language support (ES/EN), dark mode, Framer Motion animations and an EmailJS contact form.'
    },
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    url: '#', // TODO: agrega la URL real
    status: { es: 'En producción', en: 'In production' }
  },
  {
    id: 'casa-villarrica',
    name: 'Casa Villarrica',
    tag: { es: 'Sitio de arriendo turístico', en: 'Vacation rental site' },
    description: {
      es: 'Rediseño de sitio para propiedad de arriendo vacacional junto al Lago Villarrica, con paleta inspirada en el sur de Chile y hero cinematográfico.',
      en: 'Redesign of a vacation rental site by Lake Villarrica, with a palette inspired by southern Chile and a cinematic hero section.'
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://casavillarrica.vercel.app',
    status: { es: 'En producción', en: 'In production' }
  }
]
