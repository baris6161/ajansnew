import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SeoHead } from '../components/SeoHead'
import { useLang } from '../context/lang'
import styles from './LegalPage.module.css'

const ADDRESS_BLOCK = (
  <>
    Ajans Köln Fair Organisation<br />
    Funda Ekiz<br />
    Dieselweg 1<br />
    30926 Seelze<br />
    Deutschland<br />
    E-Mail: <a href="mailto:ajanskoeln@gmail.com">ajanskoeln@gmail.com</a><br />
    Telefon: <a href="tel:+491727532501">+49 172 7532501</a>
  </>
)

function DeDatenschutz() {
  return (
    <>
      <p className={styles.eyebrow}>Rechtliches</p>
      <h1 className={styles.title}>Datenschutzerklärung</h1>
      <p className={styles.updated}>Stand: Mai 2025</p>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.section}>
          <h2>1. Verantwortlicher</h2>
          <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
          <address><p>{ADDRESS_BLOCK}</p></address>
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
            aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte
            weiter, wenn Sie Ihre ausdrückliche Einwilligung dazu erteilt haben, die Weitergabe zur
            Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist, die Weitergabe zur
            Erfüllung einer rechtlichen Verpflichtung erforderlich ist oder die Weitergabe zur
            Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht,
            dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten
            haben.
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
          <p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten folgende Rechte zu:</p>
          <p><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</p>
          <p><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</p>
          <p><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit die Verarbeitung nicht zur Ausübung des Rechts auf freie Meinungsäußerung, zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung von Rechtsansprüchen erforderlich ist.</p>
          <p><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
          <p><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
          <p><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.</p>
          <p>Zur Ausübung dieser Rechte wenden Sie sich bitte an: <a href="mailto:ajanskoeln@gmail.com">ajanskoeln@gmail.com</a></p>
        </div>
        <div className={styles.section}>
          <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Niedersachsen ist:</p>
          <address>
            <p>
              Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5<br />
              30159 Hannover<br />
              <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer">www.lfd.niedersachsen.de</a>
            </p>
          </address>
        </div>
        <div className={styles.section}>
          <h2>9. Datensicherheit</h2>
          <p>
            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer)
            in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
            wird. Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um
            Ihre Daten gegen Manipulationen, Verlust, Zerstörung oder unbefugten Zugriff zu schützen.
          </p>
        </div>
        <div className={styles.section}>
          <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch die
            Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher
            Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils
            aktuelle Datenschutzerklärung kann jederzeit auf der Website abgerufen und ausgedruckt werden.
          </p>
        </div>
      </div>
    </>
  )
}

