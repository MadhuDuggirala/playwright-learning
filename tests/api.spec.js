const { test, expect } = require('@playwright/test');

test('GET API practice', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.id).toBe(1);
  expect(body.name).toBeTruthy();

});

test('POST API practice', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright API Test',
        body: 'Learning POST request',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  console.log(body);

  expect(body.title).toBe('Playwright API Test');
  expect(body.body).toBe('Learning POST request');
  expect(body.userId).toBe(1);
  expect(body.id).toBeTruthy();

});