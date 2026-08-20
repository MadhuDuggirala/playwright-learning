const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  console.log('Running beforeEach');

  await page.goto('https://playwright.dev/');
});

test.afterEach(async () => {
  console.log('Running afterEach');
});

test('verify title using hook', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

test('verify get started using hook', async ({ page }) => {
  const getStarted = page.getByRole('link', {
    name: 'Get started'
  });

  await expect(getStarted).toBeVisible();
});
