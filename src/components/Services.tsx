import { imageAlts, images } from '../config/images'
import { useContent } from '../hooks/useContent'
import styles from './Services.module.css'

function renderAmp(text: string) {
  if (!text.includes('&')) return text
  return text.split('&').flatMap((part, i, arr) =>
    i < arr.length - 1
      ? [part, <span key={i} className={styles.amp}>&amp;</span>]
      : [part]
  )
}

const imgByKey = {
  hostess: images.serviceHostess,
  catering: images.serviceCatering,
  stand: images.serviceStand,
} as const

const altByKey = {
  hostess: imageAlts.serviceHostess,
  catering: imageAlts.serviceCatering,
  stand: imageAlts.serviceStand,
} as const

export function Services() {
  const { services } = useContent()
  return (
    <section className={styles.section} id="leistungen" aria-labelledby="services-heading">
      <div className={styles.intro}>
        <h2 id="services-heading">{services.headline}</h2>
      </div>
      <div className={styles.grid}>
        {services.items.map((item) => (
          <article key={item.key} className={styles.card}>
            <div className={styles.media} data-service={item.key}>
              <img
                src={imgByKey[item.key]}
                alt={altByKey[item.key]}
                width={900}
                height={675}
                sizes="(max-width: 900px) 100vw, min(900px, 33vw)"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{renderAmp(item.title)}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
