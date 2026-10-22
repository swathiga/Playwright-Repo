import test from "@playwright/test";
//the below command is used to navigate outside the playwright,tests folder
import login from '../../Data/testdata1.json'

/* Declares a group of tests that should always be run serially. 
 If one of the tests fails, all subsequent tests are skipped. 
 All tests in a group are retried together */

test.describe.serial('running serial mode',()=>{
for(let detail of login){
test(`Json file ${detail.TestCaseId}`,async({page})=>{
await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('#username').fill(detail.Username)
await page.locator('#password').fill(detail.Password)
await page.locator('.decorativeSubmit').click()
await page.locator('#label').click()
})
}

//if we want to use only one testdata we can use test.only
let detail1 = login[0]
test.only('learn to read single json file',async({page})=>{
await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('#username').fill(detail1.Username)
await page.locator('#password').fill(detail1.Password)
await page.locator('.decorativeSubmit').click()
await page.locator('#label').click()
})
})