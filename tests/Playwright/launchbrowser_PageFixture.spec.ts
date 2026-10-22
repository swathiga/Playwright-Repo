import test from "@playwright/test";

test('page fixture',async ({page}) => {
    await page.goto('https://www.amazon.com/')
    await page.waitForTimeout(3000)
}
)