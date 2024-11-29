<!-- TO-DO: emit an intersection API event -->
<div use:lazyCallable={() => dispatch('intersect')} 
  style="
    transform: scale({scaleFactor}); 
    transform-origin: top left;
    position: relative; 
    width: {canvasWidth}px; 
    height: {canvasHeight}px;
  "
  >

  <!-- Purposely just zoom in on the top-left corner for readability (showing the whole picture at the thumbnail size is completely illegible) -->
  <canvas bind:this={canvas}
    on:touchstart|nonpassive={touchStart}
    on:touchmove|nonpassive={touchMove}
    on:touchend|nonpassive={touchEnd}
    style={`
      position: absolute; 
      z-index: 1; 
      margin-top: 0; 
      margin-left: 0; 
      width: ${canvasWidth}px; 
      height: ${canvasHeight}px;`
    }
  >
  </canvas>

  <!-- hsl(0, 0%, 20%) is the opaque equivalent of hsl(0,0%,0%, 0.80), but the servers looking similar to blackboards look bad
    In general, opaque textures don't look too good in my opinion.
  -->
  <canvas bind:this={bgCanvas} 
    style={`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      display: block;
      background-color: hsl(0,0%,0%, 0.80); width: ${canvasWidth}px; height: ${canvasHeight}px;
    `}
  >

  </canvas>
</div>

