import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

// Si no configuraste tus credenciales en .env, supabase queda en null
// y el portafolio sigue funcionando con los datos locales de src/data/profile.js
export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null
