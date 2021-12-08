<div class="drawer-container">
  <Drawer style="overflow-y: scroll; height: 100%;" class="mdc-elevation--z{5}">
    <Content>
      <div style="margin-bottom: 12px; padding-top: 2px; padding-bottom: 0; padding-left: 8px;" class="mdc-elevation--z{4}">
        <div style="display: flex; align-items: center">
          <img src="/logo.png" width="60" height="54" alt="web-logo">
          <div>
            <ClassDropdownMenu/>
            <div style="font-family: Roboto,sans-serif; font-size: 0.875rem; color: rgba(0,0,0,.6); margin-left: 8px; margin-bottom: 12px">
              Intro to Machine Learning
            </div>>
          </div>
        </div>
      </div>
      <List>
        <slot>

        </slot>
      </List>
    </Content>
  </Drawer>
 
  <AppContent class="app-content">
    <main class="main-content" style="padding: 0">
      <div id="main-content" style="height: 100vh;">
        
      </div>
    </main>
  </AppContent>
</div>
 
<script lang="ts">
  import './_Elevation.scss'
  import ClassDropdownMenu from '$lib/ClassDropdownMenu.svelte'
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