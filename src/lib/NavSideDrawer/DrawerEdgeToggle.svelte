<button
  type="button"
  class:edge-toggle-inline={!floating}
  class:edge-toggle-floating={floating}
  class:edge-toggle-right={floating && edge === 'right'}
  aria-expanded={open}
  aria-label={label}
  title={label}
  on:click
>
  <HandDrawnDrawerArrow {pointing} />
</button>

<script>
  import HandDrawnDrawerArrow from './HandDrawnDrawerArrow.svelte'

  export let pointing = 'right'
  export let floating = false
  export let edge = 'left' // floating anchor: left drawer vs right transcript
  export let open = false
  export let label = ''
</script>

<style>
  .edge-toggle-inline {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    margin-left: 4px;
    padding: 0;
    border-radius: 8px;
    color: rgb(80, 80, 80);
    cursor: pointer;
  }

  .edge-toggle-inline:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  .edge-toggle-floating {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 24px;
    border: 1px solid lightgrey;
    background: white;
    color: black;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }

  .edge-toggle-right {
    left: auto;
    right: 12px;
    position: absolute;
  }
</style>
