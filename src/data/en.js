export const en = {
  profile: {
    name: "Juan José Martínez",
    initials: "JJM",
    role: "Software Engineer",
    location: "Medellín, Colombia",
    tagline: "SOFTWARE ENGINEER · MEDELLÍN, COLOMBIA",
    headingLead: "Building systems",
    headingEmphasis: "that handle real data.",
    summary:
      "I'm a Backend & Data Engineer focused on scalable data processing, automation and business-critical software systems.",
    footerNote: "Less magic. More systems.",
    ctaViewWork: "View my work",
    ctaGithub: "GitHub",
    ctaDownloadCv: "Download CV",
    github: "https://github.com/jmartinezgr",
    linkedin: "https://www.linkedin.com/in/juan-jose-martinez",
    email: "josemargri3@gmail.com",
    cv: "/cv.pdf",
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  pipeline: {
    title: "Pipeline / abstract",
    footer: "Data in. Decisions out.",
    steps: [
      { label: "DATA", detail: "multiple sources" },
      { label: "PROCESSING", detail: "distributed" },
      { label: "RULES", detail: "static + dynamic" },
      { label: "RESULT", detail: "validated output" },
    ],
  },

  work: {
    sectionIndex: "01",
    sectionLabel: "Selected work",
    headingLead: "Systems built where data, ",
    headingEmphasis: "automation and logic intersect.",
    subheading: "Built for production, not just demos.",
    projectPrefix: "Project",
    flowLabel: "System flow",
    problemLabel: "Problem",
    approachLabel: "Approach",
    projects: [
      {
        id: "01",
        tags: "DATA ENGINEERING · BACKEND · LAKEHOUSE",
        title: "AuditLake",
        description:
          "A layered (bronze/silver/gold) data audit engine for retail invoicing, built lakehouse-style — ingests multi-item invoices and produces an explainable audit trail for every rule evaluated.",
        context:
          "Portfolio project: the retail domain is invented, but the pipeline shape and rule engine are modeled on real high-volume transactional-data auditing work.",
        stats: [
          { term: "Rules", value: "18 built-in + custom" },
          { term: "Tests", value: "97 (pure domain layer)" },
          { term: "Pipeline", value: "Bronze → Silver → Gold" },
        ],
        problem:
          "Reconciling high-volume invoice data against master catalogs and explaining why a record fails — not just that it does — without a Spark cluster.",
        approach:
          "A medallion pipeline (bronze/silver/gold) on Delta Lake, queried directly with DuckDB, plus a rule engine that separates self-consistency checks from catalog-driven ones — and lets new rules be added from the UI with no redeploy.",
        flow: [
          { label: "Bronze", detail: "raw, untyped, full traceability" },
          { label: "Silver", detail: "typed + structurally validated" },
          { label: "Gold", detail: "18 rules, pass/fail + severity" },
          { label: "Explore", detail: "dashboard, matrix, export" },
        ],
        tech: ["Python", "FastAPI", "Polars", "Delta Lake", "DuckDB", "PostgreSQL", "React", "TypeScript"],
        links: [
          { label: "View live ↗", href: "https://auditlake.jmartinezgr.com" },
          { label: "GitHub ↗", href: "https://github.com/jmartinezgr/retail-audit-platform" },
        ],
      },
      {
        id: "02",
        tags: "BACKEND · SCRAPING · HEXAGONAL ARCHITECTURE",
        title: "RangeMerge",
        description:
          "A rental-alarm engine that merges every user's search criteria into the minimum number of scrapes per site, instead of one scrape per alarm — grouping alarms into shared mega-filters and matching results in memory.",
        context:
          "Personal project, pre-release: the architecture and two scraper adapters (ciencuadras.com, metrocuadrado.com) are built and working locally, not deployed yet.",
        stats: [
          { term: "Architecture", value: "Hexagonal (ports & adapters)" },
          { term: "Matcher", value: "O(1) discrete / O(log n) continuous" },
          { term: "Status", value: "Pre-release" },
        ],
        problem:
          "N users' rental alarms, each with different filters, naively need one search per alarm — wasteful, and fast to get an IP blocked at any real scale.",
        approach:
          "Group alarms by (city, neighborhood, operation, type) — the real granularity a site's search supports — compute the enveloping price/area/rooms/bathrooms range per group, run one search per group, then match the superset against every exact alarm in memory with an indexed matcher.",
        flow: [
          { label: "Alarms", detail: "N users, N criteria" },
          { label: "Merge", detail: "grouped into mega-filters" },
          { label: "Scrape", detail: "1 search per group/provider" },
          { label: "Match", detail: "indexed, in memory" },
        ],
        tech: ["Python", "Playwright", "FastAPI", "Hexagonal architecture", "Docker"],
        links: [
          { label: "Live demo", disabled: true, note: "Not deployed yet" },
          { label: "GitHub ↗", href: "https://github.com/jmartinezgr/property-scrapper" },
        ],
      },
      {
        id: "03",
        tags: "BACKEND · DATA ENGINEERING · CLOUD",
        title: "Distributed CSV Processing Platform",
        description:
          "A backend worker architecture for processing CSV files, converting them into efficient columnar formats and coordinating asynchronous jobs.",
        context:
          "Containerized services paired with cloud storage and job polling for reliable file transformation.",
        stats: [{ term: "Role", value: "Backend Engineer" }],
        flow: [
          { label: "CSV", detail: "raw upload" },
          { label: "Worker", detail: "async job polling" },
          { label: "Parquet", detail: "columnar transform" },
          { label: "Cloud storage", detail: "processed output" },
        ],
        tech: ["Python", "FastAPI", "Polars", "Parquet", "Azure Blob Storage", "Docker"],
      },
    ],
  },

  breadth: {
    sectionIndex: "02",
    sectionLabel: "Breadth",
    heading: "Other things I've built.",
    subheading: "Backend and data is my specialization, but I can work across the entire product.",
    items: [
      "React applications",
      "NestJS APIs",
      "FastAPI services",
      "JWT authentication",
      "Microservices",
      "Kubernetes",
      "Redis caching",
      "REST APIs",
      "Cloud deployments",
    ],
  },

  stack: {
    sectionIndex: "03",
    sectionLabel: "Stack",
    headingLead: "The tools behind ",
    headingEmphasis: "the systems.",
    subheading: "Tools I reach for, grouped by the kind of problem they solve.",
    footerNote: "Less magic. More systems.",
    groups: [
      {
        group: "Backend",
        items: ["Python", "FastAPI", "Django REST", "Node.js", "NestJS", "REST APIs", "SQL"],
      },
      {
        group: "Data",
        items: ["PySpark", "Databricks", "Delta Lake", "Polars", "Pandas", "Parquet", "Data pipelines"],
      },
      {
        group: "Cloud / Infrastructure",
        items: ["Azure", "Docker", "Kubernetes", "Redis", "Linux", "CI/CD"],
      },
      {
        group: "Automation / Frontend",
        items: ["Selenium", "SAP UI5", "RPA", "React", "TypeScript", "Vite", "Tailwind CSS"],
      },
    ],
  },

  experience: {
    sectionIndex: "04",
    sectionLabel: "Experience",
    headingLead: "Real systems, ",
    headingEmphasis: "real constraints.",
    items: [
      {
        company: "Innovación Analítica",
        role: "Backend Software Engineer",
        date: "Nov 2025 – Present",
        tags: ["Azure Databricks", "Python / PySpark", "Medical invoice validation", "Dynamic business rules"],
      },
      {
        company: "TDP Solutions",
        role: "Full Stack / RPA Developer",
        date: "Sep 2025 – Jun 2026",
        tags: ["Python", "RPA", "Selenium", "SAP", "Backend services"],
      },
      {
        company: "PITRANSFORM LLC",
        role: "Full Stack Developer",
        date: "Mar 2025 – Aug 2025",
        tags: ["Full-stack development", "Backend APIs", "Automation", "Web applications"],
      },
      {
        company: "Universidad Nacional de Colombia",
        role: "Research Project Assistant",
        date: "Aug 2024 – Jun 2025",
        tags: [],
      },
    ],
  },

  about: {
    sectionIndex: "05",
    sectionLabel: "About",
    headingLead: "Beyond ",
    headingEmphasis: "the stack.",
    paragraphs: [
      "I'm a Systems Engineering student and Software Engineer based in Medellín, Colombia. I enjoy working on problems where software, data and business logic intersect.",
      "I started through software development and automation, and gradually moved deeper into backend engineering and large-scale data processing.",
      "My favorite projects are the ones where the hard part isn't writing the code — it's understanding the problem, designing the system and making it reliable.",
    ],
    closing: "Turning messy problems into reliable systems.",
  },

  contact: {
    sectionIndex: "06",
    sectionLabel: "Contact",
    heading: "Have a problem worth solving?",
    subheading: "Let's talk about software, data, automation or whatever you're building.",
    ctaEmail: "Email me",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
  },

  footer: {
    githubLabel: "GitHub ↗",
    linkedinLabel: "LinkedIn ↗",
    emailLabel: "Email",
  },
};
