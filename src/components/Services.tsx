import { imageAlts, images } from '../config/images'
import { services } from '../content/de'
import styles from './Services.module.css'

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
                width={1200}
                height={825}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
