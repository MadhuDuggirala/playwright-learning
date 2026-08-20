
// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('get started link is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const getStarted = page.getByRole('link', { name: 'Get started' });

  await expect(getStarted).toBeVisible();
});

test('get started navigation works', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const getStarted = page.getByRole('link', { name: 'Get started' });

  await getStarted.click();

  await expect(page).toHaveURL(/.*intro/);
});

test('docs search is available', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const searchButton = page.getByRole('button', {
    name: /search/i
  });

  await expect(searchButton).toBeVisible();

  await searchButton.click();
});

test('locator practice', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const getStartedLink = page.getByRole('link', {
    name: 'Get started'
  });

  const docsLink = page.getByText('Docs');

  await expect(getStartedLink).toBeVisible();
  await expect(docsLink).toBeVisible();
});

test('locator strategy practice', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const getStarted = page.getByRole('link', {
    name: 'Get started'
  });

  const docs = page.getByText('Docs');

  const search = page.getByRole('button', {
    name: /search/i
  });

  await expect(getStarted).toBeVisible();
  await expect(docs).toBeVisible();
  await expect(search).toBeVisible();
});

test('locator chaining and filtering', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  const navigation = page.getByRole('navigation');

  const docsLink = navigation.getByRole('link', {
    name: 'Docs'
  });

  await expect(docsLink).toBeVisible();

});

test('assertion practice', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  const getStarted = page.getByRole('link', {
    name: 'Get started'
  });

  // Visibility assertion
  await expect(getStarted).toBeVisible();

  // Text assertion
  await expect(getStarted).toHaveText('Get started');
  //await expect(getStarted).toHaveText('Start Claim');

  // URL assertion
  await expect(page).toHaveURL(/playwright\.dev/);

  // Click
  await getStarted.click();

  // Verify navigation
  await expect(page).toHaveURL(/.*intro/);

});