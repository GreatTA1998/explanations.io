import fs from "fs";
import path from "path";
import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";

// This adapter version publishes one serverless function and does not read
// route config. Transcription of a 30 minute recording runs there after save.
const TRANSCRIPTION_MAX_DURATION = 300;

function vercelAdapter() {
  const adapter = vercel();
  return {
    name: adapter.name,
    async adapt(builder) {
      await adapter.adapt(builder);
      const functionsDir = path.resolve(".vercel/output/functions");
      if (!fs.existsSync(functionsDir)) return;
      const pending = [functionsDir];
      while (pending.length) {
        const dir = pending.pop();
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) pending.push(full);
          else if (entry.name === ".vc-config.json") {
            const current = JSON.parse(fs.readFileSync(full, "utf8"));
            if (!(current.maxDuration >= TRANSCRIPTION_MAX_DURATION)) {
              current.maxDuration = TRANSCRIPTION_MAX_DURATION;
              fs.writeFileSync(full, JSON.stringify(current));
            }
          }
        }
      }
    }
  };
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercelAdapter(),
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