function EnDatenschutz() {
  return (
    <>
      <p className={styles.eyebrow}>Legal</p>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: May 2025</p>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.section}>
          <h2>1. Controller</h2>
          <p>The controller within the meaning of the General Data Protection Regulation (GDPR) is:</p>
          <address><p>{ADDRESS_BLOCK}</p></address>
        </div>
        <div className={styles.section}>
          <h2>2. Collection and Storage of Personal Data</h2>
          <p>
            When you visit our website, your browser automatically transmits information to our server.
            This information is temporarily stored in a log file and includes: IP address, date and time
            of access, name and URL of the file retrieved, referrer URL, browser type, operating system,
            and the name of your internet service provider.
          </p>
          <p>
            We process this data to ensure smooth connection to the website, comfortable use of our site,
            evaluation of system security and stability, and for other administrative purposes.
          </p>
        </div>
        <div className={styles.section}>
          <h2>3. Legal Basis</h2>
          <p>
            The legal basis for data processing is Art. 6(1)(f) GDPR. Our legitimate interest follows
            from the purposes of data collection listed above. We do not use the collected data to draw
            conclusions about you as a person.
          </p>
        </div>
        <div className={styles.section}>
          <h2>4. Contact via E-Mail</h2>
          <p>
            If you send us enquiries via contact form or e-mail, your details including the contact
            information you provide will be stored for the purpose of processing the request and in case
            of follow-up questions. We do not pass on this data without your consent.
          </p>
          <p>
            Processing is based exclusively on your consent (Art. 6(1)(a) GDPR). You may revoke your
            consent at any time. The lawfulness of data processing operations carried out before revocation
            remains unaffected.
          </p>
        </div>
        <div className={styles.section}>
          <h2>5. Disclosure of Data</h2>
          <p>
            We do not transfer your personal data to third parties for purposes other than those listed
            below. We only share your data if you have given explicit consent, if disclosure is necessary
            for the performance of a contract, if disclosure is required by law, or if disclosure is
            necessary to protect our legitimate interests and there is no reason to believe you have an
            overriding interest in non-disclosure.
          </p>
        </div>
        <div className={styles.section}>
          <h2>6. Cookies</h2>
          <p>
            Our website does not use cookies beyond technically necessary session cookies, which ensure
            the basic functionality of the website and are deleted at the end of the browser session.
          </p>
        </div>
        <div className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>You have the following rights regarding your data stored with us:</p>
          <p><strong>Right of access (Art. 15 GDPR):</strong> You have the right to obtain information about your personal data processed by us.</p>
          <p><strong>Right to rectification (Art. 16 GDPR):</strong> You have the right to request the immediate correction of inaccurate personal data.</p>
          <p><strong>Right to erasure (Art. 17 GDPR):</strong> You have the right to request the deletion of your personal data stored by us, unless processing is necessary for exercising the right of freedom of expression, for compliance with a legal obligation, or for establishing legal claims.</p>
          <p><strong>Right to restriction of processing (Art. 18 GDPR):</strong> You have the right to request the restriction of processing of your personal data.</p>
          <p><strong>Right to data portability (Art. 20 GDPR):</strong> You have the right to receive your personal data in a structured, commonly used and machine-readable format.</p>
          <p><strong>Right to object (Art. 21 GDPR):</strong> You have the right to object at any time to the processing of your personal data on grounds relating to your particular situation.</p>
          <p>To exercise these rights, please contact: <a href="mailto:ajanskoeln@gmail.com">ajanskoeln@gmail.com</a></p>
        </div>
        <div className={styles.section}>
          <h2>8. Right to Lodge a Complaint</h2>
          <p>You have the right to lodge a complaint with a data protection supervisory authority. The authority competent for Lower Saxony (Niedersachsen) is:</p>
          <address>
            <p>
              Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5<br />
              30159 Hannover<br />
              <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer">www.lfd.niedersachsen.de</a>
            </p>
          </address>
        </div>
        <div className={styles.section}>
          <h2>9. Data Security</h2>
          <p>
            We use SSL encryption (Secure Socket Layer) at the highest level supported by your browser.
            We employ appropriate technical and organisational security measures to protect your data against
            manipulation, loss, destruction or unauthorised access.
          </p>
        </div>
        <div className={styles.section}>
          <h2>10. Updates to this Privacy Policy</h2>
          <p>
            This privacy policy is currently valid as of May 2025. Due to the further development of our
            website or changes in legal requirements, it may be necessary to amend this privacy policy.
            The current version can always be accessed and printed from this page.
          </p>
        </div>
      </div>
    </>
  )
}

