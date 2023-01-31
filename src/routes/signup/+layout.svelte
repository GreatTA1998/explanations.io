<div style="height: 100vh; width: 100vw; overflow-y: hidden;">
  <div class="flexy">
    <div class="top-app-bar-container flexor">
      <!-- variant="standard" -->
      <TopAppBar bind:this={topAppBar} variant="fixed" style="background-color: hsl(0,0%,0%, 0.80);">
        <Row>
          <Section>
            <Button on:click={toggleClassDetailsDrawerWidth} style="margin-right: 16px">
              <span class="material-icons" style="font-size: 2rem;">
                menu
              </span>
            </Button>

            <img on:click={redirectToHomePage} src="../logo.png" width="52" height="46" style="margin-left: 0px;">
            <Title style="font-size: 1.95rem; padding-left: 6px">
              Explain
            </Title>
            <!-- <a href="https://github.com/verypopularguy/explain" target="_blank" style="text-decoration-color: transparent;">
              <Button style="margin-left: 20px;">
                Github
              </Button>
            </a> -->
          </Section>

          <Section align="end" toolbar>
          </Section>
        </Row>
      </TopAppBar>
    </div>
  </div>


  <AutoAdjust {topAppBar} style="overflow-y: hidden;">
    <div class="drawer-container">
      <!-- TO-DO: figure out why shadow is not working -->
      <Drawer style="overflow-y: auto; height: 100%; width: {$classDetailsDrawerWidth}px; box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);">
        <!-- <Content> -->
          <List>
            <!-- <div> -->
            
            {#if drawerWidth === expandedWidth}
              <!-- <Item on:click={redirectToRequestPage} style="display: flex; align-items: center;">
                <span class="material-icons">
                  add
                </span>
                Request a class
              </Item>
              
              <Item on:click={redirectToOpenAClassPage} style="display: flex; align-items: center;" disabled>
                <span class="material-icons">
                  add
                </span>
                Open a class
              </Item> -->
              <div style="margin-bottom: 20px;">

              </div>

              <Text style="margin-bottom: 10px; margin-left: 16px; font-size: 0.95rem; color: grey;">
                Piloted in Fall 2022
              </Text>
              <Item on:click={() => redirectToPage('')} style="font-size: 1.2rem;">
                14.01
              </Item>

              <div style="margin-top: 40px;">

              </div>
              <Text style="margin-top: 80px; margin-bottom: 10px; margin-left: 16px; font-size: 0.95rem; color: grey">
                New for Spring 2023
              </Text>
              <Item on:click={() => redirectToPage(introToMachineLearningID)} style="font-size: 1.2rem;" selected={classID === introToMachineLearningID}>
                6.390
              </Item>
              <Item on:click={() => redirectToPage(linearAlgebraID)} style="font-size: 1.2rem;" selected={classID === linearAlgebraID}>
                18.06
              </Item>
            {/if}
          </List>
        <!-- </Content> -->
      </Drawer>

      <!-- No idea why AppContent would be needed, nor the class name -->
      <!-- MAIN CONTENT INJECTED HERE VIA +PAGE.SVELTE -->
      <AppContent class="app-content">
        <slot>

        </slot>
      </AppContent>
    </div>
  </AutoAdjust>
</div>

<script>
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
  import Drawer, { AppContent } from '@smui/drawer'
  import List, { Item, Text } from '@smui/list'
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button from '@smui/button';
  import { goto } from '$app/navigation';
  import { user, classDetailsDrawerWidth } from '../../store.js'
  import { page } from '$app/stores'
  // import { logOut } from '../../helpers/auth.js'

  let classID = ''

  $: if (page) {
    const { pathname } = $page.url
    classID = pathname.split('/')[2]
  }


  const linearAlgebraID = 'lvzQqyZIV1wjwYnRV9hn'
  const introToMachineLearningID = 'cLF9unbCuplsl3JmHRbu'

  let topAppBar
  let drawerWidth = 240

  function  toggleClassDetailsDrawerWidth () {
    if ($classDetailsDrawerWidth === expandedWidth) {
      classDetailsDrawerWidth.set(0)
    }
    else if ($classDetailsDrawerWidth === 0)
    {
      classDetailsDrawerWidth.set(expandedWidth)
    }
  }

  let expandedWidth = 240

  function redirectToRequestPage () {
    goto('/signup/request')
  }

  function redirectToOpenAClassPage () {
    goto('/signup/open')
  }

  function redirectToPage (id) {
    goto(`/signup/${id}`)
  }

  function redirectToHomePage () {
    goto('/')
  }
</script>

<style>
  .drawer-container {
    height: calc(100vh - 64px);
    position: relative;
    display: flex;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
</style>