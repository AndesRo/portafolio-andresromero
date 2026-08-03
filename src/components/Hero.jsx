import { motion } from 'framer-motion'
import { Download, ArrowDown, Clock, Thermometer } from 'lucide-react'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { useLiveClock, useWeather } from '../hooks/useSystemStatus'

export default function Hero() {
  const { language, t } = useLanguage()
  const clock = useLiveClock(profile.location.timezone, language === 'en' ? 'en-GB' : 'es-CL')
  const weather = useWeather(profile.location.lat, profile.location.lng)

  return (
    <section id="inicio" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyan" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                {profile.availability[language]}
              </span>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-muted">
              <span className="flex items-center gap-1.5">
                <Clock size={11} className="text-cyan" />
                {clock}
              </span>
              <span className="text-line">|</span>
              <span className="flex items-center gap-1.5">
                <Thermometer size={11} className="text-violet" />
                {weather.loading
                  ? t('status.loading')
                  : weather.temp !== null
                  ? `${Math.round(weather.temp)}°C`
                  : t('status.unavailable')}
              </span>
            </div>
          </div>

          <p className="eyebrow mb-3">// {t('hero.eyebrow')} · {profile.location.city}, {profile.location.country}</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 max-w-xl font-display text-xl text-cyan/90 sm:text-2xl">
            {profile.role[language]}
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            {profile.tagline[language]}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="rounded-sm bg-cyan px-6 py-3 font-mono text-xs uppercase tracking-widest text-void transition-transform hover:-translate-y-0.5 hover:shadow-glow"
            >
              {t('hero.ctaProjects')}
            </a>
            <a
              href={profile.cvFile[language]}
              download
              className="flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              <Download size={14} />
              {t('hero.ctaCv')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="hud-panel relative aspect-square overflow-hidden rounded-md p-2">
            <img
              src={profile.photo}
              alt={`Foto de perfil de ${profile.name}`}
              className="h-full w-full rounded-sm object-cover grayscale-[15%]"
            />

            {/* Efecto de escaneo */}
            <div className="pointer-events-none absolute inset-2 overflow-hidden rounded-sm">
              <motion.div
                className="absolute left-0 right-0 h-24"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent, rgba(0,229,255,0.28) 45%, rgba(0,229,255,0.55) 50%, rgba(0,229,255,0.28) 55%, transparent)'
                }}
                animate={{ top: ['-15%', '105%'] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
              />
              <motion.div
                className="absolute left-0 right-0 h-px bg-cyan/90"
                style={{ boxShadow: '0 0 8px 1px rgba(0,229,255,0.8)' }}
                animate={{ top: ['-15%', '105%'] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
              />
            </div>

            <div className="pointer-events-none absolute inset-2 rounded-sm bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-widest text-cyan/90">
              <span>{t('hero.idLabel')}:: {profile.handle}</span>
              <span className="flex items-center gap-1">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyan" />
                {t('hero.online')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#proyectos"
        aria-label="Ir a proyectos"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted hover:text-cyan md:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
