// src/data/projects.js

export const projects = [
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
    category: 'Enterprise Software',
    duration: '1 week',
    team: 'Solo Project',
    status: 'Live',
    featured: true,
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
    id: 'bilvens',
    title: 'Bilvens',
    description: 'Full-stack Learning Management System for a real client — real-time course tracking, admin/student roles, video modules, and analytics.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'JWT', 'Docker', 'Shadcn/ui'],
    highlights: [
      'Served hundreds of real students',
      'Complete role-based system (Admin / Instructor / Student)',
      'Video lessons + progress tracking + CSV exports'
    ],
    image: '/bilvens.png',
    liveLink: "https://lms.examate.in",
    githubLink: '#',
    category: 'Client Project',
    duration: 'Sep – Oct 2025',
    team: 'Freelance • Bilvens Technology',
    status: 'Completed & Delivered',
    featured: true,
    overview: 'Production-grade Learning Management System built from scratch for Bilvens Technology. Includes secure authentication, real-time student progress, course creation tools, video hosting, and detailed analytics dashboards.',
    features: [
      'Role-based authentication & dashboards',
      'Real-time course progress & analytics',
      'Video module upload & streaming',
      'CSV report generation',
      'Mobile-first responsive design',
      'Modern UI with Shadcn/ui + Tailwind'
    ],
    challenges: [
      'Scalable real-time progress tracking',
      'Secure video & file handling',
      'Complex multi-role permission system'
    ],
    learnings: [
      'Production Next.js 14 + Supabase stack',
      'Advanced TypeScript in large apps',
      'Client delivery & deadline management'
    ]
  },

  {
    id: 'aniva',
    title: 'Aniva',
    description: 'A sleek, dark-themed Software Asset Management platform frontend focused on premium UI and motion design.',
    technologies: ['React.js', 'Framer Motion', 'GSAP', 'Tailwind CSS', 'Lucide-React'],
    highlights: [
      'Dark-themed premium UI design',
      'Smooth page transitions and animations',
      'Built with GSAP and Framer Motion'
    ],
    image: '/aniva.png',
    liveLink: 'https://samorg.vercel.app',
    githubLink: 'https://github.com/anuptiwari17',
    category: 'Client Project',
    duration: '2 days',
    team: 'Solo Project',
    status: 'Live',
    featured: true,
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
    category: 'Financial Technology',
    duration: '2 days',
    team: 'Solo Project',
    status: 'Live',
    featured: true,
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
    image: '/glint.png',
    liveLink: 'https://glint-mocha.vercel.app',
    githubLink: 'https://github.com/anuptiwari17/glint',
    category: 'Developer Tools',
    duration: '1 week',
    team: 'Solo Project',
    status: 'Live',
    featured: false,
  },

  {
    id: 'strix',
    title: 'Strix',
    description: 'A Zero-Dependency Lightweight String Library in C++',
    technologies: ['C++'],
    highlights: [
      'Zero dependency (no standard string functions used)',
      'Deep dive into raw memory, OOP, and exception safety',
      'Built for performance and efficiency'
    ],
    image: '/strix.png',
    liveLink: null,
    githubLink: 'https://github.com/anuptiwari17/strix',
    category: 'System Programming',
    duration: '1 week',
    team: 'Solo Project',
    status: 'Completed',
    featured: false,
  },

  {
    id: 'skystats',
    title: 'SkyStats',
    description: 'Interactive weather analytics app with real-time and 5-day forecast visualizations using OpenWeatherMap API.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Matplotlib', 'Seaborn', 'Pandas'],
    highlights: [
      'Real-time weather data fetching via OpenWeatherMap API',
      '5-day forecast at 3-hour intervals',
      'Visualizations for temperature, humidity, pressure, and wind speed'
    ],
    image: '/skystats.png',
    liveLink: 'https://skystats.onrender.com',
    githubLink: 'https://github.com/anuptiwari17/weather-details',
    category: 'Data Visualization',
    duration: '2 days',
    team: 'Solo Project',
    status: 'Live',
    featured: false,
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id) => projects.find(p => p.id === id);
export const getProjectsByCategory = (category) => projects.filter(p => p.category === category);