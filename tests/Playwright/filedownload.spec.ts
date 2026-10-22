import test, { expect } from "@playwright/test";

test('Learn file download',async({page})=>{
    await page.goto('https://leafground.com/file.xhtml')
    //create event listener

    const fDown = page.waitForEvent('download')
    await page.locator("//span[text()='Download']").click()
    //click action trigger the download
    const fileDownload = await fDown //resolve the promise

    //relative path to download the file

    await fileDownload.saveAs(`Data/${fileDownload.suggestedFilename()}`)//download file and save in suggested file name
    //await fileDownload.saveAs('Data/AugPW.png') //doenload file in user defined filename


    //verify the file downloaded

    expect(fileDownload.suggestedFilename()).toBe('TestLeaf Logo.png')

    //Non-retry assertion

    expect(fileDownload.suggestedFilename()).toContain('TestLeaf')


})