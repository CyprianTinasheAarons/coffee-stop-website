import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const WHATSAPP_LINK = 'https://wa.me/27600200670?text=Hi%20I%20would%20like%20to%20place%20an%20order'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        style={{ y }}
        className="absolute top-[10%] right-[5%] sm:right-[15%] w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border border-gold/10 rounded-full"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute top-[15%] right-[10%] sm:right-[20%] w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 border border-gold/5 rounded-full"
        animate={{ scale: [1.05, 1, 1.05], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating coffee beans */}
      <FloatingBean className="absolute top-[20%] left-[5%]" delay={0} />
      <FloatingBean className="absolute top-[60%] left-[8%]" delay={1.5} size={60} />
      <FloatingBean className="absolute top-[30%] right-[25%]" delay={0.8} size={50} rotate={45} />
      <FloatingBean className="absolute bottom-[25%] right-[8%]" delay={2} size={70} rotate={-20} />
      <FloatingBean className="absolute bottom-[35%] left-[15%]" delay={1} size={40} rotate={30} />

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left aligned by default */}
          <motion.div style={{ opacity }} className="text-left order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-4 sm:mb-6"
            >
              MELVILLE, JOHANNESBURG
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6 sm:mb-8"
            >
              <span className="italic">Coffee</span>
              <br />
              <span className="text-gold font-medium not-italic">on the Go</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-cream/70 font-light leading-relaxed max-w-md mb-8 sm:mb-12"
            >
              Scan. Order. Collect. Experience the future of coffee ordering
              through WhatsApp — your perfect brew is just a conversation away.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            >
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(196,165,116,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-4 bg-gold text-coffee-dark font-sans text-sm tracking-widest font-medium text-center transition-all hover:bg-gold-light"
              >
                ORDER NOW
              </motion.a>
              <a
                href="#menu"
                className="font-sans text-sm tracking-wider text-cream/70 border-b border-cream/30 pb-1 hover:text-cream hover:border-cream transition-colors"
              >
                View Menu
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Coffee Cup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ opacity }}
            className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 py-8 lg:py-0"
          >
            <AnimatedCoffeeCup />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Left aligned on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-8 sm:bottom-12 left-6 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-start sm:items-center gap-3"
      >
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-cream/50">SCROLL</span>
        <motion.div
          className="w-[1px] h-10 sm:h-12 bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function AnimatedCoffeeCup() {
  return (
    <div className="relative">
      {/* Glow effect behind cup */}
      <motion.div
        className="absolute inset-0 bg-gold/5 blur-3xl rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Coffee cup container */}
      <motion.div
        className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[450px] bg-gradient-to-br from-coffee-medium to-coffee-light flex items-center justify-center overflow-hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Coffee Cup SVG */}
        <svg className="w-40 sm:w-48 lg:w-56" viewBox="0 0 200 280">
          {/* Steam - Multiple animated wisps */}
          <g>
            <motion.path
              d="M60 70 Q70 50 60 25 Q50 0 60 -20"
              fill="none"
              stroke="rgba(196,165,116,0.4)"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ y: [0, -20], opacity: [0, 0.4, 0.4, 0], scale: [0.8, 1.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.path
              d="M100 60 Q115 35 100 10 Q85 -15 100 -35"
              fill="none"
              stroke="rgba(196,165,116,0.3)"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{ y: [0, -25], opacity: [0, 0.3, 0.3, 0], scale: [0.9, 1.3] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.path
              d="M140 70 Q130 45 140 20 Q150 -5 140 -25"
              fill="none"
              stroke="rgba(196,165,116,0.35)"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ y: [0, -22], opacity: [0, 0.35, 0.35, 0], scale: [0.85, 1.25] }}
              transition={{ duration: 2.8, delay: 1, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.circle cx="75" cy="40" r="3" fill="rgba(196,165,116,0.2)"
              animate={{ y: [0, -30], opacity: [0, 0.3, 0], scale: [0.5, 1.5] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            />
            <motion.circle cx="125" cy="45" r="2.5" fill="rgba(196,165,116,0.2)"
              animate={{ y: [0, -25], opacity: [0, 0.25, 0], scale: [0.5, 1.3] }}
              transition={{ duration: 1.8, delay: 0.8, repeat: Infinity }}
            />
          </g>

          {/* Cup body */}
          <motion.path
            d="M40 80 L30 240 Q30 260 50 260 L150 260 Q170 260 170 240 L160 80 Z"
            fill="rgba(196,165,116,0.1)"
            stroke="#c4a574"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Handle */}
          <motion.path
            d="M160 100 Q200 100 200 150 Q200 200 160 200"
            fill="none"
            stroke="#c4a574"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Coffee liquid */}
          <motion.path
            d="M38 120 L32 230 Q32 248 50 248 L150 248 Q168 248 168 230 L162 120 Z"
            fill="rgba(139,107,80,0.4)"
            animate={{
              d: [
                "M38 120 L32 230 Q32 248 50 248 L150 248 Q168 248 168 230 L162 120 Z",
                "M38 118 L32 230 Q32 248 50 248 L150 248 Q168 248 168 230 L162 122 Z",
                "M38 120 L32 230 Q32 248 50 248 L150 248 Q168 248 168 230 L162 120 Z",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Foam */}
          <motion.ellipse cx="100" cy="85" rx="58" ry="12" fill="rgba(245,235,224,0.2)"
            animate={{ ry: [12, 14, 12], opacity: [0.2, 0.25, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Latte art heart */}
          <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }}>
            <path d="M100 75 C95 70 85 70 85 80 C85 90 100 100 100 100 C100 100 115 90 115 80 C115 70 105 70 100 75" fill="rgba(196,165,116,0.3)" />
          </motion.g>

          {/* Shine */}
          <motion.line x1="50" y1="100" x2="55" y2="200" stroke="rgba(245,235,224,0.1)" strokeWidth="3" strokeLinecap="round"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30" />

        {/* Sparkles */}
        <motion.div className="absolute top-8 right-8 w-2 h-2 bg-gold/40 rounded-full"
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div className="absolute top-16 right-12 w-1.5 h-1.5 bg-gold/30 rounded-full"
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div className="absolute bottom-20 left-8 w-1 h-1 bg-gold/50 rounded-full"
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1.5 }}
        />
      </motion.div>
    </div>
  )
}

function FloatingBean({ className, delay = 0, size = 80, rotate = -30 }: { className?: string; delay?: number; size?: number; rotate?: number }) {
  return (
    <motion.svg
      className={`${className} opacity-[0.08] pointer-events-none`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      animate={{
        y: [0, -15, 0],
        rotate: [rotate, rotate + 10, rotate],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <ellipse
        cx="50" cy="50" rx="40" ry="25"
        fill="none"
        stroke="#c4a574"
        strokeWidth="2"
      />
      <path
        d="M30 50 Q50 35 70 50"
        fill="none"
        stroke="#c4a574"
        strokeWidth="1.5"
      />
    </motion.svg>
  )
}

