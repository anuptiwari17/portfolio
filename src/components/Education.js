'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Education() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2" 
              style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
            Education
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400"
             style={{ fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif' }}>
            My academic journey
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 lg:w-1/2"
          >
            <div className="relative group">
              <div className="glass-effect bg-white dark:bg-black rounded-xl p-5 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-400/50 relative overflow-hidden">
                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/30 pointer-events-none transition-all duration-500 -z-10"></div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600 group-hover:border-blue-400 transition-colors duration-300">
                      <Image
                        src="/nitj.png"
                        alt="Dr B R National Institute of Technology"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Dr B R National Institute of Technology
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 whitespace-nowrap group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        2024 - 2028
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                       style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Bachelor of Technology in Information Technology
                    </p>
                  </div>
                </div>
                
                {/* Subtle corner accents */}
                <div className="absolute top-2 right-2 h-2 w-2 border-t border-r border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}