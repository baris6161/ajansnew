import { Check } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import { imageAlts, images } from '../config/images'
import styles from './AboutSection.module.css'

/** Silhouette Deutschland (viewBox 0 0 320 420) – realistischere Umrissform */
const GERMANY_PATH =
  'M 46 104 L 42 88 L 60 74 L 88 78 L 112 62 L 120 36 L 132 12 L 148 6 L 172 26 L 200 42 L 232 28 L 266 52 L 278 90 L 282 132 L 282 170 L 288 202 L 272 236 L 250 260 L 226 280 L 256 336 L 230 378 L 194 404 L 154 412 L 118 400 L 82 390 L 56 384 L 50 356 L 66 326 L 44 298 L 26 270 L 10 220 L 12 186 L 32 144 Z'

/** Goldene Marker + Textpositionen (lx/ly = Label-Anker im SVG, ta = text-anchor) */
const MAP_MARKERS = [
  { label: 'Hamburg',    cx: 148, cy: 72,  lx: 160, ly: 68  },
  { label: 'Berlin',     cx: 252, cy: 140, lx: 240, ly: 136, ta: 'end' },
  { label: 'Hannover',   cx: 154, cy: 112, lx: 166, ly: 108 },
  { label: 'Leipzig',    cx: 222, cy: 174, lx: 234, ly: 170 },
  { label: 'Düsseldorf', cx: 68,  cy: 178, lx: 80,  ly: 174 },
  { label: 'Köln',       cx: 64,  cy: 198, lx: 76,  ly: 210 },
  { label: 'Frankfurt',  cx: 138, cy: 218, lx: 150, ly: 214 },
  { label: 'Stuttgart',  cx: 128, cy: 272, lx: 140, ly: 268 },
  { label: 'München',    cx: 192, cy: 322, lx: 180, ly: 326, ta: 'end' },
] as const

function GermanyMap() {
  const { about } = useContent()
  return (
    <figure className={styles.mapFigure}>
      <p className={styles.mapKicker}>{about.mapKicker}</p>
      <h3 className={styles.mapTitle}>{about.mapTagline}</h3>

      <div className={styles.mapBoard}>
        <div className={styles.mapSvgWrap}>
          <svg
            className={styles.mapSvg}
            viewBox="0 0 320 420"
            role="img"
            aria-label="Deutschlandkarte mit markierten Einsatzorten"
          >
            <defs>
              <linearGradient id="aboutGermanyMapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--card)" stopOpacity="0.8" />
                <stop offset="55%" stopColor="var(--surface-warm)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--gold-soft)" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            <path className={styles.germanyFill} d={GERMANY_PATH} fill="url(#aboutGermanyMapFill)" />
            <path className={styles.germanyStroke} d={GERMANY_PATH} />

            {MAP_MARKERS.map((m) => (
              <g key={m.label} className={styles.mapMarker}>
                <circle className={styles.mapDotOuter} cx={m.cx} cy={m.cy} r={8} />
                <circle className={styles.mapDot} cx={m.cx} cy={m.cy} r={4.5} />
                <text className={styles.mapLabel} x={m.lx} y={m.ly} textAnchor={'ta' in m ? m.ta : 'start'}>
                  {m.label}
                </text>
                <title>{m.label}</title>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </figure>
  )
}

export function AboutSection() {
  const { about } = useContent()
  return (
    <section className={styles.section} id="ueber-uns" aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.visual}>
          <div className={styles.cardFrame}>
            <div className={styles.portraitWrap}>
              <div className={styles.portrait}>
                <img
                  src={images.aboutPortrait}
                  alt={imageAlts.aboutPortrait}
                  width={960}
                  height={1280}
                  sizes="(max-width: 900px) 100vw, min(520px, 45vw)"
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.portraitVignette} aria-hidden />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{about.eyebrow}</p>
          {about.since && (
            <span className={styles.sinceBadge}>{about.since}</span>
          )}
          <h2 className={styles.title} id="about-heading">
            {about.headline}
            {about.headlineLine2 && (
              <>
                <br />
                {about.headlineLine2}
              </>
            )}
          </h2>
          <p className={styles.lead}>{about.body}</p>
          <ul className={styles.list}>
            {about.bullets.map((b) => (
              <li key={b}>
                <span className={styles.check} aria-hidden>
                  <Check size={15} strokeWidth={2.5} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.mapAside} aria-label="Einsatzgebiete Deutschland">
          <GermanyMap />
        </aside>
      </div>
    </section>
  )
}
