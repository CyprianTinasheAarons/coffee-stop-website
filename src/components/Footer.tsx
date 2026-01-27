import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/27600200670?text=Hi%20I%20would%20like%20to%20place%20an%20order'

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-coffee-dark border-t border-gold/10 relative overflow-hidden">
      {/* Decorative coffee bean */}
      <motion.svg
        className="absolute top-8 right-[10%] opacity-[0.06] w-20 h-20 hidden sm:block"
        viewBox="0 0 100 100"
        animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="#c4a574" strokeWidth="2" transform="rotate(30 50 50)" />
        <path d="M30 50 Q50 35 70 50" fill="none" stroke="#c4a574" strokeWidth="1.5" transform="rotate(30 50 50)" />
      </motion.svg>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Left side - Logo & WhatsApp */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/landscape_logo.svg"
                alt="Coffee Stop"
                className="h-16 w-auto"
              />
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-sans text-sm tracking-wider transition-colors rounded-full w-fit"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </motion.a>
          </div>

          {/* Right side - Contact & Copyright */}
          <div className="flex flex-col items-start sm:items-end gap-4">
            {/* Phone Number */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-2xl tracking-widest text-gold/80 hover:text-gold transition-colors"
            >
              +27 600 200 670
            </motion.a>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-xs text-cream/40"
            >
              © 2026 Coffee Stop. Melville, Johannesburg.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
