export const systemConfig = {
  status: "AVAILABLE FOR PFE (FEB 2027)",
  focus: "DevOps & Backend Systems",
  stack: "Spring Boot / FastAPI / GitLab CI/CD",
  location: "Rabat / Casablanca, MOROCCO",
  system: "v4.2.0_Stable",
  ref: "Portfolio_2026",
  email: "salah.khadir@outlook.com",
  github: "[https://github.com/SalahKhadir](https://github.com/SalahKhadir)",
  linkedin: "[https://linkedin.com/in/salah-khadir](https://linkedin.com/in/salah-khadir)",
};

export const profile = {
  name: "Salah",
  surname: "Khadir",
  titlePrimary: "SOFTWARE & DEVOPS",
  titleSecondary: "ENGINEER",
  subtitle: "Architecting resilient backend systems and automated CI/CD security pipelines.",
  aboutParagraphs: [
    "Final-year Software Engineering student at EMSI Rabat specializing in Digital Development and Information Systems. My engineering practice focuses on designing *modular, resilient backend services* and automating *cloud-native delivery pipelines*.",
    "I approach software engineering with a dual focus on *server-side architecture* and *operational security*. On the application layer, I design structured APIs and data processing workflows using *Spring Boot and FastAPI*, prioritizing relational integrity and asynchronous event handling. On the delivery layer, I implement *automated CI/CD pipelines* embedded with *shift-left security practices*—integrating static application testing and container vulnerability scanning to guarantee predictable, zero-downtime rollouts.",
    "Certified as an *Oracle Certified Java SE 17 Developer*, *OCI DevOps Professional*, and *OCI Architect Professional*, I balance clean architectural patterns with reproducible cloud infrastructure.",
    "Currently seeking a 4 to 6-month End-of-Studies (PFE) internship starting *February 2027*."
  ]
};

