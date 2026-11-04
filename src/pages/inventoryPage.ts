import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

    private readonly inventoryContainer =
        '.inventory_container';

    private readonly inventoryItems =
        '.inventory_item';

    private readonly firstProductImage =
        '.inventory_item:first-child img';

    constructor(page: Page) {
        super(page);
    }

    async verifyInventoryLoaded() {

        await expect(
            this.page.locator(this.inventoryContainer)
        ).toBeVisible();
    }

    async verifyInventoryCount() {

        await expect(
            this.page.locator(this.inventoryItems)
        ).toHaveCount(6);
    }

    // async inventoryVisualValidation() {

    //     await expect(this.page).toHaveScreenshot(
    //         'inventory-page.png',
    //         {
    //             fullPage: true,
    //             maxDiffPixels: 100
    //         }
    //     );
    // }

    // async productVisualValidation() {

    //     await expect(
    //         this.page.locator(this.firstProductImage)
    //     ).toHaveScreenshot(
    //         'product-card.png'
    //     );
    // }

    async getVisibleProductCount(): Promise<number> {

        return await this.page
        .locator('.inventory_item')
        .count();
    }

    async getProductNames(): Promise<string[]> {

        return await this.page
        .locator('.inventory_item_name')
        .allTextContents();
    }

    async captureInventoryScreenshot() {

        await this.page.waitForLoadState('networkidle');

        const images = this.page.locator('.inventory_item img');

        const count = await images.count();

        for (let i = 0; i < count; i++) {

            await images.nth(i)
            .waitFor({
                state: 'visible'
            });
        }

        await this.page.screenshot({
            path: 'visual-actual/inventory-page.png',
            fullPage: true
        });
    }


    async captureProductScreenshot() {

        await this.page.waitForLoadState(
            'networkidle'
        );

        await this.page
        .locator('.inventory_item img')
        .first()
        .waitFor();

        await this.page
        .locator('.inventory_item:first-child')
        .screenshot({
            path: 'visual-actual/product-card.png'
        });
    }
    
}