import { test, expect } from '@playwright/test';

test('filter PHP hanya menampilkan satu proyek', async ({ page }) => {
  await page.goto('./');
  await page.click('button[data-filter="php"]');
  await expect(page.locator('.proj-card:visible')).toHaveCount(1);
});

test('filter Semua menampilkan tiga proyek', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('.proj-card:visible')).toHaveCount(3);
});