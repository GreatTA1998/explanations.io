<div use:portal={'main-content'} style="padding: 16px;">
  <RenderlessFetchServerMemberDoc 
    {classID}
    memberUID={profileUID}
    let:serverMemberDoc={serverMemberDoc}
  >
    {#if serverMemberDoc}
      <ClassServerMyProfileHelperProfileCopy
        helperDoc={serverMemberDoc}
        {classID}
      >
        <ClassServerMyProfilePicture
          circleBorderColor={$user.beaverProfilePicColor}
        />
      </ClassServerMyProfileHelperProfileCopy> 
    {/if}
  </RenderlessFetchServerMemberDoc>
</div>


<script>
  import { portal } from '../helpers/actions.js'
  import ClassServerMyProfileHelperProfileCopy from '$lib/ClassServerMyProfileHelperProfileCopy.svelte';
  import ClassServerMyProfilePicture from '$lib/ClassServerMyProfilePicture.svelte'
  import RenderlessFetchServerMemberDoc from '$lib/RenderlessFetchServerMemberDoc.svelte'
  import { user } from '/src/store.js'

  export let classID
  export let profileUID
</script>