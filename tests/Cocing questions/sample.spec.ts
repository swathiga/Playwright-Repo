import { test, expect } from '@playwright/test';

test('Automate MakeMyTrip flight search', async ({ page }) => {
  // Navigate to MakeMyTrip
  await page.goto('https://www.makemytrip.com/',{waitUntil:'domcontentloaded'})

  // Close login popup if it appears
  try {
    await page.locator('div.loginModal').waitFor({ timeout: 3000 });
    await page.keyboard.press('Escape');
  } catch {
    console.log('Login popup not found, continuing...');
  }

  // Click on "From" field and select city
  await page.locator('label[for="fromCity"]').click();
  await page.locator('input[placeholder="From"]').fill('Bengaluru');
  await page.locator('p:has-text("Bengaluru, India")').click();

  // Click on "To" field and select city
  await page.locator('label[for="toCity"]').click();
  await page.locator('input[placeholder="To"]').fill('Delhi');
  await page.locator('p:has-text("Delhi, India")').click();

  // Select departure date (example: 25th of current month)
  await page.locator('div.DayPicker-Day:not(.DayPicker-Day--disabled)', { hasText: '25' }).first().click();

  // Click Search
  await page.locator('a.primaryBtn').click();

  // Wait for results page
  await expect(page).toHaveURL(/flights\/list/);
  console.log('Flight search executed successfully!');
});