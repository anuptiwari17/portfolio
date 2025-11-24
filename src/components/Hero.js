'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6 text-center font-geist">

        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-orange-500/10"
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

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          Anup Tiwari
        </motion.h1>

        {/* About — small, calm, codish */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed"
        >
          hi, i’m anup, 18. building real projects, learning fast,
          exploring cs from the ground up, want to build something? let’s talk
        </motion.p>

        {/* Buttons — smaller, cleaner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center text-sm"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:shadow-md transition-shadow"
          >
            view work
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            say hello
          </a>
        </motion.div>

      </div>
    </section>
  )
}