<button
  type="button"
  on:click
  class="my-round-button"
  aria-expanded={open}
  aria-label={open ? 'Hide transcript and comments' : 'Show transcript and comments'}
>
  {#if open}
    <!-- Collapse: speech-bubble outline with minus -->
    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5.5 3.75h13A2.75 2.75 0 0 1 21.25 6.5v7A2.75 2.75 0 0 1 18.5 16.25h-4.2L8.9 20.1a.75.75 0 0 1-1.2-.6v-3.25H5.5A2.75 2.75 0 0 1 2.75 13.5v-7A2.75 2.75 0 0 1 5.5 3.75z"
      />
      <path class="glyph" d="M8.5 10.25h7" />
    </svg>
  {:else}
    <!-- Expand: speech-bubble outline with plus -->
    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5.5 3.75h13A2.75 2.75 0 0 1 21.25 6.5v7A2.75 2.75 0 0 1 18.5 16.25h-4.2L8.9 20.1a.75.75 0 0 1-1.2-.6v-3.25H5.5A2.75 2.75 0 0 1 2.75 13.5v-7A2.75 2.75 0 0 1 5.5 3.75z"
      />
      <path class="glyph" d="M12 7.75v5M9.5 10.25h5" />
    </svg>
  {/if}
</button>

<script>
  export let open = false
</script>

<style>
  .my-round-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    box-sizing: border-box;
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    padding: 0;
    margin-right: 0;
    margin-left: auto;

    border: 0;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.45);
    color: rgba(255, 255, 255, 0.92);
    cursor: pointer;
  }

  .my-round-button:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }

  .icon {
    display: block;
    width: 20px;
    height: 20px;
    flex: none;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .glyph {
    stroke-width: 2;
  }
</style>
