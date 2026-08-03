-- ─────────────────────────────────────────────────────────
-- Migración: tabla `projects` para el portafolio
-- Ejecuta este script en el SQL Editor de tu proyecto Supabase
-- ─────────────────────────────────────────────────────────

create table if not exists public.projects (
  id text primary key,
  name text not null,
  tag_es text not null,
  tag_en text,
  description_es text not null,
  description_en text,
  stack jsonb not null default '[]'::jsonb,
  url text default '#',
  status_es text not null default 'Activo',
  status_en text default 'Active',
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Habilita RLS: nadie puede escribir desde el cliente,
-- solo el dashboard/service role puede insertar o editar proyectos.
alter table public.projects enable row level security;

-- Lectura pública: el portafolio es un sitio público, cualquiera
-- puede leer la lista de proyectos.
create policy "Proyectos son visibles públicamente"
  on public.projects
  for select
  to anon, authenticated
  using (true);

-- (No se crean políticas de insert/update/delete a propósito:
-- solo tú, desde el dashboard de Supabase o con la service_role key,
-- puedes modificar los proyectos.)

-- ─────────────────────────────────────────────────────────
-- Datos semilla: tus proyectos reales
-- ─────────────────────────────────────────────────────────

insert into public.projects
  (id, name, tag_es, tag_en, description_es, description_en, stack, url, status_es, status_en, display_order)
values
  (
    'driverboos',
    'DriverBoos',
    'PWA · Gestión operativa',
    'PWA · Operations management',
    'Aplicación web progresiva para gestión de conductores de reparto, orientada a operaciones Boosmap/Jumbo en Chile. Backend con Supabase, seguridad reforzada con RLS y expiración de suscripciones automatizada.',
    'Progressive web app for delivery driver management, built for Boosmap/Jumbo operations in Chile. Supabase backend, RLS-hardened security and automated subscription expiry.',
    '["React", "Vite", "Tailwind CSS", "Supabase"]',
    'https://driverboos.vercel.app',
    'En producción',
    'In production',
    1
  ),
  (
    'servi-moto',
    'Servi-Moto',
    'Gestión de taller',
    'Workshop management',
    'Sistema de gestión para taller de motocicletas: generación de presupuestos, control de repuestos y flujo de trabajo del taller.',
    'Management system for a motorcycle workshop: quote generation, parts tracking and workshop workflow.',
    '["JavaScript", "PWA"]',
    '#',
    'Activo',
    'Active',
    2
  ),
  (
    'portfolio-anterior',
    'Portafolio Profesional',
    'Sitio personal · i18n',
    'Personal site · i18n',
    'Portafolio profesional con soporte multi-idioma (ES/EN), modo oscuro, animaciones con Framer Motion y formulario de contacto vía EmailJS.',
    'Professional portfolio with multi-language support (ES/EN), dark mode, Framer Motion animations and an EmailJS contact form.',
    '["React 19", "Vite", "Tailwind CSS", "Framer Motion"]',
    '#',
    'En producción',
    'In production',
    3
  ),
  (
    'casa-villarrica',
    'Casa Villarrica',
    'Sitio de arriendo turístico',
    'Vacation rental site',
    'Rediseño de sitio para propiedad de arriendo vacacional junto al Lago Villarrica, con paleta inspirada en el sur de Chile y hero cinematográfico.',
    'Redesign of a vacation rental site by Lake Villarrica, with a palette inspired by southern Chile and a cinematic hero section.',
    '["HTML", "CSS", "JavaScript"]',
    'https://casavillarrica.vercel.app',
    'En producción',
    'In production',
    4
  )
on conflict (id) do update set
  name = excluded.name,
  tag_es = excluded.tag_es,
  tag_en = excluded.tag_en,
  description_es = excluded.description_es,
  description_en = excluded.description_en,
  stack = excluded.stack,
  url = excluded.url,
  status_es = excluded.status_es,
  status_en = excluded.status_en,
  display_order = excluded.display_order;
