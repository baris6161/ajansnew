import { getSiteUrl, siteSeo, type SeoPageId, seoPages } from '../config/seo'
import { CONTACT } from '../config/contact'

export function buildJsonLd(page: SeoPageId): object {
  const base = getSiteUrl()
  const pageMeta = seoPages[page]
  const pageUrl = pageMeta.path === '/' ? `${base}/` : `${base}${pageMeta.path}`
  const logoUrl = `${base}/favicon.svg`
  const ogImageUrl = `${base}${siteSeo.ogImagePath}`

  const organization: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': `${base}#organization`,
    name: siteSeo.siteName,
    alternateName: siteSeo.brandShort,
    url: base,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    description:
      'Ajans Köln Fair Organisation provides professional hostess, catering and booth management staff for trade fairs and corporate events across Germany.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.tel,
      email: CONTACT.email,
      contactType: 'customer service',
      availableLanguage: ['German', 'Turkish', 'English'],
    },
    sameAs: [
      `https://www.instagram.com/${CONTACT.instagram}`,
      CONTACT.url,
    ],
  }

  const localBusiness: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'EventVenue'],
    '@id': `${base}#localbusiness`,
    name: siteSeo.siteName,
    alternateName: siteSeo.brandShort,
    url: base,
    telephone: CONTACT.tel,
    email: CONTACT.email,
    image: ogImageUrl,
    logo: logoUrl,
    description:
      'Professional event staffing agency based in Cologne, Germany. Specialising in hostess services, catering staff and complete booth management for trade fairs and events nationwide.',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Staffing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hostess & Host Service',
            description:
              'Professional hostesses and hosts for reception, accreditation, promotion and guest management at trade fairs and events.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Catering Staff',
            description:
              'Experienced catering and hospitality staff for drinks service, buffet management and event catering.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Booth Management',
            description:
              'Complete exhibition booth management including set-up coordination, on-site staffing and visitor engagement.',
          },
        },
      ],
    },
  }

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': `${base}#website`,
    url: base,
    name: siteSeo.siteName,
    inLanguage: ['en', 'de', 'tr'],
    publisher: { '@id': `${base}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${base}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageMeta.title,
    description: pageMeta.description,
    isPartOf: { '@id': `${base}#website` },
    inLanguage: 'en',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: ogImageUrl,
      width: siteSeo.ogImageWidth,
      height: siteSeo.ogImageHeight,
      caption: siteSeo.ogImageAlt,
    },
  }

  const graph: unknown[] = [organization, localBusiness, website, webPage]

  if (page !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${base}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page === 'impressum' ? 'Legal Notice' : 'Privacy Policy',
          item: pageUrl,
        },
      ],
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
