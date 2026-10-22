import test from '@playwright/test'
test('css selector based locators', async ({ page }) => {
    page.goto('https://login.salesforce.com/')

    page.locator('input[id="username"]').fill('dilipkumar.rajendran@testleaf.com')

    /* Partial attribute based css selector*/
    page.locator('[name*="user"]').fill('dilipkumar.rajendran@testleaf.com')

    /* id based selector */
    page.locator('#password').fill('TestLeaf@2025')

    /*  Immediate sibbling */
    page.locator('.label+input').nth(0).fill('TestLeaf@2025')

    /* Parent to child */
    page.locator('div>input').first().fill('dilipkumar.rajendran@testleaf.com')
    page.locator('div>input').nth(0).fill('dilipkumar.rajendran@testleaf.com')

    /* attribute based css selector */
    page.locator('input[id="Login"]').click()

    await page.waitForTimeout(3000)

})