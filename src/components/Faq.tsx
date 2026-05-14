import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import styles from './Faq.module.css'

export function Faq() {
  const { faq } = useContent()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i))

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="faq-heading">{faq.headline}</h2>
        </div>
        <div className={styles.panel}>
        <dl className={styles.list}>
          {faq.items.map((item, i) => {
            const isOpen = openIdx === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <dt>
                  <button
                    id={btnId}
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                      size={20}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={styles.answer}
                  style={{ '--panel-height': isOpen ? '1' : '0' } as React.CSSProperties}
                >
                  <p className={styles.answerText}>{item.a}</p>
                </dd>
              </div>
            )
          })}
        </dl>
        </div>
      </div>
    </section>
  )
}
