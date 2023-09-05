<div use:portal={'main-content'}>
  Profile picture
  <RenderlessFetchHelperDoc 
    {classID}
    creatorUID={$user.uid}
    let:helperDoc={helperDoc}
  >
    {#if helperDoc}
    <!-- TO-DO:
      Profile picture
    -->
      <ClassServerMyProfileHelperProfileCopy
        {helperDoc}
        {classID}
      />
    {/if}
  </RenderlessFetchHelperDoc>
  <!-- PopupBecomeHelper can be here -->
</div>

<script>
  import { portal } from '../helpers/actions.js'
  import PopupHelperProfile from '$lib/PopupHelperProfile.svelte'
  import ClassServerMyProfileHelperProfileCopy from '$lib/ClassServerMyProfileHelperProfileCopy.svelte';
  import RenderlessFetchHelperDoc from '$lib/RenderlessFetchHelperDoc.svelte'
  import { user } from '/src/store.js'

  export let classID

  let isPopupOpen = false

</script>