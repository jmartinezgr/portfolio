export const es = {
  profile: {
    name: "Juan José Martínez",
    initials: "JJM",
    role: "Ingeniero de Software",
    location: "Medellín, Colombia",
    tagline: "INGENIERO DE SOFTWARE · MEDELLÍN, COLOMBIA",
    headingLead: "Construyo sistemas",
    headingEmphasis: "que manejan datos reales.",
    summary:
      "Soy Backend & Data Engineer, enfocado en procesamiento de datos escalable, automatización y sistemas de software críticos para el negocio.",
    footerNote: "Menos magia. Más sistemas.",
    ctaViewWork: "Ver mi trabajo",
    ctaGithub: "GitHub",
    ctaDownloadCv: "Descargar CV",
    github: "https://github.com/jmartinezgr",
    linkedin: "https://www.linkedin.com/in/juan-jose-martinez",
    email: "josemargri3@gmail.com",
    cv: "/cv.pdf",
  },

  nav: [
    { label: "Trabajo", href: "#work" },
    { label: "Experiencia", href: "#experience" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],

  pipeline: {
    title: "Pipeline / abstracto",
    footer: "Datos entran. Decisiones salen.",
    steps: [
      { label: "DATOS", detail: "múltiples fuentes" },
      { label: "PROCESO", detail: "distribuido" },
      { label: "REGLAS", detail: "estáticas + dinámicas" },
      { label: "RESULTADO", detail: "salida validada" },
    ],
  },

  work: {
    sectionIndex: "01",
    sectionLabel: "Trabajo destacado",
    headingLead: "Sistemas construidos donde datos, ",
    headingEmphasis: "automatización y lógica se cruzan.",
    subheading: "Construido para producción, no solo demos.",
    projectPrefix: "Proyecto",
    flowLabel: "Flujo del sistema",
    problemLabel: "Problema",
    approachLabel: "Enfoque",
    projects: [
      {
        id: "01",
        tags: "INGENIERÍA DE DATOS · BACKEND · LAKEHOUSE",
        title: "AuditLake",
        description:
          "Un motor de auditoría de datos por capas (bronze/silver/gold) para facturación retail, estilo lakehouse — procesa facturas multi-ítem y genera un rastro de auditoría explicable para cada regla evaluada.",
        context:
          "Proyecto de portafolio: el dominio retail es ficticio, pero la forma del pipeline y el motor de reglas están modelados sobre trabajo real de auditoría de datos transaccionales de alto volumen.",
        stats: [
          { term: "Reglas", value: "18 incluidas + personalizadas" },
          { term: "Tests", value: "97 (capa de dominio puro)" },
          { term: "Pipeline", value: "Bronze → Silver → Gold" },
        ],
        problem:
          "Conciliar datos de facturación de alto volumen contra catálogos maestros y explicar por qué falla un registro — no solo que falló — sin un clúster de Spark.",
        approach:
          "Un pipeline medallion (bronze/silver/gold) sobre Delta Lake, consultado directo con DuckDB, más un motor de reglas que separa las validaciones de auto-consistencia de las que dependen de catálogos — permitiendo agregar reglas nuevas desde la UI sin redeploy.",
        flow: [
          { label: "Bronze", detail: "crudo, sin tipar, trazabilidad total" },
          { label: "Silver", detail: "tipado + validado estructuralmente" },
          { label: "Gold", detail: "18 reglas, pasa/falla + severidad" },
          { label: "Explorar", detail: "dashboard, matriz, exportar" },
        ],
        tech: ["Python", "FastAPI", "Polars", "Delta Lake", "DuckDB", "PostgreSQL", "React", "TypeScript"],
        links: [
          { label: "Ver en vivo ↗", href: "https://auditlake.jmartinezgr.com" },
          { label: "GitHub ↗", href: "https://github.com/jmartinezgr/retail-audit-platform" },
        ],
      },
      {
        id: "02",
        tags: "BACKEND · SCRAPING · ARQUITECTURA HEXAGONAL",
        title: "RangeMerge",
        description:
          "Un motor de alarmas de arriendo que fusiona los criterios de búsqueda de todos los usuarios en el mínimo número de barridos posible por sitio, en vez de un barrido por alarma — agrupando alarmas en mega-filtros compartidos y emparejando resultados en memoria.",
        context:
          "Proyecto personal, aún sin desplegar: la arquitectura y dos adaptadores de scraping (ciencuadras.com, metrocuadrado.com) ya están construidos y funcionando en local.",
        stats: [
          { term: "Arquitectura", value: "Hexagonal (puertos y adaptadores)" },
          { term: "Matcher", value: "O(1) discreto / O(log n) continuo" },
          { term: "Estado", value: "Pre-lanzamiento" },
        ],
        problem:
          "Las alarmas de arriendo de N usuarios, cada una con filtros distintos, ingenuamente necesitan una búsqueda por alarma — un desperdicio, y rápido para que el sitio bloquee la IP a cualquier escala real.",
        approach:
          "Agrupar alarmas por (ciudad, barrio, operación, tipo) — la granularidad real que soporta la búsqueda de un sitio —, calcular el rango envolvente de precio/área/habitaciones/baños por grupo, ejecutar una sola búsqueda por grupo, y emparejar el superconjunto contra cada alarma exacta en memoria con un matcher indexado.",
        flow: [
          { label: "Alarmas", detail: "N usuarios, N criterios" },
          { label: "Fusión", detail: "agrupadas en mega-filtros" },
          { label: "Barrido", detail: "1 búsqueda por grupo/proveedor" },
          { label: "Match", detail: "indexado, en memoria" },
        ],
        tech: ["Python", "Playwright", "FastAPI", "Arquitectura hexagonal", "Docker"],
        links: [
          { label: "Ver en vivo", disabled: true, note: "Aún no desplegado" },
          { label: "GitHub ↗", href: "https://github.com/jmartinezgr/property-scrapper" },
        ],
      },
      {
        id: "03",
        tags: "BACKEND · INGENIERÍA DE DATOS · CLOUD",
        title: "Plataforma Distribuida de Procesamiento CSV",
        description:
          "Una arquitectura de workers backend para procesar archivos CSV, convirtiéndolos a formatos columnares eficientes y coordinando trabajos asíncronos.",
        context:
          "Servicios containerizados junto con almacenamiento en la nube y polling de trabajos para una transformación de archivos confiable.",
        stats: [{ term: "Rol", value: "Backend Engineer" }],
        flow: [
          { label: "CSV", detail: "carga cruda" },
          { label: "Worker", detail: "polling asíncrono" },
          { label: "Parquet", detail: "transformación columnar" },
          { label: "Almacenamiento cloud", detail: "salida procesada" },
        ],
        tech: ["Python", "FastAPI", "Polars", "Parquet", "Azure Blob Storage", "Docker"],
      },
    ],
  },

  breadth: {
    sectionIndex: "02",
    sectionLabel: "Alcance",
    heading: "Otras cosas que he construido.",
    subheading: "Backend y datos es mi especialización, pero puedo trabajar en todo el producto.",
    items: [
      "Aplicaciones React",
      "APIs NestJS",
      "Servicios FastAPI",
      "Autenticación JWT",
      "Microservicios",
      "Kubernetes",
      "Cache con Redis",
      "REST APIs",
      "Despliegues en la nube",
    ],
  },

  stack: {
    sectionIndex: "03",
    sectionLabel: "Stack",
    headingLead: "Las herramientas detrás de ",
    headingEmphasis: "los sistemas.",
    subheading: "Herramientas que uso, agrupadas por el tipo de problema que resuelven.",
    footerNote: "Menos magia. Más sistemas.",
    groups: [
      {
        group: "Backend",
        items: ["Python", "FastAPI", "Django REST", "Node.js", "NestJS", "REST APIs", "SQL"],
      },
      {
        group: "Datos",
        items: ["PySpark", "Databricks", "Delta Lake", "Polars", "Pandas", "Parquet", "Data pipelines"],
      },
      {
        group: "Nube / Infraestructura",
        items: ["Azure", "Docker", "Kubernetes", "Redis", "Linux", "CI/CD"],
      },
      {
        group: "Automatización / Frontend",
        items: ["Selenium", "SAP UI5", "RPA", "React", "TypeScript", "Vite", "Tailwind CSS"],
      },
    ],
  },

  experience: {
    sectionIndex: "04",
    sectionLabel: "Experiencia",
    headingLead: "Sistemas reales, ",
    headingEmphasis: "restricciones reales.",
    items: [
      {
        company: "Innovación Analítica",
        role: "Ingeniero de Software Backend",
        date: "Nov 2025 – Presente",
        tags: ["Azure Databricks", "Python / PySpark", "Validación de facturas médicas", "Reglas de negocio dinámicas"],
      },
      {
        company: "TDP Solutions",
        role: "Desarrollador Full Stack / RPA",
        date: "Sep 2025 – Jun 2026",
        tags: ["Python", "RPA", "Selenium", "SAP", "Servicios backend"],
      },
      {
        company: "PITRANSFORM LLC",
        role: "Desarrollador Full Stack",
        date: "Mar 2025 – Ago 2025",
        tags: ["Desarrollo full-stack", "APIs backend", "Automatización", "Aplicaciones web"],
      },
      {
        company: "Universidad Nacional de Colombia",
        role: "Asistente de Proyecto de Investigación",
        date: "Ago 2024 – Jun 2025",
        tags: [],
      },
    ],
  },

  about: {
    sectionIndex: "05",
    sectionLabel: "Sobre mí",
    headingLead: "Más allá ",
    headingEmphasis: "del stack.",
    paragraphs: [
      "Soy estudiante de Ingeniería de Sistemas e Ingeniero de Software, radicado en Medellín, Colombia. Disfruto trabajar en problemas donde el software, los datos y la lógica de negocio se cruzan.",
      "Empecé por el desarrollo de software y la automatización, y fui profundizando en ingeniería backend y procesamiento de datos a gran escala.",
      "Mis proyectos favoritos son aquellos donde lo difícil no es escribir el código — es entender el problema, diseñar el sistema y hacerlo confiable.",
    ],
    closing: "Convirtiendo problemas desordenados en sistemas confiables.",
  },

  contact: {
    sectionIndex: "06",
    sectionLabel: "Contacto",
    heading: "¿Tienes un problema que valga la pena resolver?",
    subheading: "Hablemos de software, datos, automatización o lo que sea que estés construyendo.",
    ctaEmail: "Escríbeme",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
  },

  footer: {
    githubLabel: "GitHub ↗",
    linkedinLabel: "LinkedIn ↗",
    emailLabel: "Email",
  },
};
