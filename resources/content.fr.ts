export const systemConfig = {
  status: "DISPONIBLE POUR PFE (FÉV 2027)",
  focus: "DevOps & Systèmes Backend",
  stack: "Spring Boot / FastAPI / GitLab CI/CD",
  location: "Rabat / Casablanca, MAROC",
  system: "v4.2.0_Stable",
  ref: "Portfolio_2026",
  email: "salah.khadir@outlook.com",
  github: "https://github.com/SalahKhadir",
  linkedin: "https://linkedin.com/in/salah-khadir",
};

export const profile = {
  name: "Salah",
  surname: "Khadir",
  titlePrimary: "INGÉNIEUR LOGICIEL",
  titleSecondary: "& DEVOPS",
  subtitle: "Architecte de systèmes backend résilients et de pipelines de sécurité CI/CD automatisés.",
  aboutParagraphs: [
    "Étudiant en dernière année d'ingénierie logicielle à l'EMSI Rabat, spécialisé en Développement Digital et Systèmes d'Information. Ma pratique de l'ingénierie se concentre sur la conception de *services backend modulaires et résilients* et l'automatisation de *pipelines de livraison cloud-native*.",
    "J'aborde l'ingénierie logicielle avec une double focalisation sur *l'architecture côté serveur* et *la sécurité opérationnelle*. Sur la couche application, je conçois des API structurées et des flux de traitement de données en utilisant *Spring Boot et FastAPI*, en priorisant l'intégrité relationnelle et la gestion asynchrone des événements. Sur la couche livraison, je déploie des *pipelines CI/CD automatisés* intégrant des *pratiques de sécurité shift-left*—intégrant des tests de sécurité applicative statique (SAST) et l'analyse des vulnérabilités des conteneurs pour garantir des déploiements prévisibles sans temps d'arrêt.",
    "Certifié en tant que *Développeur Oracle Java SE 17*, *Professionnel DevOps OCI* et *Professionnel Architecte OCI*, je trouve l'équilibre entre des modèles d'architecture propres et une infrastructure cloud reproductible.",
    "Actuellement à la recherche d'un stage de Projet de Fin d'Études (PFE) de 4 à 6 mois à partir de *Février 2027*."
  ]
};

