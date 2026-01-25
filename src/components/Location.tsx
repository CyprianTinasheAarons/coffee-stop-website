import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=18+Main+Rd+Melville+Johannesburg+South+Africa'
const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d28.0!3d-26.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMelville%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1600000000000!5m2!1sen!2sza'

export default function Location() {
  return (
    <section
      id="find"
      className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-coffee-dark to-coffee-medium relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-[10%] w-40 h-40 border border-gold/10 rounded-full hidden sm:block"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-[20%] w-32 h-32 border border-gold/5 rounded-full hidden sm:block"
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Header - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <p className="font-sans text-xs tracking-[0.3em] text-gold mb-3 sm:mb-4">
            FIND US
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light italic mb-4">
            Melville Corner
          </h2>
          <div className="flex items-center gap-2 text-cream/70">
            <MapPin className="w-4 h-4 text-gold" />
            <p className="text-base sm:text-lg font-light">
              18 Main Rd, Melville, Johannesburg
            </p>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden border border-gold/20">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Stop Location"
              className="absolute inset-0"
            />
            {/* Gold overlay for brand consistency */}
            <div className="absolute inset-0 bg-gold/10 pointer-events-none mix-blend-overlay" />
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />
        </motion.div>

        {/* Get Directions Button - Left aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-left"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold hover:bg-gold hover:text-coffee-dark transition-all font-sans text-sm tracking-wider"
          >
            <ExternalLink className="w-4 h-4" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
