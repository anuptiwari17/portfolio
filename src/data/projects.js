export const projects = [

{
  id: 'bilvens',
  title: 'Bilvens LMS',
  description: 'A modern, full-stack LMS built with Next.js, TypeScript, and Supabase. Developed end-to-end for Bilvens Technologies to deliver an enterprise-grade online learning experience with role-based dashboards, analytics, and real-time updates.',
  technologies: [
    'Next.js 14',
    'TypeScript',
    'Tailwind CSS',
    'Shadcn/UI',
    'Framer Motion',
    'Supabase (PostgreSQL)',
    'JWT Authentication',
    'bcrypt.js',
    'Lucide React'
  ],
  highlights: [
    'Developed a complete LMS platform with separate interfaces for administrators and students',
    'Implemented custom JWT authentication and role-based access system for secure multi-user workflows',
    'Designed and normalized PostgreSQL schema using Supabase with efficient relationships and constraints',
    'Integrated YouTube API for video modules with progress tracking and analytics',
    'Built responsive, mobile-first UI with Tailwind CSS and Shadcn/UI, enhanced by Framer Motion animations',
    'Implemented CSV export, announcement broadcasting, and real-time progress tracking using Supabase APIs',
    'Adopted modern TypeScript, ESLint, Prettier, and reusable React component architecture',
    'Wrote detailed documentation for folder structure, schema design, and setup instructions'
  ],
  image: '/bilvens.png',
  liveLink: 'https://bilvens.vercel.app',
  githubLink: 'Private Repository (Proprietary Project)',
  category: 'Education Technology',
  duration: 'Jan 2025 – Apr 2025',
  team: 'Freelance Contract (Solo Development)',
  status: 'Live',
  featured: true,
  overview: 'Bilvens LMS is a full-stack Learning Management System built for Bilvens Technologies. It features a complete admin–student ecosystem with secure authentication, course management, analytics dashboards, and real-time progress tracking.',
  features: [
    'Admin and Student dashboards with role-based access control',
    'Course and module management with YouTube video integration',
    'Real-time progress tracking and announcement system',
    'CSV export and analytics dashboard for admins',
    'Responsive, mobile-first design with smooth UI animations',
    'JWT-based authentication and secure password hashing'
  ],
  challenges: [
    'Designing scalable database schema with relational consistency',
    'Implementing custom authentication flow outside Supabase Auth',
    'Optimizing for responsiveness and performance across devices'
  ],
  learnings: [
    'Advanced Next.js App Router and API Routes',
    'PostgreSQL schema design and Supabase integration',
    'Real-time updates and role-based access control'
  ],
  impact:
    'Delivered a production-ready LMS platform that helped Bilvens digitize their training operations for over 500 users with robust backend security, a clean UI, and scalable architecture.'
},


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
    image: '/glint.png',
    liveLink: 'https://glint-mocha.vercel.app',
    githubLink: 'https://github.com/anuptiwari17/glint',
    category: 'Developer Tools',
    duration: '1 week',
    team: 'Solo Project',
    status: 'Live',
    featured: true,
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
      'Advanced React.js features'
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
    image: '/strix.png',
    liveLink: null,
    githubLink: 'https://github.com/anuptiwari17/strix',
    category: 'System Programming',
    duration: '1 week',
    team: 'Solo Project',
    status: 'Completed',
    featured: false,
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
];

//helper functions
export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getAllProjects = () => projects;

export const getProjectById = (id) => projects.find(project => project.id === id);

export const getProjectsByCategory = (category) => projects.filter(project => project.category === category);