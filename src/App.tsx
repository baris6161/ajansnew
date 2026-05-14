import { Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { SeoHead } from './components/SeoHead'
import { LangProvider } from './context/lang'
import { AboutSection } from './components/AboutSection'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PartnerTrust } from './components/PartnerTrust'
import { Process } from './components/Process'
import { SectionReveal } from './components/SectionReveal'
import { Services } from './components/Services'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { TrustBar } from './components/TrustBar'
import { WhyUs } from './components/WhyUs'
import { ImpressumPage } from './pages/ImpressumPage'
import { DatenschutzPage } from './pages/DatenschutzPage'
import { NotFoundPage } from './pages/NotFoundPage'

function HomePage() {
  return (
    <div className={styles.page}>
      <SeoHead page="home" />
      <a className="skip" href="#main-content">
        Zum Inhalt springen
      </a>
      <Header />
      <main className={styles.main} id="main-content">
        <Hero />
        <SectionReveal>
          <TrustBar />
        </SectionReveal>
        <SectionReveal>
          <PartnerTrust />
        </SectionReveal>
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
        <SectionReveal>
          <Services />
        </SectionReveal>
        <SectionReveal>
          <WhyUs />
        </SectionReveal>
        <SectionReveal>
          <Process />
        </SectionReveal>
        <SectionReveal>
          <Testimonials />
        </SectionReveal>
        <SectionReveal>
          <Faq />
        </SectionReveal>
        <SectionReveal>
          <CtaBand />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LangProvider>
  )
}
