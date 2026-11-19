<nav
  class="sub-nav"
  role={tabbed ? 'tablist' : undefined}
  aria-label={ariaLabel || undefined}
>
  {#each tabs as tab (tab.id)}
    <button
      type="button"
      class="sub-nav-tab"
      class:active={value === tab.id}
      role={tabbed ? 'tab' : undefined}
      aria-selected={tabbed ? value === tab.id : undefined}
      aria-current={!tabbed && value === tab.id ? 'page' : undefined}
      on:click={() => pick(tab.id)}
    >{tab.label}</button>
  {/each}
  <slot />
</nav>

<script>
  import { createEventDispatcher } from 'svelte'
  export let tabs = [], value = '', ariaLabel = '', tabbed = false
  const dispatch = createEventDispatcher()
  function pick (id) {
    if (id === value) return
    value = id
    dispatch('change', id)
  }
</script>

<style>
  .sub-nav { display: flex; flex-shrink: 0; margin: 0 8px; padding: 0; }
  .sub-nav-tab {
    flex: 1; padding: 10px 12px 8px; border: 0; border-radius: 0; border-bottom: 2px solid rgb(180, 180, 180);
    background: transparent; color: rgb(100, 100, 100); cursor: pointer;
    font: inherit; font-size: 18px; font-weight: 500; line-height: 1.2; text-transform: lowercase;
  }
  .sub-nav-tab:hover { background: rgba(0, 0, 0, 0.04); color: black; }
  .sub-nav-tab.active { color: black; font-weight: 600; border-bottom-color: orange; }
  .sub-nav > :global(.settings-button),
  .sub-nav > :global(.hide-drawer-button) { flex: 0 0 auto; align-self: center; }
</style>
