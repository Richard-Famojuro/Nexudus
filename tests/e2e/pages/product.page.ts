import {expect, Page} from "@playwright/test";
import { faker } from '@faker-js/faker';
const productName = faker.commerce.productName()
const timeout = 2000;
export class ProductPage {

	locator = {
		addProductButton: (page: Page) => page.locator('button', {hasText: 'Add product'}),
		manualEntryButton: (page: Page) => page.locator('button', {hasText: 'Manual entry'}),
		nameField: (page: Page) => page.locator('[data-test-subj="product_Name"]'),
		descriptionField: (page: Page) => page.locator('[data-test-subj="product_Description"]'),
		priceField: (page: Page) => page.locator('[data-test-subj="product_Price"]'),
		saveChanges: (page: Page) => page.locator("button", { hasText: 'Save changes'}),
		searchField:(page: Page) => page.getByPlaceholder('Type to search by name'),
		firstItem:(page: Page) => page.locator("td", {hasText: productName}),
		deleteRecord:(page: Page) => page.locator('button',{hasText: 'Delete'}),
		confirmDeleteButton: (page: Page) => page.locator('[data-test-subj="confirmModalConfirmButton"]'),
		noItemLabel: (page: Page) => page.getByText('No items found'),
	};
	async clickAddProductButton(page: Page) {
		await page.waitForLoadState('domcontentloaded')
		await this.locator.addProductButton(page).click();
		await this.locator.manualEntryButton(page).click();
	}
	async fillProductForm(page: Page) {
		await page.waitForTimeout(timeout);
		await this.locator.nameField(page).fill(productName);
		await this.locator.descriptionField(page).fill(faker.commerce.productDescription());
		await page.waitForTimeout(timeout);
		await this.locator.priceField(page).clear();
		await this.locator.priceField(page).fill(faker.commerce.price());
	}
	async clickSaveChanges(page: Page){
		await page.waitForTimeout(timeout);
		await this.locator.saveChanges(page).click();
	}
	async searchProductName(page: Page){
		await page.waitForTimeout(timeout);
		await this.locator.searchField(page).fill(productName);
	}
	async selectItem(page: Page){
		await page.waitForTimeout(timeout);
		await this.locator.firstItem(page).focus();
		await this.locator.firstItem(page).click();
	}
	async deleteItem(page:Page) {
		await this.locator.deleteRecord(page).click();
	}
	async acceptDelete(page: Page) {
		await this.locator.confirmDeleteButton(page).click();
	}
	async confirmDelete(page: Page) {
		await expect(this.locator.noItemLabel(page)).toBeVisible();
	}
}
