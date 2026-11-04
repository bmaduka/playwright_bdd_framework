import { playAudit } from 'playwright-lighthouse';
import { Page } from '@playwright/test';

export class LighthouseAudit {

    static async run(page: Page) {

        await playAudit({

            page,

            port: 9222,

            thresholds: {
                performance: 80,
                accessibility: 90,
                'best-practices': 90,
                seo: 90
            }
        });
    }
}