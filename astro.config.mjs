import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  plugins: [
      svelte()
  ],

  integrations: [svelte()]
});