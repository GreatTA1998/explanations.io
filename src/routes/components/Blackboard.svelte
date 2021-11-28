<!-- FUTURE: use "drawable" Svelte action to handle the touch event listeners -->
<canvas 
  use:resizable={{strokesArray}}
  on:touchstart={touchStart}
  on:touchmove={touchMove}
  on:touchend={touchEnd}
  bind:this={canvas}
>
</canvas>

<script>
  import { resizable } from '../../helpers/canvasHelpers.js'
  import { connectTwoPoints } from '../../helpers/canvasDraw.js'
  import { onMount } from 'svelte'
  import { getRandomID } from '../../helpers/utility.js'

  export let strokesArray

  // will need to emit an event

  let localStrokesArray = []
  let canvas
  let ctx
  let isInMiddleOfStroke = false
  let onlyAllowApplePencil = false
  let prevPoint = {
    x: -1, 
    y: -1
  }
  let currentStroke = { 
    points: [] 
  }
  let currentTime = 0
  let currentTool = {
    type: 'PEN',
    color: 'white',
    lineWidth: 2
  }
  let isNormalEraser = false

  // WATCH HOOK IS NOT YET NEEDED
  // $: {
  //   if (localStrokesArray.length > strokesArray) {

  //   }
  // }

  onMount(() => {
    ctx = canvas.getContext('2d')
  })

  function touchStart (e) {
    if (e.touches.length > 1) {
      // console.log("error: only 1 finger allowed");
      return;
    }
    const isApplePencil = e.touches[0].touchType === "stylus"
    if (onlyAllowApplePencil && !isApplePencil)   {
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
    if (onlyAllowApplePencil && !isApplePencil)   {
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
      if (onlyAllowApplePencil && !isApplePencil)   {
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
        color: currentTool.color,
        lineWidth: currentTool.lineWidth,
        isErasing: isNormalEraser,
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
          isNormalEraser, // `isErasing`,
          ctx,
          currentTool.color,
          currentTool.lineWidth,
          canvas
        )
      }
      prevPoint = contactPoint;
    }
    
    function handleEndOfStroke (newStroke) {
      newStroke.endTime = Number(currentTime.toFixed(1));
      newStroke.id = getRandomID(); 
      localStrokesArray.push(newStroke);
      // this.$emit("stroke-drawn", newStroke);
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
</script>
