import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://letterlab.netlify.app',
  integrations: [sitemap()],
});