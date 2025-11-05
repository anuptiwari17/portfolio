'use client'

import { motion } from 'framer-motion'
import { getAllExperiences } from '@/data/experience'

export default function Experience() {
  const experiences = getAllExperiences()

  return (
    <section id="experience" className="pt-16 pb-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 md:p-8"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3
                      className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exp.company}
                    </h3>
                    <span 
                      className="text-sm text-gray-600 dark:text-gray-400"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <p
                      className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exp.role}
                    </p>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <p 
                      className="text-sm text-gray-600 dark:text-gray-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exp.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6">
                  {exp.description.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-orange-500 mt-1.5 flex-shrink-0">•</span>
                      <p
                        className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs md:text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}