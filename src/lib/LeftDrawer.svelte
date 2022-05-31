<div class="drawer-container">
  <Drawer style="overflow-y: scroll; height: 100%;" class="mdc-elevation--z{5}">
    <Content>
      <div style="margin-bottom: 12px; padding-top: 2px; padding-bottom: 0; padding-left: 8px;" class="mdc-elevation--z{4}">
        <div style="display: flex; align-items: center">
          <img on:click={goToHomePage} src="/logo.png" width="60" height="54" alt="web-logo" class="logo-image">
          <div>
            {#if $user.uid}
              <ClassDropdownMenu 
                {nameOfClass} 
                {descriptionOfClass}
              />
            {:else}
              <div style="font-family: Roboto, sans-serif; font-weight: 400; margin-left: 6px; margin-top: 5px; margin-bottom: 0px; font-size: 2.0rem">
                {nameOfClass} 
              </div>
              <div style="font-family: Roboto,sans-serif; font-size: 0.875rem; color: rgba(0,0,0,.6); margin-left: 8px; margin-bottom: 12px">
                {descriptionOfClass}
              </div>
            {/if}
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
    <main class="main-content" id="main-content" style="padding: 0">

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
  import { goto } from '$app/navigation'
  import { signOut, getAuth } from 'firebase/auth'

  export let nameOfClass
  export let descriptionOfClass

  function goToHomePage () {
    if ($user.uid) {
      const auth = getAuth()
      signOut(auth)
    }
    goto('/')
  }
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

  .logo-image:hover {
    cursor: pointer;
  }
</style>