<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.80);">
			<Row>
				<Section>
					<img on:click={redirectToHomePage} src="logo.png" width="52" height="46" style="margin-left: 0px;">
					<Title style="font-size: 1.95rem; padding-left: 6px">
						Explain
					</Title>
					<a href="https://medium.com/mit-soul" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 40px;">
							Blog
						</Button>
					</a>
					<a href="https://github.com/verypopularguy/explain" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 20px;">
							Github
						</Button>
					</a>
				</Section>

				<Section align="end" toolbar>
					<Button variant="outlined">
						Log in
					</Button>
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>


<AutoAdjust {topAppBar}>
  <div class="drawer-container" style="border: 2px solid red;">
    <Drawer style="overflow-y: scroll; height: 100%; width: {340}px" class="mdc-elevation--z{5}">
      <Content>
        <List>
          <div on:click={redirectToRequestPage}>Request a class</div>

          <div>
            Department-sponsored classes
          </div>
          <div on:click={() => redirectToPage('')}>
            14.01
          </div>
          <div>
            Experimental pilot classes
          </div>
          <div on:click={() => redirectToPage('18.06 ID here')}>
            18.06
          </div>
        </List>
      </Content>
    </Drawer>

    <!-- MAIN CONTENT INJECTED HERE VIA +PAGE.SVELTE -->
    <slot>

    </slot>
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

  let topAppBar

  function redirectToRequestPage () {
    goto('/signup/request')
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
</style>