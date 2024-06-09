/* eslint-disable import/no-default-export */
import path from 'path'

import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import dotenv from 'dotenv'

// const NODE_ENV = process.env.NODE_ENV || 'development';
// const isLocalBuild = process.env.RUNNING_CONTEXT !== 'docker';

// could reset env here
dotenv.config({ override: true })

process.env.E2E_TEST = 'true'

const e2eRootDir = path.join(__dirname, 'e2e')

/** See https://playwright.dev/docs/test-configuration. */
const config: PlaywrightTestConfig<{ cookies: object[]; authorization: object }> = {
  // these are global setup/teardown, can add own logic if needed
  globalSetup: './e2e/fixtures/global-setup',
  globalTeardown: './e2e/fixtures/global-teardown',
  outputDir: './e2e/test-results',
  testDir: e2eRootDir,
  testMatch: /.*.spec.ts/,
  // tests will run after local dev server started
  // comment out this if you want to start local dev server manually
  webServer: {
    command: 'yarn start',
    url: 'http://localhost:5173',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  timeout: 50 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met. For
     * example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['list'], ['html'], ['json', { outputFile: 'playwright-report/test-results.json' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    testIdAttribute: 'data-testid',
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:5173',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    storageState: 'e2e/fixtures/storageState.json',
    /* fixture */
    cookies: [
      {
        name: '_AUTH',
        value: 'ct-e2e-demo',
        domain: '127.0.0.1',
        path: '/',
      },
    ],
    // SOUP authorization
    authorization: {
      // Using AutoBot account for soup auth
      soupAuto: true,
      // Required if using AutoBot account for soup auth
      soupToken: 'c9adf2a955b147a8b66d1928c2f50330',
    },
    // Coverage report, default for all page files under src/
    // includeFilePatterns: [/\/src\/.*\.ts(x?)/],
    // excludeFilePatterns: [],
  },
  /* Configure projects for major browsers */
  // https://playwright.dev/docs/browsers
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      testDir: './e2e/',
      testMatch: /.*.spec.ts/,
    },
  ],
}

export default config
