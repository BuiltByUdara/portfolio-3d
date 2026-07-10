// Edit this file to personalize the entire site — every component reads from here.
const profile = {
  name: "Aran Perera",
  role: "Software Engineer",
  tagline: "I build systems that hold up under real load — from schema to pixel.",
  location: "Colombo, Sri Lanka",
  email: "hello@aranperera.dev",
  resumeUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],

  about: {
    paragraphs: [
      "I'm a full-stack engineer who likes the unglamorous parts of software: the data model that won't need a rewrite in six months, the API contract everyone can agree on, the deploy pipeline nobody has to think about.",
      "Most of my recent work sits in the MERN stack — MongoDB, Express, React, Node — with detours into WebGL and real-time systems when a project calls for it. I care about performance budgets, readable diffs, and shipping things that are boring in the way well-engineered things are boring.",
    ],
    stats: [
      { value: "7+", label: "Years building production software" },
      { value: "40+", label: "Shipped features & services" },
      { value: "6", label: "Teams mentored or led" },
    ],
  },

  skills: {
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Three.js / R3F", "Tailwind CSS", "Redux Toolkit"],
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
        items: ["System design", "Testing (Jest/RTL)", "Code review", "Agile delivery", "Technical writing"],
      },
    ],
  },

  projects: [
    {
      id: "01",
      name: "Ledgerline",
      summary: "A real-time expense-splitting platform for teams, built on the MERN stack with WebSocket-driven live balances.",
      stack: ["React", "Node.js", "MongoDB", "Socket.io"],
      href: "#",
      metric: "12k active users",
    },
    {
      id: "02",
      name: "Fieldnote",
      summary: "Offline-first note capture for site engineers — syncs over a flaky connection without losing a single edit.",
      stack: ["React Native", "Express", "PostgreSQL", "Redis"],
      href: "#",
      metric: "99.98% sync reliability",
    },
    {
      id: "03",
      name: "Aperture",
      summary: "An internal design-system explorer with a live 3D component preview, adopted across four product teams.",
      stack: ["React", "Three.js", "Storybook", "GraphQL"],
      href: "#",
      metric: "4 teams onboarded",
    },
    {
      id: "04",
      name: "Northbeam API",
      summary: "A rate-limited public API gateway handling authenticated traffic for a fintech partner network.",
      stack: ["Node.js", "Express", "Redis", "Docker"],
      href: "#",
      metric: "3M requests / day",
    },
  ],

  experience: [
    {
      period: "2023 — Present",
      role: "Senior Software Engineer",
      org: "Northbeam Technologies",
      detail: "Leading the platform team responsible for the core transaction API and its client SDKs.",
    },
    {
      period: "2020 — 2023",
      role: "Software Engineer",
      org: "Fieldnote Labs",
      detail: "Built the offline-sync engine and owned the mobile client's data layer end to end.",
    },
    {
      period: "2018 — 2020",
      role: "Frontend Engineer",
      org: "Studio Ledger",
      detail: "Shipped the first version of the Ledgerline web app and its component library.",
    },
  ],
};

export default profile;
