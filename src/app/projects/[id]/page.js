'use client'

import { use } from 'react'
import { getProjectById } from '@/data/projects'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft, Calendar, Code, Users, Star } from 'lucide-react'
import Link from 'next/link'

export default function ProjectDetailPage({ params }) {
    const { id } = use(params)
  const project = getProjectById(params.id)
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6 }}
      className="py-12 min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
              {project.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'Live' 
                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}>
              {project.status}
            </span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6"
             style={{ fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{project.team}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={16} />
              <span>{project.category}</span>
            </div>
          </div>

          <div className="flex gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <ExternalLink size={16} />
                View Live Project
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <Github size={16} />
              View Source Code
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
               style={{ fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif' }}>
              {project.overview}
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
              Key Features
            </h3>
            <ul className="space-y-2 mb-8">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <Star size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
              Challenges & Solutions
            </h3>
            <ul className="space-y-2 mb-8">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: 'Fira Code, Inter, system-ui, sans-serif' }}>
                Key Learnings
              </h3>
              <ul className="space-y-2">
                {project.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <span className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}