<!-- field-sizing: content; is not widely supported in Safari & Firefox, only Chrome & Edge -->
<textarea 
  {value}
  {placeholder}
  {readonly}
  bind:this={element} 
  on:input={e => handleInput(e)}
  on:focusin
  on:focusout
  rows={numberOfInitialRowsIfEmpty}
  style="
    --nonFocusedPlaceholderOpacity: {nonFocusedPlaceholderOpacity};
    --fontSizeIncludeUnits: {fontSizeIncludeUnits};
    background-color: {backgroundColor};
    color: {color};
  "
  class:reset-default-styling={resetDefaultStyling}
/>

<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import { blackboardWidth } from '/src/store.js'

  export let value = ''
  export let placeholder
  export let readonly = false
  export let nonFocusedPlaceholderOpacity = 0.6
  export let numberOfInitialRowsIfEmpty = 1
  export let fontSizeIncludeUnits = '1.1rem'
  export let resetDefaultStyling = false
  export let willTriggerFocus = false
  export let backgroundColor = 'transparent'
  export let color = 'rgb(60, 60, 60)'

  let element
  const dispatch = createEventDispatcher()

  $: if (willTriggerFocus) {
    element.focus()
    dispatch("manually-focused")
  }

  $: {
    auto_grow($blackboardWidth)
  }

  // NOTE: you need this despite the $ statement above, I don't know exactly why the above doesn't always trigger on initialization though
  onMount(() => {
    auto_grow()
  })

  function handleInput (e) {
    dispatch('input', e.target.value)
    auto_grow() // adjust immediately for latency compensation, because `value` gets updated with a debounce delay
  }

  // assumes element is already mounted
  function auto_grow () {
    if (!element) return

    element.style.height = 'auto'

    // we're leverage CSS's layout calculations to compute the correct height
    // so we wait till that's completed before setting that height
    requestAnimationFrame(() => {
      element.style.height = (element.scrollHeight)+"px"
    })
  }
</script>

<style>
  textarea {
    box-sizing: border-box;

    width: 100%;
    border: 0px solid lightgrey;
    border-radius: 8px;
    padding: 0px;
    padding-top: 0px;
    padding-bottom: 0px;

    /* don't let user resize the textarea by dragging the bottom right corner */
    resize: none; 
    overflow: hidden;

    /* removes the default black outline when the textarea is selected */
    outline: none; 

    font-size: var(--fontSizeIncludeUnits);

    /* eventual modern solution, but not supported in Safari & Firefox */
    /* field-sizing: content; */
  }

  textarea::placeholder {
    opacity: var(--nonFocusedPlaceholderOpacity);
  }

  textarea:focus::placeholder{
    opacity: 0.6;
  }

  .reset-default-styling {
    all: unset;
  }
</style>