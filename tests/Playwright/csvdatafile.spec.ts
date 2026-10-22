import test from "@playwright/test";
import {parse} from 'csv-parse/sync'
import reader from 'fs'

//read the csv file data using filesystem(fs) and store in a variable "filedata" 
let filedata = reader.readFileSync('Data/testdata2.csv','utf-8')

/* convert csv to js object using parse.so parse(filedata)
   To skip the empty lines we give skip_empty_lines: true
   The first line of cvs is header so columns are given true.
   The converted js objects are stored in variable "filedataconverted".We declare it as array 
   because it has more than one data.
 */
let filedataconverted:any[] =parse(filedata,{skip_empty_lines:true,columns:true})
 for( let detail of filedataconverted)
{
  test(`Read csv file data ${detail.TCID}`,async({page})=>{
    await page.goto('https://testleaf.my.salesforce.com/')
    await page.locator('#username').fill(detail.Username)
    await page.locator('#Login').click()
    await page.locator('#password').fill(detail.Password)
    await page.locator('#Login').click()

  })
}

