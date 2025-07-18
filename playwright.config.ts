// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: 'https://demoqa.com/',   // <-- Store it here!
  },
  testDir: './tests',
});
