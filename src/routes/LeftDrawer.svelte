<div class="drawer-container">
  <Drawer>
    <Content>
      <div class="card-container">
        <Card padded>
          <div style="display: flex; align-items: center">
            <img src="/logo.png" width="55" height="50" alt="web-logo">
            {#if $user}
              <ClassDropdownMenu/>
            
            {:else}
              <div id="sign-up-area">

              </div>
            {/if}
          </div>
        </Card>
      </div>
      <List>
        <div id="side-drawer-list">

        </div>
      </List>
    </Content>
  </Drawer>
 
  <AppContent class="app-content">
    <main class="main-content">
      <div id="main-content" style="height: 100vh">
        
      </div>
    </main>
  </AppContent>
</div>
 
<script lang="ts">
  import ClassDropdownMenu from './components/ClassDropdownMenu.svelte'
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import Card from '@smui/card'
  import List, { Item, Text } from '@smui/list';
  import { user } from '../store.js'
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
 
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>