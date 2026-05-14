import { Globe2, Languages, Shield, Sparkles } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import styles from './TrustBar.module.css'

const iconMap = {
  exp: Shield,
  events: Sparkles,
  lang: Languages,
  de: Globe2,
} as const

export function TrustBar() {
  const { trust } = useContent()
  return (
    <section className={styles.wrap} aria-label="Kennzahlen und Vertrauen">
      <div className={styles.card}>
        <div className={styles.grid}>
          {trust.map((item) => {
            const Icon = iconMap[item.key]
            return (
              <div key={item.key} className={styles.cell}>
                <span className={styles.icon} aria-hidden>
                  <Icon size={25} strokeWidth={1.6} />
                </span>
                <span className={styles.label}>{item.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
