<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.80);">
			<Row>
				<Section>
					<img on:click={redirectToHomePage} src="../logo.png" width="52" height="46" style="margin-left: 0px;">
					<Title style="font-size: 1.95rem; padding-left: 6px">
						Explain
					</Title>
					<a href="https://github.com/verypopularguy/explain" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 20px;">
							Github
						</Button>
					</a>
				</Section>

				<Section align="end" toolbar>
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>


<AutoAdjust {topAppBar}>
  <div class="drawer-container">
    <!-- TO-DO: figure out why shadow is not working -->
    <Drawer style="overflow-y: scroll; height: 100%; width: {drawerWidth}px" class="mdc-elevation--z{5}">
      <!-- <Content> -->
        <List>
          <!-- <div style="display: flex; width: 100%; flex-direction: row-reverse;"> -->
            {#if drawerWidth === expandedWidth}
              <Button on:click={() => drawerWidth = collapsedWidth} style="padding-left: 1px; padding-right: 1px;">
                <!-- mirror flipping `keyboard_tab` icon makes it look like the expand drawer icon -->
                <span class="material-icons" style="font-size: 2rem; transform: rotateY(180deg)">
                  keyboard_tab
                </span>
              </Button>
            {:else}
              <Button on:click={() => drawerWidth = expandedWidth} style="padding-left: 1px; padding-right: 1px;">
                <span class="material-icons" style="font-size: 2rem;">
                  start
                </span>
              </Button>
            {/if}
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
            <div style="margin-bottom: 40px;">

            </div>

            <Text style="margin-top: 30px; margin-bottom: 10px; margin-left: 16px; font-size: 0.8rem; color: grey;">
              Piloted in Fall 2022
            </Text>
            <Item on:click={() => redirectToPage('')} style="font-size: 1.2rem;">
              14.01
            </Item>

            <div style="margin-top: 40px;">

            </div>
            <Text style="margin-top: 80px; margin-bottom: 10px; margin-left: 16px; font-size: 0.8rem; color: grey">
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
    <AppContent class="app-content">
      <!-- MAIN CONTENT INJECTED HERE VIA +PAGE.SVELTE -->
      <slot>

      </slot>
    </AppContent>
  </div>
</AutoAdjust>

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
  import { user } from '../../store.js'
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

  let collapsedWidth = 60
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
    height: 100vh;
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