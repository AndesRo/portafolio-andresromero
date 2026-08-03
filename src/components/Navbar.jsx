import { useEffect, useState } from 'react'
import { Menu, X, Download, Languages } from 'lucide-react'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const links = [
    { href: '#proyectos', label: t('nav.projects') },
    { href: '#sobre-mi', label: t('nav.about') },
    { href: '#ubicacion', label: t('nav.location') },
    { href: '#contacto', label: t('nav.contact') }
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-void/80 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink">
          <span className="text-cyan">&lt;</span>
          {profile.handle}
          <span className="text-cyan">/&gt;</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-sm border border-line px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-cyan/50 hover:text-cyan"
            aria-label="Cambiar idioma / Switch language"
          >
            <Languages size={13} />
            {language.toUpperCase()}
          </button>

          <a
            href={profile.cvFile[language]}
            download
            className="flex items-center gap-2 rounded-sm border border-cyan/40 bg-cyan/5 px-4 py-2 font-mono text-xs uppercase tracking-widest text-cyan transition-all hover:bg-cyan/10 hover:shadow-glow"
          >
            <Download size={14} />
            {t('nav.cv')}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-sm border border-line px-2.5 py-1.5 font-mono text-xs uppercase tracking-widest text-muted"
            aria-label="Cambiar idioma / Switch language"
          >
            <Languages size={13} />
            {language.toUpperCase()}
          </button>
          <button
            className="text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-void/95 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-muted hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cvFile[language]}
              download
              className="flex w-fit items-center gap-2 rounded-sm border border-cyan/40 bg-cyan/5 px-4 py-2 font-mono text-xs uppercase tracking-widest text-cyan"
            >
              <Download size={14} />
              {t('nav.cv')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
