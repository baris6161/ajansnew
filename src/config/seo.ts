/**
 * Zentrale SEO Konfiguration.
 * TODO: In Vercel Produktion `VITE_SITE_URL` auf die finale Domain setzen (ohne Slash am Ende).
 * Ohne Variable wird der Fallback genutzt (aktuell Vercel Standardhost).
 */
export const SITE_URL_FALLBACK = 'https://ajansnew.vercel.app'

export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined
  if (raw && raw.trim()) return raw.replace(/\/$/, '')
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    return window.location.origin
  }
  return SITE_URL_FALLBACK
}

export type SeoPageId = 'home' | 'impressum' | 'datenschutz'

/** Keine Gedankenstriche in Titeln und Beschreibungen. Zeichenlängen bewusst im üblichen Snippet Rahmen. */
export const seoPages: Record<
  SeoPageId,
  { path: string; title: string; description: string; ogTitle?: string; ogDescription?: string }
> = {
  home: {
    path: '/',
    title: 'Hostessen und Catering für Messen | Ajans Köln',
    description:
      'Ajans Köln vermittelt Hostessen, Hosts und Catering für Messen in Deutschland. Mehrsprachiges Team, klare Abläufe, Kontakt per Telefon oder E-Mail.',
  },
  impressum: {
    path: '/impressum',
    title: 'Impressum Anbieterangaben Ajans Köln',
    description:
      'Impressum der Ajans Köln Fair Organisation nach TMG mit Anbieterangaben, Kontakt und rechtlichen Hinweisen zu Inhalten, externen Links und Urheberrecht.',
  },
  datenschutz: {
    path: '/datenschutz',
    title: 'Datenschutz Ajans Köln Fair Organisation',
    description:
      'Datenschutzerklärung der Ajans Köln Fair Organisation zu Logdaten, Kontakt, Cookies und Rechten nach DSGVO sowie der zuständigen Aufsichtsbehörde in NRW.',
  },
}

import type { Lang } from '../context/lang'

export const seoMeta: Record<Lang, { title: string; description: string; htmlLang: string; ogLocale: string }> = {
  de: {
    title: 'Hostessen und Catering für Messen | Ajans Köln',
    description: 'Ajans Köln vermittelt Hostessen, Hosts und Catering für Messen in Deutschland. Mehrsprachiges Team, klare Abläufe, Kontakt per Telefon oder E-Mail.',
    htmlLang: 'de',
    ogLocale: 'de_DE',
  },
  en: {
    title: 'Hostess & Catering Services for Trade Fairs | Ajans Köln',
    description: 'Ajans Köln provides hostess and catering staff for trade fairs and events across Germany. Multilingual team, reliable planning, easy to reach.',
    htmlLang: 'en',
    ogLocale: 'en_GB',
  },
  tr: {
    title: 'Fuar ve Etkinlikler için Hostes Hizmetleri | Ajans Köln',
    description: 'Ajans Köln, Almanya genelinde fuar ve etkinlikler için hostes ve catering personeli sağlar. Çok dilli ekip, güvenilir planlama, kolay iletişim.',
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
  },
}

export const siteSeo = {
  siteName: 'Ajans Köln Fair Organisation',
  brandShort: 'Ajans Köln',
  defaultLocale: 'de_DE',
  htmlLang: 'de',
  themeColor: '#2a211b',
  /** Relativer Pfad unter public, für OG und Preload */
  ogImagePath: '/images/ajans-koeln/hero-keyvisual-v2.png',
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  ogImageAlt:
    'Funda Ekiz, Inhaberin von Ajans Köln Fair Organisation, bei der Betreuung eines Events',
  twitterCard: 'summary_large_image' as const,
} as const
