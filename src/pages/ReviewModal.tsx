import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import styles from './ReviewModal.module.css'

interface Props {
  onClose: () => void
}

interface FormState {
  nameOrCompany: string
  rating: number
  comment: string
  honeypot: string  // invisible bot trap — must stay empty
}

const EMPTY: FormState = { nameOrCompany: '', rating: 0, comment: '', honeypot: '' }

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ReviewModal({ onClose }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [hover, setHover] = useState(0)
  const [errors, setErrors] = useState<{ rating?: string; comment?: string }>({})
  const [status, setStatus] = useState<Status>('idle')

  const dialogRef = useRef<HTMLDivElement>(null)
  const firstRef  = useRef<HTMLInputElement>(null)

  // ── Lock body scroll & focus first element ──────────────────────
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    firstRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [])

  // ── ESC closes ──────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // ── Auto-close after success ────────────────────────────────────
  useEffect(() => {
    if (status !== 'success') return
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [status, onClose])

  // ── Backdrop click ──────────────────────────────────────────────
  const onBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  // ── Validation ──────────────────────────────────────────────────
  function validate(): boolean {
    const e: typeof errors = {}
    if (!form.rating) e.rating = 'Lütfen bir puan seç.'
    if (!form.comment.trim() || form.comment.trim().length < 3)
      e.comment = 'Lütfen kısa bir yorum yaz.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // ── Submit ──────────────────────────────────────────────────────
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/reviews/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nameOrCompany: form.nameOrCompany.trim(),
          rating: form.rating,
          comment: form.comment.trim(),
          honeypot: form.honeypot,
          source: 'nfc',
          createdAt: new Date().toISOString(),
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(EMPTY)
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const activeStar = hover || form.rating
  const busy = status === 'sending'

  return (
    <div
      className={styles.backdrop}
      onClick={onBackdrop}
      aria-hidden="false"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        className={styles.dialog}
      >
        {/* ── Header ── */}
        <div className={styles.dialogHeader}>
          <h2 id="review-modal-title" className={styles.dialogTitle}>Yorum Yaz</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Kapat"
            disabled={busy}
          >
            <X size={18} strokeWidth={2} aria-hidden />
          </button>
        </div>

        <p className={styles.hint}>Deneyimini bizimle paylaş. Kısa bir yorum yeterli.</p>

        {/* ── Success state ── */}
        {status === 'success' ? (
          <div className={styles.successMsg} role="status">
            Teşekkürler. Yorumun bize ulaştı.
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>

            {/* ── Honeypot (hidden from real users) ── */}
            <input
              type="text"
              name="website"
              value={form.honeypot}
              onChange={e => setForm(f => ({ ...f, honeypot: e.target.value }))}
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
              className={styles.honeypot}
            />

            {/* ── Name / Firma (optional) ── */}
            <div className={styles.field}>
              <label htmlFor="review-name" className={styles.label}>
                Adın veya firma adın
                <span className={styles.optional}> (isteğe bağlı)</span>
              </label>
              <input
                ref={firstRef}
                id="review-name"
                type="text"
                className={styles.input}
                placeholder="Örn. Ayşe Yılmaz veya ABC GmbH"
                value={form.nameOrCompany}
                maxLength={100}
                onChange={e => setForm(f => ({ ...f, nameOrCompany: e.target.value }))}
                disabled={busy}
                autoComplete="name"
              />
            </div>

            {/* ── Star rating ── */}
            <div className={styles.field}>
              <span className={styles.label} id="stars-label">Puanın</span>
              <div
                className={styles.stars}
                role="radiogroup"
                aria-labelledby="stars-label"
                onMouseLeave={() => setHover(0)}
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={form.rating === n}
                    aria-label={`${n} yıldız`}
                    className={`${styles.star} ${activeStar >= n ? styles.starOn : ''}`}
                    onClick={() => { setForm(f => ({ ...f, rating: n })); setErrors(e => ({ ...e, rating: undefined })) }}
                    onMouseEnter={() => setHover(n)}
                    disabled={busy}
                  >
                    ★
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className={styles.error} role="alert">{errors.rating}</p>
              )}
            </div>

            {/* ── Comment ── */}
            <div className={styles.field}>
              <label htmlFor="review-comment" className={styles.label}>Yorumun</label>
              <textarea
                id="review-comment"
                className={styles.textarea}
                placeholder="Kısaca deneyimini yazabilirsin"
                rows={4}
                value={form.comment}
                maxLength={2000}
                onChange={e => { setForm(f => ({ ...f, comment: e.target.value })); setErrors(e2 => ({ ...e2, comment: undefined })) }}
                disabled={busy}
              />
              {errors.comment && (
                <p className={styles.error} role="alert">{errors.comment}</p>
              )}
            </div>

            {/* ── Send error ── */}
            {status === 'error' && (
              <p className={styles.sendError} role="alert">
                Yorum gönderilemedi. Lütfen daha sonra tekrar dene.
              </p>
            )}

            {/* ── Submit ── */}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={busy}
            >
              {busy ? 'Gönderiliyor…' : 'Gönder'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
