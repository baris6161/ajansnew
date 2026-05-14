import { useEffect, useRef } from 'react'
import { useContent } from '../hooks/useContent'
import styles from './Process.module.css'

export function Process() {
  const { process } = useContent()
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const steps = trackRef.current?.querySelectorAll<HTMLElement>(`.${styles.step}`)
    if (!steps?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    steps.forEach((step, i) => {
      step.style.setProperty('--step-delay', `${i * 0.13}s`)
      observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="process-heading">{process.headline}</h2>
        </div>
        <div className={styles.track} ref={trackRef}>
          {process.steps.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.badge} aria-hidden>
                {index + 1}
              </div>
              <div className={styles.body}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
