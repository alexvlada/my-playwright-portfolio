import { test, expect } from '@playwright/test';

test('login page loads', async ({ page }) => {
  await page.goto('https://jsonplaceholder.typicode.com/');
  const title = await page.title();
  expect(title).toContain('JSONPlaceholder');
});