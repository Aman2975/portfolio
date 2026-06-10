export const portfolio = {
  name: "Amandeep Singh",
  role: "Node.js Backend Developer | AI Integration",
  tagline: "Building scalable APIs & real-world systems",
  about:
    "I'm a backend-focused developer Completed my MCA from Punjabi University patiala. I love building clean, scalable systems — from RESTful APIs to authentication flows and database design. Currently open to backend developer internships and entry-level roles in Mohali & Chandigarh or Remote .",
  location: "Mohali, Punjab, India , Remote",
  email: "amandeep2975@email.com",
  github: "https://github.com/aman2975",
  linkedin: "www.linkedin.com/in/amandeep2975",
  resumeUrl: "/resume.pdf",

  skills: [
    { category: "Backend", items: ["Node.js", "Express.js","Nest.js", "REST APIs"] },
    { category: "Database", items: ["MySQL", "MongoDB","PostgreSQL","Redis"] },
    { category: "Auth & Security", items: ["JWT", "RBAC", "Middleware","bcrypt",] },
    { category: "Frontend", items: ["HTML", "CSS", "React (basics)"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman","vercel","Render","Railway","Docker"] },
    { category: "Languages", items: ["JavaScript", "Python", "TypeScript"] },
  ],

  projects: [
    {
      title: "Scalable Quiz Platform",
      description:
        "Full-featured quiz system with role-based access control, JWT authentication, and clean RESTful API design. Supports multiple roles: admin, teacher, student.",
      tech: ["Node.js", "Express.js", "MySQL", "JWT", "RBAC"],
      github: "https://github.com/Aman2975/quiz-frontend",
      live: "",
      featured: true,
    },
    {
      title: "Hugli Printing press",
      description:
        "A freelancing project for build a website to showcase prodcuts online for printing press",
      tech: ["react js", "node js", "express js", "mysql"],
    //   github: "https://github.com/amandeep/chat-client",
      live: "https://hugli.org/",
      featured: true,
    },
    {
      title: "Plagiarism Detection System",
      description:
        "Large-scale text similarity engine using MinHash, LSH, and inverted indexing for near-duplicate document detection without brute-force O(n²) comparisons.",
      tech: ["Python", "MinHash", "LSH", "Inverted Index"],
    //   github: "https://github.com/amandeep/plagiarism-detector",
      live: "https://shodh-karta-checker-frontend.vercel.app/",
      featured: true,
    },
  ],

  experience: [
    {
      role: "Backend Developer (Projects & Freelance)",
      company: "Self-employed",
      duration: "2024 — Present",
      points: [
        "Built RESTful APIs with Node.js and Express.js",
        "Implemented JWT authentication & role-based access control",
        "Designed MySQL and MongoDB database schemas",
        "Integrate LLM apis"
      ],
      current: true,
    },
    {
      role: "MCA Student — Backend Specialization",
      company: "University, Mohali",
      duration: "2023 — Present",
      points: [
        "Focused on system design, data structures, and algorithms",
        "Built real-world projects to strengthen backend concepts",
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
