import { baseMicStream } from '../store.js'

export function initializeMicStream () {
  return new Promise(async resolve => {
    try {
      const micStream = await navigator.mediaDevices.getUserMedia({ audio: true })
      baseMicStream.set(micStream)
      resolve()
    } catch (error) {
      alert(`Don't forget to enable your your mic! Click the "aA" / "i" button beside the URL bar "https://explain.mit.edu", then click "website settings" / "microphone"`)
      return reject("Can't access mic stream")
    }
  })
}