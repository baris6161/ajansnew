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
      { href: '#referenzen', label: 'Bewertungen' },
      { href: '#faq',        label: 'FAQ' },
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
    since: 'Seit 2019 für Events und Messen im Einsatz',
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
      { title: 'Anfrage',               text: 'Sie senden uns Ihre Anfrage mit Datum, Ort und gewünschtem Personal.' },
      { title: 'Bedarf klären',         text: 'Wir sprechen die Details durch und klären, was genau gebraucht wird.' },
      { title: 'Team zusammenstellen',  text: 'Wir wählen passendes Personal aus und bestätigen die Verfügbarkeit.' },
      { title: 'Briefing',              text: 'Das Team wird vorbereitet und auf Ihre Anforderungen eingewiesen.' },
      { title: 'Einsatz vor Ort',       text: 'Pünktlicher, professioneller Einsatz am Eventtag.' },
    ],
  },

  testimonials: {
    headline: 'Das sagen unsere Kunden',
    ariaPrev: 'Vorherige Bewertung',
    ariaNext: 'Nächste Bewertung',
    ariaLabel: 'Kundenbewertungen',
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
    phoneDisplay: '+49 172 7532501',
    phoneHref: 'tel:+491727532501',
    emailDisplay: 'kontakt@ajans-koeln.de',
    emailHref: 'mailto:kontakt@ajans-koeln.de',
    cities: 'Deutschlandweit · Messen · Roadshows · Firmenevents',
    rights: 'Alle Rechte vorbehalten',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
  },

  faq: {
    headline: 'Häufige Fragen',
    items: [
      {
        q: 'Wie kurzfristig kann ich Personal anfragen?',
        a: 'Je nach Verfügbarkeit sind Anfragen bis wenige Tage vor dem Event möglich. Früher ist besser, aber wir versuchen immer eine Lösung zu finden.',
      },
      {
        q: 'In welchen Städten seid ihr verfügbar?',
        a: 'Wir sind deutschlandweit tätig – von Köln über Frankfurt und Hamburg bis Berlin und München. Kein Einsatzort ist zu weit.',
      },
      {
        q: 'Gibt es mehrsprachiges Personal?',
        a: 'Ja. Unser Team spricht unter anderem Deutsch, Türkisch und Englisch. Weitere Sprachen auf Anfrage.',
      },
      {
        q: 'Übernehmt ihr auch Catering-Personal?',
        a: 'Ja, wir stellen erfahrenes Catering-Personal für jede Eventgröße.',
      },
      {
        q: 'Kann ich Personal für mehrere Messetage buchen?',
        a: 'Ja, mehrtägige Einsätze sind kein Problem und werden gerne bei der Planung berücksichtigt.',
      },
    ],
  },

  links: {
    whatsapp: 'https://wa.me/491727532501',
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
      { href: '#faq',        label: 'FAQ' },
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
    since: 'Trusted partner for events since 2019',
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
      { title: 'Request',          text: 'Tell us your date, location and staffing needs.' },
      { title: 'Requirements',     text: 'We go through the details and figure out exactly what you need.' },
      { title: 'Assemble Team',    text: 'We select the right staff and confirm availability.' },
      { title: 'Briefing',         text: 'The team is prepared and briefed on your specific requirements.' },
      { title: 'On-site',          text: 'Punctual, professional service on the day of your event.' },
    ],
  },

  testimonials: {
    headline: 'What Our Clients Say',
    ariaPrev: 'Previous review',
    ariaNext: 'Next review',
    ariaLabel: 'Client reviews',
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
    phoneDisplay: '+49 172 7532501',
    phoneHref: 'tel:+491727532501',
    emailDisplay: 'kontakt@ajans-koeln.de',
    emailHref: 'mailto:kontakt@ajans-koeln.de',
    cities: 'Nationwide · Trade Fairs · Roadshows · Corporate Events',
    rights: 'All rights reserved',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
  },

  faq: {
    headline: 'Frequently Asked Questions',
    items: [
      {
        q: 'How far in advance do I need to book?',
        a: 'Depending on availability, bookings a few days before the event are possible. The earlier you contact us, the better.',
      },
      {
        q: 'Which cities do you cover?',
        a: 'We operate across Germany — from Cologne and Frankfurt to Hamburg, Berlin and Munich. No location is too far.',
      },
      {
        q: 'Do you have multilingual staff?',
        a: 'Yes. Our team speaks German, Turkish and English, with other languages available on request.',
      },
      {
        q: 'Do you also provide catering staff?',
        a: 'Yes, we supply experienced catering staff for events of all sizes.',
      },
      {
        q: 'Can I book staff for multiple days?',
        a: 'Absolutely. Multi-day assignments are no problem and can be planned in advance.',
      },
    ],
  },

  links: {
    whatsapp: 'https://wa.me/491727532501',
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
      { href: '#referenzen', label: 'Yorumlar' },
      { href: '#faq',        label: 'SSS' },
      { href: '#kontakt',    label: 'İletişim' },
    ],
  },

  hero: {
    eyebrow: 'Tüm Almanya\'da Hizmet Veriyoruz',
    h1Before: 'Almanya Genelinde Fuar ve Etkinlikler İçin',
    h1Highlight: 'Profesyonel Personel Desteği',
    sub: 'Fuarlar, şirket etkinlikleri ve özel organizasyonlar için çok dilli hostes, catering ve stand destek hizmetleri sunuyoruz. Deneyimli ekibimiz, planlı organizasyon süreci ve profesyonel temsil anlayışıyla markanızı en iyi şekilde destekler.',
    ctaPrimary: 'Hemen Teklif Alın',
  },

  trust: [
    { title: '10+ Yıl Deneyim',      key: 'exp' as const },
    { title: '50+ Etkinlik',          key: 'events' as const },
    { title: '5 Dil',                 key: 'lang' as const },
    { title: 'Almanya Genelinde',     key: 'de' as const },
  ],

  partners: {
    headline: 'Bize Güvenen Markalar ve İş Ortakları',
  },

  about: {
    eyebrow: 'Ajans Köln Hakkında',
    since: '2019\'dan beri fuar ve etkinlik sektöründe hizmet veriyoruz',
    headline: 'Almanya Genelinde Başarılı Etkinlikler İçin',
    headlineLine2: 'Güvenilir Çözüm Ortağınız.',
    body: 'Ajans Köln; kalite, güvenilirlik ve profesyonel hizmet anlayışıyla öne çıkmaktadır. Deneyimli personel, net süreçler ve yüksek kalite standartlarıyla firmalara, ajanslara ve organizatörlere destek sağlıyoruz.',
    bullets: [
      'Deneyimli, çok dilli personel',
      'Planlı ve düzenli organizasyon ile sorunsuz süreçler',
      'Karşılama, servis ve fuar standı desteği için net hizmet paketleri',
      'Fuar ve etkinliklerde güçlü kurumsal temsil',
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
        text: 'Karşılama, akreditasyon, promosyon ve stand desteği için profesyonel hostes ve fuar personeli.',
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
      'Tek Yetkili İletişim Kişisi',
    ],
  },

  process: {
    headline: 'Birlikte Nasıl Çalışıyoruz',
    steps: [
      { title: 'Talep',           text: 'Tarih, yer ve personel ihtiyacınızı bize iletin.' },
      { title: 'İhtiyaç Analizi', text: 'Detayları birlikte ele alır, neye ihtiyaç duyulduğunu netleştiririz.' },
      { title: 'Ekip Oluşturma',  text: 'Uygun personeli seçer ve müsaitliklerini teyit ederiz.' },
      { title: 'Brifing',         text: 'Ekip, gereksinimlerinize göre hazırlanır ve bilgilendirilir.' },
      { title: 'Etkinlik Günü',   text: 'Etkinlik günü dakik ve profesyonel hizmet.' },
    ],
  },

  testimonials: {
    headline: 'Müşterilerimiz Ne Diyor',
    ariaPrev: 'Önceki yorum',
    ariaNext: 'Sonraki yorum',
    ariaLabel: 'Müşteri yorumları',
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
        quote: 'Catering ekibi çok dikkatli çalıştı ve yoğun anlarda bile her şeyi kontrol altında tuttu. Misafirlerimiz hizmet kalitesinden çok etkilendi.',
        role: 'Genel Müdür, Otomotiv Tedarikçisi',
      },
      {
        quote: 'Artık her fuarda Ajans Köln ile çalışıyoruz. Kalite sürekli yüksek, iletişim net ve fiyatlar adil.',
        role: 'Pazarlama Direktörü, Teknoloji Şirketi',
      },
      {
        quote: 'Hostes ekibi birden fazla dil konuştu ve uluslararası misafirlerimizle doğrudan iletişim kurabildi. Bu bizim için büyük avantaj sağladı.',
        role: 'Proje Yöneticisi, Fuar Yapım Şirketi',
      },
      {
        quote: 'Çok iyi organize edilmiş, dakik ve sorunsuz bir hizmet aldık. Bir etkinlikte tam da ihtiyaç duyduğumuz şey buydu.',
        role: 'Etkinlik Direktörü, Sanayi Şirketi',
      },
      {
        quote: 'Stand yönetimini ekip tamamen kendi inisiyatifiyle üstlendi. Neredeyse hiç müdahale etmemize gerek kalmadı. Profesyonel hizmet tam olarak böyle olmalı.',
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
    phoneDisplay: '+49 172 7532501',
    phoneHref: 'tel:+491727532501',
    emailDisplay: 'kontakt@ajans-koeln.de',
    emailHref: 'mailto:kontakt@ajans-koeln.de',
    cities: 'Almanya Geneli · Fuarlar · Roadshowlar · Şirket Etkinlikleri',
    rights: 'Tüm hakları saklıdır',
    legalImprint: 'Impressum',
    legalPrivacy: 'Datenschutz',
  },

  faq: {
    headline: 'Sık Sorulan Sorular',
    items: [
      {
        q: 'Ne kadar önceden rezervasyon yapmalıyım?',
        a: 'Müsaitlik durumuna göre etkinlikten birkaç gün önce bile talep iletebilirsiniz. Ne kadar erken olursa o kadar iyi olur.',
      },
      {
        q: 'Hangi şehirlerde hizmet veriyorsunuz?',
        a: 'Tüm Almanya genelinde hizmet veriyoruz – Köln ve Frankfurt\'tan Hamburg, Berlin ve Münih\'e kadar. Hiçbir lokasyon çok uzak değil.',
      },
      {
        q: 'Çok dilli personel var mı?',
        a: 'Evet. Ekibimiz Almanca, Türkçe ve İngilizce konuşuyor. Diğer diller talep üzerine mümkündür.',
      },
      {
        q: 'Catering personeli de temin ediyor musunuz?',
        a: 'Evet, her ölçekte etkinlik için deneyimli catering personeli sağlıyoruz.',
      },
      {
        q: 'Birden fazla gün için personel alabilir miyim?',
        a: 'Evet, çok günlü görevlendirmeler sorunsuz şekilde planlanabilir.',
      },
    ],
  },

  links: {
    whatsapp: 'https://wa.me/491727532501',
    kontaktAnker: '#kontakt',
  },
} as const

export const translations = { de, en, tr } as const
export type Content = typeof de
