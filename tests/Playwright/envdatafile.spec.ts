import test from "@playwright/test";
import dotenv from 'dotenv'

/* // To read a single env file
dotenv.config({path:'Data/QA.env'})

test('read data from env file',async({page})=>{
//process.env is a global object used to read environment variables.
await page.goto(process.env.L_URL as string)
await page.locator('#username').fill(process.env.L_Username as string)
await page.locator('#password').fill(process.env.L_Password as string)
await page.locator('.decorativeSubmit').click()
await page.locator('#label').click() 
}) */

/* To read multiple env files
Set env      $env:envFile="Qa" 
Check env    $env:envFile     
Unset env   $env:envFile=""  

let Filename = process.env.envFile || "QA" || "Prod"
dotenv.config({path:`Data/${Filename}.env`}) */

test('read data from env file', async ({ page }) => {
    //process.env is a global object used to read environment variables.
    await page.goto(process.env.L_URL as string)
    await page.locator('#username').fill(process.env.L_Username as string)
    await page.locator('#password').fill(process.env.L_Password as string)
    await page.locator('.decorativeSubmit').click()
    await page.locator('#label').click()
})