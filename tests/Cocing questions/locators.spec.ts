import test, { expect } from '@playwright/test'

test.use({storageState:''})
test('Train locators',async({page})=>{
   page.goto('https://playwrightlab.github.io/locators.html#get-by-role')
   page.getByRole('heading',{name:'Account settings'})

   expect(page.getByText('Basic plan').filter({hasText:'Basic'}))
   page.context().storageState({path:''})
})