export const architectures = [
  {
    index: "01",
    category: "Enterprise IT Incident Management & Service Desk",
    title: "TicketHub",
    client: "Completed Monorepo",
    description: "TicketHub provides structured incident resolution for IT support operations. Built on a decoupled Spring Boot and Next.js foundation, it manages the complete ticket lifecycle across priority levels, categories, and custom workflows. The backend features scheduled background services for SLA compliance monitoring, automatically flagging nearing breaches and routing tickets based on technician availability. Updates are delivered asynchronously via Server-Sent Events, ensuring operations teams maintain situational awareness across all administrative and support views.",
    image: "/assets/projects/tickethub.png",
    stack: ["Spring Boot 3", "Next.js (App Router)", "PostgreSQL/MySQL", "Flyway", "Server-Sent Events (SSE)", "GitHub Actions CI"],
    coreFeatures: [
      "Strict Role-Based Access Control with guarded client-side routes and secure endpoints",
      "Automated background SlaMonitoringService",
      "Asynchronous Server-Sent Events (SSE) notification stream",
      "Technician availability tracking, active load balancing, and administrative resolution metrics"
    ]
  },
  {
    index: "02",
    category: "Digital Library & AI Reading Assistant",
    title: "BibloNova",
    client: "Completed Monorepo",
    description: "BibloNova modernizes digital literature management by pairing an enterprise-grade backend with interactive AI capabilities. Built with a Spring Boot and React monorepo architecture, the platform features stateless JWT authentication, role-based access control, and complete CRUD workflows for library inventories. Beyond standard reading and shelving features, BibloNova integrates a configurable Gemini-driven chat client capable of answering contextual queries and offering reading recommendations based on reader history. The platform is containerized using Docker and Docker Compose for production-grade reliability.",
    image: "/assets/projects/BibloNova.png",
    stack: ["Spring Boot 3", "Java 17", "React (Vite)", "MySQL", "Spring Security", "Docker", "Google Gemini API"],
    coreFeatures: [
      "Context-aware AI assistant (BibloBot) with runtime tuning",
      "Multi-tier role permissions separating standard readers from admins",
      "Centralized management console featuring inventory controls"
    ]
  },
  {
    index: "03",
    category: "Cultural Media & Music Streaming Platform",
    title: "Sounds of Morocco",
    client: "Live / Deployed",
    description: "Sounds of Morocco is a deployed cultural news and media platform designed to preserve and document the modern Moroccan music landscape. Built with Next.js (App Router) and backed by a headless Strapi CMS, the web application delivers static and dynamic editorial layouts via custom block renderers and Cloudinary media optimization. It features an integrated persistent audio engine that provides continuous playback across route transitions, complete with platform links, artist profiles, and submission channels for emerging talent.",
    image: "/assets/projects/soundsofmorocco.png",
    stack: ["Next.js (App Router)", "Strapi CMS", "Tailwind CSS", "Cloudinary", "Framer Motion", "Vercel"],
    coreFeatures: [
      "Embedded persistent HTML5 mini-player (PlayerContext)",
      "Custom Strapi Blocks integration for dynamic journalism",
      "Centralized directory for emerging Moroccan artists"
    ]
  },
  {
    index: "04",
    category: "Geospatial Analytics & Interactive Mapping",
    title: "GeoLocation: Airbnb & Food Hunter",
    client: "Completed Course Project",
    description: "Developed as a NoSQL database application, GeoLocation (Airbnb & Food Hunter) demonstrates location-based search and geospatial data processing. The system stores accommodation and food venue points-of-interest in MongoDB, backed by a 2dsphere index to handle spherical geometry lookups. Using an interactive Streamlit interface, users can query points within an adjustable radius, filter results by venue category, and inspect real-time proximity layers rendered dynamically over interactive maps.",
    image: "/assets/projects/geolocation.png",
    stack: ["Python", "Streamlit", "MongoDB", "GeoSpatial Indexing (2dsphere)", "Folium / Leaflet", "Pandas"],
    coreFeatures: [
      "MongoDB 2dsphere spatial indexing with $near operators",
      "Dual exploration modes allowing spatial queries from predefined hubs",
      "Interactive map visualization with color-coded markers"
    ]
  },
  {
    index: "05",
    category: "Conversational AI & Internal Document Parsing",
    title: "Enterprise HR AI Assistant",
    client: "Completed Monorepo",
    description: "Engineered during a software engineering internship, this AI ChatBot streamlines corporate HR and recruitment workflows. Built using FastAPI and React, it connects custom document ingestion pipelines to Google Gemini models, enabling contextual retrieval over internal company policies, resumes, and candidate logs. The solution incorporates a dedicated administrative analytics suite, token-budget enforcement via middleware rate limiters, and conversation session persistence for audit compliance.",
    image: "/assets/projects/ai-chatbot.png",
    stack: ["FastAPI", "Python", "Google Gemini SDK", "SQLAlchemy", "React (Vite)", "Tailwind CSS"],
    coreFeatures: [
      "Conversational AI model grounded with domain-specific datasets",
      "Administrative document ingestion engine",
      "Custom token-bucket rate limiter middleware"
    ]
  },
  {
    index: "06",
    category: "Urban Waste Management & Ecological Reporting",
    title: "EcoTrace",
    client: "Completed Monorepo",
    description: "EcoTrace bridges the communication gap between citizens and municipal waste operators. Leveraging Django REST Framework and MySQL, the platform provides authenticated APIs for logging environmental irregularities with media attachments and status pipelines. The service incorporates asynchronous notification services, comprehensive permission structures, and custom data migration tooling to handle waste processing analytics and localized community interventions.",
    image: "/assets/projects/ecotrace.png",
    stack: ["Django", "Django REST Framework", "React", "MySQL", "JWT Auth", "Pillow"],
    coreFeatures: [
      "Waste reporting workflow supporting media uploads & geolocation",
      "Multi-tenant permission scheme isolating reporters, operators, inspectors",
      "Automated database provisioning scripts & dynamic notifications"
    ]
  }
];

export const services = [
  {
    index: "01",
    title: "Backend Architecture",
    description: "Designing modular monorepos, stateless REST APIs, microservices, and asynchronous event streams engineered for data consistency and fault-tolerance.",
    tech: "Spring Boot, FastAPI, Django, PostgreSQL, MySQL"
  },
  {
    index: "02",
    title: "DevOps & Cloud Delivery",
    description: "Building automated CI/CD pipelines with integrated shift-left security (SAST, secret detection, container auditing) and zero-downtime container rollouts.",
    tech: "GitLab CI/CD, GitHub Actions, Docker, Kubernetes, OCI, Trivy, Semgrep"
  },
  {
    index: "03",
    title: "Full-Stack Integration",
    description: "Connecting enterprise backend engines to high-performance reactive web interfaces, real-time dashboards, and applied AI/RAG APIs.",
    tech: "React, Next.js, Tailwind CSS, TypeScript, REST APIs, SSE"
  }
];

