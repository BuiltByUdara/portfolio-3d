// Edit this file to personalize the entire site — every component reads from here.
const profile = {
  name: "Udara Madumalka",
  role: "Software Engineer",
  tagline: "I build systems that hold up under real load — from schema to pixel.",
  location: "Colombo, Sri Lanka",
  email: "madu12dara@gmail.com",
  resumeUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/udaraAiken/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/udara-madumalka-20a7a1168/" },
  ],

  about: {
    paragraphs: [
      "I'm a full-stack engineer who likes the unglamorous parts of software: the data model that won't need a rewrite in six months, the API contract everyone can agree on, the deploy pipeline nobody has to think about.",
      "Most of my recent work sits in the MERN stack — MongoDB, Express, React, Node — with detours into WebGL and real-time systems when a project calls for it. I care about performance budgets, readable diffs, and shipping things that are boring in the way well-engineered things are boring.",
    ],
    stats: [
      { value: "5+", label: "Years building production software" },
      { value: "10+", label: "Shipped features & services" },
      { value: "6", label: "Teams mentored or led" },
    ],
  },

  skills: {
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Three.js", "Tailwind CSS", "Redux Toolkit"],
      },
      {
        id: "backend",
        label: "Backend",
        items: ["Node.js", "Express", "GraphQL", "REST API design", "WebSockets", "Microservices"],
      },
      {
        id: "data",
        label: "Data & Infra",
        items: ["MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "CI / CD"],
      },
      {
        id: "practice",
        label: "Practice",
        items: ["System design", "Testing", "Code review", "Agile delivery", "Technical writing"],
      },
    ],
  },

projects: [
  {
    id: "01",
    name: "Prop-AI",
    summary: "A MERN-based property analytics platform processing large-scale real estate datasets for investment analysis, portfolio management, and interactive geospatial insights.",
    stack: ["React", "Node.js", "Mongo DB","Express"],
    href: "https://prop-ai.com/",
    metric: "10k active users",
    isViewVisible:true,
  },
  {
    id: "02",
    name: "Angela Supermarket",
    summary: "A digital label printing portal built for a Canadian retail group, replacing manual paper-based workflows with a React-powered store printing system.",
    stack: ["React", "Express", "SQL", "Node.js"],
    href: "#",
    metric: "Eliminated manual label workflow",
    isViewVisible:false,
  },
  {
    id: "03",
    name: "Hello Health",
    summary: "A Shopify-integrated health and wellness platform featuring secure authentication, real-time appointment scheduling, and mobile-first user experiences.",
    stack: ["Shopify", "React", "JavaScript"],
    href: "https://www.gethellohealth.com/",
    metric: "Improved mobile engagement",
    isViewVisible:true,
  },
  {
    id: "04",
    name: "Credit Solution",
    summary: "A financial services platform modernization project migrating legacy systems to React while optimizing database performance and operational workflows.",
    stack: ["React", "MySQL", "Google Apps Script", "JavaScript"],
    href: "#",
    metric: "40% faster pages • 25% lower DB load",
    isViewVisible:false,
  },
  {
    id: "05",
    name: "Clarions School Dubai",
    summary: "A custom WordPress education platform delivering responsive experiences, improved content workflows, and easier administration for school teams.",
    stack: ["WordPress", "TutorCruncher", "PHP"],
    href: "#",
    metric: "Improved CMS efficiency",
    isViewVisible:false,
  },
  {
    id: "06",
    name: "ImmunifyMe",
    summary: "A healthcare-focused web platform delivering responsive React experiences with user-centric workflows and scalable frontend architecture.",
    stack: ["React"],
    href: "https://immunifyme.com/",
    metric: "Healthcare platform delivery",
    isViewVisible:true,
  },
  {
    id: "07",
    name: "Pointo",
    summary: "A full-stack web application built with modern JavaScript technologies, focusing on scalable APIs, responsive interfaces, and seamless user experiences.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    href: "#",
    metric: "Full-stack application delivery",
    isViewVisible:false,
  },
  {
    id: "08",
    name: "Proteccio",
    summary: "A full-stack web application built with modern JavaScript technologies, focusing on scalable APIs, responsive interfaces, and seamless user experiences.",
    stack: ["React", "Node.js", "PostgreSQL", "Express.js","Prisma"],
    href: "https://proteccio-data.vercel.app/",
    metric: "Full-stack application delivery",
    isViewVisible:true,
  },
],
  experience: [
    {
    period: "2026/04/01 - 2026/07/31",
    role: "Senior Software Engineer",
    org: "Skaleminds LLC",
    detail:
      "Led the design and development of scalable web applications using modern frontend technologies and cloud-based architectures. Mentored engineers, improved application performance, established engineering best practices, and delivered reliable solutions for complex business workflows.",
  },
  {
    period: "2024 - 2026",
    role: "Senior Software Engineer",
    org: "Avantrio",
    detail:
      "Led the design and development of scalable web applications using modern frontend technologies and cloud-based architectures. Mentored engineers, improved application performance, established engineering best practices, and delivered reliable solutions for complex business workflows.",
  },
  {
    period: "2023 — 2024",
    role: "Software Engineer",
    org: "Avantrio",
    detail:
      "Built and maintained production-grade applications with React.js, TypeScript, and modern web technologies. Collaborated with cross-functional teams to implement new features, optimize performance, improve code quality, and enhance user experiences.",
  },
  {
    period: "2022 — 2026",
    role: "Frontend Developer",
    org: "Prop-AI",
    detail:
      "Developed scalable React.js and TypeScript applications serving complex real estate analytics workflows and interactive map-based experiences. Built reusable UI components, optimized data visualization performance, and integrated location-based features for enhanced user interaction.",
  },
  {
    period: "2021 — 2023",
    role: "Software Engineer",
    org: "Aiken Labs",
    detail:
      "Designed and developed web applications while working across frontend and backend technologies. Contributed to feature development, system improvements, debugging, and delivering maintainable software solutions in an agile development environment.",
  },
],
};

export default profile;
