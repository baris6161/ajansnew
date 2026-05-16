import { Link } from 'react-router-dom'
import { useLang } from '../context/lang'
import { useContent } from '../hooks/useContent'
import styles from './Footer.module.css'

const builtBy: Record<string, string> = {
  de: 'Entwickelt von',
  en: 'Built by',
  tr: 'Geliştiren',
}

export function Footer() {
  const { lang } = useLang()
  const { site, footer } = useContent()
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div>
            <div className={styles.brandName}>{site.name}</div>
            <div className={styles.brandTag}>{site.tagline}</div>
          </div>
          <p className={styles.blurb}>{footer.blurb}</p>
        </div>
        <div className={styles.col}>
          <h3>{footer.contactTitle}</h3>
          <ul className={styles.list}>
            <li>
              <a href={footer.phoneHref}>{footer.phoneDisplay}</a>
            </li>
            <li>
              <a
                href={footer.emailHref}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = footer.emailHref
                }}
              >
                {footer.emailDisplay}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>{footer.areasTitle}</h3>
          <p className={styles.blurb}>{footer.cities}</p>
        </div>
        <div className={styles.col}>
          <h3>{footer.qualityTitle}</h3>
          <ul className={styles.list}>
            {footer.quality.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {site.name}. {footer.rights}.</span>
        <div className={styles.legal}>
          <Link to="/impressum">{footer.legalImprint}</Link>
          <Link to="/datenschutz">{footer.legalPrivacy}</Link>
        </div>
        <span className={styles.credit}>
          {builtBy[lang]}{' '}
          <a
            href="https://www.b4-solutions.de/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            B4-Solutions
          </a>
        </span>
      </div>
    </footer>
  )
}
