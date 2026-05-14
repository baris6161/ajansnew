import { getSiteUrl, siteSeo, type SeoPageId, seoPages } from '../config/seo'
import { services } from '../content/de'

/**
 * JSON LD Graph. Keine LocalBusiness Adresse und keine Telefon E Mail im Schema,
 * solange Impressum noch Platzhalterdaten nutzt (siehe TODO in ImpressumPage).
 */
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
      'Ajans Köln Fair Organisation vermittelt Hostessen, Hosts und Catering für Messen und Firmenevents in Deutschland mit mehrsprachigem Personal.',
    // TODO: postalAddress und Kontaktdaten ergänzen, wenn finale Geschäftsadresse und erreichbare Kontaktnummer feststehen (keine Platzhalter).
  }

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': `${base}#website`,
    url: base,
    name: siteSeo.siteName,
    inLanguage: 'de-DE',
    publisher: { '@id': `${base}#organization` },
  }

  const professionalService: Record<string, unknown> = {
    '@type': 'ProfessionalService',
    '@id': `${base}#professionalService`,
    name: `${siteSeo.brandShort} Event und Messe Service`,
    url: base,
    provider: { '@id': `${base}#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'Deutschland',
    },
    serviceType: services.items.map((i) => i.title),
  }

  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageMeta.title,
    description: pageMeta.description,
    isPartOf: { '@id': `${base}#website` },
    inLanguage: 'de-DE',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: ogImageUrl,
      width: siteSeo.ogImageWidth,
      height: siteSeo.ogImageHeight,
      caption: siteSeo.ogImageAlt,
    },
  }

  const graph: unknown[] = [organization, website, professionalService, webPage]

  if (page !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Start',
          item: `${base}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page === 'impressum' ? 'Impressum' : 'Datenschutz',
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
