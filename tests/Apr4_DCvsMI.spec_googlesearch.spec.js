import{test, expect} from '@playwright/test';

test("Testing dynamic DropDown", async ({page})=>{
const SearchText="india"
await page.goto("https://www.google.com/");
await page.locator("#APjFqb").fill(SearchText);
await page.waitForLoadState('networkidle');
const suggestions = page.locator("ul[role='listbox'] li span");
const allText = await suggestions.allTextContents();
console.log(allText);
const count =await suggestions.count();
for(let i=0;i<count;i++){

    const text =await suggestions.nth(i).textContent();
        if(text.trim===SearchText){
            await suggestions.nth(i).click();
            break;
        }
}
});

test("flipcart search", async ({page})=>{
await page.goto("https://www.flipkart.com/");
await page.locator("//form[@class='lilxh_ header-form-search']//input[@placeholder='Search for Products, Brands and More']").fill("tv");
await page.waitForLoadState('networkidle');
// await page.locator('a.ZBdLcw.uOWdgt').locator('div').nth(1).click();

});

test.only("flipkart search", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  // Close login popup
  const closeBtn = page.locator("button:has-text('✕')");
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  // Now search box will work
  //await page.getByPlaceholder("Search for Products, Brands and More").fill("tv");
await page.locator("//form[@class='lilxh_ header-form-search']//input[@placeholder='Search for Products, Brands and More']").fill("tv");
  // wait for suggestions
  await page.waitForSelector("ul li");

  const suggestions = page.locator("ul li");
  const count = await suggestions.count();

  for (let i = 0; i < count; i++) {
    const text = await suggestions.nth(i).textContent();

    if (text.toLowerCase().includes("tv")) {
      await suggestions.nth(i).click();
      break;
    }
  }
});