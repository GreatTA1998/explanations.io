
<NewGridLayout>
  <div slot="top-navbar">
    <TopNavbar></TopNavbar>
  </div>

  <div slot="left-drawer">
    {#key classID}
      <TheLeftDrawer 
        {classID}
        {roomID}
      />
    {/key}
  </div>
  
  <slot slot="main-content">

  </slot>
</NewGridLayout>

<script>
  import TheLeftDrawer from '$lib/TheLeftDrawer.svelte'
  import '$lib/_Elevation.scss'
  import { user, drawerWidth } from '/src/store.js'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { onMount } from 'svelte'
  import TopNavbar from '$lib/TopNavbar.svelte'
  import NewGridLayout from '$lib/NewGridLayout.svelte'

  export let data;
  let { classID, roomID } = data;
  $: ({ classID, roomID } = data); // this line triggers whenever `data` changes  

  onMount(() => {
    if ($user.uid) {
      updateFirestoreDoc(`/users/${$user.uid}`, {
        mostRecentServerID: classID 
      })
    }
  })
</script>

<style> 
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
</style>

