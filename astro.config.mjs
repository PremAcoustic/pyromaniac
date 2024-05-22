import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://stellular-licorice-c2bfcd.netlify.app/",
  integrations: [tailwind(), mdx(), icon(), sitemap()],
});
