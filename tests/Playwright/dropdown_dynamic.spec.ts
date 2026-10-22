import test from "@playwright/test";

test('Dynamic dropdown using css selector',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')
    await page.locator('.ui-selectonemenu-label.ui-inputfield.ui-corner-all').first().click()
    await page.locator('[data-label="India"]').click()
    await page.waitForTimeout(2000)

    const dropDown = page.locator('[class="ui-selectonemenu-items-wrapper"]>ul>li')
    const dropDownValue = await dropDown.count()
    console.log(dropDownValue);
    

    console.log('the dropdown count is ',dropDownValue);

    for (let index = 0; index < dropDownValue; index++) {
        console.log( await dropDown.nth(index).innerText());  
    } 

})