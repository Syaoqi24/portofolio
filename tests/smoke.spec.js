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

test('tag Umami terpasang sekali dan tidak ada sisa teks', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('script[data-website-id]')).toHaveCount(1);
  const text = await page.locator('body').innerText();
  expect(text).not.toContain('data-website-id');
  expect(text).not.toContain('ID Anda');
});

test('tombol sertifikat membuka daftar', async ({ page }) => {
  await page.goto('./');
  await page.click('#certs-toggle');
  await expect(page.locator('#certs-list')).toHaveClass(/open/);
});

test('filter sertifikat Web Development menampilkan dua item', async ({ page }) => {
  await page.goto('./');
  await page.click('#certs-toggle');
  await page.click('button[data-cert-filter="web"]');
  await expect(page.locator('.cert-item:visible')).toHaveCount(2);
});

test('tombol sertifikat berubah teks saat dibuka', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('#certs-toggle')).toContainText('View all');
  await page.click('#certs-toggle');
  await expect(page.locator('#certs-toggle')).toContainText('Hide');
});

test('tidak ada sisa teks bahasa Indonesia', async ({ page }) => {
  await page.goto('./');
  const text = await page.locator('body').innerText();
  for (const w of ['Tentang', 'Pengalaman', 'Hubungi', 'Proyek', 'Lulus', 'Merancang', 'Membangun', 'Mengembangkan', 'Menerapkan', 'peserta', 'Mei ', 'Okt ', 'Des ', 'klik', 'Skor']) {
    expect(text, `sisa kata: ${w}`).not.toContain(w);
  }
});

test('semua section ter-render dari data', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('.exp-item')).toHaveCount(3);
  await expect(page.locator('.proj-card')).toHaveCount(3);
  await expect(page.locator('.skill-group')).toHaveCount(3);
  await page.click('#certs-toggle');
  await expect(page.locator('.cert-item')).toHaveCount(9);
});

test('toggle tema mengganti data-theme dan pilihannya tersimpan', async ({ page }) => {
  await page.goto('./');
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await page.click('#theme-toggle');
  await expect(html).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', 'light');
});