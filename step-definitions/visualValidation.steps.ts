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

    const inventoryPage =
        new InventoryPage(
            PageFixture.page
        );

    await inventoryPage
        .captureInventoryScreenshot();

    const result =
        VisualComparison.compare(
            'visual-baseline/inventory-page.png',
            'visual-actual/inventory-page.png',
            'visual-diff/inventory-page.png'
        );

    expect(result).toBeTruthy();
    
});

Then(
'product image visual regression passes',
async function () {

    const inventoryPage =
        new InventoryPage(
            PageFixture.page
        );

    await inventoryPage
        .captureProductScreenshot();

    const result =
        VisualComparison.compare(
            'visual-baseline/product-card.png',
            'visual-actual/product-card.png',
            'visual-diff/product-card.png'
        );

    expect(result).toBeTruthy();

});