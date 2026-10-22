"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('sequential execution', async ({ page, context }) => {
    await page.goto('https://www.amazon.com/');
    let searchbox = page.locator('//input[@id="twotabsearchtextbox"]');
    await searchbox.fill('phones');
    await searchbox.press('Enter');
    // Step 1: start listening for new window i.e., wait for window to load
    let parentwindow = context.waitForEvent('page');
    // Step 2: perform the action.
    await page.locator('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"])[1]').click;
});
//# sourceMappingURL=windowhandling.spec.js.map