/**
 * Einzige Quelle für alle UI-Texte.
 * DE = Primärsprache, EN + TR = vollständige Übersetzungen.
 */

const de = {
  site: {
    name: 'Ajans Köln',
    tagline: 'Fair Organisation',
  },

  header: {
    cta: 'Jetzt anfragen',
    langLabel: 'Sprache',
    nav: [
      { href: '#ueber-uns',  label: 'Über uns' },
      { href: '#leistungen', label: 'Leistungen' },
      { href: '#referenzen', label: 'Referenzen' },
      { href: '#kontakt',    label: 'Kontakt' },
    ],
  },

  hero: {
    eyebrow: 'Deutschlandweit verfügbar',
    h1Before: 'Professionelle Hostess- und Catering-Services für',
    h1Highlight: 'Messen und Events',
    sub: 'Mehrsprachiges Personal, strukturierte Planung und repräsentativer Auftritt für Messen, Firmenevents und exklusive Veranstaltungen in ganz Deutschland.',
    ctaPrimary: 'Jetzt unverbindlich anfragen',
  },

  trust: [
    { title: '10+ Jahre Erfahrung', key: 'exp' as const },
    { title: '50+ Events',          key: 'events' as const },
    { title: '5 Sprachen',          key: 'lang' as const },
    { title: 'DE-Weit im Einsatz',  key: 'de' as const },
  ],

  partners: {
    headline: 'Vertrauen ausgewählter Marken und Partner',
  },

  about: {
    eyebrow: 'Über Ajans Köln',
    headline: 'Ihr Partner für erfolgreiche Veranstaltungen',
    headlineLine2: 'in ganz Deutschland.',
    body: 'Ajans Köln steht für Qualität, Verlässlichkeit und repräsentativen Service. Wir unterstützen Unternehmen, Agenturen und Veranstalter mit erfahrenem Personal, klaren Abläufen und einem hohen Qualitätsanspruch.',
    bullets: [
      'Erfahrenes, mehrsprachiges Personal',
      'Strukturierte Planung und reibungslose Abläufe',
      'Klare Pakete für Empfang, Service und Messestand',
      'Starke Präsenz auf Messen und Events',
    ],
    signature: 'Funda Ekiz',
    mapTagline: 'Deutschlandweit im Einsatz',
    mapKicker: 'Einsatzgebiet',
    mapCitiesLine: 'Köln · Düsseldorf · Frankfurt · Hannover · Berlin · Hamburg · München · Stuttgart · Leipzig',
  },

  services: {
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
  },

  whyUs: {
    headline: 'Warum Ajans Köln?',
    items: [
      'Langjährige Messeerfahrung',
      'Mehrsprachiges Team',
      'Deutschlandweit verfügbar',
      'Fester Ansprechpartner',
    ],
  },

  process: {
    headline: 'So läuft die Zusammenarbeit',
    steps: [
      { title: 'Anfrage',       text: 'Sie senden uns Ihre Anfrage mit den wichtigsten Details.' },
      { title: 'Beratung',      text: 'Wir beraten Sie persönlich und entwickeln ein passendes Konzept.' },
      { title: 'Angebot',       text: 'Sie erhalten ein transparentes und faires Angebot.' },
      { title: 'Umsetzung',     text: 'Wir setzen alles professionell und zuverlässig um.' },
      { title: 'Nachbetreuung', text: 'Feedback, Analyse und langfristige Zusammenarbeit.' },
    ],
  },

  testimonials: {
    headline: 'Das sagen unsere Kunden',
    items: [
      {
        quote: 'Funda und ihr Team haben uns auf der Hannover Messe hervorragend betreut. Die Hostessen waren pünktlich, freundlich und haben unsere Gäste selbstständig eingewiesen.',
        role: 'Ausstellungsleiter, Hannover Messe',
      },
      {
        quote: 'Wir hatten kurzfristig Personalausfall. Ajans Köln hat uns innerhalb von 24 Stunden mit Ersatz versorgt. Das hat uns wirklich beeindruckt.',
        role: 'Eventmanagerin, Pharmabranche',
      },
      {
        quote: 'Das Catering-Team war sehr aufmerksam und hat auch in stressigen Momenten den Überblick behalten. Unsere Kunden waren begeistert.',
        role: 'Geschäftsführer, Automobilzulieferer',
      },
      {
        quote: 'Ajans Köln setzen wir inzwischen bei jeder Messe ein. Die Qualität ist konstant hoch, die Kommunikation klar und die Preise fair.',
        role: 'Head of Marketing, Technologieunternehmen',
      },
      {
        quote: 'Die Hostessen sprachen mehrere Sprachen und konnten unsere internationalen Gäste direkt ansprechen. Das hat den Unterschied gemacht.',
        role: 'Projektleiterin, Messebauer',
      },
      {
        quote: 'Sauber organisiert, pünktlich, keine Überraschungen. Genau das, was wir bei einem Event brauchen.',
        role: 'Veranstaltungsleiter, Industrieunternehmen',
      },
      {
        quote: 'Beim Stand-Management hat das Team eigenverantwortlich gearbeitet. Wir mussten kaum eingreifen. So soll es sein.',
        role: 'Marketingleiterin, Mittelstand',
      },
      {
        quote: 'Ich habe Ajans Köln einem Kollegen empfohlen und er war genauso zufrieden. Das sagt eigentlich alles.',
        role: 'Selbstständiger Unternehmer',
      },
    ],
  },

  cta: {
    headline: 'Bereit für ein erfolgreiches Event?',
    sub: 'Schreiben Sie uns Datum, Ort und Aufgaben, wir melden uns schnell zurück.',
    contactCue: 'Kontaktiere uns direkt',
    whatsapp: 'WhatsApp',
    phone: 'Telefon',
    email: 'E-Mail',
  },

  footer: {
    blurb: 'Hostessen, Catering und Standbetreuung für Messen, Roadshows und Firmenevents vom Erstkontakt bis zur Abwicklung vor Ort.',
    contactTitle: 'Kontakt',
    areasTitle: 'Einsatzgebiete',
    qualityTitle: 'Qualitätsversprechen',
    quality: [
      'Auswahl und Schulung des Personals',
      'Transparente Kommunikation',
      'Verbindliche Abläufe vor Ort',
    ],
    addressLines: ['Ajans Köln Fair Organisation', 'Musterstraße 1', '50667 Köln'],
    phoneDisplay: '+49 (0) 221 000 00 00',
    phoneHref: 'tel:+492210000000',
    emailDisplay: 'kontakt@ajans-koeln.de',
    emailHref: 'mailto:kontakt@ajans-koeln.de',
    cities: 'Deutschlandweit · Messen · Roadshows · Firmenevents',
    rights: 'Alle Rechte vorbehalten',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
  },

  links: {
    whatsapp: 'https://wa.me/4922100000000',
    kontaktAnker: '#kontakt',
  },
} as const

