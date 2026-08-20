const { test, expect } = require('@playwright/test');

test.use({
  storageState: 'auth/user.json'
});

test('open inventory page using saved authentication', async ({ page }) => {

  // Notice: NO username/password and NO login click
  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page).toHaveURL(/inventory/);

  await expect(
    page.getByText('Products')
  ).toBeVisible();

});