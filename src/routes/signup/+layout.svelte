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
          
          <!-- <Item on:click={redirectToRequestPage} style="display: flex; align-items: center;">
            <span class="material-icons">
              add
            </span>
            Request a class
          </Item> -->
            
            <div style="margin-bottom: 40px;">

            </div>

            <Text style="margin-bottom: 10px; margin-left: 16px; font-size: 0.95rem; color: grey;">
              Department sponsored
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
              6.390/6.036
            </Item>

            {#each youtubeClasses as youtubeClass}
              <Item on:click={() => redirectToPage(youtubeClass.id)} style="font-size: 1.2rem;" selected={classID === youtubeClass.id}>
                {youtubeClass.name}
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
      const deptNumberA = a.name.split(".")[0]
      const deptNumberB = b.name.split(".")[0]
      const classNumberA = a.name.split(".")[1]
      const classNumberB = b.name.split(".")[1]
      const A = Number(deptNumberA)
      const B = Number(deptNumberB)
      if (A === B) {
        return Number(classNumberA) - Number(classNumberB)
      }
      return Number(deptNumberA) - Number(deptNumberB)
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
</style>