export const architectures = [
  {
    index: "01.",
    category: "GESTION DES INCIDENTS INFORMATIQUES & CENTRE DE SERVICES",
    title: "TicketHub",
    client: "Monorepo Terminé",
    description: "TicketHub offre une résolution structurée des incidents pour les opérations de support informatique. Construit sur une base découplée Spring Boot et Next.js, il gère le cycle de vie complet des tickets à travers les niveaux de priorité, les catégories et les flux de travail personnalisés. Le backend intègre des services d'arrière-plan planifiés pour la surveillance du respect des SLA, signalant automatiquement les dépassements imminents et acheminant les tickets en fonction de la disponibilité des techniciens. Les mises à jour sont livrées de manière asynchrone via Server-Sent Events, garantissant que les équipes opérationnelles maintiennent une conscience situationnelle sur toutes les vues administratives et de support.",
    image: "/assets/projects/tickethub.png",
    stack: ["SPRING BOOT 3", "NEXT.JS (APP ROUTER)", "POSTGRESQL/MYSQL", "SPRING DATA JPA", "SERVER-SENT EVENTS (SSE)", "GITHUB ACTIONS CI"],
    coreFeatures: [
      "Contrôle d'accès basé sur les rôles (RBAC) strict avec routes sécurisées",
      "Service en arrière-plan automatisé SlaMonitoringService",
      "Flux de notifications asynchrone Server-Sent Events (SSE)",
      "Suivi de la disponibilité des techniciens et métriques de résolution"
    ]
  },
  {
    index: "02.",
    category: "BIBLIOTHÈQUE NUMÉRIQUE & ASSISTANT DE LECTURE IA",
    title: "BibloNova",
    client: "Monorepo Terminé",
    description: "BibloNova modernise la gestion de la littérature numérique en associant un backend d'entreprise à des capacités interactives d'IA. Construit avec une architecture monorepo Spring Boot et React, la plateforme propose une authentification JWT sans état, un contrôle d'accès basé sur les rôles et des flux CRUD complets pour les inventaires de bibliothèque. Au-delà des fonctionnalités standard, BibloNova intègre un client de discussion configurable piloté par Gemini capable de répondre à des requêtes contextuelles et de proposer des recommandations de lecture. La plateforme est entièrement conteneurisée via Docker et Nginx.",
    image: "/assets/projects/BibloNova.png",
    stack: ["SPRING BOOT 3", "JAVA 17", "REACT (VITE)", "MYSQL", "SPRING SECURITY", "DOCKER", "NGINX", "GOOGLE GEMINI API"],
    coreFeatures: [
      "Assistant IA contextuel (BibloBot) avec réglage à l'exécution",
      "Autorisations de rôles multiniveaux",
      "Console de gestion centralisée de l'inventaire"
    ]
  },
  {
    index: "03.",
    category: "MÉDIAS CULTURELS & PLATEFORME DE STREAMING MUSICAL",
    title: "Sounds of Morocco",
    client: "En Ligne / Déployé",
    description: "Sounds of Morocco est une plateforme de médias culturels déployée pour préserver le paysage musical marocain moderne. Construite avec Next.js (App Router) et soutenue par un CMS headless Strapi sur PostgreSQL, l'application offre des mises en page éditoriales statiques et dynamiques. Elle dispose d'un moteur audio persistant intégré qui offre une lecture continue pendant les transitions de navigation, avec des profils d'artistes et des canaux de soumission.",
    image: "/assets/projects/soundsofmorocco.png",
    stack: ["NEXT.JS (APP ROUTER)", "STRAPI CMS", "POSTGRESQL (SUPABASE)", "TAILWIND CSS", "CLOUDINARY", "VERCEL"],
    coreFeatures: [
      "Mini-lecteur HTML5 persistant intégré (PlayerContext)",
      "Intégration de blocs Strapi personnalisés",
      "Annuaire centralisé pour les artistes marocains émergents"
    ]
  },
  {
    index: "04.",
    category: "ANALYSE GÉOSPATIALE & MANIPULATION DE DONNÉES",
    title: "GeoLocation Utility",
    client: "Environnement de Script Terminé",
    description: "Un environnement de script Python haute performance conçu pour manipuler des données géospatiales et exécuter des requêtes basées sur la localisation. En s'appuyant sur des bibliothèques de calcul numérique comme Numpy et Narwhals, l'utilitaire contourne les boucles itératives standard pour réduire de manière exponentielle le temps d'exécution des calculs de proximité.",
    image: "/assets/projects/geolocation.png",
    stack: ["PYTHON", "NUMPY", "NARWHALS", "PANDAS"],
    coreFeatures: [
      "Calculs numériques rapides pour la géométrie de distance",
      "Couche de compatibilité Dataframe grâce à Narwhals",
      "Transformations spatiales vectorisées évitant les goulots d'étranglement"
    ]
  },
  {
    index: "05.",
    category: "SÉLECTION AUTOMATISÉE DE CV & CHATBOT RH",
    title: "Enterprise HR AI Assistant",
    client: "Monorepo Terminé",
    description: "Conçu lors d'un stage, ce ChatBot IA rationalise les flux de recrutement RH. Construit avec FastAPI et React, il connecte des pipelines d'ingestion de documents aux modèles Google Gemini, permettant une recherche contextuelle sur les politiques internes et les CV. La solution intègre une suite d'analyse administrative dédiée, un middleware limiteur de taux (token-bucket) personnalisé, et est déployée via Docker et Nginx.",
    image: "/assets/projects/ai-chatbot.png",
    stack: ["FASTAPI", "PYTHON", "GOOGLE GEMINI SDK", "SQLALCHEMY", "REACT (VITE)", "DOCKER", "NGINX"],
    coreFeatures: [
      "Modèle d'IA conversationnelle basé sur des jeux de données spécifiques",
      "Moteur administratif d'ingestion de documents",
      "Middleware limiteur de débit personnalisé"
    ]
  },
  {
    index: "06.",
    category: "GESTION DES DÉCHETS URBAINS & SIGNALEMENT ÉCOLOGIQUE",
    title: "EcoTrace",
    client: "Monorepo Terminé",
    description: "EcoTrace comble le fossé de communication entre les citoyens et les opérateurs municipaux de gestion des déchets. Utilisant Django REST Framework et MySQL, la plateforme fournit des API authentifiées pour signaler les irrégularités avec des médias joints. Le service intègre des notifications asynchrones et des validations de déploiement automatisées via GitHub Actions.",
    image: "/assets/projects/ecotrace.png",
    stack: ["DJANGO", "DJANGO REST FRAMEWORK", "REACT", "MYSQL", "JWT AUTH", "PILLOW", "GITHUB ACTIONS"],
    coreFeatures: [
      "Flux de signalement des déchets supportant géolocalisation et médias",
      "Schéma d'autorisation multi-locataires isolant les rôles",
      "Scripts de provisionnement de base de données automatisés"
    ]
  }
];

