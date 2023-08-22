import {Page} from "@playwright/test";
export class HomePage {
	locators = {
		dashboardBreadCrumb: (page: Page) => page.getByLabel('Main navigation').getByRole('link', { name: 'Dashboard' }),
	}
	async navigate(page: Page, domain: string){
		await page.goto(domain);
	}
	async verifyDashboardIsDisplayed(page: Page){
		await page.waitForTimeout(3000);
		await this.locators.dashboardBreadCrumb(page).isVisible();
	}
}
