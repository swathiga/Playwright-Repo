import test from "@playwright/test";

test.use({
    geolocation: {latitude:12.8876544,longitude:77.5979008},
    permissions:['geolocation']
})

test('Geolocation testing',async({page})=>{
    await page.goto('https://www.google.com/maps')
    await page.locator('.sVuEFc').click()
    await page.waitForTimeout(3000)
})