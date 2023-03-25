import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://cipo.dk',
  integrations: [sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    }
  })]
});