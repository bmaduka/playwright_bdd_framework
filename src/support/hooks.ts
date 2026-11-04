import {
    Before,
    After,
    setDefaultTimeout
} from '@cucumber/cucumber';

setDefaultTimeout(30000);

import { Browser } from '@playwright/test';

import { BrowserManager }
    from '../core/browserManager';

import { PageFixture }
    from './pageFixture';

let browser: Browser;

Before(async function () {

    browser =
      await BrowserManager.launch(
          process.env.BROWSER || 'chromium'
      );

    const context =
      await browser.newContext();

    const page =
      await context.newPage();

    PageFixture.page = page;
});

After(async function () {

    await browser.close();
});
