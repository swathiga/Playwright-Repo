import { chromium, expect, test } from '@playwright/test';
import { TIMEOUT } from 'node:dns';
test.describe.serial('',async()=>{
    test('verify playwright homepage', async ({page}) => {
  /*  await page.goto('https://www.makemytrip.com/');
   await page.locator('//input[@id="departure"]').click() */

   const browser = await chromium.launch({args:["--disable-http2"]})
   const context = await browser.newContext()
   const page1 = await context.newPage()

   await page1.goto('https://www.makemytrip.com/')
   
   //await page1.keyboard.press('Escape')
   //expect(page1.title).toContain('MakeMyTrip')
    page1.on('dialog',async(handler)=>{
      handler.dismiss()
   })
   await page1.locator('//span[@class="commonModal__close"]').click()
   await page.getByText('Departure').click()

   })

})


   

 

