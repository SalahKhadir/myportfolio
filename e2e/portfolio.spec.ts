import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  
  test('SEO & Metadata on Home Page', async ({ page }) => {
    await page.goto('/');
    
    // Check title (should contain name)
    await expect(page).toHaveTitle(/Salah Khadir/);
    
    // Check canonical link
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /salahkhadir\.codes/);
  });

  test('Hero Layout Desktop vs Mobile', async ({ page, isMobile }) => {
    await page.goto('/');
    
    // Check main elements are visible
    const getInTouchBtn = page.getByRole('link', { name: /GET IN TOUCH/i });
    await expect(getInTouchBtn).toBeVisible();

    if (isMobile) {
      // Assert that elements don't vertically collide on mobile
      const image = page.locator('img[alt="Salah Khadir"]').first();
      const greeting = page.getByText(/Hi, my name is/i).first();
      
      const imageBox = await image.boundingBox();
      const greetingBox = await greeting.boundingBox();
      
      if (imageBox && greetingBox) {
        // Since image is at the top on mobile, its Y position should be less than the greeting's Y
        expect(imageBox.y).toBeLessThan(greetingBox.y);
      }
    }
  });

  test('Contact Form Validation & Botcheck', async ({ page }) => {
    await page.goto('/contact');
    
    // Verify botcheck (honeypot) is hidden
    const botcheck = page.locator('input[name="botcheck"]');
    await expect(botcheck).toBeHidden();

    // Verify required validation (HTML5 native validation blocks form submission)
    const submitBtn = page.getByRole('button', { name: /Submit Inquiry/i });
    await submitBtn.click();
    
    // It should not change to "Sending..." because it's empty
    await expect(submitBtn).toHaveText(/Submit Inquiry/i);
    
    // Fill out form
    await page.getByPlaceholder('Name').fill('E2E Tester');
    await page.getByPlaceholder('Email').fill('tester@example.com');
    await page.getByPlaceholder('Message').fill('This is a test message from Playwright.');
    
    // Now it should submit and change state
    await submitBtn.click();
    await expect(submitBtn).toHaveText(/Sending.../i);
  });

  test('OpenGraph Dynamic Route Returns Valid Image', async ({ request }) => {
    // Note: OpenGraph endpoint must return a 200 and image/* type
    const response = await request.get('/opengraph-image');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('image/');
  });

  test('Custom 404 Error Page Handling', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    // Ensure HTTP 404 is returned
    expect(response?.status()).toBe(404);
    
    // Ensure custom 404 UI is displayed
    await expect(page.getByText('404 // ROUTE_NOT_FOUND')).toBeVisible();
    await expect(page.getByRole('link', { name: /RETURN TO BASE_NODE/i })).toBeVisible();
  });
});