export const faqs = [
  {
    question: "When are you available for your PFE internship?",
    answer: "I am available starting February 2027 for a full-time end-of-studies (PFE) internship (4 to 6 months), open to opportunities across Morocco (Casablanca, Rabat) and abroad."
  },
  {
    question: "What is your primary technical focus?",
    answer: "My core specialization is Backend Development (Java/Spring Boot, Python/FastAPI) and DevOps Automation (GitLab CI/CD, Docker, Kubernetes, and Shift-Left security tooling)."
  },
  {
    question: "What professional certifications do you hold?",
    answer: "I hold 3 active Oracle credentials: OCI DevOps Professional (1Z0-1109-26), OCI Architect Professional (1Z0-997-26), and Java SE 17 Developer (1Z0-829)."
  },
  {
    question: "How do you ensure security across your deployments?",
    answer: "I treat security as a continuous, automated process rather than an afterthought. By embedding shift-left security gates directly into the CI/CD pipeline—using Gitleaks for secret detection, Semgrep for static analysis (SAST), and Trivy for container auditing—I ensure vulnerabilities are resolved before they ever hit production."
  }
];

export const experience = [
  {
    period: "Jul 2026 – Sep 2026",
    role: "DevOps Intern",
    company: "Capgemini Engineering Morocco",
    location: "Casablanca, Morocco",
    summary:
      "Designed and automated a 6-stage GitLab CI/CD pipeline for a generative AI platform orchestrating 9 microservices, FastAPI, React/Vite, MinIO, and PostgreSQL.",
    metrics: [
      "Integrated shift-left security (Semgrep SAST, Gitleaks, dual Trivy scans), detecting 32 vulnerabilities pre-deployment.",
      "Optimized pipeline execution latency to 4m42s (-19.7%) via DAG parallelization and automated SSH-less deployments.",
    ],
    stack: ["GitLab CI/CD", "Docker", "Trivy", "Semgrep", "Gitleaks", "Python", "FastAPI", "Linux"],
  },
  {
    period: "Jul 2025 – Aug 2025",
    role: "Full-Stack & AI Intern",
    company: "Compagnie Générale Immobilière (CGI)",
    location: "Rabat, Morocco",
    summary:
      "Engineered an automated HR recruitment assistant for candidate parsing, profile scoring, and intelligent position matching.",
    metrics: [
      "Implemented intent classification and RAG pipeline over job offer corpus to automate candidate matching.",
      "Significantly reduced manual screening overhead for HR talent acquisition.",
    ],
    stack: ["FastAPI", "React", "Python", "MySQL", "Google Gemini API", "RAG"],
  },
  {
    period: "Apr 2024",
    role: "Full-Stack Developer Intern",
    company: "Agence du Bassin Hydraulique Guir-Ziz-Rheris",
    location: "Errachidia, Morocco",
    summary:
      "Developed a centralized management platform for water police field patrols and infraction tracking across multiple provinces.",
    metrics: [
      "Designed multi-role RBAC REST API and operational dashboard streamlining field operations.",
    ],
    stack: ["Laravel", "React", "REST API", "MySQL"],
  },
];

export const certifications = [
  {
    title: "OCI DevOps Professional",
    code: "1Z0-1109-26",
    issuer: "Oracle",
    type: "Professional Certification",
  },
  {
    title: "OCI Architect Professional",
    code: "1Z0-997-26",
    issuer: "Oracle",
    type: "Professional Certification",
  },
  {
    title: "Java SE 17 Developer",
    code: "1Z0-829",
    issuer: "Oracle",
    type: "Professional Certification",
  },
];

export const education = [
  {
    period: "2024 – Present (Graduating 2027)",
    degree: "State Engineering Degree in Computer Science & Networks",
    specialization: "Développement Digital et Systèmes d'Information",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    location: "Rabat, Morocco",
  },
  {
    period: "2022 – 2024",
    degree: "Diplôme de Technicien Spécialisé en Web Full-Stack",
    specialization: "Web Full Stack Development",
    school: "Institut Spécialisé de Technologie Appliquée (ISTA)",
    location: "Errachidia, Morocco",
  },
];

export const cvTechStackData = [
  {
    category: "Languages & Core",
    items: [
      { name: "Java", icon: "FaJava" },
      { name: "Python", icon: "SiPython" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "SQL", icon: "TbDatabase" },
      { name: "PHP", icon: "SiPhp" }
    ]
  },
  {
    category: "Frameworks & Runtimes",
    items: [
      { name: "Spring Boot", icon: "SiSpringboot" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "React", icon: "SiReact" },
      { name: "Django", icon: "SiDjango" },
      { name: "Laravel", icon: "SiLaravel" }
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "Oracle DB", icon: "GrOracle" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MinIO", icon: "SiMinio" }
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "SiDocker" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "Terraform", icon: "SiTerraform" },
      { name: "GitLab CI/CD", icon: "SiGitlab" },
      { name: "GitHub Actions", icon: "SiGithubactions" },
      { name: "Oracle Cloud (OCI)", icon: "GrOracle" },
      { name: "Linux", icon: "SiLinux" }
    ]
  }
];
