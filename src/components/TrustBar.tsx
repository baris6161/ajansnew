import { useEffect, useRef, useState } from 'react'
import { Globe2, Languages, Shield, Sparkles } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import styles from './TrustBar.module.css'

const iconMap = {
  exp: Shield,
  events: Sparkles,
  lang: Languages,
  de: Globe2,
} as const

// Parse "10+ Jahre Erfahrung" → { num: 10, suffix: '+', label: 'Jahre Erfahrung' }
// Returns null if title doesn't start with a number
function parseStat(title: string): { num: number; suffix: string; label: string } | null {
  const m = title.match(/^(\d+)([+%]?)\s(.+)$/)
  if (!m) return null
  return { num: parseInt(m[1], 10), suffix: m[2], label: m[3] }
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

const DURATION = 2600 // ms

function AnimatedCell({ title, icon: Icon }: { title: string; icon: typeof Shield }) {
  const parsed = parseStat(title)
  const [count, setCount] = useState(0)
  const triggered = useRef(false)
  const cellRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (!parsed || triggered.current) return

    const el = cellRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        triggered.current = true
        observer.disconnect()

        if (prefersReduced.current) {
          setCount(parsed.num)
          return
        }

        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = now - start
          const t = Math.min(elapsed / DURATION, 1)
          const eased = easeOutCubic(t)
          setCount(Math.round(eased * parsed.num))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={cellRef} className={styles.cell}>
      <span className={styles.icon} aria-hidden>
        <Icon size={25} strokeWidth={1.6} />
      </span>
      {parsed ? (
        <span className={styles.statStack}>
          <span className={styles.statNum} aria-hidden>
            {count}{parsed.suffix}
          </span>
          <span className={styles.statLabel}>{parsed.label}</span>
          {/* Accessible full text hidden from visual display */}
          <span className={styles.srOnly}>{title}</span>
        </span>
      ) : (
        <span className={styles.label}>{title}</span>
      )}
    </div>
  )
}

export function TrustBar() {
  const { trust } = useContent()
  return (
    <section className={styles.wrap} aria-label="Kennzahlen und Vertrauen">
      <div className={styles.card}>
        <div className={styles.grid}>
          {trust.map((item) => {
            const Icon = iconMap[item.key]
            return (
              <AnimatedCell key={item.key} title={item.title} icon={Icon} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
