<div class="header-flex">
  <p class="header-title" style="font-size: 4em;">Teach what you love - supported by subscribers</p>	
  <div class="header-subcopy-wrapper">
  
    <Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
      <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
        Explore communities
      </Label>
    </Button>
  </div>
</div>			

<OfflineMultislideRecordingDemo/>

<script>
  import OfflineMultislideRecordingDemo from '$lib/OfflineMultislideRecordingDemo.svelte'
  import Button, { Label } from '@smui/button'
  import { goto } from '$app/navigation'

  function redirectToSignUpPage () {
		goto('/servers')
	}
</script>