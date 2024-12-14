<RenderlessFetchServerMemberDoc 
  {classID}
  memberUID={creatorUID}
  let:serverMemberDoc={serverMemberDoc}
  >
{#if serverMemberDoc}
  <ClassServerMyProfileContent
    memberDoc={serverMemberDoc}
    {classID}
  >
    <ClassServerMyProfilePicture
      circleBorderColor={$user.beaverProfilePicColor}
    />
  </ClassServerMyProfileContent> 
{/if}
</RenderlessFetchServerMemberDoc>

<script>
  import { portal } from '../helpers/actions.js'
  import ClassServerMyProfileContent from '$lib/ClassServerMyProfileContent.svelte';
  import ClassServerMyProfilePicture from '$lib/ClassServerMyProfilePicture.svelte'
  import RenderlessFetchServerMemberDoc from '$lib/RenderlessFetchServerMemberDoc.svelte'
  import { user } from '/src/store.js'

  export let classID
  export let creatorUID
</script>
