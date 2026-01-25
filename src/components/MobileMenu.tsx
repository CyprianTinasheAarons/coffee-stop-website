import { motion } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import Logo from './Logo'

const WHATSAPP_LINK = 'https://wa.me/27600200670?text=Hi%20I%20would%20like%20to%20place%20an%20order'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const menuItems = [
    { label: 'Menu', href: '#menu' },
    { label: 'Order', href: '#order' },
    { label: 'Find Us', href: '#find' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onClose()

    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    }, 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-coffee-dark"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="h-full flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center py-5 px-6 border-b border-gold/20">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 text-gold hover:text-gold-light transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items - Left aligned */}
        <nav className="flex-1 flex flex-col justify-center gap-6 p-8">
          {menuItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-4xl sm:text-5xl font-light italic text-cream hover:text-gold transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Footer - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 border-t border-gold/20"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-sans text-sm tracking-wider transition-colors rounded-full mb-4"
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </a>
          <p className="font-display text-xl tracking-widest text-gold mb-2">
            +27 600 200 670
          </p>
          <p className="font-sans text-sm text-cream/50">
            Melville, Johannesburg
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
