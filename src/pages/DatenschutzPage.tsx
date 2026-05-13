import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from './LegalPage.module.css'

export function DatenschutzPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main} id="main-content">
        <p className={styles.eyebrow}>Rechtliches</p>
        <h1 className={styles.title}>Datenschutzerklärung</h1>
        <p className={styles.updated}>Stand: Mai 2025</p>
        <div className={styles.divider} />

        <div className={styles.body}>

          <div className={styles.section}>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <address>
              <p>
                Ajans Köln Fair Organisation<br />
                Inhaberin: Funda Ekiz<br />
                Musterstraße 1<br />
                50667 Köln<br />
                Deutschland<br />
                E-Mail: <a href="mailto:kontakt@ajans-koeln.de">kontakt@ajans-koeln.de</a><br />
                Telefon: <a href="tel:+492210000000">+49 (0) 221 000 00 00</a>
              </p>
            </address>
          </div>

          <div className={styles.section}>
            <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch unserer Website werden durch den Browser des verwendeten Endgeräts automatisch
              Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär
              in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr
              Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <p>
              IP-Adresse des anfragenden Rechners, Datum und Uhrzeit des Zugriffs, Name und URL der
              abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter
              Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.
            </p>
            <p>
              Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet: Gewährleistung
              eines reibungslosen Verbindungsaufbaus der Website, Gewährleistung einer komfortablen
              Nutzung unserer Website, Auswertung der Systemsicherheit und -stabilität sowie zu
              weiteren administrativen Zwecken.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. Rechtsgrundlage der Verarbeitung</h2>
            <p>
              Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser
              berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung. In
              keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person
              zu ziehen.
            </p>
          </div>

          <div className={styles.section}>
            <h2>4. Kontaktformular und Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit
              ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie
              können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden
              aufgeführten Zwecken findet nicht statt.
            </p>
            <p>
              Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn Sie Ihre ausdrückliche
              Einwilligung dazu erteilt haben, die Weitergabe zur Abwicklung von Vertragsverhältnissen
              mit Ihnen erforderlich ist, die Weitergabe zur Erfüllung einer rechtlichen Verpflichtung
              erforderlich ist oder die Weitergabe zur Wahrung berechtigter Interessen erforderlich
              ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges
              Interesse an der Nichtweitergabe Ihrer Daten haben.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Cookies</h2>
            <p>
              Unsere Website verwendet keine Cookies, die über die technisch notwendigen
              Session-Cookies hinausgehen. Technisch notwendige Cookies werden verwendet, um die
              Grundfunktionen der Website sicherzustellen. Diese Cookies werden nach Ende der
              Browser-Sitzung gelöscht.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Ihre Rechte als betroffene Person</h2>
            <p>
              Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten folgende Rechte zu:
            </p>
            <p>
              <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über
              Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.
            </p>
            <p>
              <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht,
              unverzüglich die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns
              gespeicherten personenbezogenen Daten zu verlangen.
            </p>
            <p>
              <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die
              Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit
              die Verarbeitung nicht zur Ausübung des Rechts auf freie Meinungsäußerung und
              Information, zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
            </p>
            <p>
              <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie
              haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </p>
            <p>
              <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das
              Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und
              maschinenlesbaren Format zu erhalten.
            </p>
            <p>
              <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus
              Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
              Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.
            </p>
            <p>
              Zur Ausübung dieser Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:kontakt@ajans-koeln.de">kontakt@ajans-koeln.de</a>
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige
              Aufsichtsbehörde für Nordrhein-Westfalen ist:
            </p>
            <address>
              <p>
                Landesbeauftragte für Datenschutz und Informationsfreiheit NRW<br />
                Postfach 20 04 44<br />
                40102 Düsseldorf<br />
                <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
                  www.ldi.nrw.de
                </a>
              </p>
            </address>
          </div>

          <div className={styles.section}>
            <h2>9. Datensicherheit</h2>
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren
              (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe,
              die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine
              256-Bit-Verschlüsselung. Falls Ihr Browser keine 256-Bit-Verschlüsselung unterstützt,
              greifen wir stattdessen auf 128-Bit-v3-Technologie zurück.
            </p>
            <p>
              Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer
              Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen,
              teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff
              Dritter zu schützen.
            </p>
          </div>

          <div className={styles.section}>
            <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch die
              Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter
              gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
              jederzeit auf der Website unter dieser URL abgerufen und ausgedruckt werden.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
