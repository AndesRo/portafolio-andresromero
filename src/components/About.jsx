import { motion } from 'framer-motion'
import { profile, skills } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { language, t } = useLanguage()

  return (
    <section id="sobre-mi" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow mb-3">// {t('about.eyebrow')}</p>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {t('about.title')}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="hud-panel rounded-md p-8"
        >
          <p className="text-base leading-relaxed text-ink/90">{profile.bio[language]}</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('about.fields.name')}</dt>
              <dd className="mt-1 text-sm text-ink">{profile.name}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('about.fields.handle')}</dt>
              <dd className="mt-1 text-sm text-ink">{profile.handle}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('about.fields.location')}</dt>
              <dd className="mt-1 text-sm text-ink">{profile.location.city}, {profile.location.country}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('about.fields.role')}</dt>
              <dd className="mt-1 text-sm text-ink">{profile.role[language]}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('about.fields.timezone')}</dt>
              <dd className="mt-1 text-sm text-ink">{profile.location.timezone}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('about.fields.status')}</dt>
              <dd className="mt-1 flex items-center gap-1.5 text-sm text-cyan">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyan" />
                {profile.availability[language]}
              </dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-line pt-6">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('about.stack')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-violet/30 bg-violet/5 px-2.5 py-1 font-mono text-[0.65rem] text-violet"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
