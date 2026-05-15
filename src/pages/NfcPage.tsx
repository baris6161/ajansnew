import { useEffect, useState } from 'react'
import { Mail, MessageSquarePlus, Phone } from 'lucide-react'
import { CONTACT } from '../config/contact'
import { ReviewModal } from './ReviewModal'
import styles from './NfcPage.module.css'

// ── Types ──────────────────────────────────────────────────────────
type NfcLang = 'tr' | 'de' | 'en'

export type ModalContent = {
  title: string
  closeLabel: string
  hint: string
  success: string
  nameLabel: string
  optional: string
  namePlaceholder: string
  ratingLabel: string
  starAria: (n: number) => string
  ratingError: string
  commentLabel: string
  commentPlaceholder: string
  commentError: string
  sendError: string
  sending: string
  submit: string
}

type PageContent = {
  back: string
  backAriaLabel: string
  cardAriaLabel: string
  saveContact: string
  writeReview: string
  modal: ModalContent
}

// ── Translations ───────────────────────────────────────────────────
const CONTENT: Record<NfcLang, PageContent> = {
  tr: {
    back: 'Siteye dön',
    backAriaLabel: 'Ana sayfaya dön',
    cardAriaLabel: 'İletişim',
    saveContact: 'Kişiyi Kaydet',
    writeReview: 'Yorum Yaz',
    modal: {
      title: 'Yorum Yaz',
      closeLabel: 'Kapat',
      hint: 'Deneyimini bizimle paylaş. Kısa bir yorum yeterli.',
      success: 'Teşekkürler! Yorumun bize ulaştı.',
      nameLabel: 'Adın veya firma adın',
      optional: '(isteğe bağlı)',
      namePlaceholder: 'Örn. Ayşe Yılmaz veya ABC GmbH',
      ratingLabel: 'Puanın',
      starAria: (n) => `${n} yıldız`,
      ratingError: 'Lütfen bir puan seç.',
      commentLabel: 'Yorumun',
      commentPlaceholder: 'Kısaca deneyimini yazabilirsin',
      commentError: 'Lütfen kısa bir yorum yaz.',
      sendError: 'Yorum gönderilemedi. Lütfen daha sonra tekrar dene.',
      sending: 'Gönderiliyor…',
      submit: 'Gönder',
    },
  },
  de: {
    back: 'Zur Website',
    backAriaLabel: 'Zur Startseite',
    cardAriaLabel: 'Kontakt',
    saveContact: 'Kontakt speichern',
    writeReview: 'Bewertung schreiben',
    modal: {
      title: 'Deine Bewertung',
      closeLabel: 'Schließen',
      hint: 'Teile kurz deine Erfahrung – ein paar Sätze reichen vollkommen.',
      success: 'Danke! Deine Bewertung ist bei uns angekommen.',
      nameLabel: 'Dein Name oder Firma',
      optional: '(optional)',
      namePlaceholder: 'z. B. Julia Müller oder ABC GmbH',
      ratingLabel: 'Sternebewertung',
      starAria: (n) => `${n} ${n === 1 ? 'Stern' : 'Sterne'}`,
      ratingError: 'Bitte gib eine Sternebewertung.',
      commentLabel: 'Dein Kommentar',
      commentPlaceholder: 'Ein kurzer Kommentar reicht schon',
      commentError: 'Bitte schreib kurz etwas.',
      sendError: 'Da ist leider etwas schiefgegangen. Versuch es später nochmal.',
      sending: 'Wird gesendet…',
      submit: 'Absenden',
    },
  },
  en: {
    back: 'Back to website',
    backAriaLabel: 'Go to homepage',
    cardAriaLabel: 'Contact',
    saveContact: 'Save Contact',
    writeReview: 'Write a Review',
    modal: {
      title: 'Leave a Review',
      closeLabel: 'Close',
      hint: 'Tell us about your experience – a few words go a long way.',
      success: 'Thank you! Your review has been received.',
      nameLabel: 'Your name or company',
      optional: '(optional)',
      namePlaceholder: 'E.g. Sarah Miller or ABC GmbH',
      ratingLabel: 'Your rating',
      starAria: (n) => `${n} ${n === 1 ? 'star' : 'stars'}`,
      ratingError: 'Please select a star rating.',
      commentLabel: 'Your comment',
      commentPlaceholder: 'Just a few words about your experience',
      commentError: 'Please write a short comment.',
      sendError: 'Something went wrong. Please try again later.',
      sending: 'Sending…',
      submit: 'Submit',
    },
  },
}

const LANGS: NfcLang[] = ['tr', 'de', 'en']

// ── Component ──────────────────────────────────────────────────────
export function NfcPage() {
  const [lang, setLang] = useState<NfcLang>('tr')
  const [showReview, setShowReview] = useState(false)
  const [imgError, setImgError] = useState(false)

  const t = CONTENT[lang]

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
      <a href="/" className={styles.backLink} aria-label={t.backAriaLabel}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {t.back}
      </a>

      {/* ── Language switcher ── */}
      <div className={styles.langSwitch} role="group" aria-label="Language / Sprache / Dil">
        {LANGS.map((l) => (
          <button
            key={l}
            type="button"
            className={`${styles.langBtn} ${lang === l ? styles.langBtnActive : ''}`}
            onClick={() => setLang(l)}
            aria-current={lang === l ? 'true' : 'false'}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.wrap}>

        {/* ── Avatar ── */}
        <div className={styles.avatarWrap}>
          {!imgError ? (
            <img
              src={CONTACT.photo}
              alt={CONTACT.fn}
              className={styles.avatar}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={styles.avatarFallback}>
              {CONTACT.nameFirst[0]}{CONTACT.nameLast[0]}
            </div>
          )}
        </div>

        {/* ── Header text ── */}
        <header className={styles.header}>
          <h1 className={styles.name}>{CONTACT.fn}</h1>
          <p className={styles.company}>{CONTACT.org}</p>
          <p className={styles.tagline}>{CONTACT.title}</p>
        </header>

        {/* ── Contact card ── */}
        <section className={styles.card} aria-label={t.cardAriaLabel}>
          <a href={`tel:${CONTACT.tel}`} className={styles.row}>
            <span className={styles.rowIcon}>
              <Phone size={17} strokeWidth={1.8} aria-hidden />
            </span>
            <span className={styles.rowText}>{CONTACT.telDisplay}</span>
          </a>
          <div className={styles.divider} />
          <a href={`mailto:${CONTACT.email}`} className={styles.row}>
            <span className={styles.rowIcon}>
              <Mail size={17} strokeWidth={1.8} aria-hidden />
            </span>
            <span className={styles.rowText}>{CONTACT.email}</span>
          </a>
        </section>

        {/*
          ── Primary CTA — save contact ──
          Static /funda-ekiz.vcf — URL ends in .vcf which iOS Safari
          uses (alongside Content-Type) to route to the Contacts app.
          No download="" attribute on the <a> tag.
        */}
        <a href="/funda-ekiz.vcf" className={styles.btn}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.saveContact}
        </a>

        {/* ── Secondary CTA — write a review ── */}
        <button
          type="button"
          className={styles.btnSecondary}
          onClick={() => setShowReview(true)}
        >
          <MessageSquarePlus size={16} aria-hidden />
          {t.writeReview}
        </button>

      </div>

      {showReview && (
        <ReviewModal
          content={t.modal}
          onClose={() => setShowReview(false)}
        />
      )}
    </main>
  )
}
