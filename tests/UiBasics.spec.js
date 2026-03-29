import { test, expect } from '@playwright/test';
test('first playwright test', async ({browser,})=>
    {

const context=await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.google.com/");

});

test('Second playwright test using page fixture', async ({page})=>
    {
await page.goto("https://in.search.yahoo.com/");
console.log(await page.title());
await expect(page).toHaveTitle("Yahoo Search - Web Search");

});