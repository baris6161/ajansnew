import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './LegalPage.module.css'

export function NotFoundPage() {
  return (
    <div className={styles.root}>
      <Helmet>
        <title>Seite nicht gefunden | Ajans Köln</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Die angeforderte Seite existiert nicht. Sie gelangen über den Link zurück zur Startseite." />
      </Helmet>
      <a className="skip" href="#main-content">
        Zum Inhalt springen
      </a>
      <Header />
      <main className={styles.main} id="main-content">
        <p className={styles.eyebrow}>Fehler 404</p>
        <h1 className={styles.title}>Seite nicht gefunden</h1>
        <p className={styles.updated}>Die angeforderte Adresse gibt es auf dieser Website nicht.</p>
        <div className={styles.divider} />
        <div className={styles.body}>
          <p>
            <Link to="/">Zur Startseite</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
