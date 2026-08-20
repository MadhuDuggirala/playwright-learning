const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

Given(
  'the user is on the SauceDemo login page',
  async function () {

    await this.loginPage.navigate();

  }
);

When(
  'the user logs in with username {string} and password {string}',
  async function (username, password) {

    await this.loginPage.login(
      username,
      password
    );

  }
);

Then(
  'the login result should be {string}',
  async function (result) {

    if (result === 'success') {

      await expect(this.page)
        .toHaveURL(/inventory/);

      await expect(
        this.page.getByText('Products')
      ).toBeVisible();

    }

    if (result === 'locked') {

      await expect(
        this.page.getByText(/locked out/i)
      ).toBeVisible();

    }

  }
);