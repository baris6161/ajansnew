import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import styles from './Testimonials.module.css'

const MOBILE_BREAKPOINT = 768

function useVisibleCount() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches
      : false
  )
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile ? 1 : 3
}

export function Testimonials() {
  const { testimonials } = useContent()
  const items = testimonials.items
  const total = items.length

  const visibleCount = useVisibleCount()
  const maxActive = total - visibleCount  // 5 (desktop) or 7 (mobile)
  const slideWidthPct = 100 / visibleCount

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef(0)

  // Clamp active when visibleCount changes
  useEffect(() => {
    setActive((prev) => Math.min(prev, maxActive))
  }, [maxActive])

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const startTimer = useCallback(() => {
    clearTimer()
    timerRef.current = setInterval(() => {
      setActive((i) => (i >= maxActive ? 0 : i + 1))
    }, 15000)
  }, [maxActive])

  useEffect(() => {
    if (!paused) startTimer()
    else clearTimer()
    return clearTimer
  }, [paused, startTimer])

  const jumpTo = (idx: number, animate = true) => {
    if (!animate && trackRef.current) {
      trackRef.current.style.transition = 'none'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (trackRef.current) trackRef.current.style.transition = ''
        })
      })
    }
    setActive(idx)
    startTimer()
  }

  const handlePrev = () => {
    const next = active <= 0 ? maxActive : active - 1
    jumpTo(next)
  }

  const handleNext = () => {
    const next = active >= maxActive ? 0 : active + 1
    jumpTo(next)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (diff > 50) handleNext()
    else if (diff < -50) handlePrev()
  }

  const gapOffset = visibleCount > 1 ? (1.25 * (visibleCount - 1)) / visibleCount : 0
  const slideBasis = `calc(${slideWidthPct}% - ${gapOffset.toFixed(4)}rem)`

  return (
    <section
      className={styles.section}
      id="referenzen"
      aria-label={testimonials.ariaLabel}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="testimonials-heading">{testimonials.headline}</h2>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.slider}>
            <div
              ref={trackRef}
              className={styles.track}
              style={{
                transform: `translateX(-${active * slideWidthPct}%)`,
                gap: visibleCount > 1 ? '1.25rem' : '0',
              }}
            >
              {items.map((t, i) => {
                const isVisible = i >= active && i < active + visibleCount
                return (
                  <blockquote
                    key={i}
                    className={styles.card}
                    style={{ flex: `0 0 ${slideBasis}` }}
                    role="group"
                    aria-label={`${i + 1} / ${total}`}
                    aria-hidden={!isVisible}
                  >
                    <div className={styles.stars} aria-hidden>
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className={styles.quote}>„{t.quote}"</p>
                    <footer className={styles.role}>{t.role}</footer>
                  </blockquote>
                )
              })}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              className={styles.navBtn}
              onClick={handlePrev}
              aria-label={testimonials.ariaPrev}
              type="button"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <div className={styles.dots} role="tablist" aria-label={testimonials.ariaLabel}>
              {Array.from({ length: maxActive + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => jumpTo(i)}
                  aria-label={`${testimonials.ariaPrev?.split(' ')[0]} ${i + 1}`}
                  aria-selected={i === active}
                />
              ))}
            </div>

            <button
              className={styles.navBtn}
              onClick={handleNext}
              aria-label={testimonials.ariaNext}
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
