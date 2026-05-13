import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  className?: string
}

export function SectionReveal({ children, className }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${visible ? 'revealVisible' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
