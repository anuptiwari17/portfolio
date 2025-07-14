'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project, index = 0, linkTo, showTechLimit = 3 }) {
  const handleLinkClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
    >
      <div className="h-full flex flex-col">
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <Link href={linkTo || '#'} className="block h-full">
            <Image
              src={project.image}
              alt={project.title}
              width={320}
              height={320}
              quality={100}
              className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>
          <div className="absolute top-3 right-3 flex gap-2">
            {project.liveLink && (
              <button
                onClick={(e) => {
                  handleLinkClick(e)
                  window.open(project.liveLink, '_blank')
                }}
                className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 backdrop-blur-sm"
              >
                <ExternalLink size={16} />
              </button>
            )}
            <button
              onClick={(e) => {
                handleLinkClick(e)
                window.open(project.githubLink, '_blank')
              }}
              className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 backdrop-blur-sm"
            >
              <Github size={16} />
            </button>
          </div>
        </div>

        <Link href={linkTo || '#'} className="flex-grow">
          <div className="p-3 h-full flex flex-col">
            <h3
              className="text-lg font-semibold text-gray-900 dark:text-white mb-1"
              style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}
            >
              {project.title}
            </h3>

            <p
              className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2 font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif' }}
            >
              {project.description}
            </p>

            <div className="mb-2">
              <ul className="space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-xs text-gray-500 dark:text-gray-400 flex items-start font-medium space-x-2"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.technologies.slice(0, showTechLimit).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-600"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > showTechLimit && (
                <span
                  className="px-2 py-0.5 text-[10px] font-semibold text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  +{project.technologies.length - showTechLimit} more
                </span>
              )}
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}