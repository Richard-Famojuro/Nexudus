import {Then, When} from "@cucumber/cucumber";
import {homePage, productPage} from "../pages";
import {test} from "@playwright/test";

When(/^I navigate to "([^"]*)"$/, async function (urlPath: string) {
	await homePage.navigate(this.page!, urlPath);
});
When(/^I click on the Add Product button$/, async function () {
	await productPage.clickAddProductButton(this.page);
});
Then(/^I fill the name, description and price fields$/, async function () {
	await productPage.fillProductForm(this.page);
});
Then(/^I click on Save Changes$/, async function () {
	await productPage.clickSaveChanges(this.page);
});
When(/^I search by the product name to ensure the newly created product is the first result on the list$/, async function () {
	await productPage.searchProductName(this.page);
});
Then(/^I select the first item in the list$/, async function () {
	await productPage.selectItem(this.page);
});
Then(/^I click on Delete record$/, async function () {
	await productPage.deleteItem(this.page);
});
Then(/^I confirm the modal dialog clicking on "([^"]*)"$/, async function (l) {
	await productPage.acceptDelete(this.page);
});
Then(/^I confirm the product is no longer available$/, async function () {
	await productPage.confirmDelete(this.page);
});
