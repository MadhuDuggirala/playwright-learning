// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  // Allow independent tests to run in parallel
  fullyParallel: true,

  // Fail CI if test.only is accidentally committed
  forbidOnly: !!process.env.CI,

  // Retry failures only in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI for now
  workers: process.env.CI ? 1 : undefined,

  // Console + HTML reporting
  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  use: {

    // Useful failure evidence
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [

    // -----------------------------------
    // Authentication setup
    // -----------------------------------
    {
      name: 'setup',

      testMatch: /.*auth\.setup\.spec\.js/,

      use: {
        ...devices['Desktop Chrome']
      }
    },

    // -----------------------------------
    // Normal Chromium tests
    // -----------------------------------
    {
      name: 'chromium',

      testIgnore: [
        /.*auth\.setup\.spec\.js/,
        /.*authenticated\.spec\.js/
      ],

      use: {
        ...devices['Desktop Chrome']
      }
    },

    // -----------------------------------
    // Firefox tests
    // -----------------------------------
    {
      name: 'firefox',

      testIgnore: [
        /.*auth\.setup\.spec\.js/,
        /.*authenticated\.spec\.js/
      ],

      use: {
        ...devices['Desktop Firefox']
      }
    },

    // -----------------------------------
    // WebKit tests
    // -----------------------------------
    {
      name: 'webkit',

      testIgnore: [
        /.*auth\.setup\.spec\.js/,
        /.*authenticated\.spec\.js/
      ],

      use: {
        ...devices['Desktop Safari']
      }
    },

    // -----------------------------------
    // Authenticated Chromium tests
    // -----------------------------------
    {
      name: 'authenticated-chromium',

      testMatch: /.*authenticated\.spec\.js/,

      dependencies: ['setup'],

      use: {
        ...devices['Desktop Chrome'],

        storageState: 'auth/user.json'
      }
    }
  ]
});