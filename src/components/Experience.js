'use client'

import { motion } from 'framer-motion'
import { getAllExperiences } from '@/data/Experience'

export default function Experience() {
  const experiences = getAllExperiences()

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience
          </h2>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-orange-500"></div>

                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                    <h3
                      className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exp.company}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-4"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {exp.duration}
                    </span>
                  </div>
                  <p
                    className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400"
                     style={{ fontFamily: "'Inter', sans-serif" }}>
                    {exp.type}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6">
                  {exp.description.map((point, i) => (
                    <p
                      key={i}
                      className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {point}
                    </p>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded"
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