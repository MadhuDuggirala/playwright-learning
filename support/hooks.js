const {
  Before,
  After
} = require('@cucumber/cucumber');

const { chromium } = require('playwright');
const { LoginPage } = require('../Pages/LoginPage');

Before(async function () {

  this.browser = await chromium.launch({
    headless: process.env.CI ? true : false
  });

  this.context = await this.browser.newContext();

  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);

});

After(async function () {

  if (this.context) {
    await this.context.close();
  }

  if (this.browser) {
    await this.browser.close();
  }

});