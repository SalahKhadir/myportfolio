# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio E2E Tests >> SEO & Metadata on Home Page
- Location: e2e/portfolio.spec.ts:5:7

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: locator('link[rel="canonical"]')
Expected pattern: /salahkhadir\.codes/
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveAttribute" locator('link[rel="canonical"]') with timeout 5000ms
  - waiting for locator('link[rel="canonical"]')

```

```yaml
- navigation:
  - link "Logo":
    - /url: /
    - img "Logo"
  - button "Toggle Dark Mode"
  - button
- main:
  - img "Salah"
  - paragraph: Hi, my name is Salah and I'm a
  - heading "SOFTWARE & DEVOPS ENGINEER" [level=1]
  - paragraph: Architecting resilient backend systems and automated CI/CD security pipelines.
  - link "VIEW ARCHITECTURES →":
    - /url: /architectures
  - link "RESUME / CV ↗":
    - /url: /Salah_KHADIR_CV.pdf
  - link "GET IN TOUCH →":
    - /url: /contact
  - paragraph: SOFTWARE & DEVOPS ENGINEER
  - heading "ABOUT ME" [level=2]
  - paragraph: Bridging the gap between robust backend engineering and zero-trust DevOps infrastructure.
  - paragraph: Final-year Software Engineering student at EMSI Rabat specializing in Digital Development and Information Systems. My engineering practice focuses on designing modular, resilient backend services and automating cloud-native delivery pipelines.
  - paragraph: I approach software engineering with a dual focus on server-side architecture and operational security. On the application layer, I design structured APIs and data processing workflows using Spring Boot and FastAPI, prioritizing relational integrity and asynchronous event handling. On the delivery layer, I implement automated CI/CD pipelines embedded with shift-left security practices—integrating static application testing and container vulnerability scanning to guarantee predictable, zero-downtime rollouts.
  - paragraph: Certified as an Oracle Certified Java SE 17 Developer, OCI DevOps Professional, and OCI Architect Professional, I balance clean architectural patterns with reproducible cloud infrastructure.
  - paragraph: Currently seeking a 4 to 6-month End-of-Studies (PFE) internship starting February 2027.
  - paragraph: // PRODUCTION PLATFORMS
  - heading "ENGINEERED SYSTEMS" [level=2]
  - paragraph: High-throughput backend microservices, automated CI/CD delivery pipelines, and intelligent retrieval platforms engineered for resilience and scale.
  - article:
    - img "TicketHub"
    - text: "[ SYSTEM SCHEMATIC: TicketHub ] Spring Boot 3 Next.js (App Router) PostgreSQL/MySQL Flyway Server-Sent Events (SSE) GitHub Actions CI 01. Enterprise IT Incident Management & Service Desk"
    - heading "TicketHub" [level=3]
    - paragraph: TicketHub provides structured incident resolution for IT support operations. Built on a decoupled Spring Boot and Next.js foundation, it manages the complete ticket lifecycle across priority levels, categories, and custom workflows. The backend features scheduled background services for SLA compliance monitoring, automatically flagging nearing breaches and routing tickets based on technician availability. Updates are delivered asynchronously via Server-Sent Events, ensuring operations teams maintain situational awareness across all administrative and support views.
    - list:
      - listitem: Strict Role-Based Access Control with guarded client-side routes and secure endpoints
      - listitem: Automated background SlaMonitoringService
      - listitem: Asynchronous Server-Sent Events (SSE) notification stream
      - listitem: Technician availability tracking, active load balancing, and administrative resolution metrics
    - link "View System Specs →":
      - /url: /contact
  - article:
    - img "BibloNova"
    - text: "[ SYSTEM SCHEMATIC: BibloNova ] Spring Boot 3 Java 17 React (Vite) MySQL Spring Security Docker Google Gemini API 02. Digital Library & AI Reading Assistant"
    - heading "BibloNova" [level=3]
    - paragraph: BibloNova modernizes digital literature management by pairing an enterprise-grade backend with interactive AI capabilities. Built with a Spring Boot and React monorepo architecture, the platform features stateless JWT authentication, role-based access control, and complete CRUD workflows for library inventories. Beyond standard reading and shelving features, BibloNova integrates a configurable Gemini-driven chat client capable of answering contextual queries and offering reading recommendations based on reader history. The platform is containerized using Docker and Docker Compose for production-grade reliability.
    - list:
      - listitem: Context-aware AI assistant (BibloBot) with runtime tuning
      - listitem: Multi-tier role permissions separating standard readers from admins
      - listitem: Centralized management console featuring inventory controls
    - link "View System Specs →":
      - /url: /contact
  - paragraph: // TECHNICAL DOMAINS
  - heading "CORE CAPABILITIES" [level=2]
  - paragraph: Specializing in resilient server architectures, automated deployment workflows, and contextual data pipelines.
  - text: "01."
  - heading "Backend Architecture" [level=3]
  - paragraph: Designing modular monorepos, stateless REST APIs, microservices, and asynchronous event streams engineered for data consistency and fault-tolerance.
  - text: Explore Capability → 02.
  - heading "DevOps & Cloud Delivery" [level=3]
  - paragraph: Building automated CI/CD pipelines with integrated shift-left security (SAST, secret detection, container auditing) and zero-downtime container rollouts.
  - text: Explore Capability → 03.
  - heading "Full-Stack Integration" [level=3]
  - paragraph: Connecting enterprise backend engines to high-performance reactive web interfaces, real-time dashboards, and applied AI/RAG APIs.
  - text: Explore Capability →
  - heading "SYSTEM SPECS & FAQ" [level=2]
  - paragraph: DEEP DIVE INQUIRIES
  - button "When are you available for your PFE internship?"
  - paragraph: I am available starting February 2027 for a full-time end-of-studies (PFE) internship (4 to 6 months), open to opportunities across Morocco (Casablanca, Rabat) and abroad.
  - button "What is your primary technical focus?"
  - paragraph:
    - text: My core specialization is
    - strong: Backend Development
    - text: (Java/Spring Boot, Python/FastAPI) and
    - strong: DevOps Automation
    - text: (GitLab CI/CD, Docker, Kubernetes, and
    - strong: Shift-Left
    - text: security tooling).
  - button "What professional certifications do you hold?"
  - paragraph: "I hold 3 active Oracle credentials: OCI DevOps Professional (1Z0-1109-26), OCI Architect Professional (1Z0-997-26), and Java SE 17 Developer (1Z0-829)."
  - button "How do you ensure security across your deployments?"
  - paragraph: I treat security as a continuous, automated process rather than an afterthought. By embedding shift-left security gates directly into the CI/CD pipeline—using Gitleaks for secret detection, Semgrep for static analysis (SAST), and Trivy for container auditing—I ensure vulnerabilities are resolved before they ever hit production.
  - paragraph: "Phase 01: Connection"
  - heading "Get In Touch" [level=2]
  - paragraph: Ready to discuss an engineering challenge or a 2027 PFE opportunity? Send a message directly or connect via the channels below.
  - heading "Send a Message" [level=2]
  - textbox "Name"
  - textbox "Email"
  - textbox "Message"
  - button "Submit Inquiry"
  - heading "Contact Details" [level=2]
  - link "salah.khadir@outlook.com":
    - /url: mailto:salah.khadir@outlook.com
  - paragraph: Morocco (GMT)
  - paragraph: Monday 10:47 PM
  - paragraph: Current Status
  - text: Available for PFE (Feb 2027)
  - link "Chat on WhatsApp":
    - /url: https://wa.me/212677346626
  - heading "Connect" [level=2]
  - paragraph: Follow my work or send me a message on social platforms.
  - link "GitHub":
    - /url: https://github.com/SalahKhadir
  - link "LinkedIn":
    - /url: https://linkedin.com/in/salah-khadir
  - link "Email":
    - /url: mailto:salah.khadir@outlook.com
- alert
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
> 13 |     await expect(canonical).toHaveAttribute('href', /salahkhadir\.codes/);
     |                             ^ Error: expect(locator).toHaveAttribute(expected) failed
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