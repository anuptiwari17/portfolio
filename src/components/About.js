'use client'

import { motion } from 'framer-motion'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
  'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'Docker', 'AWS', 
  'Git', 'Linux', 'Tailwind CSS', 'Express'
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-lg mx-auto">
            Tools and technologies I work with on a daily basis
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: "-30px" }}
                className="relative group"
              >
                <div className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center transition-all duration-300">
                  {skill}
                </div>
                <motion.div 
                  className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-orange-400/30 pointer-events-none transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4 px-4">
              <span>Continuously learning and adding new technologies</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}