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
    "Hey! I'm Salah, a final-year Software Engineering student at École Marocaine des Sciences de l'Ingénieur (EMSI Rabat), specializing in Développement Digital et Systèmes d'Information. I build *high-throughput backend services* and *shift-left DevOps infrastructure*.",
    "I don't just 'build websites.' I architect tools that reduce operational friction and eliminate security vulnerabilities before deployment. My core focus lies at the intersection of robust backend frameworks (Spring Boot, FastAPI), automated multi-stage *CI/CD pipelines*, and zero-trust cloud delivery.",
    "Certified Oracle Cloud Infrastructure (OCI) Architect & DevOps Professional, and Oracle Certified Java SE 17 Developer. I combine deep OOP rigor with modern *cloud-native containerization*.",
    "Currently seeking a 4 to 6-month PFE (End-of-Studies) Internship starting *February 2027*."
  ]
};

export const architectures = [
  {
    index: "01",
    category: "Cloud & DevOps Infrastructure",
    title: "GenAI Microservices CI/CD Platform",
    client: "Capgemini Engineering Morocco",
    description: "A production 6-stage automated GitLab CI/CD pipeline orchestrating 9 generative AI microservices, FastAPI backend, MinIO storage, and React/Vite frontends with automated security gates.",
    image: "/images/projects/capgemini-pipeline.png",
    stack: ["GitLab CI/CD", "Docker", "Trivy", "Semgrep", "Gitleaks", "FastAPI"],
    coreFeatures: [
      "Integrated Shift-Left SAST & Secret Detection",
      "DAG Parallelization: 4m42s Run Time (-19.7%)",
      "Automated SSH-less Zero-Downtime Deployment"
    ]
  },
  {
    index: "02",
    category: "Distributed Backend & Monorepo",
    title: "TicketHub Incident Management",
    client: "Enterprise System Project",
    description: "Production-grade IT incident management platform engineered as a modular monorepo. Features stateless JWT/RBAC security, automated SLA escalation engine, and real-time push updates via SSE.",
    image: "/images/projects/tickethub.png",
    stack: ["Spring Boot", "Next.js", "MySQL", "Spring Security", "SSE"],
    coreFeatures: [
      "Stateless JWT Authentication & Granular RBAC",
      "Automated SLA Tracking with Escalation Rules",
      "Real-time Event Streaming via Server-Sent Events"
    ]
  },
  {
    index: "03",
    category: "Intelligent Document Retrieval (RAG)",
    title: "BibloNova AI Document Intelligence",
    client: "Academic Engineering Project",
    description: "Document management system coupling a Dockerized multi-service Spring Boot backend with a Gemini API RAG pipeline for contextual document search across unstructured corporate records.",
    image: "/images/projects/biblonova.png",
    stack: ["Spring Boot", "React", "Docker", "Gemini API", "MySQL"],
    coreFeatures: [
      "RAG Contextual Search Pipeline",
      "Dockerized Multi-Container Architecture",
      "Secure Document Ingestion & Metadata Indexing"
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
    question: "How do you handle security in your pipelines?",
    answer: "Security is non-negotiable. I integrate shift-left gates directly into the CI loop: Gitleaks for pre-commit/pre-merge secret prevention, Semgrep for static code analysis, and Trivy for container vulnerability scanning."
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
