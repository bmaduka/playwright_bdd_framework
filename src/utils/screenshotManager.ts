import { Page } from '@playwright/test';

export class ScreenshotManager {

  static async capture(
    page: Page,
    name: string
  ) {

    await page.screenshot({

      path:
        `screenshots/${name}.png`,

      fullPage: true
    });
  }
}