import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'es'
  const saved = window.localStorage.getItem('portfolio-lang')
  if (saved === 'es' || saved === 'en') return saved
  const browserLang = window.navigator.language?.slice(0, 2)
  return browserLang === 'en' ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('portfolio-lang', language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => {
    const dict = translations[language]

    // t('projects.title') -> busca la clave anidada en el diccionario activo
    const t = (path) => {
      const result = path.split('.').reduce((acc, key) => acc?.[key], dict)
      return result ?? path
    }

    const toggleLanguage = () => setLanguage((l) => (l === 'es' ? 'en' : 'es'))

    return { language, setLanguage, toggleLanguage, t }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return ctx
}
