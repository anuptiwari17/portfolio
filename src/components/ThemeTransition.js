'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeTransition({ x, y, onComplete }) {
  return (
    <AnimatePresence>
      {x !== null && y !== null && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
          initial={{ clipPath: `circle(0px at ${x}px ${y}px)` }}
          animate={{ clipPath: `circle(150% at ${x}px ${y}px)` }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onAnimationComplete={onComplete}
        >
          <div className="w-full h-full bg-white dark:bg-black transition-colors duration-300" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
