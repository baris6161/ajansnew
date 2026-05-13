import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../context/lang'
import type { Lang } from '../context/lang'
import { links } from '../content/de'
import styles from './Header.module.css'

const navItems = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#kontakt', label: 'Kontakt' },
] as const

const DRAWER_ID = 'site-mobile-nav'

export function Header() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isSubpage = location.pathname !== '/'

  const close = useCallback(() => setOpen(false), [])

  const handleAnchor = useCallback((href: string) => (e: React.MouseEvent) => {
    close()
    if (isSubpage) {
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }, [isSubpage, navigate, close])
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const prevOpen = useRef(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  useEffect(() => {
    if (open) {
      const root = document.getElementById(DRAWER_ID)
      const first = root?.querySelector<HTMLElement>('a[href], button')
      first?.focus()
    } else if (prevOpen.current) {
      menuBtnRef.current?.focus()
    }
    prevOpen.current = open
  }, [open])

  const onNavigate = () => {
    close()
  }

  const handleLogo = (e: React.MouseEvent) => {
    e.preventDefault()
    close()
    if (isSubpage) {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/" onClick={handleLogo}>
          <span className={styles.brandName}>Ajans Köln</span>
          <span className={styles.brandTag}>Fair Organisation</span>
        </a>

        <nav className={styles.navCenter} aria-label="Hauptnavigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <a className={styles.navLink} href={item.href} onClick={handleAnchor(item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <div className={styles.lang} aria-label="Sprache wählen">
            {(['tr', 'de', 'en'] as Lang[]).map((l, i, arr) => (
              <>
                <button
                  key={l}
                  type="button"
                  className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                  aria-current={lang === l ? 'true' : 'false'}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
                {i < arr.length - 1 && (
                  <span key={`sep-${l}`} className={styles.langSep} aria-hidden>|</span>
                )}
              </>
            ))}
          </div>
          <a className={styles.cta} href={links.kontaktAnker}>
            Jetzt anfragen
          </a>
        </div>

        <button
          ref={menuBtnRef}
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls={DRAWER_ID}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.75} aria-hidden /> : <Menu size={22} strokeWidth={1.75} aria-hidden />}
        </button>
      </div>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        aria-hidden={!open}
        onClick={close}
      />

      <div
        id={DRAWER_ID}
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={styles.drawerInner} aria-label="Mobile Navigation">
          <ul className={styles.drawerNav}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.drawerItem}>
                <a className={styles.drawerLink} href={item.href} onClick={handleAnchor(item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.drawerLang}>
            <span className={styles.drawerLangLabel}>Sprache</span>
            <div className={styles.lang}>
              {(['tr', 'de', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                  aria-current={lang === l ? 'true' : 'false'}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <a className={`${styles.cta} ${styles.drawerCta}`} href={links.kontaktAnker} onClick={onNavigate}>
            Jetzt anfragen
          </a>
        </nav>
      </div>
    </header>
  )
}
