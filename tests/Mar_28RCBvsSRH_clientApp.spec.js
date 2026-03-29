import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test.only('Login ti ecommerse site', async ({browser,})=>
    {

const productName='ADIDAS ORIGINAL';
const context=await browser.newContext();
const page= await context.newPage();

await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("arupremraj@gmail.com");
await page.locator("#userPassword").fill("Prem@2625")
await page.locator("#login").click();
const products=page.locator(".card-body");
await page.waitForLoadState('networkidle');
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);
const count= await products.count();
console.log(count);
for(let i=0; i<count;i++){
    if (await products.nth(i).locator("b").textContent()=== productName)
    {
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
}
    await page.locator("[routerlink*='cart']").click();
    const mycartPage = await page.locator("div[class='heading cf'] h1").textContent();
    console.log(mycartPage);
    if(await page.locator("div[class='cartSection'] h3").textContent()===productName ){
        console.log("product added successfully");
    }
    else{
        console.log("not added");
    }
    })