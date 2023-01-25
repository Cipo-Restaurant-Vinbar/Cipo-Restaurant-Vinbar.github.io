import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://Cipo-Restaurant-Vinbar.github.io',
  integrations: [sitemap()],
});