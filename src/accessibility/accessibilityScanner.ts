import AxeBuilder
from '@axe-core/playwright';

import { Page } from '@playwright/test';

export class AccessibilityScanner {

    static async scan(page: Page) {

        const results =
            await new AxeBuilder({
                page
            }).analyze();

        return results;
    }
}