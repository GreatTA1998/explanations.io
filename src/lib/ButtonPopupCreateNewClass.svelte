<button on:click={() => isPopupOpen = true}>
  Create new class server
</button>

{#if isPopupOpen}
  <PopupCreateNewClass
    on:popup-close={() => isPopupOpen = false}
    on:confirm-clicked={() => isPopupOpen = false}
  />
{/if}

<script>
  import PopupCreateNewClass from '$lib/PopupCreateNewClass.svelte';
  
  let isPopupOpen = false
</script>