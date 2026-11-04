import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    private readonly username = '#user-name';
    private readonly password = '#password';
    private readonly loginButton = '#login-button';

    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {

        await this.page.fill(this.username, username);

        await this.page.fill(this.password, password);

        await this.page.click(this.loginButton);
    }
}