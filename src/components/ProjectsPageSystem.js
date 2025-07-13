'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft, Calendar, Code, Users, Star } from 'lucide-react'

const projects = [
  {
    id: 'nucleo',
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
    githubLink: 'https://github.com/anuptiwari17/nucleo',
    // Detailed project data
    category: 'Enterprise Software',
    duration: '3 months',
    team: 'Solo Project',
    status: 'Live',
    overview: 'Nucleo is a comprehensive employee management system designed for modern enterprises. It features advanced role-based access control, real-time task tracking, and powerful analytics dashboard.',
    features: [
      'Multi-level role-based access control',
      'Real-time task assignment and tracking',
      'Interactive analytics dashboard',
      'Employee performance metrics',
      'Secure authentication system',
      'Responsive design for all devices'
    ],
    challenges: [
      'Implementing secure role-based access control',
      'Real-time data synchronization',
      'Optimizing performance for large datasets'
    ],
    learnings: [
      'Advanced React patterns for complex state management',
      'Database optimization techniques',
      'Real-time application architecture'
    ]
  },
  {
    id: 'cryptide',
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
    githubLink: 'https://github.com/anuptiwari17/cryptide',
    // Detailed project data
    category: 'Financial Technology',
    duration: '2 months',
    team: 'Solo Project',
    status: 'Live',
    overview: 'Cryptide is a modern cryptocurrency tracking platform that provides real-time market data, news, and analytics for the top 100 cryptocurrencies.',
    features: [
      'Real-time cryptocurrency price tracking',
      'Interactive charts and graphs',
      'Latest crypto news aggregation',
      'Portfolio tracking capabilities',
      'Market analysis tools',
      'Mobile-responsive design'
    ],
    challenges: [
      'Handling multiple API integrations',
      'Managing real-time data updates',
      'Creating performant chart visualizations'
    ],
    learnings: [
      'API integration and data management',
      'Chart.js for data visualization',
      'Performance optimization techniques'
    ]
  },
  {
    id: 'glint',
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
    githubLink: 'https://github.com/anuptiwari17/glint',
    // Detailed project data
    category: 'Developer Tools',
    duration: '4 months',
    team: 'Solo Project',
    status: 'Live',
    overview: 'Glint is an AI-powered API testing platform that combines the familiar interface of Postman with intelligent error analysis and automated testing workflows.',
    features: [
      'Postman-like API testing interface',
      'AI-powered error analysis',
      'Automated testing workflows',
      'Intelligent debugging suggestions',
      'Request/response history',
      'Export and import capabilities'
    ],
    challenges: [
      'Integrating AI for error analysis',
      'Building complex testing workflows',
      'Creating intuitive user interface'
    ],
    learnings: [
      'AI integration in web applications',
      'Complex state management patterns',
      'Advanced Next.js features'
    ]
  },
  {
    id: 'strix',
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
    githubLink: 'https://github.com/anuptiwari17/strix',
    // Detailed project data
    category: 'System Programming',
    duration: '2 months',
    team: 'Solo Project',
    status: 'Completed',
    overview: 'Strix is a lightweight, zero-dependency string library implemented in C++ from scratch, focusing on performance and memory efficiency.',
    features: [
      'Zero external dependencies',
      'Custom memory management',
      'Exception-safe operations',
      'Performance-optimized algorithms',
      'Comprehensive test suite',
      'Cross-platform compatibility'
    ],
    challenges: [
      'Manual memory management',
      'Implementing string algorithms from scratch',
      'Ensuring exception safety'
    ],
    learnings: [
      'Low-level memory management',
      'C++ best practices and patterns',
      'Algorithm optimization techniques'
    ]
  }
]

export default function ProjectsPageSystem() {
  const [currentView, setCurrentView] = useState('main') // 'main' or project id
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setCurrentView(project.id)
  }

  const handleBackToMain = () => {
    setCurrentView('main')
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AnimatePresence mode="wait">
        {currentView === 'main' ? (
          <ProjectsMainPage 
            key="main"
            projects={projects} 
            onProjectClick={handleProjectClick} 
          />
        ) : (
          <ProjectDetailPage 
            key={selectedProject?.id}
            project={selectedProject}
            onBack={handleBackToMain}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Main Projects Page Component
function ProjectsMainPage({ projects, onProjectClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 backdrop-blur-sm"
                      title="View Live Project"
                      onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-bold text-gray-500 dark:text-gray-400"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

//individual project detail page component
function ProjectDetailPage({ project, onBack }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/*back button - will improve later */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          <ArrowLeft size={20} />
          Back to Projects
        </motion.button>

        {/* Project Header */}
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

          {/* Project Meta */}
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

          {/* Action Buttons */}
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

        {/* Project Image */}
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

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Overview */}
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

            {/* Features */}
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

            {/* Challenges */}
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

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {/* Technologies */}
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

            {/* Key Learnings */}
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