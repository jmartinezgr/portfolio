export const profile = {
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
  github: "https://github.com/jmartinezgr",
  linkedin: "https://www.linkedin.com/in/juan-jose-martinez",
  email: "josemargri3@gmail.com",
  cv: "/cv.pdf",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const pipeline = [
  { label: "DATA", detail: "multiple sources" },
  { label: "PROCESSING", detail: "distributed" },
  { label: "RULES", detail: "static + dynamic" },
  { label: "RESULT", detail: "validated output" },
];

export const projects = [
  {
    id: "01",
    tags: "DATA ENGINEERING · BACKEND · RULES ENGINE",
    title: "Medical Invoice Validation Engine",
    description:
      "An automated validation system designed to process millions of medical invoices and apply complex business rules across multiple information sources.",
    context:
      "Built in an Azure Databricks environment for a major healthcare organization in Colombia.",
    stats: [
      { term: "Scale", value: "36M+ records" },
      { term: "Role", value: "Backend / Data Engineer" },
      { term: "Environment", value: "Azure Databricks" },
    ],
    problem:
      "Invoice validation depended on rules spread across several information sources and had to hold up at a scale far beyond manual review.",
    approach:
      "A distributed processing design over Databricks combining static and dynamic business rules — including rules that depend on medication-related information.",
    flow: [
      { label: "Data sources", detail: "invoices · medication · context" },
      { label: "Processing", detail: "distributed data pipelines" },
      { label: "Rules engine", detail: "static + dynamic logic" },
      { label: "Validation", detail: "reliable business output" },
    ],
    tech: ["Python", "PySpark", "Databricks", "Azure", "SQL", "Delta Lake"],
  },
  {
    id: "02",
    tags: "AUTOMATION · RPA · BACKEND",
    title: "SAP Automation & RPA",
    description:
      "Automation systems for enterprise workflows involving SAP interfaces and repetitive operational processes.",
    context:
      "Working across SAP UI5 interfaces, dynamic web elements, iframes and complex XPath.",
    stats: [{ term: "Role", value: "Full Stack / RPA Developer" }],
    flow: [
      { label: "Browser UI", detail: "SAP UI5 interfaces" },
      { label: "Automation", detail: "Selenium · XPath" },
      { label: "Workflow", detail: "enterprise process" },
    ],
    tech: ["Python", "Selenium", "SAP UI5", "RPA", "XPath"],
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
];

export const breadth = [
  "React applications",
  "NestJS APIs",
  "FastAPI services",
  "JWT authentication",
  "Microservices",
  "Kubernetes",
  "Redis caching",
  "REST APIs",
  "Cloud deployments",
];

export const stack = [
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
];

export const experience = [
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
];

export const about = [
  "I'm a Systems Engineering student and Software Engineer based in Medellín, Colombia. I enjoy working on problems where software, data and business logic intersect.",
  "I started through software development and automation, and gradually moved deeper into backend engineering and large-scale data processing.",
  "My favorite projects are the ones where the hard part isn't writing the code — it's understanding the problem, designing the system and making it reliable.",
];
