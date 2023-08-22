import {Given, Then, When} from "@cucumber/cucumber";
import {ICustomWorld} from "./custom-world";
import {homePage, loginPage} from "../pages";

Given(/^I can access "([^"]*)"$/, async function (this: ICustomWorld, domain: string) {
	await homePage.navigate(this.page!, domain);
});
Then(/^I confirm the login page is presented$/, async function () {
	await loginPage.isPresented(this.page);
});
When(/^I type "([^"]*)" as email$/, async function (email: string) {
	await loginPage.fillEmail(this.page, email);
});
When(/^I type "([^"]*)" as password$/, async function (password: string) {
	await loginPage.fillPassword(this.page, password);
});
When(/^I click the login button$/, async function () {
	await loginPage.clickLogin(this.page);
});
Then(/^I confirm a clear error message is presented on screen$/, async function () {
	await loginPage.verifyError(this.page);
});
Then(/^I confirm login succeeds and i am presented with the dashboard home page$/, async function () {
	await homePage.verifyDashboardIsDisplayed(this.page)
});
