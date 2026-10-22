import test, { devices } from "@playwright/test"

test.use({
    ...devices['iPhone 11']
})

test('Device emulation',async({page})=>
{
   await page.goto('https://www.amazon.com/')
   page.waitForTimeout(2000)
})