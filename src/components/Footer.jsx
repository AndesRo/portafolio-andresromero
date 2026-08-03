import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
          © {new Date().getFullYear()} {profile.name} — {t('footer.rights')}
        </p>
        <p className="font-mono text-[0.65rem] text-muted">{profile.signature}</p>
      </div>
    </footer>
  )
}
