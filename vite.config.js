import { createRequire } from "module";
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

const configDir = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(configDir, "package.json"));

// onnxruntime-web is UMD. The dev CommonJS plugin cannot parse the minified
// bundle, so turn the installed file into ESM and alias the package at it.
// Resolve it as a module (it may be nested), and do not fail config load when
// it is not installed yet — that used to abort `vite dev` before the app started.
function resolveOrtEntry() {
  const resolvers = [require];
  try {
    resolvers.unshift(createRequire(require.resolve("@xenova/transformers/package.json")));
  } catch {
    // Transformers itself is not installed.
  }
  for (const resolveFrom of resolvers) {
    try {
      return resolveFrom.resolve("onnxruntime-web/dist/ort-web.min.js");
    } catch {
      // Try the next location. The package may be hoisted or nested.
    }
  }
  return null;
}

function onnxRuntimeWebBundle() {
  const entry = resolveOrtEntry();
  if (!entry) {
    console.warn(
      "onnxruntime-web is not installed, so new-video transcription is unavailable until npm install."
    );
    return null;
  }

  const outfile = path.resolve(configDir, "node_modules/.vite/ort-web-browser.mjs");
  fs.mkdirSync(path.dirname(outfile), { recursive: true });
  try {
    buildSync({
      absWorkingDir: configDir,
      entryPoints: [entry],
      bundle: true,
      format: "esm",
      platform: "browser",
      outfile,
      logLevel: "silent",
    });
  } catch (err) {
    console.warn("Could not prepare onnxruntime-web for the browser.", err);
    return null;
  }
  return outfile;
}

const ortBundle = onnxRuntimeWebBundle();

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
    alias: ortBundle ? { "onnxruntime-web": ortBundle } : {},
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
