'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project, index = 0, linkTo, showTechLimit = 6 }) {
  const handleLinkClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto mb-8"
    >
      <div className="group relative">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/30 dark:hover:shadow-gray-800/30 group-hover:border-blue-400/50 relative">
          
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/30 pointer-events-none transition-all duration-500 -z-10"></div>
          
          {/* Subtle corner accents */}
          <div className="absolute top-2 right-2 h-2 w-2 border-t border-r border-transparent group-hover:border-blue-400 transition-all duration-500 z-10"></div>
          <div className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-transparent group-hover:border-blue-400 transition-all duration-500 z-10"></div>
          
          <div className="relative flex bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            {/* Image Section */}
            <div className="relative w-60 h-[160px] flex-shrink-0 overflow-hidden">
              <Link href={linkTo || '#'} className="block h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={240}
                  height={200}
                  quality={90}
                  className="w-full h-full object-cover"
                />
              </Link>
              
              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {project.liveLink && (
                  <button
                    onClick={(e) => {
                      handleLinkClick(e)
                      window.open(project.liveLink, '_blank')
                    }}
                    className="p-2.5 bg-white/95 dark:bg-gray-800/95 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                  >
                    <ExternalLink size={16} />
                  </button>
                )}
                <button
                  onClick={(e) => {
                    handleLinkClick(e)
                    window.open(project.githubLink, '_blank')
                  }}
                  className="p-2.5 bg-white/95 dark:bg-gray-800/95 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                >
                  <Github size={16} />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <Link href={linkTo || '#'} className="flex-1 min-w-0">
              <div className="px-4 py-3 flex flex-col gap-4">
                
                {/* Header */}
                <div className="flex-1 space-y-1">
                  <h3
                    className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, showTechLimit).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > showTechLimit && (
                      <span
                        className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-md"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        +{project.technologies.length - showTechLimit}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}