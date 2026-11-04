// Stand-in used only when @xenova/transformers is not installed.
// Importing it succeeds, and calling pipeline() throws a normal error so the
// transcript job can report that sentence. It is not a second speech engine.

const MESSAGE = 'Could not load speech transcription.'

export const env = {
  allowLocalModels: false,
  useBrowserCache: true,
  backends: { onnx: { wasm: {} } }
}

export function pipeline() {
  throw new Error(MESSAGE)
}
