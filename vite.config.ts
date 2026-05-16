import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://ajanskoeln.de').replace(/\/$/, '')

  return {
    plugins: [
      react(),
      {
        name: 'seo-robots-sitemap',
        closeBundle() {
          const outDir = resolve(process.cwd(), 'dist')
          const lastmod = new Date().toISOString().slice(0, 10)
          const entries = [
            { loc: `${siteUrl}/`, priority: '1.0', changefreq: 'weekly' },
            { loc: `${siteUrl}/impressum`, priority: '0.2', changefreq: 'yearly' },
            { loc: `${siteUrl}/datenschutz`, priority: '0.2', changefreq: 'yearly' },
          ]
          const urls = entries
            .map(
              (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
            )
            .join('\n')
          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
          const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
          writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap)
          writeFileSync(resolve(outDir, 'robots.txt'), robots)
        },
      },
    ],
    build: {
      // Chunk size warning threshold
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          // Split heavy dependencies into separate chunks for better caching
          manualChunks(id) {
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
              return 'react-vendor'
            }
            if (id.includes('node_modules/react-router')) {
              return 'router'
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'ui'
            }
          },
        },
      },
    },
  }
})
