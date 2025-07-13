'use client'

import { motion } from 'framer-motion'
import { getAllProjects } from '@/data/projects'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ProjectCard from './ProjectCard'

export default function ProjectsPageSystem() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4" 
                style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
              All Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium"
               style={{ fontFamily: 'Plus Jakarta Sans,Inter, system-ui, sans-serif' }}>
              Explore my complete portfolio of projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                linkTo={`/projects/${project.id}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}