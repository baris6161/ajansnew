/**
 * Zentrale SEO Konfiguration.
 * TODO: In Vercel Produktion `VITE_SITE_URL` auf die finale Domain setzen (ohne Slash am Ende).
 * Ohne Variable wird der Fallback genutzt (aktuell Vercel Standardhost).
 */
export const SITE_URL_FALLBACK = 'https://ajanskoeln.de'

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
    title: 'Trade Fair Hostess & Catering Staff Across Germany | Ajans Köln',
    description:
      'Ajans Köln supplies professional hostess, catering and booth management staff for trade fairs and corporate events throughout Germany. Multilingual team, seamless planning.',
  },
  impressum: {
    path: '/impressum',
    title: 'Legal Notice | Ajans Köln Fair Organisation',
    description:
      'Legal notice (Impressum) for Ajans Köln Fair Organisation — provider details, contact information and legal disclosures as required by German law.',
  },
  datenschutz: {
    path: '/datenschutz',
    title: 'Privacy Policy | Ajans Köln Fair Organisation',
    description:
      'Privacy policy for Ajans Köln Fair Organisation covering data collection, contact forms, cookies and your rights under GDPR.',
  },
}

import type { Lang } from '../context/lang'

export const seoMeta: Record<Lang, { title: string; description: string; htmlLang: string; ogLocale: string }> = {
  de: {
    title: 'Hostessen & Catering Personal für Messen | Ajans Köln',
    description: 'Professionelles Hostessen-, Catering- und Standpersonal für Messen und Events in ganz Deutschland. Mehrsprachiges Team, zuverlässige Planung — Ajans Köln.',
    htmlLang: 'de',
    ogLocale: 'de_DE',
  },
  en: {
    title: 'Trade Fair Hostess & Catering Staff Across Germany | Ajans Köln',
    description: 'Need professional staff for your next trade fair or corporate event? Ajans Köln provides hostesses, catering and booth management across Germany. Multilingual, reliable, easy to book.',
    htmlLang: 'en',
    ogLocale: 'en_GB',
  },
  tr: {
    title: 'Almanya Genelinde Fuar ve Etkinlik Personeli | Ajans Köln',
    description: 'Fuarlarınız ve kurumsal etkinlikleriniz için profesyonel hostes, catering ve stant yönetimi hizmeti. Çok dilli ekip, güvenilir planlama — Ajans Köln.',
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
  },
}

export const siteSeo = {
  siteName: 'Ajans Köln Fair Organisation',
  brandShort: 'Ajans Köln',
  defaultLocale: 'en_GB',
  htmlLang: 'en',
  themeColor: '#2a211b',
  /** Relativer Pfad unter public, für OG und Preload */
  ogImagePath: '/images/ajans-koeln/hero-keyvisual-v2.webp',
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  ogImageAlt:
    'Professional event staff at a trade fair — Ajans Köln Fair Organisation',
  twitterCard: 'summary_large_image' as const,
} as const
