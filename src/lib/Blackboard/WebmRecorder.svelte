<script>
  import { baseMicStream } from '../../store.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'

  export let previewVideo
  export let canvasWidth
  export let canvasHeight
  export let fps = 10
  export let videoBitrate = 32_000  // 0.5 Mbps is low quality for a video
  export let audioBitrate = 16_000  
  // 32 kbps: radio quality
  // 128-320 kbps:  (for mp3 music)
  let outputCanvas
  let ctx
  let videoRecorder
  let combinedStream
  let chunks = []
  const dispatch = createEventDispatcher()

  onMount(() => {
    outputCanvas.width = canvasWidth
    outputCanvas.height = canvasHeight
    ctx = outputCanvas.getContext('2d')
  })

  onDestroy(cleanup)

  export function getCanvas () { return outputCanvas }

  export function getCtx () { return ctx }
  
  export function start () {
    initialize()
    videoRecorder?.start(100)
  }

  function initialize () {
    const [audioTrack] = $baseMicStream.getAudioTracks()
    const videoTrack = outputCanvas.captureStream(fps).getVideoTracks()[0]

    videoTrack.applyConstraints({
      width: canvasWidth,
      height: canvasHeight,
      frameRate: fps
    }).catch(e => console.error('Constraint error:', e))

    combinedStream = new MediaStream([videoTrack, audioTrack])
    videoRecorder = new MediaRecorder(combinedStream, {
      // mimeType: chrome defaults to 'video/webm' or video/webm;codecs=vp8,opus, Safari will fallback to different codecs
      videoBitsPerSecond: videoBitrate,
      audioBitsPerSecond: audioBitrate
    })
   
    videoRecorder.addEventListener('dataavailable', e => e.data.size && chunks.push(e.data))
    videoRecorder.addEventListener('stop', createPreview)
    videoRecorder.addEventListener('error', (e) => console.error('MediaRecorder error:', e))
  }
  
  export async function stop () {
    if (videoRecorder?.state !== 'inactive') {
      // attempts to fix a strange issue that I still don't understand the mechanism of '
      // clues
      //   - if you press `finish recording` right after the last stroke, the video will have the missing stroke for the last remaining durations
      //   - the stroke appears if you force the slider to the end. It just never appears during natural playback
      //   - might need to await the `dataavailable` callback too
      await videoRecorder.requestData()

      videoRecorder.stop()
    }
  }
  
  function createPreview() {
    if (chunks.length) {
      const blob = new Blob(chunks, { 
        type: 'video/webm'
      })    
      // codecs=vp8,opus

      console.log("webm blob.size =", blob.size)
      dispatch('video-ready', { blob })

      const vidURL = URL.createObjectURL(blob)
      
      if (previewVideo) {
        previewVideo.src = vidURL
        previewVideo.load() // attempt to get more metadata upfront
        previewVideo.addEventListener('loadedmetadata', () => {
          console.log('Metadata loaded')
          console.log('Video duration:', previewVideo.duration)
          console.log('Video ready state:', previewVideo.readyState)
          console.log('Video size:', blob.size)
        })
        previewVideo.addEventListener('error', () => console.log('Video error:', previewVideo.error))
      }
      dispatch('video-ready', { blob })
    }
  }
  
  export function cleanup () {
    // if (videoRecorder?.state !== 'inactive') {
    //   videoRecorder.stop()
    // }
    // if (combinedStream) {
    //   combinedStream.getTracks().forEach(track => track.stop())
    // }
    // chunks = []
    // URL.revokeObjectURL(previewVideo?.src)
  }
</script>

<canvas
  style="display: none;;"
  bind:this={outputCanvas}
>
</canvas>

<!--
<video bind:this={previewVideo}
  controls 
  class="debug-video" 
  style="width: 300px; height: 200px;"
>
</video> -->
