import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Order from './components/Order'
import Location from './components/Location'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import './index.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-coffee-dark font-serif text-cream overflow-hidden">
      <div className="grain-overlay" />

      <Navigation onMenuToggle={() => setMobileMenuOpen(true)} />

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <Menu />
        <Order />
        <Location />
      </main>

      <Footer />
    </div>
  )
}

export default App