// ─────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────
const en = {
  site: {
    name: 'Ajans Köln',
    tagline: 'Fair Organisation',
  },

  header: {
    cta: 'Get in Touch',
    langLabel: 'Language',
    nav: [
      { href: '#ueber-uns',  label: 'About' },
      { href: '#leistungen', label: 'Services' },
      { href: '#referenzen', label: 'Reviews' },
      { href: '#kontakt',    label: 'Contact' },
    ],
  },

  hero: {
    eyebrow: 'Available Across Germany',
    h1Before: 'Professional Hostess & Catering Services for',
    h1Highlight: 'Trade Fairs & Events',
    sub: 'Multilingual staff, structured planning and a representative presence for trade fairs, corporate events and exclusive events across Germany.',
    ctaPrimary: 'Request a Quote',
  },

  trust: [
    { title: '10+ Years Experience', key: 'exp' as const },
    { title: '50+ Events',           key: 'events' as const },
    { title: '5 Languages',          key: 'lang' as const },
    { title: 'Nationwide',           key: 'de' as const },
  ],

  partners: {
    headline: 'Trusted by Selected Brands & Partners',
  },

  about: {
    eyebrow: 'About Ajans Köln',
    headline: 'Your Partner for Successful Events',
    headlineLine2: 'Across Germany.',
    body: 'Ajans Köln stands for quality, reliability and professional service. We support companies, agencies and organisers with experienced staff, clear processes and a high standard of quality.',
    bullets: [
      'Experienced, multilingual staff',
      'Structured planning and smooth processes',
      'Clear packages for reception, service and trade stands',
      'Strong presence at trade fairs and events',
    ],
    signature: 'Funda Ekiz',
    mapTagline: 'Active Across Germany',
    mapKicker: 'Service Area',
    mapCitiesLine: 'Cologne · Düsseldorf · Frankfurt · Hanover · Berlin · Hamburg · Munich · Stuttgart · Leipzig',
  },

  services: {
    headline: 'Hostesses, Catering & Stand Management for Trade Fairs and Events',
    items: [
      {
        title: 'Hostess Service',
        text: 'Professional hostesses and hosts for reception, accreditation, promotion and stand support.',
        key: 'hostess' as const,
      },
      {
        title: 'Catering & Hospitality',
        text: 'High-quality catering, stylish hospitality and clear service processes for every occasion.',
        key: 'catering' as const,
      },
      {
        title: 'Stand Management',
        text: 'Complete organisation and management of your trade stand, from set-up to on-site coordination.',
        key: 'stand' as const,
      },
    ],
  },

  whyUs: {
    headline: 'Why Ajans Köln?',
    items: [
      'Years of Trade Fair Experience',
      'Multilingual Team',
      'Available Across Germany',
      'Dedicated Point of Contact',
    ],
  },

  process: {
    headline: 'How We Work Together',
    steps: [
      { title: 'Enquiry',      text: 'You send us your request with the key details.' },
      { title: 'Consultation', text: 'We advise you personally and develop a tailored concept.' },
      { title: 'Proposal',     text: 'You receive a transparent and fair offer.' },
      { title: 'Execution',    text: 'We implement everything professionally and reliably.' },
      { title: 'Follow-up',    text: 'Feedback, analysis and long-term collaboration.' },
    ],
  },

  testimonials: {
    headline: 'What Our Clients Say',
    items: [
      {
        quote: 'Funda and her team did an outstanding job at the Hannover Messe. The hostesses were punctual, friendly and briefed our guests independently.',
        role: 'Exhibition Manager, Hannover Messe',
      },
      {
        quote: 'We had a last-minute staffing issue. Ajans Köln found us a replacement within 24 hours. Truly impressive.',
        role: 'Event Manager, Pharmaceutical Industry',
      },
      {
        quote: 'The catering team was very attentive and kept things running smoothly even during the busiest moments. Our clients were delighted.',
        role: 'CEO, Automotive Supplier',
      },
      {
        quote: 'We now use Ajans Köln at every trade fair. Consistently high quality, clear communication and fair pricing.',
        role: 'Head of Marketing, Tech Company',
      },
      {
        quote: 'The hostesses spoke multiple languages and could address our international guests directly. That made all the difference.',
        role: 'Project Manager, Exhibition Builder',
      },
      {
        quote: 'Well organised, punctual, no surprises. Exactly what you need at an event.',
        role: 'Event Director, Industrial Company',
      },
      {
        quote: 'The team handled stand management independently. We barely had to intervene. That is exactly how it should work.',
        role: 'Marketing Director, SME',
      },
      {
        quote: 'I recommended Ajans Köln to a colleague and he was equally happy. That really says it all.',
        role: 'Independent Entrepreneur',
      },
    ],
  },

  cta: {
    headline: 'Ready for a Successful Event?',
    sub: 'Send us your date, location and requirements — we will get back to you promptly.',
    contactCue: 'Contact us directly',
    whatsapp: 'WhatsApp',
    phone: 'Phone',
    email: 'E-Mail',
  },

  footer: {
    blurb: 'Hostesses, catering and stand management for trade fairs, roadshows and corporate events — from first contact to on-site execution.',
    contactTitle: 'Contact',
    areasTitle: 'Service Areas',
    qualityTitle: 'Quality Promise',
    quality: [
      'Selection and training of staff',
      'Transparent communication',
      'Reliable on-site processes',
    ],
    addressLines: ['Ajans Köln Fair Organisation', 'Musterstraße 1', '50667 Köln'],
    phoneDisplay: '+49 (0) 221 000 00 00',
    phoneHref: 'tel:+492210000000',
    emailDisplay: 'kontakt@ajans-koeln.de',
    emailHref: 'mailto:kontakt@ajans-koeln.de',
    cities: 'Nationwide · Trade Fairs · Roadshows · Corporate Events',
    rights: 'All rights reserved',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
  },

  links: {
    whatsapp: 'https://wa.me/4922100000000',
    kontaktAnker: '#kontakt',
  },
} as const

