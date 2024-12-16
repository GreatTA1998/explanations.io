import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),
  },
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y-click-events-have-key-events')) return;
    if (warning.code === 'css-unused-selector') return;
    handler(warning);
  }
};

export default config;
