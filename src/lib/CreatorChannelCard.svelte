<div on:click class="my-rounded-card ux-low-elevation">
  <CreatorCircularAvatar/>

  <div style="margin-left: 6px; ">
    <div style="display: flex; align-items: center; cursor: pointer;">	
      <div style="color: black; font-weight: 500; font-size: var(--fs-xs);">
        {firstNameAndKeyInfo}
      </div>
    </div> 	

    <div style="margin-top: 1px; display: flex; align-items: center; font-weight: 400; font-size: var(--fs-300);">
      <div>{collegeAndYear}</div>
      <div class="separator"></div> 
      <div>{bio}</div>
    </div>
  </div>
</div>

<script>
  export let firstNameAndKeyInfo = ''
  export let collegeAndYear = ''
  export let bio = ''

  import CreatorCircularAvatar from '$lib/CreatorCircularAvatar.svelte'
</script>

<style>
  .my-rounded-card {
    display: flex; 
    cursor: pointer; 
    align-items: center; 
    border-radius: 48px;
    padding: 4px 10px 4px 4px;
  }

  .separator {
		width: 2px;
		height: 2px;
		background-color: #606060;
		border-radius: 50%;
		margin: 4px 6px;
	}
</style>