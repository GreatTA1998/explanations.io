<slot {startRecording} {stopRecording} currentTime={displayedCurrentTime}>

</slot>

<script>
  /** 
  The reason this exists is because iOS Safari invalidates previous mic streams when you call "navigator.getUserMedia"
  so recording a video mutes your audio call. The opposite is also true: `Daily.createCallObject()` will likely invalidate the 
  current recording session.
  The best workaround is to clone independent mic streams and pass them to the recorder and the call object respectively. 
  If we're using the audio recorder, we MUST also pre-clone a stream in case the user joins an audio call afterwards. 
  The logic is as follows: 
    1. Either recording or phone call is triggered. We create two independent copies of the mic stream.
    2. The recorder is correct no matter what, because, each time it starts recording it clones an additional independent copy.
    3. The phone call is correct with exception to, when it terminates, we have to terminate the mic stream.

  The last thing to ensure is, the mic is deactivated when it's not in use so it's not jarring for the user. 
  We do this by destroying the micStream object upon ending a call. 
      CASE 1 (in the middle of recording): the audio recorder has an independent copy, so the mic will be turned off when that independent copy 
      is also deactivated.
      CASE 2 (not in the middle of recording): trivially correct. 
  This is used by `BlackboardAudioRecorder.vue` and `VideoConferenceRoom.vue`
  KNOWN ISSUES: if you hang-up in the middle of a recording you lose your sound
   (though if you hang-up after the recording, then start another one, it's fine. 
        1. I suspect it's the track.stop() messing the ongoing tracks mid-recording
        2. If the recording already finished, a fresh micStream is created because we reset the pointers of micStream and CallObject
    )
**/



  import { baseMicStream, recordState, dailyRoomParticipants } from '../store.js'
  import { initializeMicStream } from '../helpers/microphone.js'
  import { createEventDispatcher, onMount } from 'svelte'
  import { browser } from '$app/environment'
  // import mpegEncoder from "audio-recorder-polyfill/mpeg-encoder";
  // AudioRecorder.encoder = mpegEncoder;
  // AudioRecorder.prototype.mimeType = "audio/mpeg"; // mpeg is equivalent to mp3
  let AudioRecorder

  const tickSize = 100 // milliseconds

  let startTimestamp = null // number of milliseconds since 1970 00:00:00 UTC
  let etaOfNextTick = null // would use an Optional in 6.031, `0` doesn't make sense as it makes the AF inconsistent
  let displayedCurrentTime = 0
  let nextTimeoutID = ''

  // rounds to nearest 0.1, see https://stackoverflow.com/a/12698296/7812829
  function roundedToFixed(input, digits) {
    var rounded = Math.pow(10, digits);
    return (Math.round(input * rounded) / rounded).toFixed(digits);
  }

  // Timer that doesn't slowly drift late and get out of sync with visuals
  // @see based on https://stackoverflow.com/a/29972322/7812829
  // how the self-adjusting timer works 
  //    - setInterval is at best, on time, but usually, late
  //    - yes, the self-adjusting tick function will always increase time by 1 (even if 1.6 seconds has passed because it's again, late)
  //    - ...but the 1 vs 1.6 error will be compensated next tick, because tick() will call itself after 0.4 seconds (it but it's constantly catching up) to achieve 2 vs 2
  //    - if the tick function is super late i.e. 3 seconds passed by, it'll just call itself with setTimeout(0) 2 more times immediately
  //    - therefore the maximum error is the infimum of the tick size. Get the tick size to be 0.1 second so the maximum error is <0.1
  function startTimer () {
    startTimestamp = Date.now()
    etaOfNextTick = startTimestamp + tickSize
    nextTimeoutID = setTimeout(
      step, 
      tickSize
    )
  }

  function stopTimer () {
    startTimestamp = null 
    etaOfNextTick = null
    displayedCurrentTime = 0
    clearTimeout(nextTimeoutID)
    nextTimeoutID = ''
  }

  function step () {
      const delay = Date.now() - etaOfNextTick; // how late was the setTimeout 
      if (delay > tickSize) {
        console.log('setTimeout is lagging greatly')
        // something really bad happened. Maybe the browser (tab) was inactive? possibly special handling to avoid futile "catch up" run
      }
      etaOfNextTick += tickSize

      const millisecondsInSecond = 1000
      const nearestDecimalPoint = 1
      displayedCurrentTime = roundedToFixed(
        (etaOfNextTick - startTimestamp) / millisecondsInSecond,
        nearestDecimalPoint
      )

      nextTimeoutID = setTimeout(
        step, 
        Math.max(0, tickSize - delay)
      )
  }

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
      if (!$baseMicStream) {
        await initializeMicStream()
      }
      // TEST RIGOROUSLY ON IPAD
      // NOTE: this doesn't seem necessary anymore because the mic streams are independent now, but defensive programming
      // actually order matters: if you have the mic stream from daily muted first, 
      // it might affect the audio recorder who then clones off of the muted stream
      // test on iPad

      // logged in user connected to voice chat, but is MUTED
      
      // if ($dailyRoomParticipants && $dailyRoomParticipants.local && !$dailyRoomParticipants.local.audio) {
      //   alert('Cannot start recording because your mic is muted - click the switch next to your name to unmute')
      //   reject('Cannot start recording because mic stream is muted')
      //   return
      // } 
      
      // need to use a copy because:
      //   1. aliasing a stream for video call, different recording sessions, etc. causes unpredictable issues on Safari iOS
      //   2. By using a copy, we naturally handle the edge case where the user mutes voice in the MIDDLE of recording
      const micStreamCopy = $baseMicStream.clone() // new copies I assume will have active tracks, even if the base is deactivated

      recorder = new MediaRecorder(micStreamCopy); 
      recorder.start()

      startTimer()

      dispatch('record-start')
      resolve()
    });
  }
  function stopRecording () {
    return new Promise((resolve, reject) => {
      stopTimer()
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
    })
  }
</script>