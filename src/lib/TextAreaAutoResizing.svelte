<textarea 
  {value}
  {placeholder}
  {readonly}
  bind:this={element} 
  on:input={(e) => {
    auto_grow(element)
    dispatch('input', e.target.value)
  }}
  on:focusin
  on:focusout
  rows={numberOfInitialRowsIfEmpty}
  style="
    width: 100%;
   --nonFocusedPlaceholderOpacity: {nonFocusedPlaceholderOpacity};
   --fontSizeIncludeUnits: {fontSizeIncludeUnits};
  "
  class:reset-default-styling={resetDefaultStyling}
/>

<script>
  import { createEventDispatcher, onMount } from 'svelte'

  export let value = ''
  export let placeholder
  export let readonly = false
  export let nonFocusedPlaceholderOpacity = 0.6
  export let numberOfInitialRowsIfEmpty = 1
  export let fontSizeIncludeUnits = '1.4rem'
  export let resetDefaultStyling = false
  export let willTriggerFocus

  $: if (willTriggerFocus) {
    element.focus()
    dispatch("manually-focused")
  }

  const dispatch = createEventDispatcher()

  onMount(() => {
    auto_grow(element)
  })

  let element
  function auto_grow(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight)+"px";
  }
</script>

<style>
  textarea {
    resize: none;
    overflow: hidden;
    min-height: 50px;
    font-size: var(--fontSizeIncludeUnits);
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