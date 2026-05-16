import { Helmet } from 'react-helmet-async'
import { useLang } from '../context/lang'
import { getSiteUrl, seoMeta, seoPages, siteSeo, type SeoPageId } from '../config/seo'
import { buildJsonLd } from '../lib/jsonLd'

export function SeoHead({ page }: { page: SeoPageId }) {
  const { lang } = useLang()
  const siteUrl = getSiteUrl()
  const m = seoPages[page]
  const meta = page === 'home' ? seoMeta[lang] : null
  const title = meta?.title ?? m.title
  const description = meta?.description ?? m.description
  const htmlLang = meta?.htmlLang ?? siteSeo.htmlLang
  const ogLocale = meta?.ogLocale ?? siteSeo.defaultLocale
  const canonical = m.path === '/' ? `${siteUrl}/` : `${siteUrl}${m.path}`
  const ogImage = `${siteUrl}${siteSeo.ogImagePath}`
  const ogTitle = m.ogTitle ?? title
  const ogDesc = m.ogDescription ?? description
  const jsonLd = buildJsonLd(page)

  return (
    <Helmet htmlAttributes={{ lang: htmlLang }} prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content={siteSeo.siteName} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(siteSeo.ogImageWidth)} />
      <meta property="og:image:height" content={String(siteSeo.ogImageHeight)} />
      <meta property="og:image:alt" content={siteSeo.ogImageAlt} />
      <meta name="twitter:card" content={siteSeo.twitterCard} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDesc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={siteSeo.ogImageAlt} />
      <meta name="theme-color" content={siteSeo.themeColor} />
      <link rel="manifest" href="/manifest.webmanifest" />
      {page === 'home' ? <link rel="preload" as="image" href={siteSeo.ogImagePath} type="image/webp" fetchPriority="high" /> : null}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
