import {test , expect} from '@playwright/test';
import { only } from 'node:test';

test('checking email and PassThrough',async ( {page})=> {

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await page.locator("#username").fill("abcd");

} );

test( "testing rahul shetty login site", async ({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("#username").fill("asddas");
await page.locator("#password").fill("asddeasd");
await page.locator("#signInBtn").click();

} 
);
test( "To check Link is Blinking or not", async ({page})=>{
/*await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText"); */
await page.goto("https://techsmarthire.com/");
const textinside=await page.locator("p[class='mb-4']").textContent();
console.log("*******" +textinside);
}
);

test("this is new context opening window", async ({browser}) => {

const context= await browser.newContext();
const page= await context.newPage();
page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const docLink=await page.locator("[href*='https://techsmarthire.com/']");

const [newPage]=await Promise.all(
    [
        context.waitForEvent('page'),
        docLink.click(),

    ]
)
const text = await newPage.locator("p[class='mb-4']").textContent();
console.log("********"+text+"***************");
}
 )


