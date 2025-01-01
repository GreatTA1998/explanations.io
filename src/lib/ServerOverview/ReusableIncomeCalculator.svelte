<!-- Bubbles up `on:input` event -->
<!-- <Slider/> doesn't emit events properly so I'm just avoiding the issue with <slot> -->
<slot>

</slot>

<div style="margin-top: 14px; display: flex; align-items: center; width: 100%">
  <pre class="status">{numOfSubs} students</pre>
  <Slider
    style="flex-grow: 1"
    bind:value={numOfSubs}
    min={1}
    max={50}
    step={1}
    discrete
    input$aria-label="Tick mark slider"
  />

</div>

<div style="font-family: sans-serif; text-align: center;">
  <pre class="status">Weekly income = ${ totalPay} / week</pre>
  <pre class="status">Expected hours: {Math.round(expectedMinHours)} - {Math.round(expectedMaxHours)} hours</pre>
  <pre>Amortized wage: ${ Math.round(amortizedMinHourlyWage)} - { Math.round(amortizedMaxHourlyWage) } / hour</pre>
</div>

<script>
  import Slider from '@smui/slider'
  import { createEventDispatcher } from 'svelte'

  export let weeklyPrice
  
  let numOfSubs = 10
  $: totalPay = weeklyPrice * numOfSubs

  $: expectedMinHours = 0.5 + Math.log(numOfSubs)
  $: expectedMaxHours = 3 + Math.log(numOfSubs)

  $: amortizedMinHourlyWage = totalPay / expectedMaxHours
  $: amortizedMaxHourlyWage = totalPay / expectedMinHours
</script>