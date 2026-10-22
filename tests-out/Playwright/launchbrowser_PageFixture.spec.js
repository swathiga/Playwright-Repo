"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test"));
(0, test_1.default)('page fixture', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    await page.waitForTimeout(3000);
});
//# sourceMappingURL=launchbrowser_PageFixture.spec.js.map