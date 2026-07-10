export const portfolio = {
  name: "Amandeep Singh",
  role: "Software Developer | Node.js & AI Integration",
  tagline: "Building scalable APIs & real-world systems",
  about:
    "I'm a backend-focused developer Completed my MCA from Punjabi University patiala. I love building clean, scalable systems — from RESTful APIs to authentication flows and database design. Currently open to backend developer internships and entry-level roles in Mohali & Chandigarh or Remote .",
  location: "Mohali, Punjab, India , Remote",
  email: "amandeep2975@email.com",
  github: "https://github.com/aman2975",
  linkedin: "https://www.linkedin.com/in/amandeep2975/",
  resumeUrl: "/resume.pdf",

  skills: [
 {
    category: "LANGUAGES",
    items: ["JavaScript", "TypeScript", "Python"]
  },
  {
    category: "BACKEND DEVELOPMENT",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs"]
  },
  {
    category: "FRONTEND DEVELOPMENT",
    items: ["React.js", "HTML", "CSS"]
  },
  {
    category: "DATABASES",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "ORMS & ODMS",
    items: ["Prisma", "Mongoose", "TypeORM"]
  },
  {
    category: "AUTHENTICATION & SECURITY",
    items: ["JWT", "RBAC", "bcrypt", "Middleware", "API Security"]
  },
  {
    category: "TOOLS & DEVOPS",
    items: ["Git", "GitHub", "Docker", "Postman", "Nginx", "PM2"]
  },
  {
    category: "CLOUD & STORAGE",
    items: ["Cloudinary", "MongoDB Atlas"]
  },
  {
    category: "DEPLOYMENT",
    items: ["VPS", "Vercel", "Render", "Railway"]
  },
  {
    category: "CONCEPTS & ARCHITECTURE",
    items: [
      "Data Structures",
      "Database Design",
      "MVC Architecture",
      "Error Handling",
      "Backend Optimization",
      "Asynchronous Processing"
    ]
  },
  {
    category: "ADDITIONAL TECHNOLOGIES",
    items: ["AI API Integration", "Third-Party API Integration"]
  }
],

 projects: [
    {
      title: "ShodhKartaChecker",
      description:
        "AI-powered plagiarism detection engine built with a decoupled microservices architecture. Node.js handles API orchestration while FastAPI processes heavy NLP workloads. Features Redis-based async task queues, Groq AI integration for intelligent similarity analysis, and Nginx + PM2 production deployment on VPS. Achieved 40% faster API response times.",
      tech: ["Node.js", "Express.js", "FastAPI", "Python", "Redis", "MongoDB Atlas", "Groq AI", "Docker", "Nginx", "PM2"],
      github: "https://github.com/Aman2975/ShodhKartaChecker_js",
      live: "https://shodh-karta-checker-frontend.vercel.app/",
      featured: true,
    },
    {
      title: "Schedula",
      description:
        "Production-grade doctor appointment booking system with role-based access for Doctors and Patients. Doctors manage availability and time slots, patients search and book appointments. Built with NestJS and TypeScript, with full Swagger API documentation and PostgreSQL database management via TypeORM.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "RBAC", "Swagger", "Docker", "Nginx"],
      github: "https://github.com/Aman2975/schedula_AMANDEEP",
      live: "https://schedulaamanhttps://github.com/Aman2975deep-production.up.railway.app/api",
      featured: true,
    },
    {
      title: "PostGrid",
      description:
        "RESTful blog platform where users can create, edit, delete posts and view a live feed of others' content. Features JWT authentication, secure profile management, cloud-based image uploads via Cloudinary and Multer, Prisma ORM with PostgreSQL, and full Docker deployment on VPS.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Cloudinary", "Multer", "JWT", "Docker", "VPS"],
      github: "https://github.com/Aman2975/blog_backend",
      live: "http://216.158.226.124:3001/feed",
      featured: true,
    },
    {
      title: "Scalable Quiz Platform",
      description:
        "Full-featured quiz system with role-based access control, JWT authentication, and clean RESTful API design. Supports multiple roles: admin, teacher, and student with optimized MySQL schema and centralized error handling middleware.",
      tech: ["Node.js", "Express.js", "MySQL", "JWT", "RBAC"],
      github: "https://github.com/Aman2975/quiz-frontend",
      live: "",
      featured: false,
    },
    {
      title: "Hugli Printing Press",
      description:
        "Freelance project for a printing press business — responsive product showcase website with a Node.js backend integrated with WhatsApp API to enable direct client messaging from the contact page.",
      tech: ["React.js", "Node.js", "Express.js", "WhatsApp API"],
      github: "",
      live: "https://hugli.org/",
      featured: false,
    },
  ],

  experience: [
    {
      role: "Full Stack Web Development Trainee",
      company: "Punjabi University, Patiala — MCA Industrial Training",
      duration: "Jan 2026 — May 2026",
      points: [
        "Built an AI-powered plagiarism detection system (ShodhKartaChecker) using Node.js, FastAPI, Redis task queues, and Groq AI — achieving 40% faster API response times",
        "Designed and deployed decoupled microservices architecture with Nginx reverse proxy and PM2 on VPS",
        "Developed backend applications integrating LLM APIs and NLP-based document processing pipelines",
        "Worked with MongoDB, Redis, Docker, and REST API design during hands-on training",
      ],
      current: true,
    },
    {
      role: "Backend Developer — Freelance & Personal Projects",
      company: "Self-Employed",
      duration: "2025 — Present",
      points: [
        "Built and deployed 3 production-grade backend systems: ShodhKartaChecker (AI), Schedula (NestJS + PostgreSQL), and PostGrid (Prisma + Cloudinary)",
        "Implemented JWT authentication, RBAC, Swagger documentation, and RESTful API design across multiple projects",
        "Integrated third-party APIs including Groq AI, Cloudinary, and WhatsApp API for real client and personal projects",
        "Deployed all projects on VPS using Docker, Nginx, and PM2 — also used Vercel and Render for frontend and API hosting",
        "Freelanced for Hugli Printing Press — built a full-stack product showcase website with Node.js + WhatsApp API backend",
      ],
      current: true,
    },
    {
      role: "MCA — Backend Development Specialization",
      company: "Punjabi University, Patiala",
      duration: "2024 — 2026",
      points: [
        "Specialized in backend architecture, database design, and system design concepts",
        "Built real-world projects covering microservices, async processing, ORM design, and cloud deployment",
        "Studied data structures, algorithms, and software engineering principles",
      ],
      current: true,
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Punjabi University Patiala",
      year: "2024 — 2026",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Shaheed Bhagat singh State technical campus",
      year: "2020 — 2023",
    }
  ],
};
