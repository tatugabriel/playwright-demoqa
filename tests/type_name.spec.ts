import { test, expect } from '@playwright/test';

test('test', async ({ page, baseURL }) => {   // <--- add baseURL here!
  await page.goto(baseURL!); 
  await page.locator('div').filter({ hasText: /^Forms$/ }).first().click();
  await page.getByRole('listitem').click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('XXXXX');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('YYYY');


   // Assert the textbox contains 'XXXXX'
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue('XXXXX');
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue('YYYY');
  await page.pause(); // optional for inspection/debugging


});
