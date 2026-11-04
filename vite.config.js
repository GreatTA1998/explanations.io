import { buildSync } from "esbuild";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sveltekit } from "@sveltejs/kit/vite";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
// Fixes `require is undefined`
// https://kit.svelte.dev/docs
// Below is Vite's config, see https://www.reddit.com/r/sveltejs/comments/nzi934/comment/h1ppot2/?utm_source=share&utm_medium=web2x&context=3
// vite: {

// onnxruntime-web is UMD. The dev CommonJS plugin cannot parse the minified
// bundle, and a format-only transform still leaves require() in the browser.
// Bundle it to ESM once and alias the package at that file.
const ortBundle = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "node_modules/.vite/ort-web-browser.mjs"
);
fs.mkdirSync(path.dirname(ortBundle), { recursive: true });
buildSync({
  absWorkingDir: path.dirname(fileURLToPath(import.meta.url)),
  entryPoints: ["node_modules/onnxruntime-web/dist/ort-web.min.js"],
  bundle: true,
  format: "esm",
  platform: "browser",
  outfile: ortBundle,
  logLevel: "silent",
});

export default {
  plugins: [
    sveltekit(),
    // The dev CommonJS transform corrupts onnxruntime-web's minified bundle
    // ("Unterminated string literal"), so Whisper never loads in the browser.
    viteCommonjs({
      exclude: ["onnxruntime-web", "onnxruntime-node", "@xenova/transformers"],
    }),
  ],

  resolve: {
    alias: {
      "onnxruntime-web": ortBundle,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },

  logLevel: 'debug',

  optimizeDeps: {
    exclude: ['@xenova/transformers']
  },

  ssr: {
    external: ['@xenova/transformers', 'onnxruntime-web', 'onnxruntime-node', 'sharp']
  }
};
