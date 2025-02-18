import { baseMicStream } from '../store.js'

export function initializeMicStream () {
  return new Promise(async resolve => {
    try {
      const micStream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          channelCount: 1,  // Mono instead of stereo
          sampleRate: 22050,  // Half of CD quality (44.1kHz)
          sampleSize: 16
        } 
      })
      baseMicStream.set(micStream)
      resolve()
    } catch (error) {
      alert(`Don't forget to enable your your mic! Click the "aA" / "i" button beside the URL bar "explanations.io, then click "website settings" / "microphone"`)
      return reject("Can't access mic stream")
    }
  })
}