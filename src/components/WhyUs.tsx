import { Briefcase, Globe2, Headphones, Languages } from 'lucide-react'
import { whyUs } from '../content/de'
import styles from './WhyUs.module.css'

const icons = [Briefcase, Languages, Globe2, Headphones] as const

export function WhyUs() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="why-heading">{whyUs.headline}</h2>
        </div>
        <div className={styles.grid}>
          {whyUs.items.map((label, i) => {
            const Icon = icons[i]
            return (
              <div key={label} className={styles.card}>
                <span className={styles.icon} aria-hidden>
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <p className={styles.label}>{label}</p>
                <span className={styles.accent} aria-hidden />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
