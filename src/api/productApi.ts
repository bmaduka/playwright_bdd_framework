import { APIRequestContext } from '@playwright/test';

export class ProductApi {

    constructor(
        private apiContext: APIRequestContext
    ) {}

    async getInventoryItems() {

        const response =
            await this.apiContext.get(
                'https://dummyjson.com/products'
            );

        return await response.json();
    }
}