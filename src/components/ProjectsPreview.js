'use client'

import { getFeaturedProjects } from '@/data/projects'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

const projects = getFeaturedProjects()

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-18">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4" 
              style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
            Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium"
             style={{ fontFamily: 'Plus Jakarta Sans,Inter, system-ui, sans-serif' }}>
            Checkout my latest work
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative inline-block rounded-lg p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-70 group-hover:opacity-90 animate-pulse"></div>
            <Link
              href="/projects"
              className="relative flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-[0.4rem] font-medium transition-all duration-300 group-hover:bg-opacity-90"
            >
              View More Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}