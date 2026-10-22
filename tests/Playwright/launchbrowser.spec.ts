import test, { chromium } from '@playwright/test'

test('launchBrowser',async()=>{
  const browser = await chromium.launch({headless:false})
  const context = await browser.newContext()
  const Page = await context.newPage()
  await context.tracing.start()
  await Page.goto('https://www.amazon.com/')
  await Page.waitForTimeout(5000)

  await context.tracing.stop()
})
