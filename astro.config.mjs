import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import netlify from '@astrojs/netlify';
import solid from '@astrojs/solid-js';
import { resolve } from 'path';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://stellular-licorice-c2bfcd.netlify.app/",
  integrations: [tailwind(), mdx(), icon(), sitemap(), solid(), netlify(), svelte()],
  vite: {
    resolve: {
      alias: {
        '@lib': resolve('./src/lib'),
        '@utils': resolve('./src/utils'),
        '@components': resolve('./src/components'),
        '@layouts': resolve('./src/layouts'),
        '@assets': resolve('./src/assets'),
        '@stores': resolve('./src/stores'),
        '@pages': resolve('./src/pages')
      }
    }
  }
});