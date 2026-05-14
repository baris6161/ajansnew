import { Building2, Download, Mail, Phone } from 'lucide-react'
import styles from './NfcPage.module.css'

export function NfcPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>

        <header className={styles.header}>
          <div className={styles.logo} aria-hidden>
            <Building2 size={28} strokeWidth={1.6} />
          </div>
          <h1 className={styles.name}>Ajans Köln</h1>
          <p className={styles.tagline}>Fuar Organizasyonu</p>
        </header>

        <section className={styles.card} aria-label="Kontakt">
          <div className={styles.row}>
            <Building2 size={20} strokeWidth={1.6} aria-hidden />
            <span className={styles.rowText}>Funda Ekiz</span>
          </div>
          <div className={styles.row}>
            <Phone size={20} strokeWidth={1.6} aria-hidden />
            <a href="tel:+491727532501" className={styles.rowText}>
              +49 172 7532501
            </a>
          </div>
          <div className={styles.row}>
            <Mail size={20} strokeWidth={1.6} aria-hidden />
            <a href="mailto:ajanskoeln@gmail.com" className={styles.rowText}>
              ajanskoeln@gmail.com
            </a>
          </div>
        </section>

        {/* Standard <a download> — works with the Vercel Function at /api/nfc/vcf */}
        <a
          href="/api/nfc/vcf"
          download="ajans-koeln.vcf"
          className={styles.btn}
        >
          <Download size={16} aria-hidden />
          Kişiyi kaydet
        </a>

      </div>
    </main>
  )
}
