import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import styles from './Testimonials.module.css'

export function Testimonials() {
  const { testimonials } = useContent()
  const items = testimonials.items
  const total = items.length

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current) }

  const startTimer = useCallback(() => {
    clearTimer()
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % total)
    }, 15000)
  }, [total])

  useEffect(() => {
    if (!paused) startTimer()
    else clearTimer()
    return clearTimer
  }, [paused, startTimer])

  const goTo = (idx: number) => {
    setActive(idx)
    startTimer()
  }

  const handlePrev = () => {
    setActive((i) => (i - 1 + total) % total)
    startTimer()
  }

  const handleNext = () => {
    setActive((i) => (i + 1) % total)
    startTimer()
  }

  return (
    <section className={styles.section} id="referenzen" aria-labelledby="testimonials-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="testimonials-heading">{testimonials.headline}</h2>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={styles.slider}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {items.map((t, i) => (
                <div
                  key={i}
                  className={styles.slide}
                  aria-hidden={i !== active}
                >
                  <blockquote className={styles.card}>
                    <div className={styles.stars} aria-hidden>
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className={styles.quote}>„{t.quote}"</p>
                    <footer className={styles.role}>{t.role}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              className={styles.navBtn}
              onClick={handlePrev}
              aria-label="Vorherige Bewertung"
              type="button"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <div className={styles.dots}>
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Bewertung ${i + 1}`}
                  aria-current={i === active ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              className={styles.navBtn}
              onClick={handleNext}
              aria-label="Nächste Bewertung"
              type="button"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
