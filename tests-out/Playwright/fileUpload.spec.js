"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test"));
(0, test_1.default)('Learn to upload file using input tag with type = file', async ({ page }) => {
    await page.goto('https://leafground.com/file.xhtml');
    //relative path for single file upload
    const fileUpload = page.locator('(//input[@type="file"])[1]');
    await fileUpload.setInputFiles('Utils\File1.txt');
    await page.waitForTimeout(2000);
});
//# sourceMappingURL=fileUpload.spec.js.map