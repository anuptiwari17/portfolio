'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Database, Code, Zap, Users, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    icon: Database,
    title: 'Task Management System',
    description: 'Full-stack task app with real-time collaboration built with React and Node.js.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    id: 2,
    icon: Zap,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with payment integration and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    id: 3,
    icon: Code,
    title: 'Real-time Chat App',
    description: 'Scalable chat platform with multiple rooms and file sharing features.',
    technologies: ['React', 'Socket.io', 'Redis', 'AWS S3'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 4,
    icon: Users,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard with data visualization and performance tracking.',
    technologies: ['Next.js', 'Chart.js', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-400 to-red-500'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-orange-400/10 to-transparent transition-opacity duration-300 pointer-events-none" />
              
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-3`}>
                <project.icon className="text-white" size={20} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all text-xs font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink size={14} />
                  Live
                </motion.a>
                
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-all text-xs font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github size={14} />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full font-medium hover:from-orange-500 hover:to-red-600 transition-all duration-300 text-sm flex items-center gap-1 mx-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}