'use client'

import { getAllExperiences } from '@/data/experience'

export default function Experience() {
  const experiences = getAllExperiences()

  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="space-y-20">
          {experiences.map((exp) => (
            <div key={exp.id} className="text-left">

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-8 text-gray-600 dark:text-gray-400">
                <span className="font-medium text-orange-600 dark:text-orange-500">
                  {exp.company}
                </span>
                <span className="text-sm">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description.map((line, i) => (
                  <li key={i} className="flex">
                    <span className="mr-4 text-orange-500">•</span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}