export const site = {
  name: 'Ajans Köln',
  tagline: 'Fair Organisation',
} as const

export const hero = {
  eyebrow: 'Deutschlandweit verfügbar',
  h1Before: 'Professionelle Hostess- und Catering-Services für ',
  h1Highlight: 'Messen und Events',
  sub:
    'Mehrsprachiges Personal, strukturierte Planung und repräsentativer Auftritt für Messen, Firmenevents und exklusive Veranstaltungen in ganz Deutschland.',
  ctaPrimary: 'Jetzt unverbindlich anfragen',
  ctaSecondary: 'Leistungen ansehen',
} as const

export const trust = [
  { title: '12+ Jahre Erfahrung', key: 'exp' as const },
  { title: '50+ Events', key: 'events' as const },
  { title: '5 Sprachen', key: 'lang' as const },
  { title: 'DE-Weit im Einsatz', key: 'de' as const },
] as const

export const partners = {
  headline: 'Vertrauen ausgewählter Marken und Partner',
} as const

export const about = {
  eyebrow: 'Über Ajans Köln',
  headline: 'Ihr Partner für erfolgreiche Veranstaltungen in ganz Deutschland.',
  body: 'Ajans Köln steht für Qualität, Verlässlichkeit und repräsentativen Service. Wir unterstützen Unternehmen, Agenturen und Veranstalter mit erfahrenem Personal, klaren Abläufen und einem hohen Qualitätsanspruch.',
  bullets: [
    'Erfahrenes, mehrsprachiges Personal',
    'Strukturierte Planung und reibungslose Abläufe',
    'Klare Pakete für Empfang, Service und Messestand',
    'Starke Präsenz auf Messen und Events',
  ],
  signature: 'Funda Ekiz',
  /** Karte „Über uns“ – Städte als Punkte in AboutSection.tsx positioniert */
  mapTagline: 'Deutschlandweit im Einsatz',
  mapKicker: 'Einsatzgebiet',
  mapCitiesLine:
    'Köln · Düsseldorf · Frankfurt · Hannover · Berlin · Hamburg · München · Stuttgart · Leipzig',
} as const

export const services = {
  headline: 'Hostessen, Catering und Standbetreuung für Messen und Events',
  items: [
    {
      title: 'Hostess-Service',
      text: 'Professionelle Hostessen und Hosts für Empfang, Akkreditierung, Promotion und Standunterstützung.',
      key: 'hostess' as const,
    },
    {
      title: 'Catering und Bewirtung',
      text: 'Hochwertiges Catering, stilvolle Bewirtung und klare Serviceabläufe für jeden Anlass.',
      key: 'catering' as const,
    },
    {
      title: 'Stand-Management',
      text: 'Komplette Organisation und Betreuung Ihres Messestands, von Aufbau bis Koordination vor Ort.',
      key: 'stand' as const,
    },
  ],
  more: 'Mehr erfahren',
} as const

export const whyUs = {
  headline: 'Warum Ajans Köln?',
  items: [
    'Langjährige Messeerfahrung',
    'Mehrsprachiges Team',
    'Deutschlandweit verfügbar',
    'Fester Ansprechpartner',
  ],
} as const

export const process = {
  headline: 'So läuft die Zusammenarbeit',
  steps: [
    { title: 'Anfrage', text: 'Sie senden uns Ihre Anfrage mit den wichtigsten Details.' },
    { title: 'Beratung', text: 'Wir beraten Sie persönlich und entwickeln ein passendes Konzept.' },
    { title: 'Angebot', text: 'Sie erhalten ein transparentes und faires Angebot.' },
    { title: 'Umsetzung', text: 'Wir setzen alles professionell und zuverlässig um.' },
    { title: 'Nachbetreuung', text: 'Feedback, Analyse und langfristige Zusammenarbeit.' },
  ],
} as const

export const testimonials = {
  headline: 'Das sagen unsere Kunden',
  items: [
    {
      quote:
        'Ajans Köln ist seit Jahren ein fester Bestandteil unserer Messeauftritte. Das Team ist zuverlässig, professionell und immer einen Schritt voraus.',
      role: 'Marketing Manager',
    },
    {
      quote:
        'Exzellenter Service, freundliches Personal und perfekte Organisation. Unsere Gäste und Kunden fühlen sich rundum wohl.',
      role: 'Projektleiterin Eventagentur',
    },
    {
      quote:
        'Sehr kurzfristige Unterstützung vor Ort, absolut verlässlich und professionell. Klare Empfehlung.',
      role: 'Geschäftsführer Industrieunternehmen',
    },
  ],
} as const

export const cta = {
  headline: 'Bereit für ein erfolgreiches Event?',
  sub: 'Schreiben Sie uns Datum, Ort und Aufgaben, wir melden uns mit einer Rückmeldung.',
  whatsapp: 'WhatsApp',
  phone: 'Telefon',
  send: 'Anfrage senden',
} as const

export const footer = {
  blurb:
    'Hostessen, Catering und Standbetreuung für Messen, Roadshows und Firmenevents vom Erstkontakt bis zur Abwicklung vor Ort.',
  contactTitle: 'Kontakt',
  areasTitle: 'Einsatzgebiete',
  qualityTitle: 'Qualitätsversprechen',
  quality: [
    'Auswahl und Schulung des Personals',
    'Transparente Kommunikation',
    'Verbindliche Abläufe vor Ort',
  ],
  addressLines: ['Ajans Köln Fair Organisation', 'Musterstraße 1', '50667 Köln'],
  phoneDisplay: '+49 172 7532501',
  phoneHref: 'tel:+491727532501',
  emailDisplay: 'ajanskoeln@gmail.com',
  emailHref: 'mailto:ajanskoeln@gmail.com',
  cities: 'Deutschlandweit · Messen · Roadshows · Firmenevents',
  legalImprint: 'Impressum',
  legalPrivacy: 'Datenschutz',
} as const

/** Platzhalter-WhatsApp; Nummer bei Go-Live ersetzen. */
export const links = {
  whatsapp: 'https://wa.me/491727532501',
  kontaktAnker: '#kontakt',
} as const
