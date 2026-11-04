// Loaded when a new recording is transcribed. @xenova/transformers is a normal
// dependency. If it cannot be loaded, this throws a plain Error for the job.

import { env, pipeline } from '@xenova/transformers'

const MODEL_ID = 'Xenova/whisper-tiny'

export async function loadWhisperPipeline() {
  env.allowLocalModels = false
  env.useBrowserCache = true
  if (env.backends?.onnx?.wasm) {
    env.backends.onnx.wasm.numThreads = 1
  }
  return pipeline('automatic-speech-recognition', MODEL_ID, {
    quantized: true
  })
}
