// src/data/experience.js

const experiences = [
  {
    id: 'bilvens-2025',
    company: 'Bilvens Technology',
    role: 'Software Engineer Intern',
    duration: 'Sep 2025 - Oct 2025',
    type: 'Remote',
    description: [
      'Architected and developed a full-stack Learning Management System from scratch using Next.js 14, TypeScript, and Supabase, serving hundreds of students with real-time course progress tracking',
      'Engineered role-based authentication system with JWT and bcrypt, implementing secure admin and student dashboards with granular access control',
      'Built comprehensive course management platform enabling instructors to create courses, upload video modules, track student analytics, and export progress reports as CSV',
      'Designed mobile-first responsive UI with Tailwind CSS and Framer Motion, ensuring seamless experience across devices with modular component architecture'
    ],
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'Framer Motion',
      'JWT',
      'Docker',
      'Shadcn/ui'
    ]
    
  }
]

export function getAllExperiences() {
  return experiences
}

export function getExperienceById(id) {
  return experiences.find(exp => exp.id === id)
}