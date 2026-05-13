import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [visible])

  return { ref, visible }
}
