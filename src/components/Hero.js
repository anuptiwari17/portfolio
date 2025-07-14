'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden"
            >
              
              <Image 
                src="/profile-pic.jpg" 
                alt="Anup Tiwari" 
                width={100}
                height={100}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Anup Tiwari
            </h1>

            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Building systems that last and chasing ideas that matter. Drawn to{' '}
              <span className="text-orange-500 dark:text-orange-400 font-semibold">scale</span>, obsessed with{' '}
              <span className="text-orange-500 dark:text-orange-400 font-semibold">clarity</span>. Fast learner, deep thinker.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                href="#projects"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center text-sm"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work <ArrowRight className="ml-2" size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 text-sm" 
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}