<script>
  import { baseMicStream } from '../../store.js'
  import { onMount, onDestroy } from 'svelte'
  
  export let previewVideo
  export let canvasWidth
  export let canvasHeight
  export let fps = 10
  export let videoBitrate = 500000  // 0.5 Mbps
  export let audioBitrate = 128000  // 128 kbps
  
  let outputCanvas
  let ctx
  let videoRecorder
  let combinedStream
  let chunks = []

  onMount(() => {
    outputCanvas.width = canvasWidth
    outputCanvas.height = canvasHeight
    ctx = outputCanvas.getContext('2d')
  })

  onDestroy(cleanup)

  export function getCanvas () { return outputCanvas }

  export function getCtx () { return ctx }
  
  export function startRecording() {
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
      mimeType: 'video/webm;codecs=vp8,opus',
      videoBitsPerSecond: videoBitrate,
      audioBitsPerSecond: audioBitrate
    })
   
    videoRecorder.addEventListener('dataavailable', e => e.data.size && chunks.push(e.data))
    videoRecorder.addEventListener('stop', createPreview)
    videoRecorder.addEventListener('error', (e) => console.error('MediaRecorder error:', e))
  }
  
  export function stopRecording() {
    if (videoRecorder?.state !== 'inactive') {
      videoRecorder.stop()
    }
  }
  
  function createPreview() {
    if (chunks.length) {
      const blob = new Blob(chunks, { 
        type: 'video/webm;codecs=vp8,opus'
      })    
      const vidURL = URL.createObjectURL(blob)
      
      if (previewVideo) {
        previewVideo.src = vidURL
        previewVideo.addEventListener('loadedmetadata', () => {
          // console.log('Video metadata loaded:', {
          //   duration: previewVideo.duration,
          //   videoWidth: previewVideo.videoWidth,
          //   videoHeight: previewVideo.videoHeight
          // })
        })
        previewVideo.addEventListener('error', () => {
          console.log('Video error:', previewVideo.error)
        })
      }
    }
  }
  
  export function cleanup() {
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

<span>Master output canvas</span>
<canvas
  style="outline: 2px solid red;"
  bind:this={outputCanvas}
>
</canvas>

<span>Combined recording</span>
<video 
  controls bind:this={previewVideo}
  class="debug-video" 
  style="width: 300px; height: 200px;"
>
</video>
