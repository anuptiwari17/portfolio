'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCard({ project, index = 0, linkTo, showTechLimit = 3 }) {
  const handleLinkClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20"
    >
      <div className="h-full flex flex-col">
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <Link href={linkTo || '#'} className="block h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="absolute top-4 right-4 flex gap-2">
            {project.liveLink && (
              <button
                onClick={(e) => {
                  handleLinkClick(e);
                  window.open(project.liveLink, '_blank');
                }}
                className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 backdrop-blur-sm"
                title="View Live Project"
              >
                <ExternalLink size={16} />
              </button>
            )}
            
            <button
              onClick={(e) => {
                handleLinkClick(e);
                window.open(project.githubLink, '_blank');
              }}
              className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 backdrop-blur-sm"
              title="View Source Code"
            >
              <Github size={16} />
            </button>
          </div>
        </div>

        <Link href={linkTo || '#'} className="flex-grow">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif' }}>
              {project.description}
            </p>

            <div className="mb-4">
              <ul className="space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-start font-medium"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.technologies.slice(0, showTechLimit).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > showTechLimit && (
                <span className="px-3 py-1 text-xs font-bold text-gray-500 dark:text-gray-400"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  +{project.technologies.length - showTechLimit} more
                </span>
              )}
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}