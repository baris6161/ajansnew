import { useContent } from '../hooks/useContent'
import { images } from '../config/images'
import styles from './PartnerTrust.module.css'

const LOGOS = [
  { src: images.partnerAndMet,     alt: 'AND MET' },
  { src: images.partnerOktTrailer, alt: 'OKT Trailer' },
  { src: images.partnerRentoya,    alt: 'Rentoya' },
  { src: images.partnerElit,       alt: 'Elit 1924' },
] as const

export function PartnerTrust() {
  const { partners } = useContent()
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
                width={200}
                height={56}
                sizes="(max-width: 600px) 45vw, 180px"
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
