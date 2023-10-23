<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.75);">
  <Row>
    <Section>
      <img 
      on:click={() => goto('/')}
      src="/app-logo-no-bg.png" width="48" height="44" style="margin-left: 4px; margin-right: 8px; margin-top: 4px; cursor: pointer;"
      on:click={() => goto('/')}
    >
    <div style="font-weight: 400; font-size: 20px;">
      explanations.app
    </div>

    </Section>

    <Section align="end" toolbar>
      <div style="margin-right: 48px;">
        503 250 3868
      </div>

      <div style="margin-right: 24px;">
        elton@explanations.app
      </div>

      <a href="https://eltonlin.substack.com/archive" target="_blank" 
      style="margin-left: 8px; text-decoration-color: transparent;"
    >
      <Button
        class="button-shaped-round"
        style="font-size: 12px;"
      >
        <Label>blog</Label>
      </Button>
    </a>

    <a href="https://github.com/greatTA1998/explain" target="_blank" 
      style="margin-left: 20px; text-decoration-color: transparent;"
    >
      <Button
        class="button-shaped-round"
        style="font-size: 12px;"
      >
        <Label>github</Label>
      </Button>
    </a>

    <div style="margin-right: 18px;"></div>

      <ReusableSignInButton/>
    </Section>
  </Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
  <div style="margin-top: 36px;"></div>
  <PlaygroundOverview/>
</AutoAdjust>

<script>
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import TopBannerWarnExperimental from '$lib/TopBannerWarnExperimental.svelte';
  import ExperimentalTable from '$lib/ExperimentalTable.svelte'
  import { goto } from '$app/navigation';
  import { getFirestore, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { setFirestoreDoc, updateFirestoreDoc, getFirestoreCollection } from '../../helpers/crud.js'
  import PopupSignInWithOptions from '$lib/PopupSignInWithOptions.svelte'
  import { getRandomID } from '../../helpers/utility.js'
  import ButtonPopupCreateNewClass from '$lib/ButtonPopupCreateNewClass.svelte'
  import { user } from '../../store.js'
  import { onDestroy, onMount } from 'svelte'
  import ReusableButton from '$lib/ReusableButton.svelte';
  import Checkbox from '@smui/checkbox'
  import { mixpanelLibrary } from '/src/mixpanel.js'
  import PlaygroundOverview from '$lib/PlaygroundOverview.svelte'
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
  import Button, { Label } from '@smui/button'

  let topAppBar
  
  let youtubeClasses = [] 
  let sortedYoutubeClasses = [] 

  let isSignInPopupOpen = false

  fetchYoutubeClasses().then(() => {
    // then compute secondary statistics
    for (const c of youtubeClasses) {
      // update the statistics, it'll lag but it'll be correct for the next fetch
      getFirestoreCollection(`classes/${c.id}/members`).then(classHelpers => {
        updateFirestoreDoc(`classes/${c.id}`, {
          minutesViewed: classHelpers.reduce((acc, helper) => acc + Number(helper.minutesViewed || 0), 0),
          paidMonthlySubscriptions: classHelpers.reduce((acc, helper) => acc + Number(helper.totalPaidSubscriptions || 0), 0),
        })
      })
    }
    computeSortedYoutubeClasses()
  })

  onMount(() => {
    mixpanelLibrary.track('Class servers overview visited')
  })


  // snapshot listener of all the classes
  function fetchYoutubeClasses () {
    return new Promise(resolve => {
      const ref = collection(getFirestore(), 'classes')
      const q = query(ref, where('isYoutubeClass', '==', true))
      onSnapshot(q, (snap) => {
        const temp = [] 
        snap.docs.forEach(doc => {
          temp.push({
            id: doc.id, 
            path: doc.ref.path,
            ...doc.data()
          })
        })
        youtubeClasses = temp
        resolve()
      }) 
    })
  }

  function computeSortedYoutubeClasses () {
    sortedYoutubeClasses = youtubeClasses.sort((a, b) => {
      if (a.numOfUnresolvedQuestions !== b.numOfUnresolvedQuestions) {
        return b.numOfUnresolvedQuestions - a.numOfUnresolvedQuestions
      } 
      else if (a.numOfHelpers !== b.numOfHelpers) {
        return b.numOfHelpers - a.numOfHelpers
      }
      else if (a.paidMonthlySubscriptions !== b.paidMonthlySubscriptions) {
        return b.paidMonthlySubscriptions - a.paidMonthlySubscriptions
      }
      else {
        return 0
      }
    })
  }
</script>

<style>

</style>