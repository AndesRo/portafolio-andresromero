import { motion } from 'framer-motion'
import { MapPin, Clock, Thermometer } from 'lucide-react'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { useLiveClock, useWeather } from '../hooks/useSystemStatus'

export default function LocationPanel() {
  const { language, t } = useLanguage()
  const { lat, lng, city, country, timezone } = profile.location
  const delta = 0.35
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`

  const clock = useLiveClock(timezone, language === 'en' ? 'en-GB' : 'es-CL')
  const weather = useWeather(lat, lng)

  return (
    <section id="ubicacion" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">// {t('location.eyebrow')}</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          {t('location.title')}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="hud-panel mt-10 grid overflow-hidden rounded-md md:grid-cols-[1fr_1.1fr]"
        >
          <div className="p-8">
            <div className="flex items-center gap-2 text-cyan">
              <MapPin size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">{t('location.base')}</span>
            </div>
            <p className="mt-4 font-display text-2xl font-semibold text-ink">
              {city}, {country}
            </p>
            <p className="mt-1 text-sm text-muted">{timezone}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-sm border border-line bg-panel-hi px-4 py-3">
                <div className="flex items-center gap-1.5 text-muted">
                  <Clock size={12} className="text-cyan" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest">{t('location.currentTime')}</span>
                </div>
                <p className="mt-1 font-mono text-lg text-ink">{clock}</p>
              </div>
              <div className="rounded-sm border border-line bg-panel-hi px-4 py-3">
                <div className="flex items-center gap-1.5 text-muted">
                  <Thermometer size={12} className="text-violet" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest">{t('location.currentTemp')}</span>
                </div>
                <p className="mt-1 font-mono text-lg text-ink">
                  {weather.loading
                    ? '—'
                    : weather.temp !== null
                    ? `${Math.round(weather.temp)}°C`
                    : t('status.unavailable')}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-line pt-6 font-mono text-xs text-muted">
              <div className="flex justify-between">
                <span>{t('location.lat')}</span>
                <span className="text-ink">{lat.toFixed(4)}° S</span>
              </div>
              <div className="flex justify-between">
                <span>{t('location.lng')}</span>
                <span className="text-ink">{Math.abs(lng).toFixed(4)}° O</span>
              </div>
              <div className="flex justify-between">
                <span>{t('location.mode')}</span>
                <span className="text-ink">{t('location.modeValue')}</span>
              </div>
            </div>
          </div>

          <div className="min-h-[320px] border-t border-line md:border-l md:border-t-0">
            <iframe
              title={`Mapa de ${city}, ${country}`}
              src={mapSrc}
              className="h-full min-h-[320px] w-full grayscale-[35%] invert-[8%]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
