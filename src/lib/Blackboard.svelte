<BlackboardToolbar>
  <slot>

  </slot>
</BlackboardToolbar>

<canvas 
  on:touchstart={touchStart}
  on:touchmove={touchMove}
  on:touchend={touchEnd}
  bind:this={canvas}
  style={`position: absolute; margin-top: 0; margin-left: 0; background-color: #2e3131; width: ${$canvasWidth}; height: ${$canvasHeight}`}
>
</canvas>

<script>
  import BlackboardToolbar from '$lib/BlackboardToolbar.svelte'
  import { connectTwoPoints, drawStroke } from '../helpers/canvas.js'
  import { getRandomID } from '../helpers/utility.js'
  import { onMount, createEventDispatcher } from 'svelte'
  import { currentTool, canvasWidth, canvasHeight, onlyAllowApplePencil } from '../store.js'

  export let strokesArray
  export let currentTime = 0
  
	const dispatch = createEventDispatcher()

  let ctx
  let localStrokesArray = []
  let canvas
  let isInMiddleOfStroke = false
  let prevPoint = {
    x: -1, 
    y: -1
  }
  let currentStroke = { 
    points: [] 
  }
  let debouncerTimeout

  onMount(() => {
    ctx = canvas.getContext('2d')
  })

  // auto-resize
  $: if (ctx) {
    canvas.width = $canvasWidth
    canvas.height = $canvasHeight
    for (const stroke of strokesArray) {
      drawStroke(stroke, null, ctx, canvas)
    }
  }

  /**
   * Reactive statement that triggers each time `strokesArray` changes
   * Ensures `strokesArray => UI`, that is whenever the client mutates the `strokesArray` prop, we update <canvas/> accordingly`. 
   * 
   * Note we ignore the case where (n == this.localStrokesArray.length)
   * because it means that user drew on canvas --> emits event --> client changes --> triggers our own watch hook
   * 
   * CRITICAL ASSUMPTION: strokesArray can be pushed singularly and deleted in batch, but can never be modified in place. 
   */
  $: if (ctx) {
      let m = localStrokesArray.length; 
      let n = strokesArray.length; 
      if (m === n) { 
        // do nothing: this blackboard updated its parent, and the change propagated back to itself
      } 
      else if (m < n) {
        if (m === 0) { // blackboard just finished loading i.e. there can be 500 strokes
          for (const stroke of strokesArray) {
            drawStroke(stroke, null, ctx, canvas)
          }
          localStrokesArray = [...strokesArray]
        }
        else {
          for (let i = m; i < n; i++) {
            const newStroke = strokesArray[i];
            drawStroke(
              newStroke, 
              newStroke.startTime !== newStroke.endTime ? getPointDuration(newStroke) : null, // instantly or smoothly,
              ctx, 
              canvas
            );
            localStrokesArray.push(newStroke);
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
            drawStroke(stroke, null, ctx, canvas)
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
        console.log('error: cannot use finger during Apple Pencil mode');
        return;
      }
      handleEndOfStroke(currentStroke)
      // this.currentStroke = { points: [] }; // this line might not be necessary, it's an attempt to fix stray strokes
      isInMiddleOfStroke = false; 
    }

    function startNewStroke (e) {
      isInMiddleOfStroke = true;
      prevPoint = { // TODO: use an optional
        x: -1, 
        y: -1 
      }
      currentStroke = {
        strokeNumber: strokesArray.length + 1,
        startTime: Number(currentTime.toFixed(1)),
        color: $currentTool.color,
        lineWidth: $currentTool.lineWidth,
        isErasing: $currentTool.type === 'eraser',
        points: [],
        sessionID: '123' // TODO: initialize in store
      }
    }

    /**
     * TODO: Make `tool` an explicit parameter 
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
      });
      // update UI
      if (prevPoint.x !== -1 && prevPoint.y !== -1) {
        connectTwoPoints(
          [normalizePoint(prevPoint), normalizePoint(contactPoint)], // `points`: note that the points have to be normalized for now before refactors
          1, // `i`: note that setting i = 1 is a quick-fix (will refactor $_connectTwoPoints() in the future)
          $currentTool.type === 'eraser',
          ctx,
          $currentTool.color,
          $currentTool.lineWidth,
          canvas
        )
      }
      prevPoint = contactPoint;
    }
    
    function handleEndOfStroke (newStroke) {
      newStroke.endTime = Number(currentTime.toFixed(1));
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
      ctx.clearRect(0, 0, $canvasWidth, $canvasHeight)
    }
</script>
