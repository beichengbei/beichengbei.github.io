// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://beichengbei.com',
  trailingSlash: 'always',
  // 作品改过 slug 的旧地址，生成自动跳转页，已流传出去的链接仍能打开
  redirects: {
    '/works/laiyinshi-shoushanren/': '/works/shiba-pingmi-de-shan/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
