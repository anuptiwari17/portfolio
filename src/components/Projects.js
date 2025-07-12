'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Nucleo',
    description: 'Enterprise-grade employee management system with role-based access control and real-time task tracking.',
    technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'ExpressJS', 'Supabase'],
    highlights: [
      'Role-based access control system',
      'Real-time task analytics dashboard',
      'Secure authentication with bcrypt'
    ],
    image: '/nucleo.jpg',
    liveLink: 'https://nucleoorg.vercel.app',
    githubLink: 'https://github.com/anuptiwari17/nucleo'
  },
  {
    title: 'Cryptide',
    description: 'Comprehensive cryptocurrency platform delivering real-time market data, news, and analytics with multiple API integrations.',
    technologies: ['React.js', 'Tailwind CSS', 'RapidAPI', 'Ant Design', 'NewsAPI'],
    highlights: [
      'Top 100 cryptocurrencies tracking',
      'Interactive price charts',
      'Real-time news aggregation'
    ],
    image: '/cryptide.jpg',
    liveLink: 'https://cryptide.vercel.app',
    githubLink: 'https://github.com/anuptiwari17/cryptide'
  },
  {
    title: 'Glint',
    description: 'AI-powered API testing platform that revolutionizes debugging with intelligent error analysis and automated workflows.',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'AI Integration'],
    highlights: [
      'Postman-like interface with AI',
      'Intelligent error resolution',
      'Automated testing workflows'
    ],
    image: '/profile-pic.jpg',
    liveLink: 'https://glint-mocha.vercel.app',
    githubLink: 'https://github.com/anuptiwari17/glint'
  },
  {
    title: 'Strix',
    description: 'A Zero-Dependency Lightweight String Library in C++',
    technologies: ['C++'],
    highlights: [
      'Zero dependency (no standard strings functions used)',
      'Deep dive into raw memory, OOP, and exception safety',
      'Built for performance and efficiency'
    ],
    image: '/profile-pic.jpg',
    liveLink: null,
    githubLink: 'https://github.com/anuptiwari17/strix'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
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
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium"
             style={{ fontFamily: 'Plus Jakarta Sans,Inter, system-ui, sans-serif' }}>
            Checkout my latest work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20"
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {/*live Link - only to be shown if project has a live link */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 backdrop-blur-sm"
                      title="View Live Project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 backdrop-blur-sm"
                    title="View Source Code"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
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

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white transition-all duration-200 cursor-default"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}