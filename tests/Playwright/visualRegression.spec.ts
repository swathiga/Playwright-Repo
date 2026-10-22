import test, { expect } from "@playwright/test";

test('Visual regression testing',async({page})=>{
await page.goto('https://www.flipkart.com/')
let current_image = await page.screenshot()
/* We can pass the path of an existing screenshot and also compare.
 In case of dynamic application, this validation will fail because each time UI will change */
expect(current_image).toMatch()
})