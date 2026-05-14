import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import styles from './CtaBand.module.css'

export function CtaBand() {
  const { cta, footer, links } = useContent()
  return (
    <section className={styles.section} id="kontakt" aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2 id="cta-heading">{cta.headline}</h2>
            <p>{cta.sub}</p>

            {/* Desktop only: 3 visual arrows pointing to each channel card */}
            <div className={styles.cues} aria-hidden="true">
              <div className={styles.cueRow}>
                <span className={styles.cueLabel}>{cta.whatsapp}</span>
                <span className={styles.cueArrow} />
              </div>
              <div className={styles.cueRow}>
                <span className={styles.cueLabel}>{cta.phone}</span>
                <span className={styles.cueArrow} />
              </div>
              <div className={styles.cueRow}>
                <span className={styles.cueLabel}>{cta.email}</span>
                <span className={styles.cueArrow} />
              </div>
            </div>
          </div>

          <div className={styles.channels}>
            <a className={styles.channel} href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <span className={styles.channelLeft}>
                <span className={styles.icon} aria-hidden>
                  <MessageCircle size={20} strokeWidth={1.75} />
                </span>
                {cta.whatsapp}
              </span>
              <ArrowRight size={18} aria-hidden strokeWidth={2} />
            </a>
            <a className={styles.channel} href={footer.phoneHref}>
              <span className={styles.channelLeft}>
                <span className={styles.icon} aria-hidden>
                  <Phone size={20} strokeWidth={1.75} />
                </span>
                {cta.phone}
              </span>
              <ArrowRight size={18} aria-hidden strokeWidth={2} />
            </a>
            <a className={styles.channel} href={footer.emailHref}>
              <span className={styles.channelLeft}>
                <span className={styles.icon} aria-hidden>
                  <Mail size={20} strokeWidth={1.75} />
                </span>
                {cta.email}
              </span>
              <ArrowRight size={18} aria-hidden strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
