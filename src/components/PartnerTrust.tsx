import { partners } from '../content/de'
import { images } from '../config/images'
import styles from './PartnerTrust.module.css'

const LOGOS = [
  { src: images.partnerAndMet,     alt: 'AND MET' },
  { src: images.partnerOktTrailer, alt: 'OKT Trailer' },
  { src: images.partnerRentoya,    alt: 'Rentoya' },
  { src: images.partnerElit,       alt: 'Elit 1924' },
] as const

export function PartnerTrust() {
  return (
    <section className={styles.section} aria-labelledby="partner-heading">
      <div className="container">
        <div className={styles.head}>
          <h2 id="partner-heading">{partners.headline}</h2>
        </div>
        <div className={styles.row}>
          {LOGOS.map((logo) => (
            <div key={logo.alt} className={styles.logoWrap}>
              <img
                src={logo.src}
                alt={logo.alt}
                height={56}
                loading="lazy"
                decoding="async"
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
