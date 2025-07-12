'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-gray-200 dark:border-gray-800 py-6"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center mb-2">
            <span>© {currentYear} Anup Tiwari</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="mx-1 text-red-500" size={14} /> and ☕
            </span>
          </div>
          <p className="text-xs">All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  )
}