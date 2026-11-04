import {
    APIRequestContext,
    request
} from '@playwright/test';

export async function createApiContext():
Promise<APIRequestContext> {

    return await request.newContext();
}