import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { InventoryPage }
from '../src/pages/inventoryPage';

import { PageFixture }
from '../src/support/pageFixture';

import { VisualComparison }
from '../src/utils/visualComparison';

Then(
'inventory visual regression passes',
async function () {

    const browser =
    process.env.BROWSER || 'chromium';

    const inventoryPage =
        new InventoryPage(
            PageFixture.page
        );

    await inventoryPage
        .captureInventoryScreenshot();

    const result =
        VisualComparison.compare(
            `visual-baseline/${browser}/inventory-page.png`,
            'visual-actual/inventory-page.png',
            `visual-diff/${browser}/inventory-page.png`
        );

    expect(result).toBeTruthy();
    
});

Then(
'product image visual regression passes',
async function () {

    const browser = process.env.BROWSER || 'chromium';

    const inventoryPage =
        new InventoryPage(
            PageFixture.page
        );

    await inventoryPage
        .captureProductScreenshot();

    const result =
        VisualComparison.compare(
            `visual-baseline/${browser}/product-card.png`,
            'visual-actual/product-card.png',
            `visual-diff/${browser}/product-card.png`
        );

    expect(result).toBeTruthy();

});