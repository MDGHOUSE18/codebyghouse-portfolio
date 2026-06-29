import { Profile } from '../modals/profile.model';
import { SkillCategory } from '../modals/skill.model';
import { Project } from '../modals/project.model';
import { Experience } from '../modals/experience.model';
import { Service } from '../modals/service.model';

export const PROFILE: Profile = {
  name: 'Bangar Mahammed Ghouse',
  title: '.NET Full Stack Developer',
  tagline: 'Building scalable enterprise applications with Angular, ASP.NET & SQL Server.',
  location: 'Hyderabad, India',
  email: 'mdghouse23102@gmail.com', // Update with your real email
  avatar: '/assets/images/Profile_Photo.png',
  resumeUrl: '',//'/assets/documents/resume.pdf',
  github: 'https://github.com/MDGHOUSE18',
  linkedin: 'https://www.linkedin.com/in/mahammed-ghouse-05b1a4203/',
  about: `I'm Ghouse — a .NET Full Stack Developer with experience building enterprise-level web applications using ASP.NET, Angular, SQL Server, and REST APIs. Currently working in the insurance domain, I handle both backend business logic and frontend application development, including claim processing systems, policy management modules, dynamic UI components, and API integrations.

I have practical experience working on production applications involving complex validations, SQL optimization, recursive Angular components, reusable UI architectures, and responsive application design. My focus is on building scalable, maintainable, and performance-oriented solutions.`
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/MDGHOUSE18', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahammed-ghouse-05b1a4203/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:mdghouse23102@gmail.com', icon: 'mail' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend Technologies',
    icon: 'server',
    description: 'Building robust enterprise APIs and business logic',
    skills: [
      { name: 'C#', level: 90, icon: 'csharp', category: { id: 'backend', name: 'Backend', icon: '', description: '' }, color: '#239120' },
      { name: 'ASP.NET MVC', level: 92, icon: 'dotnet', category: { id: 'backend', name: 'Backend', icon: '', description: '' }, color: '#512BD4' },
      { name: 'ASP.NET Web API', level: 90, icon: 'dotnet', category: { id: 'backend', name: 'Backend', icon: '', description: '' }, color: '#512BD4' },
      { name: '.NET Framework', level: 88, icon: 'dotnet', category: { id: 'backend', name: 'Backend', icon: '', description: '' }, color: '#512BD4' },
      { name: 'Entity Framework', level: 85, icon: 'entityframework', category: { id: 'backend', name: 'Backend', icon: '', description: '' } },
      { name: 'LINQ', level: 88, icon: 'csharp', category: { id: 'backend', name: 'Backend', icon: '', description: '' } },
      { name: 'REST APIs', level: 92, icon: 'api', category: { id: 'backend', name: 'Backend', icon: '', description: '' } },
      { name: 'JSON Processing', level: 90, icon: 'json', category: { id: 'backend', name: 'Backend', icon: '', description: '' } }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Technologies',
    icon: 'layout',
    description: 'Building dynamic, responsive user interfaces',
    skills: [
      { name: 'Angular', level: 92, icon: 'angular', category: { id: 'frontend', name: 'Frontend', icon: '', description: '' }, color: '#DD0031' },
      { name: 'TypeScript', level: 90, icon: 'typescript', category: { id: 'frontend', name: 'Frontend', icon: '', description: '' }, color: '#3178C6' },
      { name: 'JavaScript', level: 88, icon: 'javascript', category: { id: 'frontend', name: 'Frontend', icon: '', description: '' }, color: '#F7DF1E' },
      { name: 'jQuery', level: 82, icon: 'jquery', category: { id: 'frontend', name: 'Frontend', icon: '', description: '' }, color: '#0769AD' },
      { name: 'HTML5', level: 95, icon: 'html5', category: { id: 'frontend', name: 'Frontend', icon: '', description: '' }, color: '#E34F26' },
      { name: 'CSS3', level: 90, icon: 'css3', category: { id: 'frontend', name: 'Frontend', icon: '', description: '' }, color: '#1572B6' },
      { name: 'Bootstrap', level: 90, icon: 'bootstrap', category: { id: 'frontend', name: 'Frontend', icon: '', description: '' }, color: '#7952B3' }
    ]
  },
  {
    id: 'database',
    name: 'Database & SQL',
    icon: 'database',
    description: 'Optimizing data with SQL Server expertise',
    skills: [
      { name: 'SQL Server', level: 92, icon: 'microsoftsqlserver', category: { id: 'database', name: 'Database', icon: '', description: '' }, color: '#CC2927' },
      { name: 'Stored Procedures', level: 90, icon: 'database', category: { id: 'database', name: 'Database', icon: '', description: '' } },
      { name: 'Query Optimization', level: 88, icon: 'database', category: { id: 'database', name: 'Database', icon: '', description: '' } },
      { name: 'Complex Joins', level: 90, icon: 'database', category: { id: 'database', name: 'Database', icon: '', description: '' } },
      { name: 'JSON Parsing in SQL', level: 85, icon: 'database', category: { id: 'database', name: 'Database', icon: '', description: '' } },
      { name: 'Database Design', level: 88, icon: 'database', category: { id: 'database', name: 'Database', icon: '', description: '' } }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    icon: 'wrench',
    description: 'Essential development tools and workflows',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: 'github', category: { id: 'tools', name: 'Tools', icon: '', description: '' }, color: '#F05032' },
      { name: 'Visual Studio', level: 92, icon: 'visualstudio', category: { id: 'tools', name: 'Tools', icon: '', description: '' }, color: '#5C2D91' },
      { name: 'VS Code', level: 90, icon: 'visualstudiocode', category: { id: 'tools', name: 'Tools', icon: '', description: '' }, color: '#007ACC' },
      { name: 'Postman', level: 88, icon: 'postman', category: { id: 'tools', name: 'Tools', icon: '', description: '' }, color: '#FF6C37' },
      { name: 'npm', level: 85, icon: 'npm', category: { id: 'tools', name: 'Tools', icon: '', description: '' }, color: '#CB3837' },
      { name: 'Angular CLI', level: 90, icon: 'angular', category: { id: 'tools', name: 'Tools', icon: '', description: '' }, color: '#DD0031' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'roommate-expense-manager',
    title: 'Roommate Expense Manager',
    description: 'Responsive web app for tracking shared expenses, balances, monthly summaries, and settlements.',
    longDescription: 'A lightweight expense management app for roommates with Firebase authentication, Firestore storage, monthly dashboards, category tracking, automatic splitting, settlement calculation, Excel export, and light/dark mode.',
    image: '/assets/images/roommate-expense.png',
    technologies: ['JavaScript', 'Firebase Auth', 'Firestore', 'HTML5', 'CSS3', 'SheetJS'],
    category: 'frontend',
    githubUrl: 'https://github.com/MDGHOUSE18/roommate-expense-manager',
    liveUrl: 'https://mdghouse18.github.io/roommate-expense-manager/',
    featured: true,
    year: 2026,
    role: 'Frontend Developer',
    highlights: [
      'Built roommate and expense management workflows',
      'Added automatic splitting and settlement calculations',
      'Implemented Firebase authentication and Firestore storage',
      'Created responsive UI with Excel export and theme switching'
    ],
    status: 'completed'
  },
  {
    id: 'codebyghouse-portfolio',
    title: 'CodeByGhouse Portfolio',
    description: 'Modern responsive developer portfolio showcasing projects, skills, experience, and services.',
    longDescription: 'A premium personal portfolio website built with Angular featuring smooth animations, responsive layouts, reusable components, dark/light theme support, project showcases, certifications, testimonials, and contact integration. Designed to present full-stack development expertise with modern UI/UX practices.',
    image: '/assets/images/codebyghouse-portfolio.png',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'Bootstrap', 'Netlify'],
    category: 'frontend',
    githubUrl: 'https://github.com/MDGHOUSE18/codebyghouse-portfolio',
    liveUrl: 'https://ghouse-dev.netlify.app/',
    featured: true,
    year: 2026,
    role: 'Frontend Developer',
    highlights: [
      'Built a modern responsive portfolio with Angular',
      'Implemented reusable standalone components and modular architecture',
      'Added dark/light theme support and smooth UI animations',
      'Designed premium UI/UX optimized for recruiters and freelance clients',
      'Integrated project showcase, certifications, skills, and contact sections',
      'Deployed production-ready application on Netlify'
    ],
    status: 'completed'
  },
  {
    id: 'spendsmart-expense-tracker',
    title: 'SpendSmart Expense Tracker',
    description: 'A modern personal finance web application for tracking income, managing expenses, and visualizing spending habits.',
    longDescription: 'A comprehensive expense tracking application designed to help users take control of their personal finances. Built with a modern frontend framework, it features a clean and intuitive interface for logging transactions, categorizing expenses, and setting budgets. Includes interactive data visualization with charts to provide insights into spending patterns, along with persistent local storage for seamless data management. Fully responsive and optimized for a smooth user experience across all devices.',
    image: '/assets/images/spendsmart-expense-tracker.png',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Local Storage', 'Bolt'],
    category: 'frontend',
    githubUrl: 'https://github.com/MDGHOUSE18/SpendSmart-ExpenseTracker',
    liveUrl: 'https://expense-tracker-app-ydzc.bolt.host/',
    featured: true,
    year: 2026,
    role: 'Frontend Developer',
    highlights: [
      'Built a responsive personal finance tracker with a modern, clean UI',
      'Implemented features to add, edit, and delete income and expense transactions',
      'Integrated interactive charts to visualize spending habits and financial trends',
      'Utilized local storage for persistent data management without requiring a backend',
      'Designed a user-friendly interface optimized for both desktop and mobile devices',
      'Deployed the production-ready application seamlessly via Bolt.new'
    ],
    status: 'completed'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'Insurance Domain',
    position: '.NET Full Stack Developer',
    location: 'Enterprise Applications',
    startDate: 'Jan 2025',
    endDate: 'Present',
    current: true,
    description: 'Building enterprise-level insurance applications with ASP.NET MVC, Angular, and SQL Server.',
    responsibilities: [
      'Developed and maintained enterprise insurance modules using ASP.NET MVC, Angular, and SQL Server',
      'Built dynamic claim intimation and policy management systems',
      'Implemented REST API integrations with external systems like NAJM, Basher, and TAQDEER',
      'Developed complex SQL Server stored procedures with JSON parsing and validation logic',
      'Created reusable Angular components and dynamic form validation systems',
      'Built recursive sidebar navigation systems with role-based access handling',
      'Optimized SQL queries and backend processing for performance improvements',
      'Improved responsive UI/UX using Angular and Bootstrap',
      'Worked on file upload systems, validation workflows, and API-driven frontend architecture',
      'Implemented asynchronous data handling and AJAX-based dynamic rendering'
    ],
    technologies: ['ASP.NET MVC', 'Angular', 'C#', 'SQL Server', 'REST APIs', 'Bootstrap', 'Entity Framework']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'svc-1',
    title: 'Enterprise Web Development',
    description: 'Full-stack enterprise application development using .NET and Angular.',
    icon: 'code',
    features: [
      'ASP.NET MVC Applications',
      'Angular Frontend Development',
      'SQL Server Database Design',
      'REST API Development',
      'Enterprise Architecture'
    ],
    price: 'Custom Quote',
    duration: '4-8 Weeks',
    category: 'development'
  },
  {
    id: 'svc-2',
    title: 'API Integration',
    description: 'Seamless integration with third-party APIs and external systems.',
    icon: 'server',
    features: [
      'REST API Integration',
      'Third-party System Connection',
      'JSON Data Processing',
      'Async Data Handling',
      'Error Management'
    ],
    price: 'Custom Quote',
    duration: '2-4 Weeks',
    popular: true,
    category: 'development'
  },
  {
    id: 'svc-3',
    title: 'Database Optimization',
    description: 'SQL Server optimization, stored procedures, and query tuning.',
    icon: 'database',
    features: [
      'Query Optimization',
      'Stored Procedures',
      'Complex Joins & Indexing',
      'JSON Parsing in SQL',
      'Performance Tuning'
    ],
    price: 'Custom Quote',
    duration: '1-3 Weeks',
    category: 'development'
  },
  {
    id: 'svc-4',
    title: 'Frontend Development',
    description: 'Dynamic, responsive Angular applications with reusable components.',
    icon: 'layout',
    features: [
      'Angular Applications',
      'Reusable Components',
      'Dynamic Forms',
      'Responsive Design',
      'Role-based Access UI'
    ],
    price: 'Custom Quote',
    duration: '2-6 Weeks',
    category: 'development'
  }
];
