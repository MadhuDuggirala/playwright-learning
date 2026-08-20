const { test, expect } = require('@playwright/test');

test('API and UI hybrid test', async ({ request, page }) => {

  // STEP 1: Get test data through API
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  console.log('User from API:', user.name);

  // STEP 2: Validate API data
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();

  // STEP 3: Use browser/UI
  await page.goto(
    'https://jsonplaceholder.typicode.com/'
  );

  // STEP 4: Validate UI
  await expect(page).toHaveTitle(/JSONPlaceholder/);

});