import{test,expect} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).fill('premraj');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('aru');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('arupremraj@gmail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8381054474');
  await page.locator('#dateOfBirthInput').click();
  /*await page.getByRole('gridcell', { name: 'Choose Tuesday, March 31st,' }).selectOption('4');
  await page.getByRole('combobox').nth(1).selectOption('1992');
  await page.getByRole('gridcell', { name: 'Choose Sunday, May 17th,' }).click();
  // await page.locator('.subjects-auto-complete__input-container').click(); */
  await page.locator('#subjectsInput').fill('mathematics');
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('pune');
  await page.locator('.css-8mmkcg').first().click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer > .css-8mmkcg').click();
  await page.getByRole('option', { name: 'Agra' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  
  
});
