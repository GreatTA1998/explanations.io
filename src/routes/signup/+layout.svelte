<div style="height: 100vh; width: 100vw; overflow-y: hidden;">
  <!-- <TopBannerWarnExperimental/> -->

  <div class="drawer-container">
    <Drawer style="overflow-y: auto; height: 100%; width: {$classDetailsDrawerWidth}px; box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);">
      <List>
        <div style="display: flex; align-items: center; padding-left: 6px; border-bottom: 1px solid grey; height: 50px; padding-bottom: 7px;">
          <img 
            on:click={redirectToHomePage} 
            src="../logo.png" width="52" height="46" 
            style="margin-left: 0px;" alt="logo"
          >
          <Title style="font-size: 1.95rem; padding-left: 4px; padding-bottom: 1px;">
            Explain
          </Title>

          <span on:click={toggleClassDetailsDrawerWidth} class="material-icons" style="font-size: 2.5rem; margin-right: 2px; margin-left: auto; transform: rotateY(180deg)" >
            start
          </span>
        </div>
            
        <div style="margin-bottom: 40px;">

        </div>


        <div style="margin-top: 40px;">

        </div>

        {#each youtubeClasses as youtubeClass}
          <Item on:click={() => redirectToPage(youtubeClass.id)} style="font-size: 1.2rem;" selected={classID === youtubeClass.id}>
            <div class:purple-text={youtubeClass.hasShopWithVideos}>{youtubeClass.name}</div>
            {#if youtubeClass.numOfWatchers}
              <div style="font-size: 0.5rem; color: red">
                {youtubeClass.numOfWatchers} unresolved demand
              </div>
            {/if}
          </Item>
        {/each}

        <Item on:click={() => goto('/signup/new')}>
          <span class="material-icons" style="margin-bottom: 2px;">add</span>
            Request new class
        </Item>
      </List>
    </Drawer>

    <!-- No idea why AppContent would be needed, nor the class name -->
    <!-- MAIN CONTENT INJECTED HERE VIA +PAGE.SVELTE -->
    <AppContent class="app-content">
      <slot>

      </slot>
    </AppContent>
  </div>
</div>

<script>
  import Button from '@smui/button'
  import TopBannerWarnExperimental from '$lib/TopBannerWarnExperimental.svelte'
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
  import Drawer, { AppContent } from '@smui/drawer'
  import List, { Item, Text } from '@smui/list'
  import { goto } from '$app/navigation';
  import { user, classDetailsDrawerWidth } from '../../store.js'
  import { toggleClassDetailsDrawerWidth } from '../../helpers/everythingElse.js';
  import { page } from '$app/stores'
  import { deleteField, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'

  let classID = ''
  let youtubeClasses = []

  $: if (page) {
    const { pathname } = $page.url
    classID = pathname.split('/')[2]
  }

  const microeconomicsID = 'Mev5x66mSMEvNz3rijym'
  const linearAlgebraID = 'lvzQqyZIV1wjwYnRV9hn'
  const introToMachineLearningID = 'cLF9unbCuplsl3JmHRbu'

  fetchYoutubeClasses()

  async function fetchYoutubeClasses () {
    const db = getFirestore()
    const q = query(collection(db, `/classes`), where('isYoutubeClass', '==', true))
    const snap = await getDocs(q) 
    const temp = [] 
    snap.docs.forEach(doc => {
      temp.push({
        id: doc.id, 
        path: doc.ref.path,
        ...doc.data()
      })
    })
    temp.sort((a, b) => {
      // sort primarily by whether it has shops with videos
      // then by course number
      // then by class number
      // false - true = 0 - 1 = -1
      // !!undefined = false
      console.log("a =", a)

      if (!!a.hasShopWithVideos !== !!b.hasShopWithVideos) {
        return !!b.hasShopWithVideos - !!a.hasShopWithVideos
      }
      else {
        const deptNumberA = a.name.split(".")[0]
        const deptNumberB = b.name.split(".")[0]
        const classNumberA = a.name.split(".")[1]
        const classNumberB = b.name.split(".")[1]
        if (Number(deptNumberA) === Number(deptNumberB)) {
          return Number(classNumberA) - Number(classNumberB)
        }
        else {
          return Number(deptNumberA) - Number(deptNumberB)
        }
      }
    })
    youtubeClasses = temp
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

  .purple-text {
    color: purple;
  }
</style>