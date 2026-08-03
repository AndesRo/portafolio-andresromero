import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'
import { projects as localProjects } from '../data/profile'

// Normaliza una fila de Supabase (columnas _es/_en) a la forma que usa la UI
function mapSupabaseRow(row, lang) {
  return {
    id: row.id,
    name: row.name,
    tag: lang === 'en' ? row.tag_en ?? row.tag_es : row.tag_es,
    description: lang === 'en' ? row.description_en ?? row.description_es : row.description_es,
    stack: row.stack ?? [],
    url: row.url ?? '#',
    status: lang === 'en' ? row.status_en ?? row.status_es : row.status_es
  }
}

// Normaliza un proyecto local (objeto bilingüe { es, en }) a la misma forma
function mapLocalProject(project, lang) {
  return {
    id: project.id,
    name: project.name,
    tag: project.tag[lang] ?? project.tag.es,
    description: project.description[lang] ?? project.description.es,
    stack: project.stack,
    url: project.url,
    status: project.status[lang] ?? project.status.es
  }
}

/**
 * Carga proyectos desde la tabla `projects` de Supabase, ordenados por
 * display_order. Si Supabase no está configurado (o falla la consulta),
 * cae automáticamente en los proyectos locales de src/data/profile.js
 * para que el portafolio nunca se muestre vacío.
 */
export function useProjects(lang) {
  const [state, setState] = useState({
    projects: localProjects.map((p) => mapLocalProject(p, lang)),
    loading: isSupabaseConfigured,
    error: null,
    source: 'local'
  })

  useEffect(() => {
    let cancelled = false

    async function load() {
      if (!isSupabaseConfigured) {
        setState({
          projects: localProjects.map((p) => mapLocalProject(p, lang)),
          loading: false,
          error: null,
          source: 'local'
        })
        return
      }

      setState((s) => ({ ...s, loading: true }))

      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true })

      if (cancelled) return

      if (error || !data || data.length === 0) {
        setState({
          projects: localProjects.map((p) => mapLocalProject(p, lang)),
          loading: false,
          error: error?.message ?? null,
          source: 'local'
        })
        return
      }

      setState({
        projects: data.map((row) => mapSupabaseRow(row, lang)),
        loading: false,
        error: null,
        source: 'supabase'
      })
    }

    load()
    return () => {
      cancelled = true
    }
  }, [lang])

  return state
}
