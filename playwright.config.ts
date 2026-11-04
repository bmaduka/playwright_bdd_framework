import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
      ['html'],
      ['list'],
      ['json', { outputFile: 'test-results/results.json' }]
    ],

    use: {

      baseURL: 'https://www.saucedemo.com',

      headless: true,

      viewport: {
        width: 1920,
        height: 1080
      },

      actionTimeout: 15000,

      navigationTimeout: 30000,

      screenshot: 'only-on-failure',

      trace: 'retain-on-failure',

      video: 'retain-on-failure',

      ignoreHTTPSErrors: true,

      acceptDownloads: true
    },

    expect: {

      timeout: 10000,

      toHaveScreenshot: {

        threshold: 0.2,

        maxDiffPixels: 100
      }
    },

    projects: [

      {
        name: 'chromium',

        use: {
            ...devices['Desktop Chrome'],
            browserName: 'chromium'
        }
      },

      {
        name: 'firefox',

        use: {
            ...devices['Desktop Firefox'],
            browserName: 'firefox'
        }
      },

      {
        name: 'webkit',

        use: {
          ...devices['Desktop Safari'],
          browserName: 'webkit'
        }
      }
    ],

    outputDir: 'test-results/',

    timeout: 60000
});