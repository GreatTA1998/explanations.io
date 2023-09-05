<div use:portal={'main-content'}>
  <div>
    My Profile
  </div>
  <RenderlessFetchHelperDoc 
    {classID}
    creatorUID={$user.uid}
    let:helperDoc={helperDoc}
  >
    <!-- Backwards compatibility: guest users don't have a matching `helperDoc` -->
    {#if helperDoc}
      <PopupHelperProfile
        {helperDoc}
        {classID}
        on:popup-close={() => isPopupOpen = false}
      />
    {/if}
  </RenderlessFetchHelperDoc>

  <!-- PopupBecomeHelper can be here -->
</div>

<script>
  import { portal } from '../helpers/actions.js'
  import PopupHelperProfile from '$lib/PopupHelperProfile.svelte'
  import RenderlessFetchHelperDoc from '$lib/RenderlessFetchHelperDoc.svelte'
  import { user } from '/src/store.js'

  export let classID

  let isPopupOpen = false

</script>