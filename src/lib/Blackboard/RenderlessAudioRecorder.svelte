<slot {startRecording} {stopRecording}>

</slot>

<script>
  import { baseMicStream } from '../../store.js'
  import { initializeMicStream } from '../../helpers/microphone.js'
  import { createEventDispatcher, onMount } from 'svelte'
  import { browser } from '$app/environment'
  // import AudioRecorder from 'audio-recorder-polyfill'
  // import mpegEncoder from "audio-recorder-polyfill/mpeg-encoder";
  // AudioRecorder.encoder = mpegEncoder;
  // AudioRecorder.prototype.mimeType = "audio/mpeg"; // mpeg is equivalent to mp3
  let AudioRecorder
  const dispatch = createEventDispatcher()
  let recorder =  null

  // technically this is overkill: see https://kit.svelte.dev/faq
  onMount(async () => {
    if (browser && window) {
      // https://stackoverflow.com/a/58859327
      // otherwise `window` is undefined
      AudioRecorder = await import("audio-recorder-polyfill")
      window.MediaRecorder = AudioRecorder.default
    }
  })

  /**
   * MediaStreamTrack API https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop
   * 
   * 
   */
  function startRecording () {
    return new Promise(async (resolve, reject) => {
      if (!$baseMicStream) {
        // because we're asking for user access, this can throw exceptions
        await initializeMicStream()
      }
      
      // need to use a copy because:
      //   1. aliasing a stream for video call, different recording sessions, etc. causes unpredictable issues on Safari iOS
      //   2. By using a copy, we naturally handle the edge case where the user mutes voice in the MIDDLE of recording
      const micStreamCopy = $baseMicStream.clone() // new copies I assume will have active tracks, even if the base is deactivated

      // this doesn't throw exceptions, no need for try-catch
      recorder = new MediaRecorder(micStreamCopy); 

      checkAudioTrack(recorder.stream)
    
      // event handlers are attached synchronously
      // without specifying a timeslice, it will only fire at the end
      recorder.addEventListener("dataavailable", e => {
        const audioBlob = e.data
        dispatch('record-end', { audioBlob })
      })

      recorder.start()
      dispatch('record-start')

      resolve()
    })
  }

  function stopRecording () {
    return new Promise((resolve, reject) => {
      recorder.stop()

      // turn off the red circle that indicates you're being recorded
      // technically not necessary because we're hard reloading after video upload anyway
      for (const track of $baseMicStream.getTracks()) {
        track.stop()
      }
      baseMicStream.set(null)

      for (const track of recorder.stream.getTracks()) {
        track.stop()
      }
      recorder = null

      resolve()
    })
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