<script>
  import { lazyCallable } from '/src/helpers/actions.js';
  import { connectTwoPoints, drawStroke, renderBackground } from '../helpers/canvas.js'
  import { getRandomID } from '../helpers/utility.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { currentTool, onlyAllowApplePencil, whatIsBeingDragged } from '../store.js'

  export let thumbnailWidth

  let canvasWidth = thumbnailWidth * 3.44 // to match <HDBlackboard>'s 0.29 scale down
  let canvasHeight = canvasWidth * 3/4

  let scaleFactor = thumbnailWidth / canvasWidth

  export let strokesArray
  export let backgroundImageDownloadURL = ''
  
	const dispatch = createEventDispatcher()

  let ctx
  let bgCtx
  let canvas
  let bgCanvas
  let localStrokesArray = []
  let isInMiddleOfStroke = false
  let prevPoint = {
    x: -1, 
    y: -1
  }
  let currentStroke = { 
    points: [] 
  }
  let undoStrokeIdx = null // Optional(int)

  let debouncerTimeout

  // STOPWATCH SECTION
  let currentTime = 0 // assumes it's always rounded to nearest 0.1


  // REACTIVE STATEMENTS HERE
  
  // note, it DOES make a difference to separate this into a separate function,
  // so when variables like `currentTime` gets updated during a recording session,
  // this reactive statement does not execute 10 times per second (which is insane)

  // A ‘direct dependency’ is a variable that is referenced inside the reactive declaration itself. References to variables inside functions that a reactive declaration calls are not considered dependencies.
  // https://sveltesociety.dev/recipes/svelte-language-fundamentals/reactivity
  $: if (strokesArray) {
    updateUI()
  }
  
  // resize on initialization
  $: if (ctx) {
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    bgCanvas.width = canvasWidth
    bgCanvas.height = canvasHeight
    if (strokesArray) {
      for (const stroke of strokesArray) {
        drawStroke(stroke, null, ctx, canvas, canvasWidth)
      }
    }
  }

  // detect backgroundImageDownloadURL
  $: if (bgCtx) {
      bgCtx.clearRect(0, 0, bgCanvas.scrollWidth, bgCanvas.scrollHeight)
      renderBackground(backgroundImageDownloadURL, canvas, bgCtx)
  }

  $: normalizedLineWidth = $currentTool.lineWidth * (thumbnailWidth / canvasWidth)


  onMount(() => {
    ctx = canvas.getContext('2d')
    bgCtx = bgCanvas.getContext('2d')
  })

  /**
   * Reactive statement that triggers each time `strokesArray` changes
   * Ensures `strokesArray => UI`, that is whenever the client mutates the `strokesArray` prop, we update <canvas/> accordingly`. 
   * 
   * Note we ignore the case where (n == this.localStrokesArray.length)
   * because it means that user drew on canvas --> emits event --> client changes --> triggers our own watch hook
   * 
   * CRITICAL ASSUMPTION: strokesArray can be pushed singularly and deleted in batch, but can never be modified in place. 
   */
  function updateUI () {
    if (!strokesArray || !ctx) {
      return
    }

    let m = localStrokesArray.length
    let n = strokesArray.length

    // NOTE: this does not trigger!
    if (m === n) { 
      // do nothing: this blackboard updated its parent, and the change propagated back to itself
      if (strokesArray[n-1] && !strokesArray[n-1].isErasing) {
        undoStrokeIdx = n - 1 // when a new visible stroke is drawn, set it to that index
      } 
    } 
    else if (m < n) {
      if (m === 0) { // blackboard just finished loading i.e. there can be 500 strokes
        for (const stroke of strokesArray) {
          drawStroke(stroke, null, ctx, canvas, canvasWidth)
        }
        localStrokesArray = [...strokesArray]

        undoStrokeIdx = n - 1 // correct at initialization (TO-DO: video proof of correctness)
      }
      else { // normal update
        for (let i = m; i < n; i++) {
          const newStroke = strokesArray[i]
          drawStroke(
            newStroke, 
            newStroke.startTime !== newStroke.endTime ? getPointDuration(newStroke) : null, // instantly or smoothly,
            ctx, 
            canvas,
            canvasWidth
          )
          localStrokesArray.push(newStroke)

          if (!newStroke.isErasing) { // means it's a eraser stroke
            undoStrokeIdx = i // when a new visible stroke is drawn, set it to that index
          } 
        }
      }
    }
    else { 
      debouncedWipeThenDraw()
    }
  }

  // [WHY USE DEBOUNCE]: if number of strokes > 500, then deletion happens in multiple batches that can 
  // resolve very close to each other, and the resizeBlackboard()
  // which draws hundreds of strokes instantly overfloods the event loop 
  // and causes strange remnant strokes to linger on the board
  function debouncedWipeThenDraw () {
    console.log("debounced board reset");
    if (debouncerTimeout) {
      clearTimeout(debouncerTimeout)
    }
    debouncerTimeout = setTimeout(
      wipeThenDraw, 
      1000
    )
  }

  function wipeThenDraw () {
    // reset component
    wipeUI() 
    localStrokesArray = [];
    prevPoint = { 
      x: -1, 
      y: -1 
    };

    // draw to current progress
    for (const stroke of strokesArray) {
      drawStroke(stroke, null, ctx, canvas, canvasWidth)
    }
  }

  function touchStart (e) {
    if (e.touches.length > 1) {
      // console.log("error: only 1 finger allowed");
      return;
    }
    const isApplePencil = e.touches[0].touchType === "stylus"
    if ($onlyAllowApplePencil && !isApplePencil)   {
      console.log('error: cannot use finger during Apple Pencil mode');
      return;
    }
    handleContactWithBlackboard(e, { isInitialContact: true })
  }

  function touchMove (e) {
    if (!isInMiddleOfStroke) {
      return; // concurrent touches
    }
    if (e.touches.length > 1) {
      console.log("touchmove ignored: only 1 finger allowed");
      return;
    }
    const isApplePencil = e.touches[0].touchType === "stylus"
    if ($onlyAllowApplePencil && !isApplePencil)   {
      console.log('error: cannot use finger during Apple Pencil mode');
      return;
    }
    handleContactWithBlackboard(e, { isInitialContact: false });
  }

  function touchEnd (e) {
    // case 1: active finished first, but other finger remained
    if (!isInMiddleOfStroke) {
      return
    }
    // case 2: other finger finished first, active finger is still on screen
    if (e.touches.length > 0) {
      return
    }
    // normal check for Apple Pencil (note changedTouches)
    const isApplePencil = e.changedTouches[0].touchType === "stylus"
    if ($onlyAllowApplePencil && !isApplePencil)   {
      console.log('error: cannot use finger during Apple Pencil mode')
      return;
    }
    handleEndOfStroke(currentStroke)
    // this.currentStroke = { points: [] }; // this line might not be necessary, it's an attempt to fix stray strokes
    isInMiddleOfStroke = false
  }

  function startNewStroke (e) {
    isInMiddleOfStroke = true;
    prevPoint = { // TODO: use an optional
      x: -1, 
      y: -1 
    }
    currentStroke = {
      strokeNumber: strokesArray.length + 1,
      startTime: currentTime,
      color: $currentTool.color,
      lineWidth: $currentTool.lineWidth,
      // // why do we store `maxAvailableWidth` as a property here?
      // I believe this is un-used (DoodleVideo normalizes width because we do everything relative to an `assumedCanvasWidth`
      // and scale it up to whatever the actual canvasSize is, but I'll keep it here just in case I'm wrong since it does no harm)
      // maxAvailableWidth: $maxAvailableWidth, 
      isErasing: $currentTool.type === 'eraser',
      points: [],
      sessionID: '123' // TODO: initialize in store
    }
  }

  /**
   * TO-DO: Make `tool` an explicit parameter 
   */
  function handleContactWithBlackboard (e, { isInitialContact }) {
    e.preventDefault();
    if (isInitialContact) startNewStroke(e);
    const contactPoint = getContactPosition(e); // should make "isHoldingLeftClick" an explicit parameter
    lengthenTheCurrentStroke(e, contactPoint);
  }

  function lengthenTheCurrentStroke (e, contactPoint) {
    // update state
    currentStroke.points.push({ 
      unitX: parseFloat(contactPoint.x / canvas.width).toFixed(4),
      unitY: parseFloat(contactPoint.y / canvas.height).toFixed(4)
    })
    // update UI
    if (prevPoint.x !== -1 && prevPoint.y !== -1) {
      connectTwoPoints(
        [normalizePoint(prevPoint), normalizePoint(contactPoint)], // `points`: note that the points have to be normalized for now before refactors
        1, // `i`: note that setting i = 1 is a quick-fix (will refactor $_connectTwoPoints() in the future)
        $currentTool.type === 'eraser',
        ctx,
        $currentTool.color,
        normalizedLineWidth,
        canvas
      )
    }
    prevPoint = contactPoint;
  }

  function handleEndOfStroke (newStroke) {
    newStroke.endTime = currentTime
    newStroke.id = getRandomID(); 
    localStrokesArray.push(newStroke)
    dispatch('stroke-drawn', { newStroke })
  }

  function getContactPosition (e) {
    const { left, top } = canvas.getBoundingClientRect();
    return {
      x: e.touches[0].pageX - left - window.scrollX,
      y: e.touches[0].pageY - top - window.scrollY
    }
  }

  function normalizePoint ({ x, y }) {
    return {
      unitX: x / canvas.width,
      unitY: y / canvas.height
    }
  }

  function getPointDuration (stroke) {
    const strokePeriod = (stroke.endTime - stroke.startTime);
    return strokePeriod / stroke.points.length;
  }

  function wipeUI () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  }
</script>
