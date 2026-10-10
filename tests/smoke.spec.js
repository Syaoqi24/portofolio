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

test('pengalaman bisa dibuka dengan keyboard', async ({ page }) => {
  await page.goto('./');
  const item = page.locator('.exp-item').nth(1);
  await item.focus();
  await page.keyboard.press('Enter');
  await expect(item).toHaveClass(/open/);
});

test('tidak ada sisa teks konfigurasi di halaman', async ({ page }) => {
  await page.goto('./');
  const text = await page.locator('body').innerText();
  expect(text).not.toContain('data-website-id');
  expect(text).not.toContain('(ID Anda)');
});