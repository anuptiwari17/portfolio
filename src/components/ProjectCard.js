'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project, index = 0, linkTo, showTechLimit = 6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group w-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-300 dark:border-gray-800 overflow-hidden hover:border-gray-800 dark:hover:border-gray-700 transition-all duration-300"
    >
      <Link href={linkTo || '#'} className="block">
        <div className="p-6">
          {/* Logo and Title Section */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                //src={`/logo/${project.id}.png`}
                src={`/logo/dp.jpg`}
                alt={project.title}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-4">
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, showTechLimit).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > showTechLimit && (
              <span className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
                +{project.technologies.length - showTechLimit}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {project.liveLink && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(project.liveLink, '_blank')
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                <ExternalLink size={14} />
                <span>Website</span>
              </button>
            )}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(project.githubLink, '_blank')
              }}
              className="flex items-center gap-1.5 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <Github size={14} />
              <span>Source</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}