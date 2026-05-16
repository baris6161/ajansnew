import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SeoHead } from '../components/SeoHead'
import { useLang } from '../context/lang'
import styles from './LegalPage.module.css'

const ADDRESS = (
  <>
    Ajans Köln Fair Organisation<br />
    Funda Ekiz<br />
    Dieselweg 1<br />
    30926 Seelze<br />
    Deutschland
  </>
)

function DeImpressum() {
  return (
    <>
      <p className={styles.eyebrow}>Rechtliches</p>
      <h1 className={styles.title}>Impressum</h1>
      <p className={styles.updated}>Angaben gemäß § 5 TMG</p>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.section}>
          <h2>Anbieter</h2>
          <address><p>{ADDRESS}</p></address>
        </div>
        <div className={styles.section}>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+491727532501">+49 172 7532501</a><br />
            E-Mail: <a href="mailto:ajanskoeln@gmail.com">ajanskoeln@gmail.com</a>
          </p>
        </div>
        <div className={styles.section}>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            Wird in Kürze ergänzt.
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
    </>
  )
}

function EnImpressum() {
  return (
    <>
      <p className={styles.eyebrow}>Legal</p>
      <h1 className={styles.title}>Legal Notice</h1>
      <p className={styles.updated}>Information pursuant to § 5 TMG (German Telemedia Act)</p>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.section}>
          <h2>Service Provider</h2>
          <address><p>{ADDRESS}</p></address>
        </div>
        <div className={styles.section}>
          <h2>Contact</h2>
          <p>
            Phone: <a href="tel:+491727532501">+49 172 7532501</a><br />
            E-Mail: <a href="mailto:ajanskoeln@gmail.com">ajanskoeln@gmail.com</a>
          </p>
        </div>
        <div className={styles.section}>
          <h2>VAT Identification Number</h2>
          <p>
            VAT identification number pursuant to § 27a of the German VAT Act:<br />
            To be added shortly.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Professional Title</h2>
          <p>
            Professional title: Event services / Hostess agency<br />
            Responsible supervisory authority: Chamber of Commerce and Industry (IHK) Cologne
          </p>
        </div>
        <div className={styles.section}>
          <h2>Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            We are not willing or obliged to participate in dispute resolution proceedings before a
            consumer arbitration board.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Liability for Content</h2>
          <p>
            As a service provider, we are responsible for our own content on these pages in accordance with
            general law (§ 7 para. 1 TMG). We are not obligated to monitor transmitted or stored third-party
            information or to investigate circumstances indicating illegal activity (§§ 8–10 TMG).
          </p>
        </div>
        <div className={styles.section}>
          <h2>Liability for Links</h2>
          <p>
            Our website contains links to external third-party websites over whose content we have no control.
            We therefore accept no liability for this external content. The respective provider or operator of
            the linked pages is always responsible for their content.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Copyright</h2>
          <p>
            The content and works on these pages created by the site operators are subject to German copyright
            law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright law
            require the written consent of the respective author or creator.
          </p>
        </div>
      </div>
    </>
  )
}

function TrImpressum() {
  return (
    <>
      <p className={styles.eyebrow}>Hukuki</p>
      <h1 className={styles.title}>Künye</h1>
      <p className={styles.updated}>Alman Tele-Medya Kanunu § 5 TMG uyarınca bilgiler</p>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.section}>
          <h2>Hizmet Sağlayıcı</h2>
          <address><p>{ADDRESS}</p></address>
        </div>
        <div className={styles.section}>
          <h2>İletişim</h2>
          <p>
            Telefon: <a href="tel:+491727532501">+49 172 7532501</a><br />
            E-Posta: <a href="mailto:ajanskoeln@gmail.com">ajanskoeln@gmail.com</a>
          </p>
        </div>
        <div className={styles.section}>
          <h2>KDV Kimlik Numarası</h2>
          <p>
            Alman KDV Kanunu § 27a uyarınca KDV kimlik numarası:<br />
            Yakında eklenecektir.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Mesleki Unvan</h2>
          <p>
            Mesleki unvan: Etkinlik hizmetleri / Hostes ajansı<br />
            Yetkili denetim makamı: Köln Ticaret ve Sanayi Odası (IHK Köln)
          </p>
        </div>
        <div className={styles.section}>
          <h2>Uyuşmazlık Çözümü</h2>
          <p>
            Avrupa Komisyonu, çevrimiçi uyuşmazlık çözümü (ODR) için bir platform sunmaktadır:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Tüketici tahkim kurulları önündeki uyuşmazlık çözüm süreçlerine katılma yükümlülüğümüz
            bulunmamakta olup bu süreçlere katılmayı teklif etmiyoruz.
          </p>
        </div>
        <div className={styles.section}>
          <h2>İçerik Sorumluluğu</h2>
          <p>
            Hizmet sağlayıcı olarak, bu sayfalardaki kendi içeriklerimizden genel hükümler çerçevesinde
            sorumlu olduğumuz gibi (§ 7 TMG), iletilen veya depolanan üçüncü taraf bilgilerini izleme ya da
            yasadışı faaliyetlere işaret eden koşulları araştırma yükümlülüğümüz bulunmamaktadır (§§ 8–10 TMG).
          </p>
        </div>
        <div className={styles.section}>
          <h2>Bağlantı Sorumluluğu</h2>
          <p>
            Web sitemiz, içerikleri üzerinde hiçbir etkimizin bulunmadığı üçüncü taraf harici web sitelerine
            bağlantılar içermektedir. Bu nedenle söz konusu harici içerikler için herhangi bir sorumluluk
            kabul etmiyoruz. Bağlantılı sayfaların içeriğinden her zaman ilgili sağlayıcı veya işletici
            sorumludur.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Telif Hakkı</h2>
          <p>
            Bu sayfalarda site operatörleri tarafından oluşturulan içerikler ve eserler Alman telif hakkı
            mevzuatına tabidir. Telif hakkı sınırlarının ötesinde çoğaltma, düzenleme, dağıtım ve her türlü
            kullanım için ilgili yazar veya yaratıcının yazılı onayı gerekmektedir.
          </p>
        </div>
      </div>
    </>
  )
}

export function ImpressumPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { lang } = useLang()

  return (
    <div className={styles.root}>
      <SeoHead page="impressum" />
      <a className="skip" href="#main-content">
        {lang === 'tr' ? 'İçeriğe geç' : lang === 'en' ? 'Skip to content' : 'Zum Inhalt springen'}
      </a>
      <Header />
      <main className={styles.main} id="main-content">
        {lang === 'en' ? <EnImpressum /> : lang === 'tr' ? <TrImpressum /> : <DeImpressum />}
      </main>
      <Footer />
    </div>
  )
}
