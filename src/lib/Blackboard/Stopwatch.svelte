<!--
  Timer that doesn't slowly drift late and get out of sync with visuals
  @see based on https://stackoverflow.com/a/29972322/7812829
  how the self-adjusting timer works:
    - setInterval is at best, on time, but usually, late
    - yes, the self-adjusting tick function will always increase time by 1 (even if 1.6 seconds has passed because it's again, late)
    - ...but the 1 vs 1.6 error will be compensated next tick, because tick() will call itself after 0.4 seconds (it but it's constantly catching up) to achieve 2 vs 2
    - if the tick function is super late i.e. 3 seconds passed by, it'll just call itself with setTimeout(0) 2 more times immediately
    - therefore the maximum error is the infimum of the tick size. Get the tick size to be 0.1 second so the maximum error is <0.1
-->
<script>
  import { createEventDispatcher } from 'svelte'
  import { roundedToFixed } from "/src/helpers/utility.js"

  let startTimestamp = null
  let etaOfNextTick = null
  let nextTimeoutID = null
  const tickSize = 100 // milliseconds
  const dispatch = createEventDispatcher()

  export function start () {
    startTimestamp = Date.now()
    etaOfNextTick = startTimestamp + tickSize
    nextTimeoutID = setTimeout(step, tickSize)
  }

  export function stop () {
    startTimestamp = null 
    etaOfNextTick = null
    clearTimeout(nextTimeoutID)
    nextTimeoutID = null
    
    dispatch('tick', { currentTime: 0 })
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
    const newTime = Number(roundedToFixed(
      (etaOfNextTick - startTimestamp) / millisecondsInSecond,
      nearestDecimalPoint
    ))

    dispatch('tick', { currentTime: newTime })

    nextTimeoutID = setTimeout(
      step, 
      Math.max(0, tickSize - delay)
    )
  }
</script>