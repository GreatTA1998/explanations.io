<script>
  // "right" is the closed-state control (opens the drawer).
  // "left" is the open-state control (hides the drawer).
  export let pointing = 'right'
</script>

{#if pointing === 'right'}
  <svg
    viewBox="-8 -8 206 122"
    width="30"
    height="18"
    fill="none"
    stroke="currentColor"
    stroke-width="12"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M0 6 C2 37 1 76 0 106" />
    <path d="M0 50 C40 50 91 49 138 50" />
    <path d="M126 0 C142 15 165 34 189 51" />
    <path d="M190 52 C179 68 164 84 143 98" />
  </svg>
{:else}
  <svg
    viewBox="-8 -8 196 146"
    width="28"
    height="21"
    fill="none"
    stroke="currentColor"
    stroke-width="12"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M57 18 Q29 43 1 74" />
    <path d="M1 74 Q38 101 79 128" />
    <path d="M20 71 C69 68 122 69 171 71" />
    <path d="M172 0 C177 38 179 76 172 113" />
  </svg>
{/if}

<style>
  svg {
    display: block;
    flex: none;
  }
</style>
