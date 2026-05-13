import { Quote, Star } from 'lucide-react'
import { testimonials } from '../content/de'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section className={styles.section} id="referenzen" aria-labelledby="testimonials-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="testimonials-heading">{testimonials.headline}</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.items.map((t, i) => (
            <blockquote key={`${t.role}-${i}`} className={styles.card}>
              <div className={styles.quoteIcon} aria-hidden>
                <Quote size={28} strokeWidth={1.5} />
              </div>
              <div className={styles.stars} aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden />
                ))}
              </div>
              <p className={styles.quote}>„{t.quote}“</p>
              <footer className={styles.role}>– {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
