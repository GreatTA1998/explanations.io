<slot {currentTime} {startStopwatch} {stopStopwatch}>

</slot>

<script>

const tickSize = 100 // milliseconds
let startTimestamp = null // number of milliseconds since 1970 00:00:00 UTC
let etaOfNextTick = null // would use an Optional in 6.031, `0` doesn't make sense as it makes the AF inconsistent
let currentTime = 0
let nextTimeoutID = ''

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
</script>