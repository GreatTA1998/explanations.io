<!-- This toolbar double duties as an indicator that the blackboard has finished fetching 
    (to distinguish between unfetched board and empty board) 
-->
{#if strokesArray}
  <BlackboardToolbar>
    <span on:click={undoPencilStroke} class="material-icons" style="margin-left: 6px; font-size: 2rem; color: white;">
      undo
    </span>

    <!-- uses `BlackboardToolbar`'s unnamed slot (the 2 other slots are named) -->
    <slot>

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
          {#if backgroundImageDownloadURL}
            <Item on:click={resetBackgroundImage}>
              Remove background
            </Item>
          {:else}
            <Item on:click={clickHiddenInput}>
              Set background
            </Item>
          {/if}

          <!-- TO-DO: use a named slot -->
          <Item on:SMUI:action={showHintForDragAndDrop} 
            draggable="true" 
            on:dragstart={(e) => dragstart_handler(e, boardID, originalIndex)}
          >
            Move
          </Item>

          <Item on:SMUI:action={wipeBoard}>
            Wipe board
          </Item>    

          <Item on:SMUI:action={deleteBoard}>
            Delete board 
          </Item>
        </List> 
      </Menu>
    </div>
  </BlackboardToolbar>
{/if}

<canvas bind:this={canvas}
  on:touchstart={touchStart}
  on:touchmove={touchMove}
  on:touchend={touchEnd}
  style={`position: absolute; z-index: 1; margin-top: 0; margin-left: 0; width: ${canvasWidth}px; height: ${canvasHeight}px`}
>
</canvas>

<!-- rgb(46, 49, 49) -->
<canvas bind:this={bgCanvas} 
  style={`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: block;
    background-color: hsl(0,0%,0%, 0.80); width: ${canvasWidth}px; height: ${canvasHeight}px
  `}
>

</canvas>

<script>
  import List, { Item, Text } from '@smui/list'
  import Menu from '@smui/menu';
  import BlackboardToolbar from '$lib/BlackboardToolbar.svelte'
  import { connectTwoPoints, drawStroke, renderBackground } from '../helpers/canvas.js'
  import { getRandomID } from '../helpers/utility.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { currentTool, maxAvailableWidth, maxAvailableHeight, assumedCanvasWidth, onlyAllowApplePencil } from '../store.js'

  export let canvasWidth
  export let canvasHeight

  export let strokesArray
  export let currentTime = 0 // assumes it's always rounded to nearest 0.1
  export let backgroundImageDownloadURL = ''
  export let recordState = ''

  // for drag-and-drop purposes
  export let boardID = ''
  export let originalIndex = null
  
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

  onMount(() => {
    ctx = canvas.getContext('2d')
    bgCtx = bgCanvas.getContext('2d')

    // PREVENTS USER FROM ACCIDENTALLY LEAVING THE PAGE
    // correctness argument: https://explain.mit.edu/mDbUrvjy4pe8Q5s5wyoD/3IAf1lUTz1gdwxi3blth
    // catches forward and backward
    window.addEventListener('popstate', onBackOrForward)

    // catches reload AND closing browser (was surprised it works for Chrome at least)
    window.onbeforeunload = function (event) {
      if (recordState === 'mid_record') {
        event.returnValue = ''
      } 
      // no need to unlisten - because it means the page was destroyed
    }
  })

  onDestroy(() => {
    window.removeEventListener('popstate', onBackOrForward)
  })

  function onBackOrForward () {
    if (recordState === 'mid_record') {
      if (confirm('This will interrupt your current recording, are you sure?')) {

      }
      else {
        // luckily, the browser won't go back-and-forth it actually knows to wait for the state to resolve 
        // and jus tstay in place
        history.pushState(null, document.title, location.href);
      }
    }
  }

  function clickHiddenInput () {
    FileUploadButton.click()
  }

  function uploadBackground (e) {
    dispatch('background-upload', { imageFile: e.target.files[0] })
  }

  function resetBackgroundImage () {
    dispatch('background-reset')
  }

  function wipeBoard () {
    dispatch('board-wipe')
  }

  function deleteBoard () {
    dispatch('board-delete')
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

  $: normalizedLineWidth = $currentTool.lineWidth * (canvasWidth / $assumedCanvasWidth)

  /**
   * Reactive statement that triggers each time `strokesArray` changes
   * Ensures `strokesArray => UI`, that is whenever the client mutates the `strokesArray` prop, we update <canvas/> accordingly`. 
   * 
   * Note we ignore the case where (n == this.localStrokesArray.length)
   * because it means that user drew on canvas --> emits event --> client changes --> triggers our own watch hook
   * 
   * CRITICAL ASSUMPTION: strokesArray can be pushed singularly and deleted in batch, but can never be modified in place. 
   */
  $: if (ctx && strokesArray) {
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
      debouncedWipeThenDraw()
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

  function dragstart_handler (e, boardID, originalIndex) {
    e.dataTransfer.setData("text/plain", originalIndex + ':' + boardID)
    e.dataTransfer.dropEffect = 'move'
  }

  function showHintForDragAndDrop () {

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
