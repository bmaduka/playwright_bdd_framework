import {
    Browser,
    chromium,
    firefox,
    webkit
} from '@playwright/test';

export class BrowserManager {

    static async launch(browserName: string): Promise<Browser> {

        switch (browserName.toLowerCase()) {

            case 'firefox':
                return await firefox.launch();

            case 'webkit':
                return await webkit.launch();

            default:
                return await chromium.launch({
                    args: [
                        '--remote-debugging-port=9222'
                    ]
                });
        }
    }
}