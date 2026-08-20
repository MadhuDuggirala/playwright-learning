const { test, expect } = require('../fixtures/testFixtures');

test('use HomePage through fixture', async ({ homePage }) => {

  await homePage.navigate();

  await expect(homePage.getStartedLink).toBeVisible();

  await homePage.clickGetStarted();

});