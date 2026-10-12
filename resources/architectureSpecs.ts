export interface ArchitectureNode {
  id: string;
  name: string;
  layer: "client" | "gateway" | "compute" | "data" | "ai" | "storage";
  tech: string;
  role: string;
  protocol: string;
  latencyTarget: string;
}

export interface SystemSpecData {
  title: string;
  type: string;
  architectureSummary: string;
  flow: string[];
  nodes: ArchitectureNode[];
  specs: {
    latency: {
      p95Target: string;
      dnsTtfb: string;
      internalRpc: string;
    };
    security: {
      authStrategy: string;
      transport: string;
      dataProtection: string;
      threatMitigation: string;
    };
    resilience: {
      concurrency: string;
      failover: string;
      caching: string;
      backpressure: string;
    };
  };
}

export const ARCHITECTURE_SPECS: Record<string, SystemSpecData> = {
  "TicketHub": {
    title: "TicketHub",
    type: "Enterprise IT Incident Management Platform",
    architectureSummary:
      "Stateless 3-tier enterprise architecture separating reactive Next.js client sessions from an audited Spring Boot 3 core backend, backed by an auto-tuning HikariCP connection pool over relational storage with scheduled daemon threads.",
    flow: [
      "Next.js App Router (SSR + Client)",
      "Stateless JWT Bearer Auth Filter",
      "Spring Boot 3 Core Services",
      "Scheduled SlaMonitoringService Daemon",
      "HikariCP Connection Pool",
      "PostgreSQL / MySQL Relational Engine",
    ],
    nodes: [
      {
        id: "client",
        name: "Next.js App Router",
        layer: "client",
        tech: "React 19 / TypeScript",
        role: "Edge-rendered dashboard views, optimistic ticket states, SSE update consumer",
        protocol: "HTTPS / TLS 1.3",
        latencyTarget: "< 120ms TTFB",
      },
      {
        id: "auth",
        name: "Security Filter Chain",
        layer: "gateway",
        tech: "Spring Security 6 (Stateless)",
        role: "Cryptographic HMAC-SHA256 JWT validation, claims extraction, RBAC enforcement",
        protocol: "HTTP Authorization Bearer",
        latencyTarget: "< 3ms validation",
      },
      {
        id: "core",
        name: "Incident Core Engine",
        layer: "compute",
        tech: "Spring Boot 3 / Java 17",
        role: "Ticket lifecycle state machine, escalation triggers, audit log transaction management",
        protocol: "REST API / JSON",
        latencyTarget: "< 45ms P95 latency",
      },
      {
        id: "daemon",
        name: "SlaMonitoringService",
        layer: "compute",
        tech: "Spring @Scheduled Daemon",
        role: "Periodic cron background worker evaluating SLA breaches, priority elevation, and email alerts",
        protocol: "Internal Thread Executor",
        latencyTarget: "Fixed 60s sweep interval",
      },
      {
        id: "pool",
        name: "HikariCP Connection Pool",
        layer: "data",
        tech: "HikariCP 5.x",
        role: "Low-overhead JDBC connection leasing, idle leak detection, statement caching",
        protocol: "JDBC Connection Socket",
        latencyTarget: "< 1ms checkout time",
      },
      {
        id: "db",
        name: "Relational Storage",
        layer: "data",
        tech: "PostgreSQL / MySQL Engine",
        role: "ACID transactions, indexed ticket status, composite keys, immutable audit trails",
        protocol: "TCP Port 5432 / 3306",
        latencyTarget: "< 15ms indexed query",
      },
    ],
    specs: {
      latency: {
        p95Target: "45ms API response time under concurrent employee load",
        dnsTtfb: "90ms worldwide edge delivery via Next.js SSR cache",
        internalRpc: "1.2ms Spring controller-to-service transaction execution",
      },
      security: {
        authStrategy: "Stateless JWT tokens signed with SHA-256 with 60-minute automated rotation",
        transport: "Strict TLS 1.3 with HSTS and CORS preflight origin filtering",
        dataProtection: "Bcrypt hash rounds (cost factor 12) for credentials; encrypted connection strings",
        threatMitigation: "Role-Based Access Control (Admin, Operator, Reporter) enforced at method level with @PreAuthorize",
      },
      resilience: {
        concurrency: "Non-blocking virtual thread readiness & optimized threadpool sizing",
        failover: "Automatic HikariCP connection retry with 30s connection timeout and max lifetime tuning",
        caching: "Caffeine second-level query cache for organizational hierarchy and category metadata",
        backpressure: "Declarative pagination limits (max 50 rows per batch) preventing heap saturation",
      },
    },
  },
  "BibloNova": {
    title: "BibloNova",
    type: "AI-Augmented Digital Library & Reading Assistant",
    architectureSummary:
      "Containerized micro-environment deploying a Vite React SPA fronted by an Nginx reverse proxy, coupled to a Spring Boot 3 enterprise application that coordinates retrieval-augmented generation and semantic search with the Google Gemini SDK.",
    flow: [
      "Vite React SPA (Axios Interceptors)",
      "Nginx Gateway & Reverse Proxy",
      "Spring Boot 3 Core Services",
      "Google Gemini SDK (BibloBot RAG)",
      "Docker Bridge Network",
      "MySQL Enterprise Database",
    ],
    nodes: [
      {
        id: "client",
        name: "React Single Page App",
        layer: "client",
        tech: "Vite / React / Tailwind",
        role: "Interactive virtual book reader, markdown rendering, responsive streaming assistant UI",
        protocol: "HTTPS / WSS",
        latencyTarget: "< 80ms interaction",
      },
      {
        id: "proxy",
        name: "Nginx Gateway",
        layer: "gateway",
        tech: "Nginx Alpine Reverse Proxy",
        role: "SSL termination, static asset gzip caching, proxy pass routing, rate limiting per IP",
        protocol: "HTTP/2 to Upstream",
        latencyTarget: "< 4ms gateway overhead",
      },
      {
        id: "core",
        name: "Spring Boot 3 Core",
        layer: "compute",
        tech: "Java 17 / Spring Web",
        role: "Catalog orchestration, borrowing business rules, JWT auth filter, prompt sanitation",
        protocol: "RESTful JSON Endpoints",
        latencyTarget: "< 35ms service latency",
      },
      {
        id: "ai",
        name: "BibloBot Context Engine",
        layer: "ai",
        tech: "Google Gemini API SDK",
        role: "Natural language query parsing, context-injected book summarization, literary semantic matching",
        protocol: "gRPC / HTTPS Outbound",
        latencyTarget: "< 800ms first token chunk",
      },
      {
        id: "bridge",
        name: "Docker Bridge Network",
        layer: "compute",
        tech: "Docker Compose DNS",
        role: "Isolated inter-container communication with zero public database exposure",
        protocol: "Internal Docker veth Bridge",
        latencyTarget: "< 0.5ms inter-container packet hop",
      },
      {
        id: "db",
        name: "MySQL Catalog Database",
        layer: "data",
        tech: "MySQL 8.0 InnoDB",
        role: "Full-text book indexing, transaction isolation for book reservation locks",
        protocol: "Internal Port 3306",
        latencyTarget: "< 10ms read query",
      },
    ],
    specs: {
      latency: {
        p95Target: "35ms for standard CRUD; < 850ms for Google Gemini RAG generation",
        dnsTtfb: "65ms static bundle delivery via gzip-compressed Nginx edge cache",
        internalRpc: "0.8ms inter-container Docker bridge roundtrip",
      },
      security: {
        authStrategy: "Axios automated request interceptors appending Bearer JWT with automated refresh",
        transport: "Encrypted internal Docker network with non-root container runtimes",
        dataProtection: "Strict prompt injection stripping; sanitization of untrusted user inputs before LLM ingestion",
        threatMitigation: "Sliding-window IP rate limiting in Nginx preventing API abuse and credential stuffing",
      },
      resilience: {
        concurrency: "Multi-worker Nginx event loop feeding multi-threaded Spring Tomcat pool",
        failover: "Graceful Gemini API timeout circuit breaker falling back to catalog keyword search",
        caching: "Local in-memory response cache for frequent book synopsis queries",
        backpressure: "Streamed responses with chunked transfer encoding for LLM generation",
      },
    },
  },
  "Sounds of Morocco": {
    title: "Sounds of Morocco",
    type: "Cultural Media & Music Streaming Platform",
    architectureSummary:
      "Modern decoupled Jamstack & streaming architecture uniting an ISR-optimized Next.js frontend on Vercel with a Strapi Headless CMS hosted alongside PostgreSQL (Supabase), delegating audio/image delivery to Cloudinary CDNs.",
    flow: [
      "Next.js App Router (ISR / SSR)",
      "Cloudinary Audio & Visual CDN",
      "Persistent HTML5 Streaming Engine",
      "Strapi Headless CMS API",
      "Supabase PostgreSQL Database",
    ],
    nodes: [
      {
        id: "client",
        name: "Next.js Web Portal",
        layer: "client",
        tech: "Next.js App Router (Vercel)",
        role: "Incremental Static Regeneration (ISR), regional music taxonomy, cultural artist profiles",
        protocol: "HTTPS / Edge HTTP/3",
        latencyTarget: "< 50ms edge cache hit",
      },
      {
        id: "audio",
        name: "HTML5 Mini-Player",
        layer: "client",
        tech: "React Context / Web Audio API",
        role: "Uninterrupted audio playback across page navigations, waveform visualization, volume persist",
        protocol: "Native Audio Element",
        latencyTarget: "< 20ms buffer seek",
      },
      {
        id: "cdn",
        name: "Cloudinary Media CDN",
        layer: "storage",
        tech: "Cloudinary Multi-CDN",
        role: "Global media offloading, dynamic webp image resizing, progressive audio stream delivery",
        protocol: "TLS 1.3 Streaming CDN",
        latencyTarget: "< 100ms media first-chunk",
      },
      {
        id: "cms",
        name: "Strapi Headless CMS",
        layer: "compute",
        tech: "Node.js / Strapi Blocks",
        role: "Rich-text cultural narrative authoring, webhook emission on release, artist metadata API",
        protocol: "REST API / GraphQL",
        latencyTarget: "< 60ms cached query",
      },
      {
        id: "db",
        name: "Supabase PostgreSQL",
        layer: "data",
        tech: "PostgreSQL 15 (Supabase)",
        role: "Relational taxonomy (regions, genres, artists, tracks), Row Level Security, backups",
        protocol: "Pooled Connection (PgBouncer)",
        latencyTarget: "< 20ms query time",
      },
    ],
    specs: {
      latency: {
        p95Target: "50ms for catalog browsing (ISR cache hit); < 150ms audio chunk time-to-first-sound",
        dnsTtfb: "40ms on Vercel global edge network",
        internalRpc: "18ms Strapi-to-Supabase query latency via connection pooling",
      },
      security: {
        authStrategy: "Read-only scoped API tokens for public Next.js fetch with revalidation tags",
        transport: "End-to-end HTTPS with Cloudinary tokenized URL expiration",
        dataProtection: "Strict Content-Security-Policy (CSP) allowing media streaming strictly from verified origins",
        threatMitigation: "Supabase Row Level Security (RLS) restricting write access exclusively to CMS service roles",
      },
      resilience: {
        concurrency: "Serverless edge functions scaling automatically with traffic spikes",
        failover: "Stale-While-Revalidate (SWR) cache policy keeps site fully functional even if CMS is rebuilding",
        caching: "Edge-cached static pages with on-demand on-publish webhook revalidation tags",
        backpressure: "Segmented progressive audio stream chunking avoiding high mobile memory footprints",
      },
    },
  },
};
