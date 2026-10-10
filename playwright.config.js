import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  webServer: {
    command: 'npm run preview -- --port 4173',
    url: 'http://localhost:4173/portofolio/',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:4173/portofolio/',
    channel: process.env.CI ? undefined : 'msedge',
  },
});