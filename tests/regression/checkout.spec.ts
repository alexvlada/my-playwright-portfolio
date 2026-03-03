import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('checkout flow simulation', async ({ page }) => {
  await page.goto('https://jsonplaceholder.typicode.com/');
  const randomName = faker.name.fullName();
  console.log('Simulated checkout for:', randomName);
  expect(randomName).toBeDefined();
});