# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio E2E Tests >> Contact Form Validation & Botcheck
- Location: e2e/portfolio.spec.ts:38:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('button', { name: /Submit Inquiry/i })
Expected pattern: /Sending.../i
Received string:  "Submit Inquiry"
Timeout: 5000ms

Call log:
  - Expect "toHaveText" getByRole('button', { name: /Submit Inquiry/i }) with timeout 5000ms
  - waiting for getByRole('button', { name: /Submit Inquiry/i })
    3 × locator resolved to <button type="submit" class="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Submit Inquiry</button>
      - unexpected value "Submit Inquiry"

```

```yaml
- button "Submit Inquiry"
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
> 59 |     await expect(submitBtn).toHaveText(/Sending.../i);
     |                             ^ Error: expect(locator).toHaveText(expected) failed
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