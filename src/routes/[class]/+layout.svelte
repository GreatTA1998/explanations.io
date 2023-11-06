<div class="drawer-container">
  <Drawer style="background: rgb(251, 251, 250); overflow-y: auto; height: 100%; width: {$drawerWidth}px" class="mdc-elevation--z{5}">
    <Content>
      <TheLeftDrawer 
        {classID}
        {roomID}
      />
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main id="main-content">
      <slot>
  
      </slot>
    </main>
  </AppContent>
</div>

<script>
  import TheLeftDrawer from '$lib/TheLeftDrawer.svelte'
  import '$lib/_Elevation.scss'
  import Drawer, { AppContent, Content } from '@smui/drawer'
  import { user, drawerWidth, maxAvailableWidth, maxAvailableHeight } from '/src/store.js'

  export let data;
  let { classID, roomID } = data;
  $: ({ classID, roomID } = data); // this line triggers whenever `data` changes  
</script>

<style>
  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    height: 100vh;
    position: relative;
    display: flex;
    /* height: 350px;
    max-width: 600px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0; */
  }
 
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
 
  #main-content {
    overflow: auto;
    padding: 0px; /* was 16px */
    height: 100%;
    box-sizing: border-box;
  }
</style>

