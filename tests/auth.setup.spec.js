const { test: setup, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

const authFile = 'auth/user.json';

setup('authenticate', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory/);

  await page.context().storageState({
    path: authFile
  });

});