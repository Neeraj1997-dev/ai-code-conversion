import Hero from './components/Hero'
import ConversionCards from './components/ConversionCards'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Dashboard from './components/Dashboard'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow">
        <Hero />
        <ConversionCards />
        <Features />
        <HowItWorks />
        <Dashboard />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

