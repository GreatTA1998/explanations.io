import vercel from '@sveltejs/adapter-vercel';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// https://kit.svelte.dev/docs
		// Below is Vite's config, see https://www.reddit.com/r/sveltejs/comments/nzi934/comment/h1ppot2/?utm_source=share&utm_medium=web2x&context=3
		vite: {
			plugins: [
				viteCommonjs()
			]
		}
	}
};

export default config;
