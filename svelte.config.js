import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),

    // hydrate the <div id="svelte"> element in src/app.html
    // target: '#svelte',

    // Fixes `require is undefined`
    // https://kit.svelte.dev/docs
    // Below is Vite's config, see https://www.reddit.com/r/sveltejs/comments/nzi934/comment/h1ppot2/?utm_source=share&utm_medium=web2x&context=3

    // vite: {
    // 	plugins: [
    // 		viteCommonjs(),
    // 	],

    // 	// Fixes known issue with v9 Firebase and SvelteKit
    // 	// https://kit.svelte.dev/faq
    // 	// https://github.com/benmccann/sveltekit-firebase/blob/9e3097fd859e4f81e4775885ecb584561f098fd3/svelte.config.js#L11
    // 	ssr: {
    // 		external: ['whatwg-url', 'node-fetch']
    // 	}
    // }
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
