import test, { chromium } from "@playwright/test";

test('',async({page})=>{
    const browser = await chromium.launch({args:["--disable-http2"]})
       const context = await browser.newContext()
       const page1 = await context.newPage()
    
       await page1.goto('https://www.makemytrip.com/',{waitUntil:'domcontentloaded'})
       const closebtn = page.locator('span.commonModal__close')
       if(await closebtn.isVisible().catch(()=>false)){
           await closebtn.click()
       }
       else{
        console.log('unable');
        
       }

       const dep = await page.getByText('Departure',{exact:true})
       dep.click()
        const fdate = await page.locator('DayPicker-Day').filter({hasText:'17'}).first()
        fdate.click()

})