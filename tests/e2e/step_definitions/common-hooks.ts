import { ICustomWorld } from "./custom-world";
import {
	ChromiumBrowser,
	chromium, test
} from '@playwright/test'
import {After, AfterAll, Before, BeforeAll, setDefaultTimeout} from '@cucumber/cucumber'

let browser: ChromiumBrowser

setDefaultTimeout(120000);

BeforeAll(async function() {
	browser = await chromium.launch({ headless: false })
});

Before(async function(this: ICustomWorld) {
	this.context = await browser.newContext()
	this.page = await this.context.newPage()
});

After(async function(this: ICustomWorld) {
	await this.page?.close()
	await this.context?.close()
});

AfterAll(async function() {
	await browser.close()
});
