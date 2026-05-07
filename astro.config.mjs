import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://enrines-icor.com',
  integrations: [sitemap()],
  compressHTML: true,
  outDir: './build',
  build: {
    assets: '_assets'
  }
});