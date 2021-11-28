import { drawStroke } from './canvasDraw.js'

export function resizable (canvas, { strokesArray, specialRedrawFunc }) {
  let ctx = canvas.getContext('2d')
  canvas.style['background-color'] ='#2e3131'

  let resizeDebouncer = null
  const hundredMilliseconds = 100
  function debouncedResizeHandler () {
    if (resizeDebouncer) clearTimeout(resizeDebouncer)
    setTimeout(() => {
      resizeCanvas()
      if (specialRedrawFunc) specialRedrawFunc() 
      else redrawCanvas()
    }, hundredMilliseconds)
  }

  function resizeCanvas () {
    if (resizeDebouncer) clearTimeout(resizeDebouncer)
   
    // calculate size
    let videoHeight
    let videoWidth
    const appElement = document.getElementById('main-content')
    const availableHeight = appElement.clientHeight
    const availableWidth= appElement.clientWidth
    const aspectRatio = 4/3
    if (availableWidth * (1/aspectRatio) < availableHeight) {
      videoWidth = availableWidth;
      videoHeight = videoWidth * (1/aspectRatio);
    } else {
      videoHeight = availableHeight;
      videoWidth = videoHeight * aspectRatio;
    }

    // perform the resize
    // internal dimensions (true scale factor)
    // canvas.style.width = videoWidth
    // canvas.style.height = videoHeight

    canvas.width = videoWidth
    canvas.height = videoHeight

    // visible, external dimension
    // canvas.style.scrollWidth = videoWidth
    // canvas.style.scrollHeight = videoHeight
    // then have a listener

    // TODO: debounce 
    window.addEventListener('resize', debouncedResizeHandler)
  }

  function redrawCanvas () {
    for (const stroke of strokesArray) {
      drawStroke(stroke, null, ctx, canvas)
    }
  }
  
  // initial render must be fast, not delayed
  resizeCanvas()
  if (specialRedrawFunc) specialRedrawFunc() 
  else redrawCanvas()

  return {
    destroy () {
      window.removeEventListener('resize', debouncedResizeHandler)
    }
  }
}