// ─────────────────────────────────────────────────────────────
// TURKISH
// ─────────────────────────────────────────────────────────────
const tr = {
  site: {
    name: 'Ajans Köln',
    tagline: 'Fair Organisation',
  },

  header: {
    cta: 'Teklif Alın',
    langLabel: 'Dil',
    nav: [
      { href: '#ueber-uns',  label: 'Hakkımızda' },
      { href: '#leistungen', label: 'Hizmetler' },
      { href: '#referenzen', label: 'Referanslar' },
      { href: '#kontakt',    label: 'İletişim' },
    ],
  },

  hero: {
    eyebrow: 'Tüm Almanya\'da Hizmet Veriyoruz',
    h1Before: 'Fuar ve Etkinlikler için Profesyonel Hostes ve',
    h1Highlight: 'Catering Hizmetleri',
    sub: 'Çok dilli personel, yapılandırılmış planlama ve temsili sunum ile Almanya genelinde fuar, şirket organizasyonları ve özel etkinlikler için profesyonel destek.',
    ctaPrimary: 'Şimdi Teklif Alın',
  },

  trust: [
    { title: '10+ Yıl Deneyim',      key: 'exp' as const },
    { title: '50+ Etkinlik',          key: 'events' as const },
    { title: '5 Dil',                 key: 'lang' as const },
    { title: 'Almanya Genelinde',     key: 'de' as const },
  ],

  partners: {
    headline: 'Seçkin Marka ve Ortaklarımızın Güveni',
  },

  about: {
    eyebrow: 'Ajans Köln Hakkında',
    headline: 'Başarılı Etkinlikler İçin',
    headlineLine2: 'Almanya\'da Güvenilir Ortağınız.',
    body: 'Ajans Köln, kalite, güvenilirlik ve temsili hizmet anlayışıyla öne çıkmaktadır. Deneyimli personel, net süreçler ve yüksek kalite standartlarıyla firmalara, ajanslara ve organizatörlere destek sağlıyoruz.',
    bullets: [
      'Deneyimli, çok dilli personel',
      'Yapılandırılmış planlama ve sorunsuz süreçler',
      'Karşılama, servis ve fuar standı için net paketler',
      'Fuar ve etkinliklerde güçlü temsil',
    ],
    signature: 'Funda Ekiz',
    mapTagline: 'Almanya Genelinde Hizmet',
    mapKicker: 'Hizmet Bölgesi',
    mapCitiesLine: 'Köln · Düsseldorf · Frankfurt · Hannover · Berlin · Hamburg · Münih · Stuttgart · Leipzig',
  },

  services: {
    headline: 'Fuar ve Etkinlikler için Hostes, Catering ve Stand Yönetimi',
    items: [
      {
        title: 'Hostes Hizmetleri',
        text: 'Karşılama, akreditasyon, promosyon ve stand desteği için profesyonel hostes ve hostler.',
        key: 'hostess' as const,
      },
      {
        title: 'Catering ve İkram',
        text: 'Her organizasyon için yüksek kaliteli catering, şık ikram hizmetleri ve net servis süreçleri.',
        key: 'catering' as const,
      },
      {
        title: 'Stand Yönetimi',
        text: 'Kurulumdan yerinde koordinasyona kadar fuar standınızın eksiksiz organizasyonu ve yönetimi.',
        key: 'stand' as const,
      },
    ],
  },

  whyUs: {
    headline: 'Neden Ajans Köln?',
    items: [
      'Uzun Yıllara Dayanan Fuar Deneyimi',
      'Çok Dilli Ekip',
      'Tüm Almanya\'da Hizmet',
      'Sabit İletişim Kişisi',
    ],
  },

  process: {
    headline: 'Birlikte Nasıl Çalışıyoruz',
    steps: [
      { title: 'Talep',        text: 'Bize en önemli detaylarla birlikte talebinizi iletin.' },
      { title: 'Danışmanlık',  text: 'Sizi bizzat danışıyoruz ve uygun bir konsept geliştiriyoruz.' },
      { title: 'Teklif',       text: 'Şeffaf ve adil bir teklif alırsınız.' },
      { title: 'Uygulama',     text: 'Her şeyi profesyonel ve güvenilir şekilde hayata geçiriyoruz.' },
      { title: 'Sonrası Destek', text: 'Geri bildirim, analiz ve uzun vadeli iş birliği.' },
    ],
  },

  testimonials: {
    headline: 'Müşterilerimiz Ne Diyor',
    items: [
      {
        quote: 'Funda ve ekibi Hannover Fuarı\'nda bize mükemmel destek sağladı. Hostes ekibi dakik ve güler yüzlüydü; misafirlerimizi bağımsız olarak yönlendirdi.',
        role: 'Fuar Müdürü, Hannover Messe',
      },
      {
        quote: 'Acil personel ihtiyacımız oldu ve Ajans Köln 24 saat içinde çözüm üretti. Bu gerçekten etkileyiciydi.',
        role: 'Etkinlik Yöneticisi, İlaç Sektörü',
      },
      {
        quote: 'Catering ekibi çok dikkatli çalıştı ve yoğun anlarda bile her şeyi kontrol altında tuttu. Müşterilerimiz hayranlıklarını dile getirdi.',
        role: 'Genel Müdür, Otomotiv Tedarikçisi',
      },
      {
        quote: 'Artık her fuarda Ajans Köln ile çalışıyoruz. Kalite sürekli yüksek, iletişim net ve fiyatlar adil.',
        role: 'Pazarlama Direktörü, Teknoloji Şirketi',
      },
      {
        quote: 'Hostes ekibi birden fazla dil konuştu ve uluslararası misafirlerimizle doğrudan iletişim kurabildi. Bu gerçekten fark yarattı.',
        role: 'Proje Yöneticisi, Fuar Yapım Şirketi',
      },
      {
        quote: 'Sıkı organize edilmiş, dakik, sürpriz yok. Bir etkinlikte tam da ihtiyaç duyduğumuz şey buydu.',
        role: 'Etkinlik Direktörü, Sanayi Şirketi',
      },
      {
        quote: 'Stand yönetimini ekip tamamen kendi inisiyatifiyle üstlendi. Neredeyse hiç müdahale etmemize gerek kalmadı. Böyle olması gerekiyor.',
        role: 'Pazarlama Müdürü, KOBİ',
      },
      {
        quote: 'Ajans Köln\'ü bir iş arkadaşıma tavsiye ettim ve o da aynı memnuniyeti yaşadı. Bu her şeyi anlatıyor.',
        role: 'Bağımsız Girişimci',
      },
    ],
  },

  cta: {
    headline: 'Başarılı Bir Etkinliğe Hazır mısınız?',
    sub: 'Bize tarih, yer ve görevleri bildirin, en kısa sürede size geri döneceğiz.',
    contactCue: 'Bize doğrudan ulaşın',
    whatsapp: 'WhatsApp',
    phone: 'Telefon',
    email: 'E-Posta',
  },

  footer: {
    blurb: 'Fuarlar, roadshowlar ve şirket etkinlikleri için hostes, catering ve stand yönetimi hizmetleri, ilk temastan yerinde uygulamaya kadar.',
    contactTitle: 'İletişim',
    areasTitle: 'Hizmet Bölgeleri',
    qualityTitle: 'Kalite Taahhüdü',
    quality: [
      'Personel seçimi ve eğitimi',
      'Şeffaf iletişim',
      'Yerinde güvenilir süreçler',
    ],
    addressLines: ['Ajans Köln Fair Organisation', 'Musterstraße 1', '50667 Köln'],
    phoneDisplay: '+49 (0) 221 000 00 00',
    phoneHref: 'tel:+492210000000',
    emailDisplay: 'kontakt@ajans-koeln.de',
    emailHref: 'mailto:kontakt@ajans-koeln.de',
    cities: 'Almanya Geneli · Fuarlar · Roadshowlar · Şirket Etkinlikleri',
    rights: 'Tüm hakları saklıdır',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
  },

  links: {
    whatsapp: 'https://wa.me/4922100000000',
    kontaktAnker: '#kontakt',
  },
} as const

export const translations = { de, en, tr } as const
export type Content = typeof de
