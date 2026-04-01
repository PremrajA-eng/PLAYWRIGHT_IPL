import { test, expect } from '@playwright/test';
import { link } from 'node:fs';
test("Tile of page", async ({page})=>{
await page.goto("https://demoqa.com/");

await expect(page).toHaveTitle("demosite")  // Title of page.

})
test("click a link using getByRole method", async ({page})=>{

    await page.goto('https://playwright.dev/');
    await page.getByRole('link',{name:'Get started'}).click();
    await expect(page.getByRole('heading',{name:'installation'})).toBeVisible();

});

test("")

