import { motion } from 'framer-motion'
import { Github, Linkedin, MessageCircle, Mail, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  mail: Mail
}

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">// {t('contact.eyebrow')}</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          {t('contact.title')}
        </h2>
        <p className="mt-3 max-w-xl text-muted">{t('contact.subtitle')}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="hud-panel mt-10 rounded-md p-8"
        >
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t('contact.directEmail')}</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block font-display text-xl text-ink transition-colors hover:text-cyan"
              >
                {profile.email}
              </a>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="flex w-fit items-center gap-2 rounded-sm bg-cyan px-6 py-3 font-mono text-xs uppercase tracking-widest text-void transition-transform hover:-translate-y-0.5 hover:shadow-glow"
            >
              {t('contact.send')}
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon] ?? Mail
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-sm border border-line px-4 py-3 transition-colors hover:border-cyan/50 hover:bg-cyan/5"
                >
                  <Icon size={16} className="text-muted group-hover:text-cyan" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-ink">
                    {s.label}
                  </span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
