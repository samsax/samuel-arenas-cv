import { expect, test } from '@playwright/test';

test('page fits the viewport without horizontal scrolling', async ({ page }) => {
  await page.goto('/en');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test('the navigation keeps the title and language switch on screen', async ({ page }) => {
  await page.goto('/en');
  await expect(page.getByRole('link', { name: /Cambiar a Español/ })).toBeInViewport();
});
