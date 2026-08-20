const { test, expect } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');

test('navigate using page object', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.navigate();

  await expect(homePage.getStartedLink).toBeVisible();

  await homePage.clickGetStarted();

  await expect(page).toHaveURL(/.*intro/);

});

test('navigate to docs using page object', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.navigate();

  await homePage.clickDocs();

  await expect(page).toHaveURL(/.*docs/);

});