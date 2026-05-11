export const portfolioData = {
  projects: [
    {
      id: "lexinari",
      title: "Lexinari: Local-First Language Learning",
      category: "Local-First Engineering",
      description:
        "A language immersion companion using Dexie.js and Loro CRDT to enable zero-latency UI and 100% offline persistence. Features a data enrichment workflow for contextual metadata and an Azure-powered OCR pipeline.",
      tags: [
        "React",
        "TypeScript",
        "Dexie.js",
        "SQLite WebAssembly",
        "Loro CRDT",
        "Azure Functions",
        "C#",
        ".NET",
      ],
      status: "Active Development",
    },
    {
      id: "chat-app",
      title: "Real-Time Chat Platform",
      category: "System Architecture",
      description:
        "High-reliability messaging platform featuring session management via Redis and a Dockerized CI/CD pipeline. Maintained with rigorous end-to-end testing using Playwright and Vitest.",
      tags: [
        "React",
        "Express",
        "WebSockets",
        "Redis",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      demoUrl: "https://chatapp.tylerhand.dev",
      status: "Demo Available",
    },
    {
      id: "language-immersion",
      title: "Language Learning App",
      category: "EdTech Prototype",
      description:
        "Full-stack immersion platform with 90%+ API test coverage via TDD. Implemented fuzzy string searching to account for common typos in user answers.",
      tags: [
        "TypeScript",
        "React",
        "Express",
        "PostgreSQL",
        "Jest",
        "SuperTest",
      ],
      status: "Legacy Prototype",
    },
  ],
  experience: [
    {
      company: "Dents by Hand",
      role: "Full-Stack Software Engineer",
      period: "June 2023–Present",
      summary:
        "Migrating a legacy WordPress architecture into a high-performance Next.js SSG site to optimize SEO and load times. Architecting a scalable monorepo for client intake with type-safe Hono RPC API contracts.",
      stack: [
        "Next.js",
        "SSG",
        "TypeScript",
        "Hono",
        "Zod",
        "Tailwind CSS",
        "Cloudflare",
        "Drizzle ORM",
        "PostgreSQL",
      ],
    },
    {
      company: "BioFrontiers Institute",
      role: "Virtual Labs Developer",
      period: "May 2024–August 2024",
      summary:
        "Engineered a modular simulation framework in Godot to digitize biology experiments. Developed automated validation and real-time logging systems within an Agile team.",
      stack: ["Godot", "GDScript", "Real-Time Validation", "Agile"],
    },
    {
      company: "University of Colorado Boulder",
      role: "Bachelor's of Science in Computer Science",
      period: "May 2024",
      stack: [
        "Operating Systems",
        "Network Systems",
        "Ethical Hacking",
        "Data Structures",
        "Algorithms",
      ],
    },
  ],
  connect: {
    email: "tylerhand135@gmail.com",
    github: "https://github.com/tylerhand1",
    linkedin: "https://www.linkedin.com/in/tyler-hand1/",
    resume: "/Tyler_Hand_Resume.pdf",
  },
};
