import test from '@playwright/test'

test('Flipcart automation',{tag:['@smoke']},async({page,context})=>{
   console.log('Execution started....')
   await page.goto('https://www.flipkart.com/')
   await page.getByRole('button',{name:"✕"}).click()
   await page.locator('//div[text()="Fashion"]').click()
   await page.waitForTimeout(5000)
   //Login using OTP
   /* await page.getByLabel('Login',{exact:true}).click()
   await page.getByRole('spinbutton',{name:"Phone Number"}).fill('7397507089')
   await page.getByRole('button',{name:"Continue"}).click()
   await page.waitForTimeout(5000)
   await page.getByRole('button',{name:"Verify"}).click()
   await page.waitForTimeout(5000) */
   await page.getByText('Tees, Shirt ').click()
   let page1 = context.waitForEvent('page')
   await page.getByText('Men Regular Fit Self Design Spread Collar Casual Shirt',{exact:true}).nth(1).click()
   let page2 = await page1
   page2.bringToFront()
   let page11 = context.waitForEvent('page')
   await page.getByText('Men Regular Fit Solid Spread Collar Casual Shirt',{exact:true}).nth(5).click()
   let page3 = await page11
   page3.bringToFront()
   const number_of_pages = context.pages()
   console.log(number_of_pages.length)
   for(let curr_page of number_of_pages){
    let page_title= await curr_page.title()
    console.log(page_title)
   }
})
