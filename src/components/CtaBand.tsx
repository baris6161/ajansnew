import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { cta, footer, links } from '../content/de'
import styles from './CtaBand.module.css'

export function CtaBand() {
  return (
    <section className={styles.section} id="kontakt" aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2 id="cta-heading">{cta.headline}</h2>
            <p>{cta.sub}</p>
            <a className={styles.btn} href={footer.emailHref}>
              {cta.send}
              <ArrowRight size={18} style={{ marginLeft: 8 }} aria-hidden strokeWidth={2} />
            </a>
          </div>
          <div className={styles.channels}>
            <a className={styles.channel} href={links.whatsapp} rel="noopener noreferrer">
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
                E-Mail
              </span>
              <ArrowRight size={18} aria-hidden strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
