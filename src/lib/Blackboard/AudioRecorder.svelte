<slot {startRecording} {stopRecording}>

</slot>

<script>
  import { baseMicStream } from '../../store.js'
  import { initializeMicStream } from '../../helpers/microphone.js'
  import { chooseSpeechFormat } from '../../helpers/speechMime.js'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  let recorder = null
  let chunks = []

  // MediaStreamTrack API https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop
  function startRecording () {
    return new Promise(async (resolve, reject) => {
      try {
        if (!$baseMicStream) {
          // because we're asking for user access, this can throw exceptions
          await initializeMicStream()
        }
        if (!$baseMicStream) {
          reject(new Error('Microphone is not ready'))
          return
        }

        // need to use a copy because:
        //   1. aliasing a stream for video call, different recording sessions, etc. causes unpredictable issues on Safari iOS
        //   2. By using a copy, we naturally handle the edge case where the user mutes voice in the MIDDLE of recording
        const micStreamCopy = $baseMicStream.clone()
        const opened = openSpeechRecorder(micStreamCopy)
        recorder = opened.recorder
        const format = opened.format
        const mimeType = recorder.mimeType || format.mimeType
        chunks = []

        checkAudioTrack(recorder.stream)

        // without specifying a timeslice, dataavailable fires once, when recording stops
        recorder.addEventListener('dataavailable', (e) => {
          if (e.data && e.data.size) chunks.push(e.data)
        })
        recorder.addEventListener('stop', () => {
          const recordedType = (chunks[0] && chunks[0].type) || mimeType
          const audioBlob = new Blob(chunks, { type: recordedType })
          chunks = []
          dispatch('record-end', {
            audioBlob,
            mimeType: recordedType,
            fileExtension: format.fileExtension
          })
        })

        recorder.start()
        dispatch('record-start')
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  function stopRecording () {
    return new Promise((resolve) => {
      const active = recorder
      if (!active || active.state === 'inactive') {
        releaseMic()
        recorder = null
        resolve()
        return
      }

      let settled = false
      const finish = () => {
        if (settled) return
        settled = true
        active.removeEventListener('stop', finish)
        releaseMic()
        for (const track of active.stream.getTracks()) track.stop()
        if (recorder === active) recorder = null
        resolve()
      }

      // dataavailable runs before stop, so the blob is dispatched before the mic is released
      active.addEventListener('stop', finish)
      try {
        active.stop()
      } catch (error) {
        finish()
      }
    })
  }

  function openSpeechRecorder (stream) {
    const supports = (type) => {
      try {
        return typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)
      } catch {
        return false
      }
    }
    const preferred = chooseSpeechFormat(supports)
    const aacOnly = chooseSpeechFormat((type) => supports(type) && String(type).includes('mp4'))
    const candidates = []
    if (preferred) candidates.push(preferred)
    if (aacOnly && (!preferred || aacOnly.mimeType !== preferred.mimeType)) candidates.push(aacOnly)

    let lastError = null
    for (const format of candidates) {
      try {
        return {
          format,
          recorder: new MediaRecorder(stream, {
            mimeType: format.mimeType,
            audioBitsPerSecond: format.audioBitsPerSecond
          })
        }
      } catch (error) {
        lastError = error
      }
    }
    throw lastError || new Error('This browser cannot record speech. It needs Opus or AAC.')
  }

  function releaseMic () {
    if (!$baseMicStream) return
    // turn off the red circle that indicates you're being recorded
    for (const track of $baseMicStream.getTracks()) track.stop()
    baseMicStream.set(null)
  }

  function checkAudioTrack (stream) {
    const errorMessages = []
    const audioTrack = stream.getAudioTracks()[0]

    // this results in a silent recording but 0:05

    // TESTED:
    // audioTrack.enabled = false // prevent the track from outputting data
    // stop() is more final. It releases the media device and changes the `readyState` to "ended" and you can't enable it again.

    if (audioTrack) {
      if (!audioTrack.enabled) errorMessages.push('audioTrack.enabled is false')
      if (audioTrack.readyState !== 'live') errorMessages.push('audioTrack.readyState is ', audioTrack.readyState) // ready-state is a read-only property
      if (audioTrack.muted) errorMessages.push('audioTrack.muted is true') // read-only property, it's affected by the computer system settings not the app itself or browser usually
    }
    else {
      errorMessages.push("No audio track found in the stream")
    }

    if (errorMessages.length > 0) {
      const string = errorMessages.join(', ')
      alert(`WARNING, audio recording will likely fail: ${string}`)
    }
  }
</script>
