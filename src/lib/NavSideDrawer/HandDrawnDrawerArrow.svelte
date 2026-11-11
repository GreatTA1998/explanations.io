<script>
  // "right" is the closed-state control (opens the drawer).
  // "left" is the open-state control (hides the drawer).
  export let pointing = 'right'
</script>

{#if pointing === 'right'}
  <svg
    viewBox="-8 -8 222 150"
    width="33"
    height="22"
    fill="none"
    stroke="currentColor"
    stroke-width="12"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M25 4 C21 34 12 72 5 102" />
    <path d="M16 47 C55 56 105 67 150 79" />
    <path d="M150 28 C162 46 180 70 200 92" />
    <path d="M200 93 C186 106 168 118 144 127" />
  </svg>
{:else}
  <svg
    viewBox="-8 -8 198 152"
    width="29"
    height="22"
    fill="none"
    stroke="currentColor"
    stroke-width="12"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M76 5 Q42 20 5 41" />
    <path d="M5 41 Q32 78 63 117" />
    <path d="M24 44 C72 56 122 74 168 91" />
    <path d="M178 20 C178 58 175 96 164 132" />
  </svg>
{/if}

<style>
  svg {
    display: block;
    flex: none;
  }
</style>
