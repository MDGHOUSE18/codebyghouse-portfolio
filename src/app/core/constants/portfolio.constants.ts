import { Profile } from '../modals/profile.model';
import { SkillCategory } from '../modals/skill.model';
import { Project } from '../modals/project.model';
import { Experience, Education } from '../modals/experience.model';
import { Testimonial } from '../modals/testimonial.model';
import { Certification } from '../modals/certification.model';
import { Service } from '../modals/service.model';

export const PROFILE: Profile = {
  name: 'Bangar Mahammed Ghouse',
  title: '.NET Full Stack Developer',
  tagline: 'Building scalable enterprise applications with Angular, ASP.NET & SQL Server.',
  location: 'Hyderabad, India',
  email: 'mdghouse23102@gmail.com', // Update with your real email
  avatar: '/assets/images/avatar.jpg',
  resumeUrl: '/assets/documents/resume.pdf',
  github: 'https://github.com/MDGHOUSE18',
  linkedin: 'https://www.linkedin.com/in/mahammed-ghouse-05b1a4203/',
  bio: `I'm a .NET Full Stack Developer specializing in Angular, ASP.NET, and SQL Server. 
        Currently working in the insurance domain, building enterprise-level web applications 
        with scalable backend systems, dynamic frontend interfaces, and optimized database solutions.`,
  about: `I'm Ghouse — a .NET Full Stack Developer with experience building enterprise-level web applications using ASP.NET, Angular, SQL Server, and REST APIs. Currently working in the insurance domain, I handle both backend business logic and frontend application development, including claim processing systems, policy management modules, dynamic UI components, and API integrations.

I have practical experience working on production applications involving complex validations, SQL optimization, recursive Angular components, reusable UI architectures, and responsive application design. My focus is on building scalable, maintainable, and performance-oriented solutions.`,
  yearsOfExperience: 1,
  projectsCompleted: 6,
  happyClients: 5,
  certificationsCount: 4
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/MDGHOUSE18', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahammed-ghouse-05b1a4203/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:mahammedghouse@example.com', icon: 'mail' }
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
    image: '/assets/images/projects/roommate-expense.jpg',
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
    id: 'bookstore-webapp',
    title: 'Bookstore Web Application',
    description: 'Full-stack bookstore system with books, cart, wishlist, orders, feedback, users, and JWT auth.',
    longDescription: 'A bookstore application built with ASP.NET Core Web API, Angular, SQL Server, and ADO.NET. It includes catalog management, authenticated user flows, cart and wishlist features, order processing, feedback handling, addresses, and Swagger API documentation.',
    image: '/assets/images/projects/bookstore.jpg',
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'ADO.NET', 'JWT', 'Swagger'],
    category: 'fullstack',
    githubUrl: 'https://github.com/MDGHOUSE18/BookStore-WebApp',
    featured: true,
    year: 2025,
    role: '.NET Full Stack Developer',
    highlights: [
      'Built REST APIs for books, orders, cart, wishlist, feedback, and users',
      'Implemented JWT-based authentication',
      'Used SQL Server with ADO.NET data access',
      'Documented APIs with Swagger UI'
    ],
    status: 'completed'
  },
  {
    id: 'lms-backend',
    title: 'Loan Management System API',
    description: 'Layered .NET backend for loan workflows, authentication, OTP, refresh tokens, and audit-ready APIs.',
    longDescription: 'A backend-focused loan management system built with ASP.NET Core, Entity Framework Core, SQL Server, repository pattern, layered architecture, JWT authentication, OTP verification, email verification, refresh tokens, login history, and loan draft/submit workflows.',
    image: '/assets/images/projects/lms-backend.jpg',
    technologies: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'JWT', 'Repository Pattern'],
    category: 'backend',
    githubUrl: 'https://github.com/MDGHOUSE18/LMS-Backend',
    featured: true,
    year: 2026,
    role: 'Backend Developer',
    highlights: [
      'Built layered API architecture with Application, Domain, Infrastructure, and API projects',
      'Implemented registration, login, OTP verification, refresh token, logout, and password reset flows',
      'Created loan draft, update, and submit endpoints',
      'Designed EF Core entities for users, roles, tokens, login history, and loan data'
    ],
    status: 'completed'
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Task Manager',
    description: 'Task management app with Angular client, ASP.NET Core API, JWT auth, and task CRUD workflows.',
    longDescription: 'A full-stack task management system split across Angular frontend and ASP.NET Core API repositories. The backend includes authentication, token generation, EF Core persistence, and task create/read/update/delete APIs. The frontend includes login, registration, dashboard layout, task listing, modal-based task creation/editing, validation, priority labels, and API integration.',
    image: '/assets/images/projects/taskflow.jpg',
    technologies: ['Angular', 'ASP.NET Core', 'C#', 'Entity Framework Core', 'JWT', 'Bootstrap'],
    category: 'fullstack',
    githubUrl: 'https://github.com/MDGHOUSE18/TaskFlow.Api',
    featured: true,
    year: 2026,
    role: '.NET Full Stack Developer',
    highlights: [
      'Built task CRUD APIs with user-scoped data access',
      'Implemented login/register flow with JWT token storage',
      'Created Angular task UI with modal create/edit forms',
      'Separated backend services, interfaces, DTOs, controllers, and EF Core data layer'
    ],
    status: 'completed'
  },
  {
    id: 'fundoo-notes',
    title: 'Fundoo Notes',
    description: 'Feature-rich notes platform with JWT authentication, reminders, labels, and collaboration features.',
    longDescription: 'A notes management application with ASP.NET Core backend and Angular frontend. It includes secure registration/login, password recovery, note CRUD, labels, reminders, sharing, comments, and responsive UI structure.',
    image: '/assets/images/projects/fundoo-notes.jpg',
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'JWT', 'TypeScript', 'SCSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/MDGHOUSE18/FundooNotesProject',
    featured: false,
    year: 2025,
    role: '.NET Full Stack Developer',
    highlights: [
      'Implemented JWT authentication and password recovery',
      'Built note CRUD with labels and reminders',
      'Added sharing and comment-oriented collaboration features',
      'Connected backend API with Angular frontend project'
    ],
    status: 'completed'
  },
  {
    id: 'eventhub-webforms',
    title: 'EventHub Management System',
    description: 'ASP.NET WebForms event platform with admin event management, user sessions, roles, and SQL procedures.',
    longDescription: 'A complete event management web application built with ASP.NET WebForms and SQL Server. It includes sign-in/sign-up, hashed passwords, session-based role routing, admin dashboards, event create/edit/delete flows, event image upload, stored procedure data access, and user-facing event pages.',
    image: '/assets/images/projects/eventhub.jpg',
    technologies: ['ASP.NET WebForms', 'C#', 'SQL Server', 'Stored Procedures', 'Bootstrap', 'ADO.NET'],
    category: 'fullstack',
    githubUrl: 'https://github.com/MDGHOUSE18/EventHub-ASP.NET-WebForms',
    featured: false,
    year: 2024,
    role: 'ASP.NET Developer',
    highlights: [
      'Built admin event create, edit, delete, and detail workflows',
      'Implemented sign-in with hashed password validation',
      'Used sessions and role-based redirects for admin/user flows',
      'Integrated SQL Server stored procedures and event image uploads'
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

export const EDUCATION: Education[] = [
  {
    id: 'edu-1',
    institution: 'University',
    degree: "Bachelor's Degree",
    field: 'Computer Science / Engineering',
    startDate: '2020',
    endDate: '2024',
    description: 'Focused on software development, database management, and web technologies.'
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Project Manager',
    position: 'Senior Manager',
    company: 'Insurance Company',
    avatar: '/assets/images/testimonials/client1.jpg',
    content: 'Ghouse delivered exceptional work on our claim processing system. His expertise in both ASP.NET and Angular made him invaluable to the project. Clean code and on-time delivery.',
    rating: 5,
    projectType: 'Enterprise Application'
  },
  {
    id: 'test-2',
    name: 'Team Lead',
    position: 'Technical Lead',
    company: 'Software Solutions',
    avatar: '/assets/images/testimonials/client2.jpg',
    content: 'Working with Ghouse was a pleasure. His SQL optimization skills significantly improved our application performance. He built reusable components that saved us countless hours.',
    rating: 5,
    projectType: 'Database Optimization'
  },
  {
    id: 'test-3',
    name: 'Product Owner',
    position: 'Business Analyst',
    company: 'Tech Corp',
    avatar: '/assets/images/testimonials/client3.jpg',
    content: 'Ghouse handled complex API integrations flawlessly. His understanding of both frontend and backend made him the perfect full-stack developer for our enterprise project.',
    rating: 5,
    projectType: 'API Integration'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    name: 'Angular Development',
    issuer: 'Online Platform',
    date: '2024',
    icon: 'angular',
    category: 'Frontend',
    skills: ['Angular', 'TypeScript', 'RxJS']
  },
  {
    id: 'cert-2',
    name: 'ASP.NET Development',
    issuer: 'Microsoft',
    date: '2024',
    icon: 'dotnet',
    category: 'Backend',
    skills: ['ASP.NET MVC', 'C#', 'Entity Framework']
  },
  {
    id: 'cert-3',
    name: 'SQL Server Development',
    issuer: 'Microsoft',
    date: '2024',
    icon: 'database',
    category: 'Database',
    skills: ['SQL Server', 'Stored Procedures', 'Query Optimization']
  },
  {
    id: 'cert-4',
    name: 'Full Stack Web Development',
    issuer: 'Training Institute',
    date: '2024',
    icon: 'code',
    category: 'Full Stack',
    skills: ['.NET', 'Angular', 'SQL Server']
  }
];

export const MARQUEE_SKILLS = [
  'Angular', 'ASP.NET MVC', 'C#', 'SQL Server', 'REST APIs', 'TypeScript',
  'Entity Framework', 'Bootstrap', 'jQuery', 'Stored Procedures', 'JSON Processing',
  'LINQ', 'Git', 'Visual Studio', 'Postman', 'Enterprise Development'
];

export const CORE_STRENGTHS = [
  'Full Stack Development',
  'Enterprise Application Development',
  'API Integration',
  'Dynamic Form Handling',
  'Responsive UI Development',
  'Reusable Component Architecture',
  'SQL Performance Optimization',
  'Business Logic Implementation'
];
