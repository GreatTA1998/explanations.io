<!-- Adapted from https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/ -->
<div class="grow-wrap" bind:this={autogrowWrapper} use:initValue style="font-family: Roboto, sans-serif; margin: 10px 0px;">
  <textarea 
    {value}
    on:input={(e) => { 
      autogrowWrapper.dataset.replicatedValue = e.target.value; 
      dispatch('input', e)
    }} 
    style="box-sizing: border-box; width: {$canvasWidth}px; padding: 6px; border-radius: 2px; 
      font-family: Roboto, sans-serif; color: rgb(60 55 56 / 87%);"
  />
  <!-- border-box otherwise textarea padding and border to the width, exceeding it -->
</div>

<script>
  import { createEventDispatcher } from 'svelte'
  import { canvasWidth } from '../store.js'

  export let value

  let autogrowWrapper

  const dispatch = createEventDispatcher()

  function initValue (element) {
    element.dataset.replicatedValue = value
  }
</script>

<style>
.grow-wrap {
  /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
  display: grid;
}
.grow-wrap::after {
  /* Note the weird space! Needed to preventy jumpy behavior */
  content: attr(data-replicated-value) " ";

  /* This is how textarea text behaves */
  white-space: pre-wrap;

  /* Hidden from view, clicks, and screen readers */
  visibility: hidden;
}
.grow-wrap > textarea {
  /* You could leave this, but after a user resizes, then it ruins the auto sizing */
  resize: none;

  /* Firefox shows scrollbar on growth, you can hide like this. */
  overflow: hidden;
}
.grow-wrap > textarea,
.grow-wrap::after {
  /* Identical styling required!! */
  border: 1px solid black;
  padding: 0.5rem;
  font: inherit;

  /* Place on top of each other */
  grid-area: 1 / 1 / 2 / 2;
}
</style>