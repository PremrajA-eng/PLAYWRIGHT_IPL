import{test, expect} from '@playwright/test';


test("Radio Button", async ({page})=>{

    await page.goto("https://demoqa.com/radio-button");
    await page.locator("#yesRadio").check();
    await expect( page.locator(".text-success")).toHaveText("Yes");
})

test("Check all radios", async ({ page }) => {
  await page.goto("https://demoqa.com/radio-button");
  const allRadio = page.locator(".col-auto.form-check");
  const count = await allRadio.count();
  for (let i = 0; i < count; i++) {  
    const radio = allRadio.nth(i);       // Click only if enabled
    const input = radio.locator("input[type='radio']");
    if (await input.isEnabled()) {
      await radio.click();
      console.log(`Clicked radio ${i + 1}`);
    } else {
      console.log(`Radio ${i + 1} is disabled`);
    }
  }
});

test.only("buttons", async ({page})=> {
await page.goto("https://demoqa.com/buttons");
await page.locator("//div[@class='element-list accordion-collapse collapse show']//li[@id='item-4']").click();
await page.locator("#doubleClickBtn").dblclick();
await expect(page.locator("#doubleClickMessage")).toHaveText("You have done a double click");
await page.locator("#rightClickBtn").click({button:'right'});
await expect (page.locator("#rightClickMessage")).toHaveText("You have done a right click");
});