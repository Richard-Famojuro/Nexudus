import {expect, Page} from "@playwright/test";

export class LoginPage {
	locator = {
		loginPageHeader: (page: Page) => page.getByText("Nexudus", { exact: true }),
		loginEmailField: (page: Page, email: string) => page.fill("[name='Email']", email),
		loginPasswordField: (page: Page, password: string) => page.fill("[name='Password']", password),
		loginSubmitButton: (page: Page) => page.locator("button", { hasText: 'Sign in'}),
		errorMessage: (page: Page) => page.getByText("The email or password is incorrect.")
	}

	async isPresented(page: Page) {
		await this.locator.loginPageHeader(page).isVisible();
	}

	async fillEmail(page: Page, email: string) {
		await this.locator.loginEmailField(page, email);
	}

	async fillPassword(page: Page, password: string) {
		await this.locator.loginPasswordField(page, password);
	}

	async clickLogin(page: Page) {
		await this.locator.loginSubmitButton(page).click();
	}

	async verifyError(page: Page) {
		await expect(this.locator.errorMessage(page)).toBeVisible();
	}
}
