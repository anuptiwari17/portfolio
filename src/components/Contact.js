'use client'

import { socialLinks } from './Navbar'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const TwitterXIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socials = socialLinks;

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold text-black dark:text-white mb-4"
            style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}
          >
            Reach Out to Me
          </h2>
          <p
            className="text-lg text-gray-800 dark:text-gray-400"
            style={{ fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif' }}
          >
            Let's chat about code, design, or anything in between
          </p>
        </motion.div>

        {/* Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 lg:w-1/2"
          >
            <div className="group relative p-6 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-blue-500 transition-all duration-300 bg-gray-50 dark:bg-gray-900 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Mail Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 p-4 bg-gray-200 dark:bg-gray-800 rounded-full"
                >
                  <Mail size={32} className="text-blue-500" />
                </motion.div>

                {/* Email */}
                <h3
                  className="text-xl font-medium text-black dark:text-white mb-2"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Shoot me an email
                </h3>
                <motion.a
                  href="mailto:anuptiwari050@gmail.com"
                  className="text-xl text-blue-600 dark:text-blue-400 font-mono hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  anuptiwari050@gmail.com
                </motion.a>

                {/* Note */}
                <p
                  className="mt-4 text-gray-700 dark:text-gray-400 text-sm"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  (I’m just a text away, and usually not too far from my keyboard.)
                </p>

                {/* Social Icons */}
                <div className="mt-6 flex items-center gap-6">
                  {socials.map((link) => (
                    <motion.div
                      key={link.name}
                      className="group relative"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-1"
                      >
                        <link.icon
                          size={20}
                          className="text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors"
                        />
                      </a>
                      {/* <motion.span
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ y: -5 }}
                      >
                        {link.name}
                      </motion.span> */}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-black rounded-xl dark:from-blue-500/10 dark:to-gray-900"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
