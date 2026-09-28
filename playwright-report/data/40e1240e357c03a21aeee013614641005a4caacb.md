# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio E2E Tests >> Hero Layout Desktop vs Mobile
- Location: e2e/portfolio.spec.ts:16:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.boundingBox: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('img[alt="Salah Khadir"]').first()

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
        - button "Toggle Dark Mode" [ref=e7]
        - button [ref=e10]
  - main [ref=e12]:
    - generic [ref=e14]:
      - generic:
        - generic:
          - img "Salah"
      - generic [ref=e15]:
        - paragraph [ref=e16]:
          - text: Hi, my name is
          - generic [ref=e17]: Salah
          - text: and I'm a
        - heading "SOFTWARE & DEVOPS ENGINEER" [level=1] [ref=e18]: SOFTWARE & DEVOPSENGINEER
        - paragraph [ref=e19]: Architecting resilient backend systems and automated CI/CD security pipelines.
        - generic [ref=e20]:
          - link "VIEW ARCHITECTURES →" [ref=e21] [cursor=pointer]:
            - /url: /architectures
          - link "RESUME / CV ↗" [ref=e22] [cursor=pointer]:
            - /url: /Salah_KHADIR_CV.pdf
          - link "GET IN TOUCH →" [ref=e23] [cursor=pointer]:
            - /url: /contact
    - generic [ref=e25]:
      - generic [ref=e26]:
        - paragraph [ref=e27]: SOFTWARE & DEVOPS ENGINEER
        - heading "ABOUT ME" [level=2] [ref=e28]
        - paragraph [ref=e29]: Bridging the gap between robust backend engineering and zero-trust DevOps infrastructure.
      - generic [ref=e30]:
        - paragraph [ref=e31]: Final-year Software Engineering student at EMSI Rabat specializing in Digital Development and Information Systems. My engineering practice focuses on designing modular, resilient backend services and automating cloud-native delivery pipelines.
        - paragraph [ref=e32]: I approach software engineering with a dual focus on server-side architecture and operational security. On the application layer, I design structured APIs and data processing workflows using Spring Boot and FastAPI, prioritizing relational integrity and asynchronous event handling. On the delivery layer, I implement automated CI/CD pipelines embedded with shift-left security practices—integrating static application testing and container vulnerability scanning to guarantee predictable, zero-downtime rollouts.
        - paragraph [ref=e33]: Certified as an Oracle Certified Java SE 17 Developer, OCI DevOps Professional, and OCI Architect Professional, I balance clean architectural patterns with reproducible cloud infrastructure.
        - paragraph [ref=e34]: Currently seeking a 4 to 6-month End-of-Studies (PFE) internship starting February 2027.
    - generic [ref=e35]:
      - generic [ref=e36]:
        - paragraph [ref=e37]: // PRODUCTION PLATFORMS
        - heading "ENGINEERED SYSTEMS" [level=2] [ref=e38]
        - paragraph [ref=e39]: High-throughput backend microservices, automated CI/CD delivery pipelines, and intelligent retrieval platforms engineered for resilience and scale.
      - generic [ref=e40]:
        - article [ref=e41]:
          - generic [ref=e44]:
            - generic [ref=e49]:
              - img "TicketHub" [ref=e50]
              - generic [ref=e51]: "[ SYSTEM SCHEMATIC: TicketHub ]"
            - generic [ref=e52]:
              - generic [ref=e53]: Spring Boot 3
              - generic [ref=e54]: Next.js (App Router)
              - generic [ref=e55]: PostgreSQL/MySQL
              - generic [ref=e56]: Flyway
              - generic [ref=e57]: Server-Sent Events (SSE)
              - generic [ref=e58]: GitHub Actions CI
          - generic [ref=e59]:
            - generic [ref=e60]:
              - generic [ref=e61]: "01."
              - generic [ref=e62]: Enterprise IT Incident Management & Service Desk
            - heading "TicketHub" [level=3] [ref=e63]
            - paragraph [ref=e64]: TicketHub provides structured incident resolution for IT support operations. Built on a decoupled Spring Boot and Next.js foundation, it manages the complete ticket lifecycle across priority levels, categories, and custom workflows. The backend features scheduled background services for SLA compliance monitoring, automatically flagging nearing breaches and routing tickets based on technician availability. Updates are delivered asynchronously via Server-Sent Events, ensuring operations teams maintain situational awareness across all administrative and support views.
            - list [ref=e65]:
              - listitem [ref=e66]:
                - generic [ref=e68]: Strict Role-Based Access Control with guarded client-side routes and secure endpoints
              - listitem [ref=e69]:
                - generic [ref=e71]: Automated background SlaMonitoringService
              - listitem [ref=e72]:
                - generic [ref=e74]: Asynchronous Server-Sent Events (SSE) notification stream
              - listitem [ref=e75]:
                - generic [ref=e77]: Technician availability tracking, active load balancing, and administrative resolution metrics
            - link "View System Specs →" [ref=e79] [cursor=pointer]:
              - /url: /contact
        - article [ref=e80]:
          - generic [ref=e83]:
            - generic [ref=e88]:
              - img "BibloNova" [ref=e89]
              - generic [ref=e90]: "[ SYSTEM SCHEMATIC: BibloNova ]"
            - generic [ref=e91]:
              - generic [ref=e92]: Spring Boot 3
              - generic [ref=e93]: Java 17
              - generic [ref=e94]: React (Vite)
              - generic [ref=e95]: MySQL
              - generic [ref=e96]: Spring Security
              - generic [ref=e97]: Docker
              - generic [ref=e98]: Google Gemini API
          - generic [ref=e99]:
            - generic [ref=e100]:
              - generic [ref=e101]: "02."
              - generic [ref=e102]: Digital Library & AI Reading Assistant
            - heading "BibloNova" [level=3] [ref=e103]
            - paragraph [ref=e104]: BibloNova modernizes digital literature management by pairing an enterprise-grade backend with interactive AI capabilities. Built with a Spring Boot and React monorepo architecture, the platform features stateless JWT authentication, role-based access control, and complete CRUD workflows for library inventories. Beyond standard reading and shelving features, BibloNova integrates a configurable Gemini-driven chat client capable of answering contextual queries and offering reading recommendations based on reader history. The platform is containerized using Docker and Docker Compose for production-grade reliability.
            - list [ref=e105]:
              - listitem [ref=e106]:
                - generic [ref=e108]: Context-aware AI assistant (BibloBot) with runtime tuning
              - listitem [ref=e109]:
                - generic [ref=e111]: Multi-tier role permissions separating standard readers from admins
              - listitem [ref=e112]:
                - generic [ref=e114]: Centralized management console featuring inventory controls
            - link "View System Specs →" [ref=e116] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e117]:
      - generic [ref=e118]:
        - paragraph [ref=e119]: // TECHNICAL DOMAINS
        - heading "CORE CAPABILITIES" [level=2] [ref=e120]
        - paragraph [ref=e121]: Specializing in resilient server architectures, automated deployment workflows, and contextual data pipelines.
      - generic [ref=e122]:
        - generic [ref=e123]:
          - generic [ref=e124]: "01."
          - heading "Backend Architecture" [level=3] [ref=e125]
          - paragraph [ref=e126]: Designing modular monorepos, stateless REST APIs, microservices, and asynchronous event streams engineered for data consistency and fault-tolerance.
          - generic [ref=e127]: Explore Capability →
        - generic [ref=e129]:
          - generic [ref=e130]: "02."
          - heading "DevOps & Cloud Delivery" [level=3] [ref=e131]
          - paragraph [ref=e132]: Building automated CI/CD pipelines with integrated shift-left security (SAST, secret detection, container auditing) and zero-downtime container rollouts.
          - generic [ref=e133]: Explore Capability →
        - generic [ref=e135]:
          - generic [ref=e136]: "03."
          - heading "Full-Stack Integration" [level=3] [ref=e137]
          - paragraph [ref=e138]: Connecting enterprise backend engines to high-performance reactive web interfaces, real-time dashboards, and applied AI/RAG APIs.
          - generic [ref=e139]: Explore Capability →
    - generic [ref=e142]:
      - generic [ref=e143]:
        - heading "SYSTEM SPECS & FAQ" [level=2] [ref=e144]
        - paragraph [ref=e145]: DEEP DIVE INQUIRIES
      - generic [ref=e146]:
        - generic [ref=e147]:
          - button "When are you available for your PFE internship?" [ref=e148]
          - paragraph [ref=e153]: I am available starting February 2027 for a full-time end-of-studies (PFE) internship (4 to 6 months), open to opportunities across Morocco (Casablanca, Rabat) and abroad.
        - generic [ref=e154]:
          - button "What is your primary technical focus?" [ref=e155]
          - paragraph [ref=e159]:
            - text: My core specialization is
            - strong [ref=e160]: Backend Development
            - text: (Java/Spring Boot, Python/FastAPI) and
            - strong [ref=e161]: DevOps Automation
            - text: (GitLab CI/CD, Docker, Kubernetes, and
            - strong [ref=e162]: Shift-Left
            - text: security tooling).
        - generic [ref=e163]:
          - button "What professional certifications do you hold?" [ref=e164]
          - paragraph [ref=e168]: "I hold 3 active Oracle credentials: OCI DevOps Professional (1Z0-1109-26), OCI Architect Professional (1Z0-997-26), and Java SE 17 Developer (1Z0-829)."
        - generic [ref=e169]:
          - button "How do you ensure security across your deployments?" [ref=e170]
          - paragraph [ref=e174]: I treat security as a continuous, automated process rather than an afterthought. By embedding shift-left security gates directly into the CI/CD pipeline—using Gitleaks for secret detection, Semgrep for static analysis (SAST), and Trivy for container auditing—I ensure vulnerabilities are resolved before they ever hit production.
    - generic [ref=e176]:
      - generic [ref=e177]:
        - paragraph [ref=e178]: "Phase 01: Connection"
        - heading "Get In Touch" [level=2] [ref=e179]
        - paragraph [ref=e180]: Ready to discuss an engineering challenge or a 2027 PFE opportunity? Send a message directly or connect via the channels below.
      - generic [ref=e181]:
        - generic [ref=e182]:
          - heading "Send a Message" [level=2] [ref=e183]
          - generic [ref=e184]:
            - textbox "Name" [ref=e185]
            - textbox "Email" [ref=e186]
            - textbox "Message" [ref=e187]
            - button "Submit Inquiry" [ref=e189]
        - generic [ref=e190]:
          - generic [ref=e191]:
            - heading "Contact Details" [level=2] [ref=e192]
            - generic [ref=e193]:
              - link "salah.khadir@outlook.com" [ref=e198] [cursor=pointer]:
                - /url: mailto:salah.khadir@outlook.com
              - generic [ref=e203]:
                - paragraph [ref=e204]: Morocco (GMT)
                - paragraph [ref=e205]: Monday 10:48 PM
              - generic [ref=e209]:
                - paragraph [ref=e210]: Current Status
                - generic [ref=e211]: Available for PFE (Feb 2027)
            - link "Chat on WhatsApp" [ref=e212] [cursor=pointer]:
              - /url: https://wa.me/212677346626
          - generic [ref=e215]:
            - heading "Connect" [level=2] [ref=e216]
            - paragraph [ref=e217]: Follow my work or send me a message on social platforms.
            - generic [ref=e218]:
              - link "GitHub" [ref=e219] [cursor=pointer]:
                - /url: https://github.com/SalahKhadir
              - link "LinkedIn" [ref=e222] [cursor=pointer]:
                - /url: https://linkedin.com/in/salah-khadir
              - link "Email" [ref=e225] [cursor=pointer]:
                - /url: mailto:salah.khadir@outlook.com
  - button "Open Next.js Dev Tools" [ref=e234] [cursor=pointer]
  - alert [ref=e238]
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
  21 |     await expect(getInTouchBtn).toBeVisible();
  22 | 
  23 |     if (isMobile) {
  24 |       // Assert that elements don't vertically collide on mobile
  25 |       const image = page.locator('img[alt="Salah Khadir"]').first();
  26 |       const greeting = page.getByText(/Hi, my name is/i).first();
  27 |       
> 28 |       const imageBox = await image.boundingBox();
     |                                    ^ Error: locator.boundingBox: Test timeout of 30000ms exceeded.
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