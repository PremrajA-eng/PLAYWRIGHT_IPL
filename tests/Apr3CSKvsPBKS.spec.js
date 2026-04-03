import{test, expect} from '@playwright/test';
test("testing link", async ({page})=>{

await page.goto("https://demoqa.com/elements");
await page.locator("//a[@href='/links']").click();
//await page.locator("")


})