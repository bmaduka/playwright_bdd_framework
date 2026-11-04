import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import mockProducts
from '../src/data/mockProducts.json';

import { InventoryPage }
from '../src/pages/inventoryPage';

import { PageFixture }
from '../src/support/pageFixture';

Then(
  'api product count should match ui',
  async function () {

      const inventoryPage =
        new InventoryPage(PageFixture.page);

      const uiProducts =
        await inventoryPage.getProductNames();

      expect(uiProducts.length)
        .toBe(mockProducts.products.length);

      expect(uiProducts)
        .toEqual(mockProducts.products);
  }
);