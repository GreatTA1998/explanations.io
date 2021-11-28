export function drawStroke ({ points, color, lineWidth, isErasing }, pointPeriod = null, ctx = this.ctx, canvas) {
  return new Promise(async resolve => {
    for (let i = 1; i < points.length; i++) {
      connectTwoPoints(points, i, isErasing, ctx, color, lineWidth, canvas);
      if (pointPeriod !== null) { // delay for a duration of pointPeriod
        await new Promise(resolve => setTimeout(resolve, pointPeriod));
      }
    }
    resolve();
  });
}

/**
 * Joins together 2 points using a straight line. 
 * 
 * The operation is *used* atomically, and so calling `$_setStrokesProperties()`
 * makes the method safe for single-thread concurrency. 
 * For example: when rendering two strokes "in parallel", the colors won't interfere.
 * 
 * @param {*} points NORMALIZED coordinates of the points to be joined i.e. { unitX: Number, unitY: Number } 
 * @param {*} i 
 * @param {*} isErasing 
 * @param {*} ctx 
 * @param {*} color 
 * @param {*} lineWidth 
 */
export function connectTwoPoints (points, i, isErasing, ctx = this.ctx, color = "white", lineWidth = 2, canvas) {
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

  
  /**
   * Draw a quadratic curve according to: https://github.com/shuding/apple-pencil-safari-api-test/blob/gh-pages/index.js
   * 
   * But if I set the control points like this, it's just equivalent to `lineTo()`
   */
  // const controlX = (prevX + curX) / 2; 
  // const controlY = (prevY + curY) / 2;  
  // ctx.quadraticCurveTo(controlX, controlY, curX, curY);
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