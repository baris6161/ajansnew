import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SeoHead } from '../components/SeoHead'
import styles from './LegalPage.module.css'

export function ImpressumPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className={styles.root}>
      <SeoHead page="impressum" />
      <a className="skip" href="#main-content">
        Zum Inhalt springen
      </a>
      <Header />
      <main className={styles.main} id="main-content">
        <p className={styles.eyebrow}>Rechtliches</p>
        <h1 className={styles.title}>Impressum</h1>
        <p className={styles.updated}>Angaben gemäß § 5 TMG</p>
        <div className={styles.divider} />

        <div className={styles.body}>
          <div className={styles.section}>
            <h2>Anbieter</h2>
            <address>
              {/* TODO: Platzhalteradresse durch die rechtmäßige Geschäftsanschrift ersetzen. */}
              <p>
                Ajans Köln Fair Organisation<br />
                Inhaberin: Funda Ekiz<br />
                Musterstraße 1<br />
                50667 Köln<br />
                Deutschland
              </p>
            </address>
          </div>

          <div className={styles.section}>
            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:+492210000000">+49 (0) 221 000 00 00</a><br />
              E-Mail: <a href="mailto:kontakt@ajans-koeln.de">kontakt@ajans-koeln.de</a>
            </p>
          </div>

          <div className={styles.section}>
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 000 000 000
            </p>
          </div>

          <div className={styles.section}>
            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Eventdienstleister / Hostessagentur<br />
              Zuständige Aufsichtsbehörde: Industrie- und Handelskammer zu Köln
            </p>
          </div>

          <div className={styles.section}>
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
              nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
