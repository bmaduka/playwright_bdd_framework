import {
    Given,
    Then
} from '@cucumber/cucumber';

import users
from '../src/data/users.json';

import {
    LoginPage
} from '../src/pages/loginPage';

import {
    InventoryPage
} from '../src/pages/inventoryPage';

import {
    PageFixture
} from '../src/support/pageFixture';

let loginPage: LoginPage;

let inventoryPage:
    InventoryPage;

Given(
'user logs in successfully',
async function () {

    loginPage =
     new LoginPage(
      PageFixture.page);

    await PageFixture.page.goto(
      'https://www.saucedemo.com'
    );

    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    inventoryPage =
      new InventoryPage(
        PageFixture.page
      );
});

Then(
'inventory page should load',
async function () {

    await inventoryPage
      .verifyInventoryLoaded();
});

Then(
'product inventory count is correct',
async function () {

    await inventoryPage
       .verifyInventoryCount();
});