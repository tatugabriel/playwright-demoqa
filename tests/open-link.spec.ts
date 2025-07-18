import { test, expect } from '@playwright/test';

test('open base URL', async ({ page, baseURL }) => {
  
  await page.goto(baseURL!); // use baseURL provided by config
  await expect(page.locator('body')).toContainText('Forms');
});
