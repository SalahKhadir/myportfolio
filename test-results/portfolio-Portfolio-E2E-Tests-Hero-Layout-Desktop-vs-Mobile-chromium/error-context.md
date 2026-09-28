# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio E2E Tests >> Hero Layout Desktop vs Mobile
- Location: e2e/portfolio.spec.ts:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: /GET IN TOUCH/i })
Expected: visible
Error: strict mode violation: getByRole('link', { name: /GET IN TOUCH/i }) resolved to 2 elements:
    1) <a href="/contact" class="button group ml-4">…</a> aka getByRole('link', { name: 'Get In Touch', exact: true })
    2) <a href="/contact" class="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">GET IN TOUCH →</a> aka getByRole('link', { name: 'GET IN TOUCH →' })

Call log:
  - Expect "toBeVisible" getByRole('link', { name: /GET IN TOUCH/i }) with timeout 5000ms
  - waiting for getByRole('link', { name: /GET IN TOUCH/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: /
        - img "Logo" [ref=e5]
      - generic [ref=e6]:
        - link "01.Engineered Systems" [ref=e7] [cursor=pointer]:
          - /url: /architectures
        - link "02.Capabilities" [ref=e8] [cursor=pointer]:
          - /url: /capabilities
        - link "03.Track Record" [ref=e9] [cursor=pointer]:
          - /url: /experience
        - link "04.About" [ref=e10] [cursor=pointer]:
          - /url: /about
        - link "Get In Touch" [ref=e11] [cursor=pointer]:
          - /url: /contact
  - main [ref=e15]:
    - generic [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - text: "Status:"
          - generic [ref=e20]: AVAILABLE FOR PFE (FEB 2027)
        - generic [ref=e21]: "Focus: DevOps & Backend Systems"
        - generic [ref=e22]: "Stack: Spring Boot / FastAPI / GitLab CI/CD"
      - generic [ref=e23]:
        - generic [ref=e24]: "Location: Rabat / Casablanca, MOROCCO"
        - generic [ref=e25]: "System: v4.2.0_Stable"
        - generic [ref=e26]: "Ref: Portfolio_2026"
      - generic [ref=e27]:
        - generic:
          - generic:
            - img "Salah"
        - generic [ref=e28]:
          - paragraph [ref=e29]:
            - text: Hi, my name is
            - generic [ref=e30]: Salah
            - text: and I'm a
          - heading "SOFTWARE & DEVOPS ENGINEER" [level=1] [ref=e31]: SOFTWARE & DEVOPSENGINEER
          - paragraph [ref=e32]: Architecting resilient backend systems and automated CI/CD security pipelines.
          - generic [ref=e33]:
            - link "VIEW ARCHITECTURES →" [ref=e34] [cursor=pointer]:
              - /url: /architectures
            - link "RESUME / CV ↗" [ref=e35] [cursor=pointer]:
              - /url: /Salah_KHADIR_CV.pdf
            - link "GET IN TOUCH →" [ref=e36] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e38]:
      - generic [ref=e39]:
        - paragraph [ref=e40]: SOFTWARE & DEVOPS ENGINEER
        - heading "ABOUT ME" [level=2] [ref=e41]
        - paragraph [ref=e42]: Bridging the gap between robust backend engineering and zero-trust DevOps infrastructure.
      - generic [ref=e43]:
        - paragraph [ref=e44]: Final-year Software Engineering student at EMSI Rabat specializing in Digital Development and Information Systems. My engineering practice focuses on designing modular, resilient backend services and automating cloud-native delivery pipelines.
        - paragraph [ref=e45]: I approach software engineering with a dual focus on server-side architecture and operational security. On the application layer, I design structured APIs and data processing workflows using Spring Boot and FastAPI, prioritizing relational integrity and asynchronous event handling. On the delivery layer, I implement automated CI/CD pipelines embedded with shift-left security practices—integrating static application testing and container vulnerability scanning to guarantee predictable, zero-downtime rollouts.
        - paragraph [ref=e46]: Certified as an Oracle Certified Java SE 17 Developer, OCI DevOps Professional, and OCI Architect Professional, I balance clean architectural patterns with reproducible cloud infrastructure.
        - paragraph [ref=e47]: Currently seeking a 4 to 6-month End-of-Studies (PFE) internship starting February 2027.
    - generic [ref=e48]:
      - generic [ref=e49]:
        - paragraph [ref=e50]: // PRODUCTION PLATFORMS
        - heading "ENGINEERED SYSTEMS" [level=2] [ref=e51]
        - paragraph [ref=e52]: High-throughput backend microservices, automated CI/CD delivery pipelines, and intelligent retrieval platforms engineered for resilience and scale.
      - generic [ref=e53]:
        - article [ref=e54]:
          - generic [ref=e57]:
            - generic [ref=e62]:
              - img "TicketHub" [ref=e63]
              - generic [ref=e64]: "[ SYSTEM SCHEMATIC: TicketHub ]"
            - generic [ref=e65]:
              - generic [ref=e66]: Spring Boot 3
              - generic [ref=e67]: Next.js (App Router)
              - generic [ref=e68]: PostgreSQL/MySQL
              - generic [ref=e69]: Flyway
              - generic [ref=e70]: Server-Sent Events (SSE)
              - generic [ref=e71]: GitHub Actions CI
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e74]: "01."
              - generic [ref=e75]: Enterprise IT Incident Management & Service Desk
            - heading "TicketHub" [level=3] [ref=e76]
            - paragraph [ref=e77]: TicketHub provides structured incident resolution for IT support operations. Built on a decoupled Spring Boot and Next.js foundation, it manages the complete ticket lifecycle across priority levels, categories, and custom workflows. The backend features scheduled background services for SLA compliance monitoring, automatically flagging nearing breaches and routing tickets based on technician availability. Updates are delivered asynchronously via Server-Sent Events, ensuring operations teams maintain situational awareness across all administrative and support views.
            - list [ref=e78]:
              - listitem [ref=e79]:
                - generic [ref=e81]: Strict Role-Based Access Control with guarded client-side routes and secure endpoints
              - listitem [ref=e82]:
                - generic [ref=e84]: Automated background SlaMonitoringService
              - listitem [ref=e85]:
                - generic [ref=e87]: Asynchronous Server-Sent Events (SSE) notification stream
              - listitem [ref=e88]:
                - generic [ref=e90]: Technician availability tracking, active load balancing, and administrative resolution metrics
            - link "View System Specs →" [ref=e92] [cursor=pointer]:
              - /url: /contact
        - article [ref=e93]:
          - generic [ref=e96]:
            - generic [ref=e101]:
              - img "BibloNova" [ref=e102]
              - generic [ref=e103]: "[ SYSTEM SCHEMATIC: BibloNova ]"
            - generic [ref=e104]:
              - generic [ref=e105]: Spring Boot 3
              - generic [ref=e106]: Java 17
              - generic [ref=e107]: React (Vite)
              - generic [ref=e108]: MySQL
              - generic [ref=e109]: Spring Security
              - generic [ref=e110]: Docker
              - generic [ref=e111]: Google Gemini API
          - generic [ref=e112]:
            - generic [ref=e113]:
              - generic [ref=e114]: "02."
              - generic [ref=e115]: Digital Library & AI Reading Assistant
            - heading "BibloNova" [level=3] [ref=e116]
            - paragraph [ref=e117]: BibloNova modernizes digital literature management by pairing an enterprise-grade backend with interactive AI capabilities. Built with a Spring Boot and React monorepo architecture, the platform features stateless JWT authentication, role-based access control, and complete CRUD workflows for library inventories. Beyond standard reading and shelving features, BibloNova integrates a configurable Gemini-driven chat client capable of answering contextual queries and offering reading recommendations based on reader history. The platform is containerized using Docker and Docker Compose for production-grade reliability.
            - list [ref=e118]:
              - listitem [ref=e119]:
                - generic [ref=e121]: Context-aware AI assistant (BibloBot) with runtime tuning
              - listitem [ref=e122]:
                - generic [ref=e124]: Multi-tier role permissions separating standard readers from admins
              - listitem [ref=e125]:
                - generic [ref=e127]: Centralized management console featuring inventory controls
            - link "View System Specs →" [ref=e129] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e130]:
      - generic [ref=e131]:
        - paragraph [ref=e132]: // TECHNICAL DOMAINS
        - heading "CORE CAPABILITIES" [level=2] [ref=e133]
        - paragraph [ref=e134]: Specializing in resilient server architectures, automated deployment workflows, and contextual data pipelines.
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e137]: "01."
          - heading "Backend Architecture" [level=3] [ref=e138]
          - paragraph [ref=e139]: Designing modular monorepos, stateless REST APIs, microservices, and asynchronous event streams engineered for data consistency and fault-tolerance.
          - generic [ref=e140]: Explore Capability →
        - generic [ref=e142]:
          - generic [ref=e143]: "02."
          - heading "DevOps & Cloud Delivery" [level=3] [ref=e144]
          - paragraph [ref=e145]: Building automated CI/CD pipelines with integrated shift-left security (SAST, secret detection, container auditing) and zero-downtime container rollouts.
          - generic [ref=e146]: Explore Capability →
        - generic [ref=e148]:
          - generic [ref=e149]: "03."
          - heading "Full-Stack Integration" [level=3] [ref=e150]
          - paragraph [ref=e151]: Connecting enterprise backend engines to high-performance reactive web interfaces, real-time dashboards, and applied AI/RAG APIs.
          - generic [ref=e152]: Explore Capability →
    - generic [ref=e155]:
      - generic [ref=e156]:
        - heading "SYSTEM SPECS & FAQ" [level=2] [ref=e157]
        - paragraph [ref=e158]: DEEP DIVE INQUIRIES
      - generic [ref=e159]:
        - generic [ref=e160]:
          - button "When are you available for your PFE internship?" [ref=e161]
          - paragraph [ref=e166]: I am available starting February 2027 for a full-time end-of-studies (PFE) internship (4 to 6 months), open to opportunities across Morocco (Casablanca, Rabat) and abroad.
        - generic [ref=e167]:
          - button "What is your primary technical focus?" [ref=e168]
          - paragraph [ref=e172]:
            - text: My core specialization is
            - strong [ref=e173]: Backend Development
            - text: (Java/Spring Boot, Python/FastAPI) and
            - strong [ref=e174]: DevOps Automation
            - text: (GitLab CI/CD, Docker, Kubernetes, and
            - strong [ref=e175]: Shift-Left
            - text: security tooling).
        - generic [ref=e176]:
          - button "What professional certifications do you hold?" [ref=e177]
          - paragraph [ref=e181]: "I hold 3 active Oracle credentials: OCI DevOps Professional (1Z0-1109-26), OCI Architect Professional (1Z0-997-26), and Java SE 17 Developer (1Z0-829)."
        - generic [ref=e182]:
          - button "How do you ensure security across your deployments?" [ref=e183]
          - paragraph [ref=e187]: I treat security as a continuous, automated process rather than an afterthought. By embedding shift-left security gates directly into the CI/CD pipeline—using Gitleaks for secret detection, Semgrep for static analysis (SAST), and Trivy for container auditing—I ensure vulnerabilities are resolved before they ever hit production.
    - generic [ref=e189]:
      - generic [ref=e190]:
        - paragraph [ref=e191]: "Phase 01: Connection"
        - heading "Get In Touch" [level=2] [ref=e192]
        - paragraph [ref=e193]: Ready to discuss an engineering challenge or a 2027 PFE opportunity? Send a message directly or connect via the channels below.
      - generic [ref=e194]:
        - generic [ref=e195]:
          - heading "Send a Message" [level=2] [ref=e196]
          - generic [ref=e197]:
            - textbox "Name" [ref=e198]
            - textbox "Email" [ref=e199]
            - textbox "Message" [ref=e200]
            - button "Submit Inquiry" [ref=e202]
        - generic [ref=e203]:
          - generic [ref=e204]:
            - heading "Contact Details" [level=2] [ref=e205]
            - generic [ref=e206]:
              - link "salah.khadir@outlook.com" [ref=e211] [cursor=pointer]:
                - /url: mailto:salah.khadir@outlook.com
              - generic [ref=e216]:
                - paragraph [ref=e217]: Morocco (GMT)
                - paragraph [ref=e218]: Loading...
              - generic [ref=e222]:
                - paragraph [ref=e223]: Current Status
                - generic [ref=e224]: Available for PFE (Feb 2027)
            - link "Chat on WhatsApp" [ref=e225] [cursor=pointer]:
              - /url: https://wa.me/212677346626
          - generic [ref=e228]:
            - heading "Connect" [level=2] [ref=e229]
            - paragraph [ref=e230]: Follow my work or send me a message on social platforms.
            - generic [ref=e231]:
              - link "GitHub" [ref=e232] [cursor=pointer]:
                - /url: https://github.com/SalahKhadir
              - link "LinkedIn" [ref=e235] [cursor=pointer]:
                - /url: https://linkedin.com/in/salah-khadir
              - link "Email" [ref=e238] [cursor=pointer]:
                - /url: mailto:salah.khadir@outlook.com
  - button "Open Next.js Dev Tools" [ref=e247] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Portfolio E2E Tests', () => {
  4  |   
  5  |   test('SEO & Metadata on Home Page', async ({ page }) => {
  6  |     await page.goto('/');
  7  |     
  8  |     // Check title (should contain name)
  9  |     await expect(page).toHaveTitle(/Salah Khadir/);
  10 |     
  11 |     // Check canonical link
  12 |     const canonical = page.locator('link[rel="canonical"]');
  13 |     await expect(canonical).toHaveAttribute('href', /salahkhadir\.codes/);
  14 |   });
  15 | 
  16 |   test('Hero Layout Desktop vs Mobile', async ({ page, isMobile }) => {
  17 |     await page.goto('/');
  18 |     
  19 |     // Check main elements are visible
  20 |     const getInTouchBtn = page.getByRole('link', { name: /GET IN TOUCH/i });
> 21 |     await expect(getInTouchBtn).toBeVisible();
     |                                 ^ Error: expect(locator).toBeVisible() failed
  22 | 
  23 |     if (isMobile) {
  24 |       // Assert that elements don't vertically collide on mobile
  25 |       const image = page.locator('img[alt="Salah Khadir"]').first();
  26 |       const greeting = page.getByText(/Hi, my name is/i).first();
  27 |       
  28 |       const imageBox = await image.boundingBox();
  29 |       const greetingBox = await greeting.boundingBox();
  30 |       
  31 |       if (imageBox && greetingBox) {
  32 |         // Since image is at the top on mobile, its Y position should be less than the greeting's Y
  33 |         expect(imageBox.y).toBeLessThan(greetingBox.y);
  34 |       }
  35 |     }
  36 |   });
  37 | 
  38 |   test('Contact Form Validation & Botcheck', async ({ page }) => {
  39 |     await page.goto('/contact');
  40 |     
  41 |     // Verify botcheck (honeypot) is hidden
  42 |     const botcheck = page.locator('input[name="botcheck"]');
  43 |     await expect(botcheck).toBeHidden();
  44 | 
  45 |     // Verify required validation (HTML5 native validation blocks form submission)
  46 |     const submitBtn = page.getByRole('button', { name: /Submit Inquiry/i });
  47 |     await submitBtn.click();
  48 |     
  49 |     // It should not change to "Sending..." because it's empty
  50 |     await expect(submitBtn).toHaveText(/Submit Inquiry/i);
  51 |     
  52 |     // Fill out form
  53 |     await page.getByPlaceholder('Name').fill('E2E Tester');
  54 |     await page.getByPlaceholder('Email').fill('tester@example.com');
  55 |     await page.getByPlaceholder('Message').fill('This is a test message from Playwright.');
  56 |     
  57 |     // Now it should submit and change state
  58 |     await submitBtn.click();
  59 |     await expect(submitBtn).toHaveText(/Sending.../i);
  60 |   });
  61 | 
  62 |   test('OpenGraph Dynamic Route Returns Valid Image', async ({ request }) => {
  63 |     // Note: OpenGraph endpoint must return a 200 and image/* type
  64 |     const response = await request.get('/opengraph-image');
  65 |     expect(response.status()).toBe(200);
  66 |     expect(response.headers()['content-type']).toContain('image/');
  67 |   });
  68 | 
  69 |   test('Custom 404 Error Page Handling', async ({ page }) => {
  70 |     const response = await page.goto('/non-existent-page');
  71 |     // Ensure HTTP 404 is returned
  72 |     expect(response?.status()).toBe(404);
  73 |     
  74 |     // Ensure custom 404 UI is displayed
  75 |     await expect(page.getByText('404 // ROUTE_NOT_FOUND')).toBeVisible();
  76 |     await expect(page.getByRole('link', { name: /RETURN TO BASE_NODE/i })).toBeVisible();
  77 |   });
  78 | });
  79 | 
```