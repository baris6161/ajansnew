import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useContent } from '../hooks/useContent'
import { imageAlts, images } from '../config/images'
import styles from './Hero.module.css'

function splitWords(text: string, startDelay: number, inc: number) {
  const words = text.trim().split(' ')
  return words.map((word, i) => (
    // Space is a separate text node OUTSIDE the span so inline-block
    // doesn't collapse it as trailing whitespace
    <React.Fragment key={i}>
      <span
        className={styles.wordReveal}
        style={{ '--word-delay': `${(startDelay + i * inc).toFixed(2)}s` } as React.CSSProperties}
      >
        {word === '&' ? <span className={styles.amp}>&amp;</span> : word}
      </span>
      {i < words.length - 1 && ' '}
    </React.Fragment>
  ))
}

export function Hero() {
  const { hero, links } = useContent()
  const inc = 0.13
  const beforeWordCount = hero.h1Before.trim().split(' ').length
  return (
    <section className={styles.section} id="top" aria-labelledby="hero-heading">
      <div className={styles.bg} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.h1} id="hero-heading" key={hero.h1Before + hero.h1Highlight}>
            {splitWords(hero.h1Before, 0.08, inc)}{' '}
            <span className={styles.highlight}>
              {splitWords(hero.h1Highlight, 0.08 + beforeWordCount * inc, inc)}
            </span>
          </h1>
          <p className={styles.sub}>{hero.sub}</p>
          <div className={styles.actions}>
            <a className={styles.btnPrimary} href={links.kontaktAnker}>
              {hero.ctaPrimary}
              <ArrowRight size={20} aria-hidden strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.media}>
        <img
          className={styles.mediaImg}
          src={images.hero}
          alt={imageAlts.hero}
          width={1400}
          height={787}
          sizes="100vw"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className={styles.mediaFade} aria-hidden />
      </div>
    </section>
  )
}
