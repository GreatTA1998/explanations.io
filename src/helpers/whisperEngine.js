// Imported only after a new recording's audio file exists.
// A static import from transcript.js makes Vite resolve this package while a
// room is loading, which overlays the page when the package is not installed.

const MODEL_ID = 'Xenova/whisper-tiny'

export async function loadWhisperPipeline() {
  const { pipeline, env } = await import('@xenova/transformers')
  env.allowLocalModels = false
  env.useBrowserCache = true
  if (env.backends?.onnx?.wasm) {
    env.backends.onnx.wasm.numThreads = 1
  }
  return pipeline('automatic-speech-recognition', MODEL_ID, {
    quantized: true
  })
}
