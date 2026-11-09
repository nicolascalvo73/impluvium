import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Destino final: impluvium.ar.
// El workflow puede sobreescribir SITE_URL y BASE_PATH.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://impluvium.ar',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