export const services = [
  {
    index: "01",
    title: "Architecture Backend",
    description: "Conception de monorepos modulaires, API REST sans état, microservices et flux d'événements asynchrones conçus pour la cohérence des données et la tolérance aux pannes.",
    tech: "Spring Boot, FastAPI, Django, PostgreSQL, MySQL"
  },
  {
    index: "02",
    title: "DevOps & Livraison Cloud",
    description: "Création de pipelines CI/CD automatisés avec sécurité intégrée (SAST, détection de secrets) et déploiements de conteneurs sans temps d'arrêt.",
    tech: "GitLab CI/CD, GitHub Actions, Docker, Kubernetes, OCI, Trivy, Semgrep"
  },
  {
    index: "03",
    title: "Intégration Full-Stack",
    description: "Connexion de moteurs backend d'entreprise à des interfaces web réactives haute performance, des tableaux de bord en temps réel et des API d'IA appliquées.",
    tech: "React, Next.js, Tailwind CSS, TypeScript, REST APIs, SSE"
  }
];

export const faqs = [
  {
    question: "Quand êtes-vous disponible pour votre stage PFE ?",
    answer: "Je suis disponible à partir de Février 2027 pour un stage de Projet de Fin d'Études (PFE) à temps plein (4 à 6 mois), ouvert aux opportunités à travers le Maroc (Casablanca, Rabat) et à l'étranger."
  },
  {
    question: "Quelle est votre spécialisation technique principale ?",
    answer: "Ma spécialisation principale est le Développement Backend (Java/Spring Boot, Python/FastAPI) et l'Automatisation DevOps (GitLab CI/CD, Docker, Kubernetes, et outils de sécurité Shift-Left)."
  },
  {
    question: "Quelles certifications professionnelles possédez-vous ?",
    answer: "Je détiens 3 certifications Oracle actives : OCI DevOps Professional (1Z0-1109-26), OCI Architect Professional (1Z0-997-26) et Java SE 17 Developer (1Z0-829)."
  },
  {
    question: "Comment assurez-vous la sécurité de vos déploiements ?",
    answer: "Je considère la sécurité comme un processus continu et automatisé. En intégrant des barrières de sécurité directement dans le pipeline CI/CD (Gitleaks pour la détection de secrets, Semgrep pour l'analyse statique SAST, et Trivy pour l'audit des conteneurs), je m'assure que les vulnérabilités sont résolues avant la production."
  }
];

