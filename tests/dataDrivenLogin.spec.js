const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

const users = require('../test-data/loginData.json');

for (const user of users) {

  test(`login validation - ${user.name}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      user.username,
      user.password
    );

    if (user.expected === 'success') {

      await expect(page).toHaveURL(/inventory/);

    } else {

      await expect(
        page.getByText(/locked out/i)
      ).toBeVisible();

    }

  });

}