import { motion } from 'framer-motion'
import { QrCode, MessageCircle, CreditCard } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/27600200670?text=Hi%20I%20would%20like%20to%20place%20an%20order'

export default function Order() {
  const steps = [
    { num: '01', icon: QrCode, text: 'Scan the QR code with your phone' },
    { num: '02', icon: MessageCircle, text: 'Chat your order to our friendly bot' },
    { num: '03', icon: CreditCard, text: 'Collect & pay with card on pickup' },
  ]

  return (
    <section id="order" className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-coffee-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* QR Code - Left aligned on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-start lg:justify-center order-2 lg:order-1"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* QR Code with glow effect */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="shadow-[0_0_60px_rgba(196,165,116,0.2)] group-hover:shadow-[0_0_80px_rgba(196,165,116,0.3)] transition-shadow duration-300"
              >
                <img
                  src="/qr-code.png"
                  alt="Scan to order on WhatsApp"
                  className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
                />
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-sm tracking-widest text-cream bg-coffee-dark/80 px-4 py-2">
                  TAP TO ORDER
                </span>
              </div>
            </a>
          </motion.div>

          {/* Content - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 text-left"
          >
            <p className="font-sans text-xs tracking-[0.3em] text-gold mb-3 sm:mb-4">
              HOW TO ORDER
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light italic mb-6 sm:mb-8 leading-tight">
              Order via
              <br />
              <span className="text-gold not-italic font-medium">WhatsApp</span>
            </h2>

            <p className="text-base sm:text-lg text-cream/70 font-light leading-relaxed mb-8 sm:mb-10 max-w-md">
              Simply scan the QR code to open WhatsApp, chat your coffee order
              to our bot, then swing by to collect and pay with card on pickup.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-5 sm:gap-6 mb-10 sm:mb-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 sm:gap-5"
                >
                  <span className="font-display text-lg sm:text-xl text-gold/60 w-8">
                    {step.num}
                  </span>
                  <step.icon className="w-5 h-5 text-gold/60" />
                  <span className="font-sans text-sm sm:text-base text-cream/80">
                    {step.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Phone Number & Order Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6 sm:pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl sm:text-3xl tracking-widest text-gold hover:text-gold-light transition-colors"
              >
                +27 600 200 670
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-sans text-sm tracking-wider transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
