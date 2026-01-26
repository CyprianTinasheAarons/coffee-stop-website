import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Logo from './Logo'

interface NavigationProps {
  onMenuToggle: () => void
}

export default function Navigation({ onMenuToggle }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['menu', 'order', 'find']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
      // If at top of page, no section is active
      if (window.scrollY < 300) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#menu', id: 'menu', label: 'MENU' },
    { href: '#order', id: 'order', label: 'ORDER' },
    { href: '#find', id: 'find', label: 'FIND US' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-coffee-dark/95 backdrop-blur-sm'
          : ''
        }`}
      style={{
        background: scrolled
          ? 'rgba(13, 9, 6, 0.95)'
          : 'linear-gradient(to bottom, rgba(13,9,6,0.95) 0%, transparent 100%)',
      }}
    >
      <div className="flex justify-between items-center py-5 sm:py-6 px-6 sm:px-8 lg:px-12">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ opacity: 1 }}
              className={`font-sans text-[0.85rem] tracking-[0.05em] no-underline transition-all relative pb-1 ${activeSection === link.id
                  ? 'text-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gold'
                  : 'text-cream/70 hover:text-cream after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-cream/50 after:transition-all after:duration-300'
                }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={onMenuToggle}
          className="md:hidden p-2 text-gold hover:text-gold-light transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </motion.nav>
  )
}
