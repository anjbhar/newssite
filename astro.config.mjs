// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  integrations: [tailwind(), sanity({
    projectId: 'gdycm8ug',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-03-20',
  })],

  adapter: netlify()
});