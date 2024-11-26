import { sveltekit } from "@sveltejs/kit/vite";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
// Fixes `require is undefined`
// https://kit.svelte.dev/docs
// Below is Vite's config, see https://www.reddit.com/r/sveltejs/comments/nzi934/comment/h1ppot2/?utm_source=share&utm_medium=web2x&context=3
// vite: {

export default {
  plugins: [sveltekit(), viteCommonjs()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },

  logLevel: 'debug'
};
