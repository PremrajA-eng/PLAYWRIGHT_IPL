import{test, expect} from '@playwright/test';

test("TestBox", async ({page})=>{

await page.goto("https://demoqa.com/text-box");
await page.locator("#userName").fill("PremrajA");
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('arupremraj@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('pune, maharastra');
  await page.locator('#permanentAddress').fill('washim , Maharastra');
  await page.getByRole('button', { name: 'Submit' }).click();

 await expect(page.locator('#name')).toContainText("Name:premraj Aru");
});

test.only("checkBox", async({page})=>{
   await page.goto("https://demoqa.com/checkbox");
   await page.locator(".rc-tree-switcher.rc-tree-switcher_close").click();
   await page.locator('.rc-tree-switcher.rc-tree-switcher_close').first().click();
   await page.getByRole('checkbox', { name: 'Select Notes' }).click();
  
   await expect(page.locator('.text-success')).toHaveText("notes");
})

