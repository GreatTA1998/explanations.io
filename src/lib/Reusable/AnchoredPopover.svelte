<!--
  Generic anchored popover. Same mechanism as actions.life:
  popover="auto" (outside click and Escape, no close button), popovertarget
  on the activator, and CSS anchor positioning (position-anchor, position-area,
  position-try-fallbacks). Without anchor positioning the popover still opens
  and dismisses; it just stays in the browser's default centered placement.
-->
<slot name="activator" {popoverId} {anchorName} {close}></slot>

<div
  use:rememberPopover
  id={popoverId || undefined}
  popover="auto"
  class="anchored-popover"
  style={anchorStyle}
  on:toggle
>
  <slot {close} {popoverId}></slot>
</div>

<script>
  import { onMount } from 'svelte'
  import { getRandomID } from '/src/helpers/utility.js'

  // actions.life's default: below the trigger, spanning toward the inline end.
  export let positionArea = 'block-end span-inline-end'

  let popoverEl
  // Filled in onMount so server and client render the same empty id.
  let popoverId = ''

  function rememberPopover (node) {
    popoverEl = node
    return {
      destroy () {
        popoverEl = null
      }
    }
  }

  onMount(() => {
    popoverId = `popover-${getRandomID()}`
  })

  $: anchorName = popoverId ? `--anchor-${popoverId}` : ''
  $: anchorStyle = anchorName
    ? `position-anchor: ${anchorName}; position-area: ${positionArea}; position-try-fallbacks: flip-block, flip-inline, flip-inline flip-block;`
    : undefined

  export function close () {
    if (!popoverEl || typeof popoverEl.hidePopover !== 'function') return
    if (popoverEl.matches(':popover-open')) popoverEl.hidePopover()
  }
</script>

<style>
  .anchored-popover {
    background: white;
    border: none;
    border-radius: 12px;
    padding: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .anchored-popover:not(:popover-open) {
    display: none;
  }

  @supports (position-area: block-end) {
    .anchored-popover {
      margin: 0;
      inset: auto;
      margin-block-start: 4px;
    }
  }
</style>
