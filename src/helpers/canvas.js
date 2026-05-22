import { getStroke } from 'perfect-freehand'
import { assumedCanvasWidth } from '../store.js'
import { get } from 'svelte/store'

export const STROKE_OPTIONS = {
  thinning: 0.5,
  smoothing: 0.5,
  streamline: 0.5,
  simulatePressure: true,
}

/** Input EMA before perfect-freehand; 0 = none, 1 = max smoothing */
export const INPUT_STREAMLINE = 0.5

export function applyInputStreamline (prev, raw, streamline = INPUT_STREAMLINE) {
  if (!prev) return { x: raw.x, y: raw.y }
  const t = 1 - streamline
  return {
    x: prev.x + (raw.x - prev.x) * t,
    y: prev.y + (raw.y - prev.y) * t,
  }
}

function normalizedPointsToStrokeInput (points, canvas) {
  return points.map(p => [p.unitX * canvas.width, p.unitY * canvas.height])
}

function getStrokeOutline (points, lineWidth, canvas, options = {}) {
  const input = normalizedPointsToStrokeInput(points, canvas)
  if (input.length === 0) return null
  if (input.length === 1) {
    const [x, y] = input[0]
    return getStroke([[x, y], [x + 0.01, y + 0.01]], {
      size: lineWidth,
      ...STROKE_OPTIONS,
      ...options,
    })
  }
  return getStroke(input, { size: lineWidth, ...STROKE_OPTIONS, ...options })
}

function drawStrokeOutline (outline, ctx, color, isErasing) {
  if (!outline || outline.length < 3) return

  ctx.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over'
  ctx.fillStyle = isErasing ? 'black' : color

  ctx.beginPath()
  ctx.moveTo(outline[0][0], outline[0][1])
  for (let i = 1; i < outline.length; i++) {
    ctx.lineTo(outline[i][0], outline[i][1])
  }
  ctx.closePath()
  ctx.fill()

  ctx.globalCompositeOperation = 'source-over'
}

export function renderSmoothStroke (
  { points, color, lineWidth, isErasing },
  ctx,
  canvas,
  canvasWidth,
  { lineWidthAlreadyNormalized = false, strokeOptions = {} } = {}
) {
  const normalizedLineWidth = lineWidthAlreadyNormalized
    ? lineWidth
    : lineWidth * (canvasWidth / get(assumedCanvasWidth))
  const outline = getStrokeOutline(points, normalizedLineWidth, canvas, strokeOptions)
  drawStrokeOutline(outline, ctx, color, isErasing)
}

export function redrawStrokes (strokes, ctx, canvas, canvasWidth, inProgressStroke = null) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (const stroke of strokes) {
    renderSmoothStroke(stroke, ctx, canvas, canvasWidth)
  }
  if (inProgressStroke && inProgressStroke.points.length > 0) {
    renderSmoothStroke(inProgressStroke, ctx, canvas, canvasWidth)
  }
}

// the last destructured property `canvasWidth` is renamed, AND also has a default value
export function drawStroke ({ points, color, lineWidth, isErasing }, pointPeriod = null, ctx, canvas, canvasWidth) {
  return new Promise(async resolve => {
    if (pointPeriod === null) {
      renderSmoothStroke({ points, color, lineWidth, isErasing }, ctx, canvas, canvasWidth)
      resolve()
      return
    }

    const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for (let i = 1; i < points.length; i++) {
      ctx.putImageData(snapshot, 0, 0)
      renderSmoothStroke(
        { points: points.slice(0, i + 1), color, lineWidth, isErasing },
        ctx,
        canvas,
        canvasWidth
      )
      await new Promise(resolve => setTimeout(resolve, pointPeriod))
    }
    resolve()
  })
}

/**
 * Joins together 2 points using a straight line.
 *
 * Kept for incremental playback (DoodleAnimation, video sync) where only one
 * new segment is added per frame. Live drawing uses renderSmoothStroke instead.
 *
 * @param {*} points NORMALIZED coordinates of the points to be joined i.e. { unitX: Number, unitY: Number }
 * @param {*} i
 * @param {*} isErasing
 * @param {*} ctx
 * @param {*} color
 * @param {*} lineWidth
 */
export function connectTwoPoints (points, i, isErasing, ctx, color = "white", lineWidth = 3, canvas) {
  setStrokeProperties(color, lineWidth, isErasing, ctx);

  // TODO: this line silently fails for edge case if a stroke only has 1 point
  const prevPoint = points[i - 1]; // this fails silently for the first point of the stroke i = 0
  const prevX = prevPoint.unitX * canvas.width;
  const prevY = prevPoint.unitY * canvas.height;

  const curPoint = points[i];
  const curX = curPoint.unitX * canvas.width;
  const curY = curPoint.unitY * canvas.height;

  ctx.beginPath();
  ctx.moveTo(prevX, prevY);

  ctx.lineTo(curX, curY);
  ctx.stroke();
}

export function setStrokeProperties (color, lineWidth, isEraserStroke, ctx) {
  ctx.globalCompositeOperation = isEraserStroke ? 'destination-out' : 'source-over';
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  /**
   * when two independent lines meet (think two straight lines meeting each other), instead of zigzagging abruptly, they'll be "rounded" together"
   * NOTE: "This property has no effect wherever two connected segments have the same direction"
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
   */
  ctx.lineJoin = "round";

  // end of line is not a square, but a rounded edge
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
  ctx.lineCap = "round";
}

export function renderBackground (src, canvas, bgCtx) {
  return new Promise(resolve => {
    if (!src) resolve();

    const image = new Image();
    image.src = src;

    /*
      avoid the "tainted canvas may not be exported" error
      https://stackoverflow.com/questions/22710627/tainted-canvases-may-not-be-exported
    */
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const boardWidth = canvas.scrollWidth
      const boardHeight = canvas.scrollHeight
      const imageAspectRatio = image.width / image.height
      // correctness argument: because each device's blackboard has the same aspect ratio,
      // height-based scaling will not distort annotations
      if (image.height > image.width) { // weak criteria, but assume it's a vertical PDF page
        image.height = boardHeight
        image.width = image.height * imageAspectRatio
      } else {
        image.width = boardWidth
        image.height = image.width * 1/imageAspectRatio
      }
      bgCtx.drawImage(image, 0, 0, image.width, image.height); // (0, 0) specifies the top-left corner of the image
      resolve();
    }
  })
}
