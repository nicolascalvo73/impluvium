import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Destino final: labs.mondistudio.com.ar/impluvium.
// El workflow puede sobreescribir SITE_URL y BASE_PATH.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://labs.mondistudio.com.ar',
  base: process.env.BASE_PATH ?? '/impluvium',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
