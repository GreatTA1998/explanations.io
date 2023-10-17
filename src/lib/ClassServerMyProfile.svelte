<div use:portal={'main-content'} style="padding: 16px;">
  {#if !profileUID}
    <ReusableSignInButton frameworkColor="secondary"/>
  {:else}
    <RenderlessFetchServerMemberDoc 
      {classID}
      memberUID={profileUID}
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
  {/if}
</div>


<script>
  import { portal } from '../helpers/actions.js'
  import ClassServerMyProfileContent from '$lib/ClassServerMyProfileContent.svelte';
  import ClassServerMyProfilePicture from '$lib/ClassServerMyProfilePicture.svelte'
  import RenderlessFetchServerMemberDoc from '$lib/RenderlessFetchServerMemberDoc.svelte'
  import { user } from '/src/store.js'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'

  export let classID
  export let profileUID
</script>