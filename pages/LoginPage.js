export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async open() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
}