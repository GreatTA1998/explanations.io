<slot {startRecording} {stopRecording} {currentTime}>

</slot>

<script>
  import AudioRecorder from "audio-recorder-polyfill";
  import { dailyMicStream, recordState } from '../store.js'
  import { createEventDispatcher, onMount } from 'svelte'
  import { browser } from '$app/env'
  // import mpegEncoder from "audio-recorder-polyfill/mpeg-encoder";
  // AudioRecorder.encoder = mpegEncoder;
  // AudioRecorder.prototype.mimeType = "audio/mpeg"; // mpeg is equivalent to mp3

  let currentTime = 0
  let timer

  onMount(() => {
    if (browser) {
      window.MediaRecorder = AudioRecorder;
    }
  })

  const dispatch = createEventDispatcher()
  let recorder =  null

  function startRecording () {
    return new Promise(async resolve => {
      if (!$dailyMicStream) {
        const micStream = await navigator.mediaDevices.getUserMedia({ audio: true })
        dailyMicStream.set(micStream)
      }
      // the same stream cannot used for video call, different recording sessions, etc. without
      // unpredictable issues on Safari iOS
      const micStreamCopy = $dailyMicStream.clone()
      recorder = new MediaRecorder(micStreamCopy); 
      recorder.start();

      timer = setInterval(
        () => currentTime += 0.1, 
        100
      )

      dispatch('record-start')
      recordState.set('mid_record')
      resolve();
    });
  }
  function stopRecording () {
    return new Promise((resolve, reject) => {
      clearTimeout(timer)
      recordState.set('post_record')
      recorder.addEventListener("dataavailable", e => {
        const audioBlob = e.data
        dispatch('record-end', { audioBlob }); 
        resolve(); 
        recordState.set('pre_record')
      })
      recorder.stop();
      for (const track of recorder.stream.getTracks()) {
        track.stop();
      }
    });
  }
</script>