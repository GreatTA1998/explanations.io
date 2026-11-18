<button
  type="button"
  on:click
  class="my-round-button"
  aria-expanded={open}
  aria-label={open ? 'Hide transcript and comments' : 'Show transcript and comments'}
>
  <HandDrawnDrawerArrow pointing={open ? 'left' : 'right'} />
</button>
<script>
  import HandDrawnDrawerArrow from '$lib/NavSideDrawer/HandDrawnDrawerArrow.svelte'
  export let open = false
</script>
<style>
  .my-round-button {
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    box-sizing: border-box; width: 32px; height: 32px; min-width: 32px; min-height: 32px;
    padding: 0; margin-right: 0; margin-left: auto;
    border: 1px solid lightgrey; border-radius: 24px; background: transparent; color: black; cursor: pointer;
  }
  .my-round-button:focus-visible { outline: 2px solid rgba(0, 0, 0, 0.55); outline-offset: 2px; }
</style>
