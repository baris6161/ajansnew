import { useEffect, useState } from 'react'
import { Mail, MessageSquarePlus, Phone } from 'lucide-react'
import { ReviewModal } from './ReviewModal'
import styles from './NfcPage.module.css'

export function NfcPage() {
  const [showReview, setShowReview] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Force white background for html + body on this standalone page
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prevHtml = html.style.background
    const prevBody = body.style.background
    html.style.background = '#ffffff'
    body.style.background = '#ffffff'
    return () => {
      html.style.background = prevHtml
      body.style.background = prevBody
    }
  }, [])

  return (
    <main className={styles.page}>

      {/* ── Back link ── */}
      <a href="/" className={styles.backLink} aria-label="Siteye dön">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Siteye dön
      </a>

      <div className={styles.wrap}>

        {/* ── Avatar ── */}
        <div className={styles.avatarWrap}>
          {!imgError ? (
            <img
              src="/images/ajans-koeln/funda-ekiz-about-portrait.png"
              alt="Funda Ekiz"
              className={styles.avatar}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={styles.avatarFallback}>FE</div>
          )}
        </div>

        {/* ── Header text ── */}
        <header className={styles.header}>
          <h1 className={styles.name}>Funda Ekiz</h1>
          <p className={styles.company}>Ajans Köln</p>
          <p className={styles.tagline}>Fuar Organizasyonu</p>
        </header>

        {/* ── Contact card ── */}
        <section className={styles.card} aria-label="Kontakt">
          <a href="tel:+491727532501" className={styles.row}>
            <span className={styles.rowIcon}>
              <Phone size={17} strokeWidth={1.8} aria-hidden />
            </span>
            <span className={styles.rowText}>+49 172 7532501</span>
          </a>
          <div className={styles.divider} />
          <a href="mailto:ajanskoeln@gmail.com" className={styles.row}>
            <span className={styles.rowIcon}>
              <Mail size={17} strokeWidth={1.8} aria-hidden />
            </span>
            <span className={styles.rowText}>ajanskoeln@gmail.com</span>
          </a>
        </section>

        {/* ── Primary CTA — save contact ── */}
        <a
          href="/api/nfc/vcf"
          className={styles.btn}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kişiyi kaydet
        </a>

        {/* ── Secondary CTA — write a review ── */}
        <button
          type="button"
          className={styles.btnSecondary}
          onClick={() => setShowReview(true)}
        >
          <MessageSquarePlus size={16} aria-hidden />
          Yorum Yaz
        </button>

      </div>

      {showReview && (
        <ReviewModal onClose={() => setShowReview(false)} />
      )}
    </main>
  )
}
