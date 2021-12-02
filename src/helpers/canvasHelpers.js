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

    const { height, width } = calculateCanvasDimensions()
    canvas.width = width
    canvas.height = height

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

export function calculateCanvasDimensions () {
  const appElement = document.getElementById('main-content')
  const availableHeight = appElement.clientHeight
  const availableWidth = appElement.clientWidth
  const aspectRatio = 4/3

  let dimensions = {}
  if (availableWidth * (1/aspectRatio) < availableHeight) {
    dimensions.width = availableWidth;
    dimensions.height = dimensions.width * (1/aspectRatio);
  } else {
    dimensions.height = availableHeight;
    dimensions.width = dimensions.height * aspectRatio;
  }
  return dimensions
}