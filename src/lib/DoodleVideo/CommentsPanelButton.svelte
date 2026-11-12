<button
  type="button"
  on:click
  class="my-round-button"
  aria-expanded={open}
  aria-label={open ? 'Hide transcript and comments' : 'Show transcript and comments'}
>
  <span class="material-symbols-outlined" style="font-size: 20px;">
    {open ? 'keyboard_double_arrow_right' : 'forum'}
  </span>
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

    border-radius: 24px;
    min-width: 0px;
    min-height: 16px;
    padding: 5px;
    border: 1px solid lightgrey;
    color: black;
    cursor: pointer;
    background: white;

    font-size: var(--fs-300);
    font-weight: 400;

    margin-right: 0;
    margin-left: auto;
    height: 32px;
  }
</style>
