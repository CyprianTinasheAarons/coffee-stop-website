import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.a
      href="#"
      className="flex items-center gap-2 sm:gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 100 100">
        {/* Steam wisps */}
        <motion.path
          d="M40 25 Q45 15 40 5"
          fill="none"
          stroke="#c4a574"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.path
          d="M55 25 Q60 15 55 5"
          fill="none"
          stroke="#c4a574"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        {/* Cup body */}
        <motion.rect
          x="25" y="35" width="50" height="45" rx="5"
          fill="none"
          stroke="#c4a574"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />
        {/* Handle */}
        <motion.path
          d="M75 45 Q88 45 88 60 Q88 75 75 75"
          fill="none"
          stroke="#c4a574"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        {/* Clock face circle */}
        <motion.circle
          cx="50" cy="57" r="12"
          fill="none"
          stroke="#c4a574"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        {/* Clock hands - minute hand (vertical) */}
        <motion.line
          x1="50" y1="57" x2="50" y2="50"
          stroke="#c4a574"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        {/* Clock hands - hour hand (horizontal) */}
        <motion.line
          x1="50" y1="57" x2="56" y2="57"
          stroke="#c4a574"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        />
      </svg>
      <span className="font-display text-[1.2rem] sm:text-[1.4rem] tracking-[0.125em] text-gold">
        <span className="text-cream/70">MELVILLE.</span> COFFEE STOP
      </span>
    </motion.a>
  )
}
