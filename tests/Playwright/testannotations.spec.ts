import test from "@playwright/test";

//Skip this test
test.skip('launch flipcart', async ({ page }) => {
    page.goto('https://www.flipkart.com/')
})

//Run only this test 
test.only('launch flipcart', async ({ page }) => {
    page.goto('https://www.flipkart.com/')
})

//If the action fails test will pass. If action pass test will fail. Used for negative testing
test.fail('launch leaftaps', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill('democsr')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('#label').click()
})

//test.fixme
test.fixme('launch flipcart', async ({ page }) => {
    page.goto('https://www.flipkart.com/')
})

//test.info => Information about current test can be defined by the user.
test('Test info annotations', async () => {
    test.info().annotations.push(
        { type: "Test information", description: "This is QA test" },
        { type: "Author", description: "Swathiga" }
    )
})

//test.slow => slower the execution.Mostly used during URL launch to wait for sometime
test('launch leaftaps', async ({ page }) => {
    test.slow()
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill('democsr')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('#label').click()
})

