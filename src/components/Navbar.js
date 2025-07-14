'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'


import { 
  Home, 
  User, 
  Code, 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Menu,
  X as CloseIcon,
  Mail
} from 'lucide-react'

const navItems = [
  { 
    name: 'Home', 
    icon: Home, 
    href: '#home',
    isAnchor: true,
    route: '/'
  },
  { 
    name: 'About', 
    icon: User, 
    href: '#skills',
    isAnchor: true,
    route:'/'
  },
  { 
    name: 'Projects', 
    icon: Code, 
    href: '/projects',
    isAnchor: false,
    route: '/projects'
  },
  { 
    name: 'Contact', 
    icon: Mail, 
    href: '#contact',
    isAnchor: true,
    route: '/'
  }
]

const TwitterXIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/anuptiwari17' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/-anuptiwari' },
  { name: 'X', icon: TwitterXIcon, href: 'https://twitter.com/offsidetwt' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (item) => {
  if (pathname === item.route) {
    
    if (item.isAnchor) {
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  } else {
  
    router.push(item.route)

    if (item.isAnchor) {
      setTimeout(() => {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }
  setIsMobileMenuOpen(false)
}
  if (!mounted) return null

  return (
    <>
      {/*desktop navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-0 right-0 z-50 hidden md:block"
      >
        <div className="flex justify-center">
          <motion.div
            className="glass-effect rounded-full px-8 py-2 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center space-x-7">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="group relative flex items-center justify-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon 
                    size={20} 
                    className="text-gray-700 dark:text-gray-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" 
                  />
                  <motion.span
                    className="absolute top-full mt-1 text-xs font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: -5 }}
                  >
                    {item.name}
                  </motion.span>
                </motion.button>
              ))}

              {/* Divider */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

              {/* Social Links */}
              {socialLinks.map((link) => (
                <motion.div 
                  key={link.name}
                  className="group relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-1"
                  >
                    <link.icon 
                      size={18} 
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors" 
                    />
                  </a>
                  <motion.span
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: -5 }}
                  >
                    {link.name}
                  </motion.span>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors" />
                ) : (
                  <Moon size={18} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 right-4 z-50 md:hidden"
      >
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="glass-effect rounded-full p-3 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      {/*this is mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div 
              className="absolute top-20 right-4 glass-effect rounded-2xl p-6 shadow-2xl min-w-[200px]"
              initial={{ x: 20 }}
              animate={{ x: 0 }}
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center space-x-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </motion.button>
              ))}

                <div className="h-px bg-gray-300 dark:bg-gray-600 my-4" />

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon size={20} />
                      </motion.a>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}