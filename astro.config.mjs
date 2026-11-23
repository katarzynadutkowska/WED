import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wed.kmdutkowska.com',
  // Pages are built as content.html, access.html … so the old addresses keep working.
  build: { format: 'file' },
});