function TrDatenschutz() {
  return (
    <>
      <p className={styles.eyebrow}>Hukuki</p>
      <h1 className={styles.title}>Gizlilik Politikası</h1>
      <p className={styles.updated}>Son güncelleme: Mayıs 2025</p>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.section}>
          <h2>1. Veri Sorumlusu</h2>
          <p>Genel Veri Koruma Yönetmeliği (GDPR/DSGVO) kapsamında veri sorumlusu:</p>
          <address><p>{ADDRESS_BLOCK}</p></address>
        </div>
        <div className={styles.section}>
          <h2>2. Kişisel Veri Toplama ve Saklanması</h2>
          <p>
            Web sitemizi ziyaret ettiğinizde tarayıcınız otomatik olarak sunucumuza bilgi iletir.
            Bu bilgiler geçici olarak günlük dosyasına kaydedilir ve şunları içerir: IP adresi, erişim
            tarih ve saati, alınan dosyanın adı ve URL'si, yönlendiren URL, tarayıcı türü, işletim
            sistemi ve internet servis sağlayıcınızın adı.
          </p>
          <p>
            Bu verileri; web sitesine sorunsuz bağlantı sağlamak, sitemizin rahat kullanımını güvence
            altına almak, sistem güvenliğini ve kararlılığını değerlendirmek ile diğer idari amaçlar
            doğrultusunda işlemekteyiz.
          </p>
        </div>
        <div className={styles.section}>
          <h2>3. Hukuki Dayanak</h2>
          <p>
            Veri işlemenin hukuki dayanağı GDPR Madde 6(1)(f)'dir. Meşru menfaatimiz yukarıda
            belirtilen veri toplama amaçlarından kaynaklanmaktadır. Toplanan verileri hiçbir şekilde
            sizin hakkınızda çıkarım yapmak amacıyla kullanmıyoruz.
          </p>
        </div>
        <div className={styles.section}>
          <h2>4. E-Posta ile İletişim</h2>
          <p>
            Bize e-posta veya iletişim formu aracılığıyla başvuru iletirseniz, formda sağladığınız
            iletişim bilgileri de dahil olmak üzere tüm bilgileriniz, başvurunuzu işleme ve olası
            takip soruları için saklanır. Bu verileri onayınız olmadan üçüncü taraflara iletmiyoruz.
          </p>
          <p>
            İşleme yalnızca onayınıza (GDPR Madde 6(1)(a)) dayanmaktadır. Onayınızı istediğiniz
            zaman geri alabilirsiniz. Geri alım öncesindeki işlemlerin hukuki geçerliliği etkilenmez.
          </p>
        </div>
        <div className={styles.section}>
          <h2>5. Veri Aktarımı</h2>
          <p>
            Kişisel verilerinizi aşağıda belirtilen durumlar dışında üçüncü taraflara aktarmıyoruz:
            açık onayınızın bulunması, sözleşme ilişkisinin yürütülmesi için zorunlu olması, yasal
            bir yükümlülüğün yerine getirilmesi için gerekli olması veya meşru menfaatlerimizin
            korunması için gerekli olması ve veri paylaşımına karşı baskın bir menfaatinizin
            bulunmadığı durumlarda.
          </p>
        </div>
        <div className={styles.section}>
          <h2>6. Çerezler</h2>
          <p>
            Web sitemiz, teknik açıdan zorunlu oturum çerezlerinin ötesinde çerez kullanmamaktadır.
            Teknik zorunlu çerezler web sitesinin temel işlevlerini sağlamak için kullanılır ve
            tarayıcı oturumu sona erdiğinde silinir.
          </p>
        </div>
        <div className={styles.section}>
          <h2>7. Haklarınız</h2>
          <p>Bizde saklanan verilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
          <p><strong>Erişim hakkı (Md. 15):</strong> Tarafımızca işlenen kişisel verileriniz hakkında bilgi talep etme hakkınız vardır.</p>
          <p><strong>Düzeltme hakkı (Md. 16):</strong> Yanlış veya eksik kişisel verilerinizin derhal düzeltilmesini talep etme hakkınız vardır.</p>
          <p><strong>Silme hakkı (Md. 17):</strong> Kişisel verilerinizin silinmesini talep etme hakkınız vardır; ancak işleme ifade özgürlüğünün kullanımı, yasal bir yükümlülüğün yerine getirilmesi veya hukuki taleplerin ileri sürülmesi için zorunlu ise bu hak uygulanmayabilir.</p>
          <p><strong>İşlemenin kısıtlanması hakkı (Md. 18):</strong> Kişisel verilerinizin işlenmesinin kısıtlanmasını talep etme hakkınız vardır.</p>
          <p><strong>Veri taşınabilirliği hakkı (Md. 20):</strong> Kişisel verilerinizi yapılandırılmış, yaygın kullanılan ve makine tarafından okunabilir bir formatta alma hakkınız vardır.</p>
          <p><strong>İtiraz hakkı (Md. 21):</strong> Özel durumunuzdan kaynaklanan gerekçelerle kişisel verilerinizin işlenmesine her zaman itiraz etme hakkınız vardır.</p>
          <p>Bu hakları kullanmak için lütfen şu adrese başvurun: <a href="mailto:ajanskoeln@gmail.com">ajanskoeln@gmail.com</a></p>
        </div>
        <div className={styles.section}>
          <h2>8. Denetim Makamına Şikâyet Hakkı</h2>
          <p>Kişisel verilerinizin işlenmesiyle ilgili bir veri koruma denetim makamına şikâyette bulunma hakkınız vardır. Aşağı Saksonya (Niedersachsen) için yetkili makam:</p>
          <address>
            <p>
              Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5<br />
              30159 Hannover<br />
              <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer">www.lfd.niedersachsen.de</a>
            </p>
          </address>
        </div>
        <div className={styles.section}>
          <h2>9. Veri Güvenliği</h2>
          <p>
            Web sitemizde, tarayıcınızın desteklediği en yüksek şifreleme düzeyiyle SSL şifrelemesi
            kullanılmaktadır. Verilerinizi manipülasyon, kayıp, imha veya yetkisiz erişime karşı
            korumak için uygun teknik ve organizasyonel güvenlik önlemleri almaktayız.
          </p>
        </div>
        <div className={styles.section}>
          <h2>10. Gizlilik Politikasının Güncellenmesi</h2>
          <p>
            Bu gizlilik politikası Mayıs 2025 itibarıyla geçerlidir. Web sitemizin geliştirilmesi veya
            yasal gerekliliklerin değişmesi nedeniyle bu politikanın güncellenmesi gerekebilir.
            Güncel versiyona her zaman bu sayfadan ulaşılabilir ve yazdırılabilir.
          </p>
        </div>
      </div>
    </>
  )
}

export function DatenschutzPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { lang } = useLang()

  return (
    <div className={styles.root}>
      <SeoHead page="datenschutz" />
      <a className="skip" href="#main-content">
        {lang === 'tr' ? 'İçeriğe geç' : lang === 'en' ? 'Skip to content' : 'Zum Inhalt springen'}
      </a>
      <Header />
      <main className={styles.main} id="main-content">
        {lang === 'en' ? <EnDatenschutz /> : lang === 'tr' ? <TrDatenschutz /> : <DeDatenschutz />}
      </main>
      <Footer />
    </div>
  )
}
