class HomePage {

  constructor(page) {
    this.page = page;

    this.getStartedLink = page.getByRole('link', {
      name: 'Get started'
    });

    this.docsLink = page.getByRole('link', {
      name: 'Docs'
    });
  }

  async navigate() {
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  async clickDocs() {
    await this.docsLink.click();
  }
}

module.exports = { HomePage };