export const experience = [
  {
    period: "Juil 2026 – Sep 2026",
    role: "Stagiaire DevOps",
    company: "Capgemini Engineering Maroc",
    location: "Casablanca, Maroc",
    summary:
      "Conception et automatisation d'un pipeline GitLab CI/CD à 6 étapes pour une plateforme d'IA générative orchestrant 9 microservices, FastAPI, React/Vite, MinIO et PostgreSQL.",
    metrics: [
      "Intégration de la sécurité shift-left (Semgrep SAST, Gitleaks, scans Trivy), détectant 32 vulnérabilités avant déploiement.",
      "Optimisation du temps d'exécution du pipeline à 4m42s (-19.7%) via parallélisation DAG.",
    ],
    stack: ["GitLab CI/CD", "Docker", "Trivy", "Semgrep", "Gitleaks", "Python", "FastAPI", "Linux"],
  },
  {
    period: "Juil 2025 – Août 2025",
    role: "Stagiaire Full-Stack & IA",
    company: "Compagnie Générale Immobilière (CGI)",
    location: "Rabat, Maroc",
    summary:
      "Ingénierie d'un assistant de recrutement RH automatisé pour l'analyse des candidats, l'évaluation des profils et la correspondance intelligente des postes.",
    metrics: [
      "Mise en œuvre d'un pipeline de classification d'intention et RAG sur des offres d'emploi.",
      "Réduction significative du temps de présélection manuel pour l'acquisition de talents.",
    ],
    stack: ["FastAPI", "React", "Python", "MySQL", "Google Gemini API", "RAG"],
  },
  {
    period: "Avr 2024",
    role: "Stagiaire Développeur Full-Stack",
    company: "Agence du Bassin Hydraulique Guir-Ziz-Rheris",
    location: "Errachidia, Maroc",
    summary:
      "Développement d'une plateforme de gestion centralisée pour les patrouilles sur le terrain de la police de l'eau et le suivi des infractions.",
    metrics: [
      "Conception d'une API REST RBAC multi-rôles et d'un tableau de bord opérationnel.",
    ],
    stack: ["Laravel", "React", "REST API", "MySQL"],
  },
];

export const certifications = [
  {
    title: "OCI DevOps Professional",
    code: "1Z0-1109-26",
    issuer: "Oracle",
    type: "Certification Professionnelle",
  },
  {
    title: "OCI Architect Professional",
    code: "1Z0-997-26",
    issuer: "Oracle",
    type: "Certification Professionnelle",
  },
  {
    title: "Java SE 17 Developer",
    code: "1Z0-829",
    issuer: "Oracle",
    type: "Certification Professionnelle",
  },
];

export const education = [
  {
    period: "2024 – Présent (Diplôme en 2027)",
    degree: "Diplôme d'Ingénieur d'État en Informatique & Réseaux",
    specialization: "Développement Digital et Systèmes d'Information",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    location: "Rabat, Maroc",
  },
  {
    period: "2022 – 2024",
    degree: "Diplôme de Technicien Spécialisé en Web Full-Stack",
    specialization: "Développement Web Full Stack",
    school: "Institut Spécialisé de Technologie Appliquée (ISTA)",
    location: "Errachidia, Maroc",
  },
];

