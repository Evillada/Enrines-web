import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://enrines-icor.com',
  compressHTML: true,
  build: {
    assets: '_assets'
  }
});