# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio E2E Tests >> Custom 404 Error Page Handling
- Location: e2e/portfolio.spec.ts:69:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('404 // ROUTE_NOT_FOUND')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('404 // ROUTE_NOT_FOUND') with timeout 5000ms
  - waiting for getByText('404 // ROUTE_NOT_FOUND')

```

```yaml
- main:
  - text: "EXCEPTION // ERR_ROUTE_NOT_FOUND CODE: 404"
  - heading "404.NULL" [level=1]
  - paragraph: The target URI does not resolve to an active architecture, pipeline, or interface node.
  - link "← Return to Base":
    - /url: /
  - link "Systems":
    - /url: /architectures
  - text: /
  - link "Contact":
    - /url: /contact
  - text: "REF: HOST_RESOLVER_FAULT // SALAHKHADIR.CODES"
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
> 75 |     await expect(page.getByText('404 // ROUTE_NOT_FOUND')).toBeVisible();
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  76 |     await expect(page.getByRole('link', { name: /RETURN TO BASE_NODE/i })).toBeVisible();
  77 |   });
  78 | });
  79 | 
```