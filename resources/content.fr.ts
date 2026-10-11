export const systemConfig = {
  status: "DISPONIBLE POUR PFE (FÉV 2027)",
  focus: "DevOps & Systèmes Backend",
  stack: "Spring Boot / FastAPI / GitLab CI/CD",
  location: "Rabat / Casablanca, MAROC",
  system: "v2.0.0_Stable",
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
    description: "TicketHub assure la résolution structurée des incidents pour le support informatique. Architecture découplée Spring Boot 3 et Next.js remplaçant le polling client par un flux asynchrone Server-Sent Events (SSE) HTTP/1.1 maintenant une connexion persistante par client. Intègre un service SlaMonitoringService exécutant des balayages cron planifiés contre des délais stricts de résolution par priorité, avec RBAC multiniveaux (Client, Technicien, Admin) sécurisé par JWT sans état et filtres Spring Security.",
    image: "/assets/projects/tickethub.png",
    stack: ["SPRING BOOT 3", "NEXT.JS (APP ROUTER)", "POSTGRESQL/MYSQL", "SPRING DATA JPA", "SERVER-SENT EVENTS (SSE)", "GITHUB ACTIONS CI"],
    coreFeatures: [
      "Flux asynchrone Server-Sent Events (SSE) éliminant la surcharge du polling HTTP redondant",
      "Tâches de fond planifiées (cron) pour le suivi et l'escalade automatisés des dépassements de SLA",
      "Contrôle d'accès basé sur les rôles (Admin/Technicien/Client) appuyé par Spring Security et JWT"
    ]
  },
  {
    index: "02.",
    category: "BIBLIOTHÈQUE NUMÉRIQUE & ASSISTANT DE LECTURE IA",
    title: "BibloNova",
    client: "Monorepo Terminé",
    description: "BibloNova associe des services Java d'entreprise à des capacités d'IA interactives via un monorepo React et une API REST Spring Boot. Déploie une topologie 3-tiers conteneurisée (Spring Boot, MySQL 8, proxy inverse Nginx) isolée dans des réseaux bridge Docker Compose dédiés. Intègre l'API Google Gemini contrainte par des fenêtres de contexte limitées en jetons et des schémas de charges assainis pour les requêtes sémantiques, sécurisée par authentification JWT sans état séparant privilèges d'inventaire admin et catalogue lecteur.",
    image: "/assets/projects/BibloNova.png",
    stack: ["SPRING BOOT 3", "JAVA 17", "REACT (VITE)", "MYSQL", "SPRING SECURITY", "DOCKER", "NGINX", "GOOGLE GEMINI API"],
    coreFeatures: [
      "Requêtes sémantiques propulsées par Gemini contraintes dans des contextes de jetons limités",
      "Déploiement conteneurisé 3-tiers (Spring Boot / MySQL / Nginx) sur réseaux bridge Docker isolés",
      "Authentification sans état stricte par JWT séparant l'inventaire admin et le catalogue lecteur"
    ]
  },
  {
    index: "03.",
    category: "MÉDIAS CULTURELS & PLATEFORME DE STREAMING MUSICAL",
    title: "Sounds of Morocco",
    client: "En Ligne / Déployé",
    description: "Sounds of Morocco est une plateforme de médias culturels déployée pour documenter la scène musicale marocaine moderne. Conçue avec Next.js (App Router), elle hisse un contexte audio HTML5 persistant au-dessus de l'arbre de routage pour assurer une lecture continue ininterrompue lors des transitions de navigation client. Alimentée par un CMS headless Strapi sur PostgreSQL délivrant des blocs JSON modulaires mis en cache via Next.js ISR, avec un pipeline CDN Cloudinary pour le streaming audio à la volée et l'optimisation responsive des médias.",
    image: "/assets/projects/soundsofmorocco.png",
    stack: ["NEXT.JS (APP ROUTER)", "STRAPI CMS", "POSTGRESQL (SUPABASE)", "TAILWIND CSS", "CLOUDINARY", "VERCEL"],
    coreFeatures: [
      "Contexte audio React global préservant une lecture fluide à travers les navigations",
      "CMS headless sur PostgreSQL servant du contenu structuré via le cache Next.js ISR",
      "Pipeline média Cloudinary optimisant le streaming haut débit et la livraison responsive"
    ]
  },
  {
    index: "04.",
    category: "ANALYSE GÉOSPATIALE & MANIPULATION DE DONNÉES",
    title: "GeoLocation Utility",
    client: "Environnement de Script Terminé",
    description: "Environnement de calcul géospatial Python haute performance conçu pour les requêtes de localisation massives et les transformations de coordonnées. Implémente des calculs de distance Haversine vectorisés avec NumPy et Narwhals, remplaçant les boucles imbriquées (O(N²)) par des opérations matricielles vectorisées en O(N). Permet des requêtes de proximité spatiale en moins de 10 ms sur des milliers de coordonnées tout en appliquant une évaluation colonnaire évitant les allocations de copies intermédiaires.",
    image: "/assets/projects/geolocation.png",
    stack: ["PYTHON", "NUMPY", "NARWHALS", "PANDAS"],
    coreFeatures: [
      "Algorithmes géométriques Haversine vectorisés opérant en opérations matricielles O(N)",
      "Requêtes de proximité spatiale sous 10 ms sur des milliers de points de coordonnées géospatiales",
      "Exécution colonnaire via Narwhals/NumPy éliminant la surcharge des copies mémoire redondantes"
    ]
  },
  {
    index: "05.",
    category: "SÉLECTION AUTOMATISÉE DE CV & CHATBOT RH",
    title: "Enterprise HR AI Assistant",
    client: "Monorepo Terminé",
    description: "Conçu lors d'un stage d'ingénierie logicielle, cet assistant IA rationalise les processus RH et le tri des CV. Bâti sur des endpoints asynchrones FastAPI et React, le service ingère des documents (PDF/DOCX) via une extraction de texte découpée en blocs avant la recherche contextuelle et l'embedding Gemini. Intègre une mémoire de conversation isolée par session maintenant le contexte sous les limites de jetons et un middleware limiteur de débit par seau à jetons (token-bucket), conteneurisé avec FastAPI et proxy inverse Nginx.",
    image: "/assets/projects/ai-chatbot.png",
    stack: ["FASTAPI", "PYTHON", "GOOGLE GEMINI SDK", "SQLALCHEMY", "REACT (VITE)", "DOCKER", "NGINX"],
    coreFeatures: [
      "Middleware limiteur de débit (token-bucket) à fenêtre glissante imposant des limites strictes par IP",
      "Pipeline d'extraction documentaire par blocs alimentant le SDK Google Gemini avec des payloads assainis",
      "Architecture conteneurisée FastAPI + proxy inverse Nginx pour la gestion concurrente des requêtes"
    ]
  },
  {
    index: "06.",
    category: "GESTION DES DÉCHETS URBAINS & SIGNALEMENT ÉCOLOGIQUE",
    title: "EcoTrace",
    client: "Monorepo Terminé",
    description: "EcoTrace coordonne le signalement des irrégularités environnementales urbaines entre citoyens et services municipaux. Conçu avec Django REST Framework et MySQL, le backend impose 3 niveaux d'utilisateurs isolés (Citoyen déclarant, Opérateur de terrain, Superviseur municipal) protégés par authentification JWT. Intègre un pipeline asynchrone d'upload média restreignant les charges à 5 Mo avec validation stricte des types MIME via Pillow, soutenu par des champs spatiaux indexés et des contraintes de clés étrangères validés par CI GitHub Actions.",
    image: "/assets/projects/ecotrace.png",
    stack: ["DJANGO", "DJANGO REST FRAMEWORK", "REACT", "MYSQL", "JWT AUTH", "PILLOW", "GITHUB ACTIONS"],
    coreFeatures: [
      "Schéma d'isolation des rôles à 3 niveaux (Déclarant / Opérateur / Superviseur) via authentification JWT",
      "Pipeline d'upload média multipart imposant des charges de 5 Mo et validation MIME avec Pillow",
      "CI automatisée GitHub Actions validant le linting, les migrations de base de données et les tests unitaires"
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
    getInTouch: "CONTACTEZ-MOI \u2192",
    statusLabel: "Statut :",
    focusLabel: "Focus :",
    stackLabel: "Stack :",
    locationLabel: "Localisation :",
    systemLabel: "Système :",
    refLabel: "Réf :"
  },
  about: {
    tagline: "INGÉNIEUR LOGICIEL & DEVOPS",
    title: "À PROPOS",
    subtitle: "Faire le pont entre l'ingénierie backend robuste et l'infrastructure DevOps zero-trust.",
    cvDownloadTitle: "Curriculum Vitae",
    cvDownloadDesc: "Vous cherchez un dossier académique complet, l'historique de mes expériences et mes certifications ?",
    cvDownloadBtn: "TÉLÉCHARGER LE CV \u2193",
    cvFormat: "(PDF, 1 PAGE)",
    stats: {
      certificationsCount: 3,
      certificationsSuffix: "",
      certificationsLabel: "Certifications Professionnelles",
      certificationsSub: "Oracle Cloud & Java SE 17",

      systemsBuiltCount: 5,
      systemsBuiltSuffix: "+",
      systemsBuiltLabel: "Systèmes Full-Stack & Cloud Conçus",
      systemsBuiltSub: "TicketHub, BibloNova, Spring Boot & React",

      securityCount: 100,
      securitySuffix: "%",
      securityLabel: "Sécurité & Déploiement Automatisés",
      securitySub: "Docker, CI/CD, Alertes SAST",

      gradYear: 2027,
      gradSuffix: "",
      gradLabel: "Diplôme d'Ingénieur d'État PFE",
      gradSub: "EMSI Rabat — Spécialisation DDSI"
    }
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
    verifiedCredential: "CERTIFICATION VÉRIFIÉE",
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
  },
  footer: {
    mission: "Conception de microservices backend résilients, pipelines DevSecOps automatisés et architectures cloud haute disponibilité.",
    navigation: "Navigation",
    channelsAndResources: "Canaux & Ressources",
    downloadResume: "Télécharger CV (PDF, 1 Page)",
    pressKey: "Appuyez sur",
    forCopilot: "pour l'assistant IA",
    allRightsReserved: "Tous droits réservés.",
    backToTop: "Haut de page",
    rabatUtc: "Rabat UTC"
  },
  terminal: {
    name: "Sal",
    role: "Assistant d'ingénierie virtuel de Salah",
    initialMessage: "Bonjour ! Je suis Sal, l'assistant d'ingénierie virtuel de Salah. Posez-moi vos questions sur son architecture backend, DevOps ou sa disponibilité de stage.",
    openingBash: "Ouverture de l'environnement bash complet...",
    systemError: "Erreur système. Veuillez réessayer.",
    connectionFailed: "Connexion échouée. Assistant hors ligne.",
    title: "Sal",
    subtitle: "Assistant d'ingénierie virtuel de Salah",
    processing: "Traitement en cours...",
    inputPlaceholder: "Posez une question à Sal sur le backend, le cloud ou les projets...",
    openAriaLabel: "Ouvrir Sal - Assistant d'ingénierie virtuel",
    inquiryTitle: "Sujets d'exploration",
    quickPrompts: {
      whoIsSalahLabel: "Qui est Salah ?",
      whoIsSalahDesc: "Formation d'ingénieur, parcours et vision",
      whoIsSalahPrompt: "Qui est Salah Khadir et quelle est sa formation d'ingénieur ?",

      stackLabel: "Stack Backend & DevOps",
      stackDesc: "Spring Boot 3, Docker, Kubernetes & Linux",
      stackPrompt: "Quelles technologies Backend et DevOps Salah maîtrise-t-il ?",

      certificationsLabel: "Certifications Cloud & Java",
      certificationsDesc: "Oracle OCI Architect, DevOps & Java SE 17",
      certificationsPrompt: "Quelles sont les certifications détenues par Salah et que valident-elles ?",

      availabilityLabel: "Disponibilité Stage",
      availabilityDesc: "Stage PFE de fin d'études 2027",
      availabilityPrompt: "Salah est-il disponible pour un stage PFE ingénieur en 2027 ?",

      tickethubLabel: "Architecture TicketHub",
      tickethubDesc: "Monorepo, flux SSE et sécurité RBAC",
      tickethubPrompt: "Comment est conçue l'architecture de la plateforme TicketHub ?",

      experienceLabel: "Expérience Professionnelle",
      experienceDesc: "Stages chez Capgemini Engineering & CGI",
      experiencePrompt: "Quels projets Salah a-t-il réalisés lors de ses stages chez Capgemini et CGI ?"
    },
    neofetch: {
      whoami: "salah khadir - Ingénieur Logiciel & DevOps. J'automatise et conçois des systèmes scalables.",
      catResume: "Ouverture du CV...",
      hireSalah: "Accès autorisé. redirection vers /contact ...",
      help: "Commandes disponibles: whoami, clear, exit, cat resume.pdf, sudo hire salah, ls"
    }
  }
};