export const cvTechStackData = [
  {
    category: "Langages & Cœur",
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
    category: "Frameworks & Environnements",
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
    category: "Bases de données & Stockage",
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

export const ui = {
  hero: {
    greeting: "Bonjour, je m'appelle",
    andIAmA: "et je suis un",
    viewArchitectures: "VOIR LES ARCHITECTURES \u2192",
    resumeCv: "MON CV \u2197",
    getInTouch: "CONTACTEZ-MOI \u2192"
  },
  about: {
    tagline: "INGÉNIEUR LOGICIEL & DEVOPS",
    title: "À PROPOS",
    subtitle: "Faire le pont entre l'ingénierie backend robuste et l'infrastructure DevOps zero-trust.",
    cvDownloadTitle: "Curriculum Vitae",
    cvDownloadDesc: "Vous cherchez un dossier académique complet, l'historique de mes expériences et mes certifications ?",
    cvDownloadBtn: "TÉLÉCHARGER LE CV \u2193",
    cvFormat: "(PDF, 1 PAGE)"
  },
  navbar: {
    engineeredSystems: "Systèmes Conçus",
    capabilities: "Compétences",
    trackRecord: "Expérience",
    about: "À Propos",
    getInTouch: "Contact",
    resumeCv: "Mon CV"
  },
  page: {
    engineeredSystemsTag: "// PLATEFORMES DE PRODUCTION",
    engineeredSystemsTitle: "SYSTÈMES CONÇUS",
    engineeredSystemsDesc: "Microservices backend à haut débit, pipelines de livraison CI/CD automatisés et plateformes de recherche intelligentes conçues pour la résilience et l'échelle.",
    capabilitiesTag: "// DOMAINES TECHNIQUES",
    capabilitiesTitle: "COMPÉTENCES CLÉS",
    capabilitiesDesc: "Spécialisé dans les architectures de serveurs résilientes, les flux de déploiement automatisés et les pipelines de données contextuelles.",
    faqTitle: "SPÉCIFICATIONS & FAQ",
    faqTag: "QUESTIONS APPROFONDIES"
  },
  card: {
    viewSystemSpecs: "Voir les Spécifications \u2192",
    systemSchematic: "SCHÉMA SYSTÈME :"
  },
  services: {
    exploreCapability: "Explorer la Compétence \u2192"
  },
  contact: {
    tagline: "Phase 01 : Connexion",
    title: "Contactez-moi",
    description: "Prêt à discuter d'un défi d'ingénierie ou d'une opportunité de PFE pour 2027 ? Envoyez un message directement ou connectez-vous via les canaux ci-dessous.",
    sendMessage: "Envoyer un Message",
    namePlaceholder: "Nom",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    submitIdle: "Envoyer",
    submitSending: "Envoi en cours...",
    submitSent: "Envoyé !",
    submitRetry: "Réessayer",
    errorMessage: "Échec de la transmission.",
    timeoutMessage: "Délai d'attente réseau. Veuillez envoyer un email directement.",
    messageDelivered: "\u2714 MESSAGE LIVRÉ",
    contactDetails: "Coordonnées",
    moroccoGmt: "Maroc (GMT)",
    currentStatus: "Statut Actuel",
    chatWhatsapp: "Discuter sur WhatsApp",
    connect: "Réseaux",
    socialDesc: "Suivez mon travail ou envoyez-moi un message sur les réseaux."
  },
  architectures: {
    tagline: "// PLATEFORMES DE PRODUCTION",
    title: "SYSTÈMES CONÇUS",
    description: "Microservices backend à haut débit, pipelines de livraison CI/CD automatisés et plateformes de récupération intelligentes conçus pour la résilience et l'échelle."
  },
  experience: {
    tagline: "// EXPÉRIENCE PROFESSIONNELLE",
    title: "PARCOURS & DIPLÔMES",
    description: "Historique de carrière, parcours académique et certifications officielles.",
    careerTimeline: "PARCOURS PROFESSIONNEL",
    certifications: "CERTIFICATIONS",
    issuer: "DÉLIVRÉ PAR :",
    education: "FORMATION"
  },
  capabilities: {
    tagline: "// PORTÉE TECHNIQUE",
    title: "COMPÉTENCES DE BASE",
    description: "Spécialisé dans les architectures de serveurs résilientes, la sécurité des déploiements automatisés et les pipelines de données contextuelles."
  },
  technicalArsenal: {
    tagline: "// STACK & OUTILS",
    title: "ARSENAL TECHNIQUE",
    description: "Compétences clés, environnements d'exécution et outils d'infrastructure."
  }
};
