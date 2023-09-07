<div use:portal={'main-content'} style="padding: 16px;">
  <RenderlessFetchHelperDoc 
    {classID}
    creatorUID={profileUID}
    let:helperDoc={helperDoc}
  >
    {#if helperDoc}
      <ClassServerMyProfileHelperProfileCopy
        {helperDoc}
        {classID}
      >
        <ClassServerMyProfilePicture
          circleBorderColor={$user.beaverProfilePicColor}
        />
      </ClassServerMyProfileHelperProfileCopy> 
    {/if}
  </RenderlessFetchHelperDoc>
</div>


<script>
  import { portal } from '../helpers/actions.js'
  import PopupHelperProfile from '$lib/PopupHelperProfile.svelte'
  import ClassServerMyProfileHelperProfileCopy from '$lib/ClassServerMyProfileHelperProfileCopy.svelte';
  import ClassServerMyProfilePicture from '$lib/ClassServerMyProfilePicture.svelte'
  import RenderlessFetchHelperDoc from '$lib/RenderlessFetchHelperDoc.svelte'
  import { user } from '/src/store.js'
  import { goto } from '$app/navigation'

  export let classID
  export let profileUID

  let isPopupOpen = false

</script>