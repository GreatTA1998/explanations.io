<!-- Bubbles up `on:input` event -->
<div style="font-family: sans-serif;">
  Adjust your price
</div>

<slot>

</slot>

<div style="display: flex; justify-content: center;">
  <ReusableButton on:click={() => dispatch('subscribe-click')}>
    <!-- <pre class="status" style="font-size: 2rem; margin-top: 0px; margin-bottom: 0px;"> -->
      ${weeklyPrice}/week
    <!-- </pre> -->
  </ReusableButton>
</div>             

<div style="font-family: sans-serif;">Income calculator</div>
<Slider
  bind:value={numOfSubs}
  min={1}
  max={50}
  step={1}
  discrete
  tickMarks
  input$aria-label="Tick mark slider"
/>
<div style="margin-bottom: 40px; text-align: center; font-family: sans-serif;">
  hypothetical # of students: {numOfSubs}
</div>
<div style="font-family: sans-serif; text-align: center;">
  <pre class="status">Total income = {weeklyPrice} x {numOfSubs} = ${ totalPay} / week</pre>
  <pre class="status">Expected time commitment: {Math.round(expectedMinHours)} - {Math.round(expectedMaxHours)} hours</pre>
  <pre>Amortized hourly wage: ${ Math.round(amortizedMinHourlyWage)} - { Math.round(amortizedMaxHourlyWage) } / hour</pre>
</div>

<script>
  import ReusableButton from '$lib/ReusableButton.svelte'
  import Slider from '@smui/slider'
  import { createEventDispatcher } from 'svelte'

  export let weeklyPrice
  
  const dispatch = createEventDispatcher()
  let numOfSubs = 10
  $: totalPay = weeklyPrice * numOfSubs

  $: expectedMinHours = 0.5 + Math.log(numOfSubs)
  $: expectedMaxHours = 3 + Math.log(numOfSubs)

  $: amortizedMinHourlyWage = totalPay / expectedMaxHours
  $: amortizedMaxHourlyWage = totalPay / expectedMinHours
</script>