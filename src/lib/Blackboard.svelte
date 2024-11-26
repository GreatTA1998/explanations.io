<!-- TO-DO: emit an intersection API event -->
<div use:lazyCallable={() => dispatch('intersect')} style="position: relative; width: {canvasWidth}px; height: {canvasHeight}px">
  <!-- This toolbar double duties as an indicator that the blackboard has finished fetching 
      (to distinguish between unfetched board and empty board) 
  -->
  {#if strokesArray && !hideToolbar}
    <BlackboardToolbar>
      <span on:click={undoPencilStroke} class="material-icons" style="margin-left: 6px; font-size: 2rem; color: white;">
        undo
      </span>

      <!-- uses `BlackboardToolbar`'s unnamed slot (the 2 other slots are named) -->
      <slot {currentTime} {startStopwatch} {stopStopwatch} {setCurrentTime}>

      </slot>

      <div slot="dropdown-menu">
        {#if recordState === 'pre_record' || currentTime === 0 }
          <span on:click={() => DropdownMenu.setOpen(true)} class="material-icons" style="margin-top: 3px; margin-right: 10px; color: white; font-size: 2rem;">
            more_vert
          </span>
        {/if}
      
        <input
          bind:this={FileUploadButton}
          on:change={(e) => uploadBackground(e)}
          style="display: none" 
          type="file" 
          accept="image/gif, image/jpeg, image/png" 
        >
        
        <Menu bind:this={DropdownMenu} style="width: 300px">
          <List>
            {#if !isOfflineDemo}
              {#if backgroundImageDownloadURL}
                <Item on:click={() => dispatch('background-reset')}>
                  Remove background
                </Item>
              {:else}
                <Item on:click={clickHiddenInput}>
                  Set background
                </Item>
              {/if}
            {/if}

            <Item on:SMUI:action={() => dispatch('board-wipe')}>
              Wipe board
            </Item>    

            {#if !isOfflineDemo}
              <Item on:SMUI:action={() =>  dispatch('board-delete')}>
                Delete board 
              </Item>
            {/if}
          </List> 
        </Menu>
      </div>
    </BlackboardToolbar>
  {/if}
  
  <!-- explicitly set `passive: false`, Rich Harris describes the problem 
   very well: https://github.com/sveltejs/svelte/issues/2068 -->

  <canvas bind:this={canvas}
    on:touchstart|nonpassive={touchStart}
    on:touchmove|nonpassive={touchMove}
    on:touchend|nonpassive={touchEnd}
    class="front-canvas"
  >
  </canvas>

  <canvas bind:this={bgCanvas} 
    class="background-canvas"
  >
  </canvas>
</div>

<script>
  import { lazyCallable } from '/src/helpers/actions.js';
  import List, { Item, Text } from '@smui/list'
  import Menu from '@smui/menu';
  import BlackboardToolbar from '$lib/BlackboardToolbar.svelte'
  import { connectTwoPoints, drawStroke, renderBackground } from '../helpers/canvas.js'
  import { getRandomID } from '../helpers/utility.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { currentTool, maxAvailableWidth, maxAvailableHeight, assumedCanvasWidth, onlyAllowApplePencil, whatIsBeingDragged } from '../store.js'

  export let canvasWidth
  export let canvasHeight

  export let strokesArray
  export let backgroundImageDownloadURL = ''
  export let recordState = ''

  // QUICKFIX to enable multislide blackboards to work
  export let currentTimeOverride

  // QUICKFIX to let servers search page work
  export let hideToolbar = false

  // QUICKFIX
  export let isOfflineDemo = false

  $: if (currentTimeOverride) {
    currentTime = currentTimeOverride
  }
  
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

  let DropdownMenu
  let FileUploadButton  

  // STOPWATCH SECTION
  let currentTime = 0 // assumes it's always rounded to nearest 0.1
  const tickSize = 100 // milliseconds
  let startTimestamp = null // number of milliseconds since 1970 00:00:00 UTC
  let etaOfNextTick = null // would use an Optional in 6.031, `0` doesn't make sense as it makes the AF inconsistent
  let nextTimeoutID = ''

  function setCurrentTime (newVal) {
    currentTime = newVal 
  }

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
  function startStopwatch () {
    startTimestamp = Date.now()
    etaOfNextTick = startTimestamp + tickSize
    nextTimeoutID = setTimeout(
      step, 
      tickSize
    )
  }

  function stopStopwatch () {
    startTimestamp = null 
    etaOfNextTick = null
    currentTime = 0
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
    currentTime = roundedToFixed(
      (etaOfNextTick - startTimestamp) / millisecondsInSecond,
      nearestDecimalPoint
    )

    nextTimeoutID = setTimeout(
      step, 
      Math.max(0, tickSize - delay)
    )
  }
  // END OF STOPWATCH RELATED CODE

  // resize whenever `ctx` changes (note we hide other variables like `strokesArray` inside the function, so them changing won't trigger this block)
  $: if (canvas && bgCanvas && canvasWidth && canvasHeight) {
    renderBlackboardFromScratch()
  }

  // syncCanvasToState() will only execute after `renderBlackboardFromScratch()` because `ctx` is initialized in `renderBlackboardFromScratch()`
  $: if (strokesArray && ctx) {
    updateCanvasUI()
  }

  function renderBlackboardFromScratch () {
    setCanvasDimensions({ w: canvasWidth, h: canvasHeight }) // this will destroy existing drawings

    ctx = canvas.getContext('2d') // according to browser specs, if the 2d ctx was already created, .getContext() will return the existing one
    bgCtx = bgCanvas.getContext('2d')

    localStrokesArray = []
    if (strokesArray) {
      drawStrokesGeneral({ array: strokesArray, startIdx: 0, endIdx: strokesArray.length - 1 })
    }
  }

  $: if (bgCtx) {
    updateBackground(backgroundImageDownloadURL)
  }

  $: normalizedLineWidth = $currentTool.lineWidth * (canvasWidth / $assumedCanvasWidth)

  // NOTE: setting canvas.width will change  CSS width as well. But the opposite isn't true.
  // read more in the specs
  function setCanvasDimensions ({ w, h }) {
    canvas.width = w
    canvas.height = h
    bgCanvas.width = w
    bgCanvas.height = h
  }

  function clickHiddenInput () {
    FileUploadButton.click()
  }

  function uploadBackground (e) {
    dispatch('background-upload', { imageFile: e.target.files[0] })
  }

  // detect backgroundImageDownloadURL
  function updateBackground () {
    bgCtx.clearRect(0, 0, bgCanvas.scrollWidth, bgCanvas.scrollHeight)
    renderBackground(backgroundImageDownloadURL, canvas, bgCtx)
  }

  function updateCanvasUI () {
    let m = localStrokesArray.length
    let n = strokesArray.length

    if (m === n) { // the stroke's been drawn already i.e this blackboard updated its parent, and the change propagated back to itself
      if (!strokesArray[n-1]?.isErasing) undoStrokeIdx = n-1
    } 

    else if (m < n) { // note multiple strokes might have been added, so the difference could be > 1
      drawStrokesGeneral({ 
        array: strokesArray,
        startIdx: m, 
        endIdx: n-1 
      })
    }

    else { 
      renderBlackboardFromScratch()
    }
  }

  function drawStrokesGeneral ({ array, startIdx, endIdx }) {
    for (let i = startIdx; i <= endIdx; i++) {
      drawStroke(array[i], null, ctx, canvas, canvasWidth)
      localStrokesArray.push(array[i])
      if (!array[i].isErasing) undoStrokeIdx = i
    }
  }

  function touchStart (e) {
    if (e.touches.length > 1) { // only 1 finger allowed
      return
    }
    const isApplePencil = e.touches[0].touchType === "stylus"
    if ($onlyAllowApplePencil && !isApplePencil)   {
      console.log('error: cannot use finger during Apple Pencil mode')
      return;
    }
    handleContactWithBlackboard(e, { isInitialContact: true })
  }

  function touchMove (e) {
    if (!isInMiddleOfStroke) {
      return; // concurrent touches
    }
    if (e.touches.length > 1) {
      console.log("touchmove ignored: only 1 finger allowed")
      return
    }
    const isApplePencil = e.touches[0].touchType === "stylus"
    if ($onlyAllowApplePencil && !isApplePencil)   {
      console.log('error: cannot use finger during Apple Pencil mode')
      return
    }
    handleContactWithBlackboard(e, { isInitialContact: false })
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

  function dragstart_handler (e, boardID, originalIndex) {
    whatIsBeingDragged.set('board')
    e.dataTransfer.setData("text/plain", `boardID:${boardID}`)
    e.dataTransfer.dropEffect = 'move'
  }

  // assumes undoStroke
  function undoPencilStroke () {
    if (undoStrokeIdx === null) {
      return
    }
    const stroke = strokesArray[undoStrokeIdx]
    // undo current stroke
    const antiStroke = {
      points: [...stroke.points], // points are normalized
      startTime: currentTime,
      isErasing: true,
      strokeNumber: strokesArray.length + 1,
      lineWidth: stroke.lineWidth + 2, // TWO extra pixel to guarantee it covers the visible stroke
    }
    drawStroke(antiStroke, null, ctx, canvas, canvasWidth)
    handleEndOfStroke(antiStroke);

    // update pointer to last visible stroke (can be a while if many strokes before were also undone)
    let eraserDebt = 0
    for (let i = undoStrokeIdx - 1; i >= 0; i--) {
      if (!strokesArray[i].isErasing && eraserDebt === 0) {
        undoStrokeIdx = i 
        break
      } 
      else if (strokesArray[i].isErasing) {
        eraserDebt += 1 
      } 
      else if (!strokesArray[i].isErasing) {
        eraserDebt -= 1
      }
    }
  }
</script>

<style>
  .front-canvas {
    z-index: 1;
    position: absolute;
  }

  .background-canvas {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-color: hsl(0,0%,0%, 0.80); 
  }
</style>
