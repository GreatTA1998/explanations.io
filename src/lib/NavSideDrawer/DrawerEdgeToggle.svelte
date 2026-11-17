<button
  type="button"
  class:edge-toggle-inline={!floating}
  class:edge-toggle-floating={floating}
  class:edge-toggle-fixed-left={floating && edge === 'left'}
  class:edge-toggle-wash={wash}
  class:glass-surface={wash}
  data-look={wash ? look : undefined}
  style={wash ? `--look-hue:${lookHue};--look-opacity:${lookOpacity}` : undefined}
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
  // left = fixed viewport (drawer). right = parent anchors to blackboard.
  export let edge = 'left'
  export let open = false
  export let label = ''
  // Match transcript overlay wash (glass-surface look vars).
  export let wash = false
  export let look = 1
  export let lookHue = 0
  export let lookOpacity = 0.5
</script>

<style>
  .edge-toggle-inline {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 32px;
    height: 32px;
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
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 24px;
    cursor: pointer;
  }

  .edge-toggle-floating:not(.edge-toggle-wash) {
    border: 1px solid lightgrey;
    background: white;
    color: black;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
  }

  .edge-toggle-fixed-left {
    position: fixed;
    top: 12px;
    left: 12px;
  }
</style>
