<slot {startRecording} {stopRecording} {currentTime}>

</slot>

<script>
  import { dailyMicStream, recordState, dailyRoomParticipants } from '../store.js'
  import { createEventDispatcher, onMount } from 'svelte'
  import { browser } from '$app/env'
  // import mpegEncoder from "audio-recorder-polyfill/mpeg-encoder";
  // AudioRecorder.encoder = mpegEncoder;
  // AudioRecorder.prototype.mimeType = "audio/mpeg"; // mpeg is equivalent to mp3
  let AudioRecorder
  let currentTime = 0
  let timer

  // technically this is overkill: see https://kit.svelte.dev/faq
  onMount(async () => {
    if (browser && window) {
      // https://stackoverflow.com/a/58859327
      AudioRecorder = await import("audio-recorder-polyfill")
      window.MediaRecorder = AudioRecorder.default;
    }
  })

  const dispatch = createEventDispatcher()
  let recorder =  null

  /**
   * Assumes the user is already connected to voice chat. 
   * This assumption is currently preserved by the design because Daily asks for mic permission on initial website load - the blackboards (and therefore the record buttons) don't render unless mic is allowed. 
   */
  function startRecording () {
    return new Promise(async (resolve, reject) => {
      // call it `...Copy` just to maintain same API, will change future
      let micStreamCopy
      // new, account-less visitors don't connect to voice chat
      if (!$dailyMicStream) {
        try {
          micStreamCopy = await navigator.mediaDevices.getUserMedia({ audio: true })
        } catch (error) {
          alert(`Don't forget to enable your your mic! Click the "aA" / "i" button beside the URL bar "https://explain.mit.edu", then click "website settings" / "microphone"`)
          return reject("Can't access mic stream")
        }
      }
      // logged in user connected to voice chat, but is MUTED
      else if (!$dailyRoomParticipants.local.audio) {
        alert('Cannot start recording because your mic is muted - click the switch next to your "beaver #n" to unmute')
        reject('Cannot start recording because mic stream is muted')
        return
      } 
      else {
        // need to use a copy because:
        //   1. aliasing a stream for video call, different recording sessions, etc. causes unpredictable issues on Safari iOS
        //   2. By using a copy, we naturally handle the edge case where the user mutes voice in the MIDDLE of recording
        micStreamCopy = $dailyMicStream.clone()
      }

      recorder = new MediaRecorder(micStreamCopy); 
      recorder.start();

      timer = setInterval(
        () => currentTime += 0.1, 
        100
      )

      dispatch('record-start')
      resolve();
    });
  }
  function stopRecording () {
    return new Promise((resolve, reject) => {
      clearTimeout(timer)
      recorder.addEventListener("dataavailable", e => {
        const audioBlob = e.data
        dispatch('record-end', { audioBlob }); 
        resolve(); 
        // quickfix: don't reset to pre_record when audio hasn't been uploaded to cloud 
        // recordState.set('pre_record')
      })
      recorder.stop();
      for (const track of recorder.stream.getTracks()) {
        track.stop();
      }
    });
  }
</script>