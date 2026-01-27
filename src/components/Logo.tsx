import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.a
      href="#"
      className="flex items-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <img
        src="/landscape_logo.svg"
        alt="Coffee Stop"
        className="h-14 sm:h-16 w-auto max-w-[200px] sm:max-w-none"
      />
    </motion.a>
  )
}
