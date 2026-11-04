<script>
  import { baseMicStream } from '../../store.js'
  import { onDestroy, createEventDispatcher } from 'svelte'
  import { h264Mp4MimeType, isH264Mp4Mime, H264_RECORDING_UNSUPPORTED } from '../../helpers/recordingMime.js'

  export let previewVideo
  export let canvasWidth
  export let canvasHeight
  export let fps = 10
  // 32 kbps / 16 kbps was not a watchable file (the old comment said 0.5 Mbps).
  export let videoBitrate = 1_500_000
  export let audioBitrate = 128_000

  let outputCanvas
  let ctx
  let videoRecorder
  let combinedStream
  let clonedAudioTrack = null
  let chunks = []
  let recordedMimeType = ''
  const dispatch = createEventDispatcher()

  $: if (outputCanvas && canvasWidth && canvasHeight) {
    syncCanvasSize(canvasWidth, canvasHeight)
  }

  onDestroy(cleanup)

  export function getCanvas () { return outputCanvas }

  export function getCtx () { return ctx }

  function syncCanvasSize (w, h) {
    if (outputCanvas.width === w && outputCanvas.height === h && ctx) return
    outputCanvas.width = w
    outputCanvas.height = h
    ctx = outputCanvas.getContext('2d')
  }

  export function start () {
    const mimeType = h264Mp4MimeType(browserSupports)
    if (!mimeType) {
      throw new Error(H264_RECORDING_UNSUPPORTED)
    }
    try {
      initialize(mimeType)
    } catch (error) {
      discardRecording()
      if (error && error.message === 'Microphone is not ready') throw error
      throw new Error(H264_RECORDING_UNSUPPORTED)
    }
    videoRecorder.start(100)
  }

  function browserSupports (type) {
    return typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)
  }

  function initialize (mimeType) {
    const sourceTrack = $baseMicStream && $baseMicStream.getAudioTracks()[0]
    if (!sourceTrack) {
      throw new Error('Microphone is not ready')
    }

    stopClonedAudio()
    clonedAudioTrack = sourceTrack.clone()
    chunks = []
    recordedMimeType = ''

    const videoTrack = outputCanvas.captureStream(fps).getVideoTracks()[0]
    videoTrack.applyConstraints({
      width: canvasWidth,
      height: canvasHeight,
      frameRate: fps
    }).catch(e => console.error('Constraint error:', e))

    combinedStream = new MediaStream([videoTrack, clonedAudioTrack])
    videoRecorder = new MediaRecorder(combinedStream, {
      mimeType,
      videoBitsPerSecond: videoBitrate,
      audioBitsPerSecond: audioBitrate
    })

    const actual = videoRecorder.mimeType || mimeType
    if (!isH264Mp4Mime(actual) && !isH264Mp4Mime(mimeType)) {
      throw new Error(H264_RECORDING_UNSUPPORTED)
    }
    if (/vp8|vp9|vp09|av01|webm/i.test(actual)) {
      throw new Error(H264_RECORDING_UNSUPPORTED)
    }
    recordedMimeType = mimeType

    videoRecorder.addEventListener('dataavailable', e => e.data.size && chunks.push(e.data))
    videoRecorder.addEventListener('stop', createPreview)
    videoRecorder.addEventListener('error', (e) => console.error('MediaRecorder error:', e))
  }

  export async function stop () {
    if (!videoRecorder || videoRecorder.state === 'inactive') {
      stopClonedAudio()
      return
    }

    // captureStream(fps) samples on a timer, and Chrome gives the final
    // encoded frame ~0 duration, so the last stroke is missing until you
    // seek to the end. Two extra identical paints give that stroke a real duration.
    const frameMs = Math.ceil(1000 / fps)
    holdFrame()
    await wait(frameMs + 40)
    holdFrame()
    await wait(frameMs + 40)

    await new Promise(resolve => {
      const recorder = videoRecorder
      const finish = () => {
        recorder.removeEventListener('stop', finish)
        resolve()
      }
      recorder.addEventListener('stop', finish)
      if (recorder.state === 'inactive') resolve()
      else recorder.stop()
    })
    stopClonedAudio()
  }

  function holdFrame () {
    if (!ctx || !outputCanvas || outputCanvas.width < 1 || outputCanvas.height < 1) return
    try {
      const pixel = ctx.getImageData(0, 0, 1, 1)
      ctx.putImageData(pixel, 0, 0)
    } catch (err) {
      console.error('Could not sample the canvas frame', err)
    }
  }

  function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function createPreview () {
    if (!chunks.length || !isH264Mp4Mime(recordedMimeType)) {
      chunks = []
      return
    }

    const blob = new Blob(chunks, { type: 'video/mp4' })
    chunks = []
    dispatch('video-ready', {
      blob,
      mimeType: recordedMimeType
    })

    if (previewVideo) {
      previewVideo.src = URL.createObjectURL(blob)
      previewVideo.load()
    }
  }

  function discardRecording () {
    chunks = []
    recordedMimeType = ''
    if (videoRecorder && videoRecorder.state !== 'inactive') {
      try { videoRecorder.stop() } catch (err) { console.error(err) }
    }
    videoRecorder = null
    cleanup()
  }

  function stopClonedAudio () {
    if (clonedAudioTrack && clonedAudioTrack.readyState === 'live') {
      clonedAudioTrack.stop()
    }
    clonedAudioTrack = null
  }

  export function cleanup () {
    stopClonedAudio()
    if (combinedStream) {
      combinedStream.getTracks().forEach(track => track.stop())
    }
  }

  function bindCanvas (node) {
    outputCanvas = node
    if (canvasWidth && canvasHeight) syncCanvasSize(canvasWidth, canvasHeight)
  }
</script>

<canvas
  style="display: none;"
  use:bindCanvas
>
</canvas>
