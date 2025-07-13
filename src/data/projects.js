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
    duration: '3 months',
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
    duration: '2 months',
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
    image: '/profile-pic.jpg',
    liveLink: 'https://glint-mocha.vercel.app',
    githubLink: 'https://github.com/anuptiwari17/glint',
    category: 'Developer Tools',
    duration: '4 months',
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
    category: 'System Programming',
    duration: '2 months',
    team: 'Solo Project',
    status: 'Completed',
    featured: true,
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