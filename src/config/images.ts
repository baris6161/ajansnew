/**
 * Zentrale Bild-URLs (public/). Dateien stammen aus assets/ajans-koeln/
 * und wurden nach public/images/ajans-koeln kopiert.
 * reference-homepage-mockup.png wird bewusst nicht eingebunden.
 */
const base = '/images/ajans-koeln'
const partners = '/images/partners'

export const images = {
  /** Hero Bild 1 – Original */
  heroV1: `${base}/hero-funda-ekiz-event.png`,
  /** Hero Bild 2 – Bankett-Keyvisual (aktuell aktiv) */
  hero: `${base}/hero-keyvisual-v2.png`,
  aboutPortrait: `${base}/funda-ekiz-about-portrait.png`,
  serviceHostess: `${base}/service-hostess.png`,
  serviceCatering: `${base}/service-catering.png`,
  serviceStand: `${base}/service-stand-management.png`,
  partnerAndMet: `${partners}/partner-logo-and-met-transparent.png`,
  partnerElit: `${partners}/partner-logo-elit-transparent.png`,
  partnerRentoya: `${partners}/partner-logo-rentoya-transparent.png`,
  partnerOktTrailer: `${partners}/partner-logo-okt-trailer.png`,
} as const

export const imageAlts = {
  hero: 'Professional event staff at a trade fair managed by Ajans Köln Fair Organisation',
  aboutPortrait: 'Funda Ekiz, founder of Ajans Köln Fair Organisation, trade fair and event staffing specialist',
  serviceHostess: 'Ajans Köln hostess team welcoming guests at a trade fair booth',
  serviceCatering: 'Professional catering service at a corporate event by Ajans Köln',
  serviceStand: 'Fully staffed and managed exhibition booth at a German trade fair',
} as const
