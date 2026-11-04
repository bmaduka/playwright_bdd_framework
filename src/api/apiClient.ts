import { request, APIRequestContext } from '@playwright/test';

export class ApiClient {

    private apiContext!: APIRequestContext;

    async initialize() {

        this.apiContext = await request.newContext({
            baseURL: 'https://www.saucedemo.com'
        });
    }

    get context(): APIRequestContext {
        return this.apiContext;
    }
}