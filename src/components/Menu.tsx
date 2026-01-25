import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Category = 'coffee' | 'iced' | 'baked' | 'non_coffee'

interface MenuItem {
  name: string
  desc: string
  price: string
}

const menu: Record<Category, MenuItem[]> = {
  coffee: [
    { name: 'Espresso', desc: 'Rich, concentrated coffee shot', price: 'R25' },
    { name: 'Americano', desc: 'Espresso with hot water', price: 'R32' },
    { name: 'Cappuccino', desc: 'Espresso with steamed milk and foam', price: 'R35' },
    { name: 'Latte', desc: 'Espresso with steamed milk', price: 'R35' },
    { name: 'Flat White', desc: 'Espresso with silky microfoam', price: 'R35' },
    { name: 'Mocha', desc: 'Espresso with chocolate and milk', price: 'R38' },
    { name: 'Cortado', desc: 'Espresso cut with warm milk', price: 'R30' },
    { name: 'Macchiato', desc: 'Espresso stained with milk foam', price: 'R28' },
  ],
  iced: [
    { name: 'Iced Latte', desc: 'Chilled espresso with cold milk', price: 'R38' },
    { name: 'Iced Americano', desc: 'Chilled espresso with cold water', price: 'R32' },
    { name: 'Cold Brew', desc: 'Slow-steeped cold brew coffee', price: 'R40' },
    { name: 'Affogato', desc: 'Espresso over vanilla ice cream', price: 'R42' },
    { name: 'Matcha Latte', desc: 'Creamy matcha with steamed milk', price: 'R42' },
  ],
  baked: [
    { name: 'Butter Croissant', desc: 'Flaky buttery croissant', price: 'R28' },
    { name: 'Chocolate Croissant', desc: 'Croissant filled with chocolate', price: 'R32' },
    { name: 'Banana Bread', desc: 'Moist homemade banana bread slice', price: 'R30' },
    { name: 'Muffin', desc: 'Fresh baked (blueberry or chocolate)', price: 'R32' },
  ],
  non_coffee: [
    { name: 'Hot Chocolate', desc: 'Rich Belgian hot chocolate', price: 'R35' },
    { name: 'Chai Latte', desc: 'Spiced chai with steamed milk', price: 'R42' },
    { name: 'Rooibos Tea', desc: 'South African red bush tea', price: 'R25' },
    { name: 'English Breakfast', desc: 'Classic black tea', price: 'R25' },
  ],
}

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'coffee', label: 'Coffee', icon: '☕' },
  { id: 'iced', label: 'Iced', icon: '🧊' },
  { id: 'baked', label: 'Baked', icon: '🥐' },
  { id: 'non_coffee', label: 'Non-Coffee', icon: '🍵' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
  exit: {
    opacity: 0,
    x: 30,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('coffee')

  return (
    <section
      id="menu"
      className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-coffee-dark via-coffee-medium to-coffee-dark relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-gold/5 rounded-full"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 border border-gold/5 rounded-full"
        animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header - Left aligned */}
        <div className="mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <motion.p
              className="font-sans text-xs tracking-[0.3em] text-gold mb-3 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              OUR OFFERINGS
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The Menu
            </motion.h2>
          </motion.div>

          {/* Category tabs - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-hide"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative font-sans text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap px-3 sm:px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'text-coffee-dark bg-gold'
                    : 'text-cream/60 hover:text-cream bg-gold/0 hover:bg-gold/10'
                }`}
              >
                <span className="hidden sm:inline mr-1">{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gold/10 rounded-lg overflow-hidden"
          >
            {menu[activeCategory].map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="bg-coffee-dark p-6 sm:p-8 flex justify-between items-center gap-4 group cursor-default relative overflow-hidden"
                whileHover={{ backgroundColor: 'rgba(196, 165, 116, 0.08)' }}
              >
                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full"
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative transform transition-transform duration-300 group-hover:translate-x-2">
                  <motion.h3
                    className="text-lg sm:text-xl font-normal mb-1 sm:mb-2"
                    whileHover={{ color: '#c4a574' }}
                  >
                    {item.name}
                  </motion.h3>
                  <p className="font-sans text-xs sm:text-sm text-cream/50">
                    {item.desc}
                  </p>
                </div>

                <motion.span
                  className="relative font-display text-xl sm:text-2xl text-gold tracking-wider shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {item.price}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Extras note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-left text-cream/40 font-sans text-xs sm:text-sm mt-6 sm:mt-8"
        >
          Add-ons: Extra shot R8 | Oat/Almond milk R6 | Decaf R6
        </motion.p>
      </div>
    </section>
  )
}
