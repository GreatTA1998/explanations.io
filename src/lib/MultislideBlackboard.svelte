<!-- TO-DO: 
  1. Use 3 "slides", each are blackboards 
  2. They share the same `currentTime`
  3. Figure out how the data should be uploaded to Firestore
-->
<button on:click={startMultislideRecord}>
  Start all timers
</button>

<div style="position: relative; width: 800px; height: 210px; border: 2px solid red;">
  <Blackboard
    strokesArray={strokesArray1}
    canvasWidth={300}
    canvasHeight={150}
    let:startStopwatch={startStopwatch1}
  >
    <button bind:this={button1} on:click={startStopwatch1}>
      Stopwatch 1
    </button>
  </Blackboard>
</div>

<div style="position: relative; width: 800px; height: 210px; border: 2px solid orange;">
  <Blackboard
    strokesArray={strokesArray2}
    canvasWidth={300}
    canvasHeight={150}
    let:startStopwatch={startStopwatch2}
  >
    <button bind:this={button2} on:click={startStopwatch2}>
      Stopwatch 2
    </button>
  </Blackboard>
</div>

<div style="position: relative; width: 800px; height: 210px; border: 2px solid yellow;">
  <Blackboard
    strokesArray={strokesArray3}
    canvasWidth={300}
    canvasHeight={150}
    let:startStopwatch={startStopwatch3}
  >
    <button bind:this={button3} on:click={startStopwatch3}>
      Stopwatch 3
    </button>
  </Blackboard>
</div>

<script>
  import Blackboard from '$lib/Blackboard.svelte'

  let strokesArray1 = [] 
  let strokesArray2 = []
  let strokesArray3 = [] 

  let button1
  let button2
  let button3

  function startMultislideRecord () {
    button1.click()
    button2.click()
    button3.click()
  }
</script>
