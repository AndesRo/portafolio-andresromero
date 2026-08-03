import { motion } from 'framer-motion'
import { ArrowUpRight, Database, HardDrive } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useProjects } from '../hooks/useProjects'

export default function Projects() {
  const { language, t } = useLanguage()
  const { projects, loading, source } = useProjects(language)

  return (
    <section id="proyectos" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">// {t('projects.eyebrow')}</p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {t('projects.title')}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{t('projects.subtitle')}</p>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-muted">
            {source === 'supabase' ? (
              <>
                <Database size={11} className="text-cyan" />
                {t('projects.source.supabase')}
              </>
            ) : (
              <>
                <HardDrive size={11} className="text-violet" />
                {t('projects.source.local')}
              </>
            )}
          </div>
        </div>

        {loading ? (
          <p className="mt-14 font-mono text-sm text-muted">{t('projects.loading')}</p>
        ) : projects.length === 0 ? (
          <p className="mt-14 font-mono text-sm text-muted">{t('projects.empty')}</p>
        ) : (
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.url}
                target={p.url !== '#' ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="hud-panel group relative flex flex-col rounded-md p-6 transition-all hover:border-cyan/50 hover:shadow-glow"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-violet">
                    {p.tag}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                  />
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-line px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
                  <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyan" />
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-cyan/80">
                    {p.status}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
