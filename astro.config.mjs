// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import vercel from "@astrojs/vercel";

export default defineConfig({
  
  output: 'static',
  adapter: vercel(),

  integrations: [
    tailwind(),
    react(),
    keystatic()
  ],

});