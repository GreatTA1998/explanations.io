{#if serverObj}
  <div style="display: flex; justify-content: center;">
    <div class="invisible-grand-card-container">
      <div 
        on:click={() => goto('/overview')}
        style="margin-top: 12px; margin-bottom: 12px; margin-left: 0px; cursor: pointer;">
        Back to servers list
      </div>

      <!-- Top half of grand card -->
      {#if serverObj.featuredBlackboardID}
        <div style="min-width: {mobileWidth}px; max-width: {backgroundWidth}px; height: 40vh; overflow: hidden; border-radius: 24px;"
          class="figma-inter-font"
        >
          <!-- change this to a reusable doodle video -->
          <RenderlessFetchStrokes 
            dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}`}
            let:fetchStrokes={fetchStrokes}
            let:strokesArray={strokesArray}
            autoFetchStrokes={false}
          > 
            <Blackboard
              {strokesArray}
              canvasWidth={backgroundWidth}
              canvasHeight={backgroundWidth * 3/4}
              hideToolbar={true}
              on:intersect={fetchStrokes}
            />
          </RenderlessFetchStrokes>
        </div>
      {:else}
        <div style="width: {backgroundWidth - 10}px; height: 40vh; border: 2px dashed black; border-radius: 24px; box-sizing: border-box;">
        
        </div>
      {/if}

      <!-- Bottom-half of grand card -->
      <div style=" width: 100%; padding-top: 60px; padding-left: 40px; padding-right: 40px; padding-bottom: 48px; box-sizing: border-box;">
        <!-- FLEXBOX -->
        <div style="display: flex; justify-content: space-between;">
          <!-- LEFT FLEX-CHILD -->
          <div>
            <div style="font-size: 54px; font-weight: 600;" class="figma-inter-font">
              {serverObj.name}
              <!-- {#if serverObj.description}
                {serverObj.description}
              {/if} -->
            </div>

            <div style="margin-top: 8px;"></div>

            <div style="font-size: 24px; color: #7A7A7A;" class="figma-inter-font" >
              {serverObj.syllabusVersion || 'Compatible class versions: BHCC, RCC, MIT'}
            </div>

            <div style="margin-top: 40px;"></div>

            <div style="font-size: 20px; display: flex; align-items: center;">
              <div>{serverObj.numOfQuestions} questions</div>
              <span class="material-icons" style="font-size: 4px; margin: 12px;">circle</span>
              <div>{serverObj.numOfVideos} videos</div>
              <span class="material-icons" style="font-size: 4px; margin: 12px;">circle</span>
              <div>{serverObj.minutesViewed} minutes viewed</div>
            </div>
          </div>
          <!-- END OF LEFT FLEX-CHILD -->
          
          <!-- RIGHT FLEX-CHILD -->
          <div>
            <Button on:click={() => goto(`/${serverObj.id}/request-video`)} color="secondary" variant="raised" class="" 
              style="	
                min-width: 340px; max-width: 340px;
                height: 3.6vw; 
                min-height: 42px;
                margin-top: 0.85vw; 
                margin-bottom: 0.8vw; 
                border-radius: 0px;
              "
            >
              <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1.4em; font-weight: 600">
                Enter server
              </Label>
            </Button>
          </div>

        </div>
        <!-- END OF FLEXBOX 1 -->

        <!-- TWO-SIDED MARKETPLACE SECTION -->
        <div style="margin-top: 24px;"></div>

        <!-- Flexbox split into two halves -->
        <div style="display: flex; width: calc(100% - 400px - 80px); padding-top: 24px; padding-bottom: 24px;">         
            <!-- Teacher section -->
            <div style="min-width: 340px; width: 50%; height: 400px;">
              <div style="display: flex; align-items: flex-end;">
                  <!-- Need width otherwise digits jump 0 takes less width than 1  -->
                  <div style="font-size: 80px; min-width: 50px;" class="figma-inter-font">
                    {tweenedTeacherCount}
                  </div>

                  <div style="margin-left: 16px; margin-bottom: 30px; font-size: 20px;">
                    Teachers
                  </div>
              </div>

              <div style="margin-bottom: 24px;"></div>
              
              {#if teacherDocs}
                <div class="people-list" bind:this={TeachersList} bind:clientHeight={TeachersListHeight}>
                  {#each teacherDocs as teacherDoc}
                    <div style="display: flex; align-items: center;">
                      <PresentationalBeaverPreview 
                        helperDoc={teacherDoc}
                        classID={serverID}
                        style="margin-bottom: 8px; margin-right: 20px; width: 280px;"
                      >
                      </PresentationalBeaverPreview>
                    </div>
                  {/each}
                </div>
              {/if}


              <div style="margin-top: 40px;"></div>

              <Button on:click={() => isTeacherPopupOpen = true} color="secondary" style={secondaryActionStringCSS} class="secondary-action" 
 
              >
                <Label style="text-transform: none; padding-left: 12px; padding-right: 12px; padding-top: 8px; padding-bottom: 8px; font-size: 20px;">
                  Start teaching
                </Label>
              </Button>
            </div>
    
          <!-- VERTICAL LINE THAT SPLITS THE FLEXBOX -->
          <div style="border-left: 1px solid lightgrey; height: {TeachersListHeight + 240}px; width: 1px; margin-left: {24}px; margin-right: {24-1}px;"></div>

          <!-- Pre-subscribers section -->
          <div style="min-width: 340px; width: 50%; height: 400px;">
            <div style="display: flex; align-items: flex-end;">
              <div style="font-size: 80px; min-width: 50px;" class="figma-inter-font">
                  {tweenedPresubsCount}
              </div>

              <div style="margin-left: 16px; margin-bottom: 30px; font-size: 20px;">
                Pre-subscribers
              </div>
            </div>

            <div style="margin-bottom: 24px;"></div>

            <div class="people-list" bind:this={PresubscribersList} bind:clientHeight={PresubscribersListHeight}>
              {#if presubscriberDocs}
                {#each presubscriberDocs as presubscriberDoc}
                  <div style="display: flex; align-items: center;">
                    <span class="material-icons" style="font-size: 54px; color: #9A9A9A; margin-top: 0px;">
                      person
                    </span>

                    <div style="margin-right: 12px;"></div>

                    <div>
                      <div style="color: #7A7A7A;">
                        {presubscriberDoc.name}
                      </div>
                      <div class="figma-inter-font">
                        ${presubscriberDoc.presubscribeAmount}
                      </div>
                    </div>
                  </div>
                {/each}
              {/if}
            </div>

            <div style="margin-top: 40px;"></div>

            <Button on:click={() => isPresubscribePopupOpen = true} color="secondary" style={secondaryActionStringCSS} class="secondary-action">
              <Label style="text-transform: none; padding-left: 1px; padding-right: 1px; padding-top: 8px; padding-bottom: 8px; font-size: 20px;">
                Crowdfund more teachers
              </Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>


  {#if isPresubscribePopupOpen}
    <PopupConfirmPresubscription
      classID={serverID}
      on:confirm-clicked={(e) => handleConfirmPresubscription(e.detail.presubscribeAmount)}
      on:popup-close={() => isPresubscribePopupOpen = false}
    />
  {/if}

  
  {#if isTeacherPopupOpen}
    <PopupConfirmTeacher
      classID={serverID}
      on:confirm-clicked={() => { isTeacherPopupOpen = false}}
      on:popup-close={() => isTeacherPopupOpen = false}
    />
  {/if}
{/if}

<script>
  import Blackboard from '$lib/Blackboard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { goto } from '$app/navigation'
  import { onMount, tick } from 'svelte'
  import { getFirestoreDoc, getFirestoreQuery } from '/src/helpers/crud.js'
  import Button, { Label } from '@smui/button'
  import { query, getFirestore, collection, where, onSnapshot } from 'firebase/firestore'
  import PopupConfirmPresubscription from '$lib/PopupConfirmPresubscription.svelte'
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte'
  import PopupConfirmTeacher from '$lib/PopupConfirmTeacher.svelte'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { user } from '/src/store.js'

  export let data;

  let tweenedTeacherCount = 0
  let tweenedPresubsCount = 0
  let isInitialLoad = true
  let unsubTeachersListener = null

  $: if (teacherDocs) {
    console.log('teacherDocs changed =', teacherDocs)
    animateNumber(teacherDocs.length)
    // normalizeListHeights()
  }

  $: if (presubscriberDocs) {
    animatePresubscribersCount(presubscriberDocs.length)
    // normalizeListHeights()
  }

  const mobileWidth = 400
  const navbarHeight = 24

  let TeachersList
  let PresubscribersList 
  let PresubscribersListHeight
  let TeachersListHeight

  let { serverID } = data;
  $: ({ serverID } = data); // so it stays in sync when `data` changes

  let serverObj
  let backgroundWidth
  let db = getFirestore()

  let teacherDocs = null
  let presubscriberDocs = null
  let isPresubscribePopupOpen = false

  let isTeacherPopupOpen = false

  const secondaryActionStringCSS = `
    width: 100%;
    height: fit-content; 
    min-height: 42px;
    margin-bottom: 0.8vw; 
    border-radius: 0px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 2px solid #5d0068;
    background-color: white;
    color: #5d0068;
  `


  // you need to fetch the server
  onMount(async () => {
    const serverDoc = await getFirestoreDoc(`classes/${serverID}`)
    serverObj = serverDoc

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    backgroundWidth = 0.8 * vw

    fetchPresubscribers().then(docs => presubscriberDocs = docs)
    listenToTeacherDocs()
  })

  async function normalizeListHeights () {
    if (PresubscribersList && TeachersList && (PresubscribersListHeight || TeachersListHeight)) {
      console.log('readjusting heights of the lists')
      PresubscribersList.style.height = 'fit-content'
      TeachersList.style.height = 'fit-content'
      await tick()
      // PresubscribersList.style.height = Math.max(PresubscribersListHeight, TeachersListHeight) + 'px'
      // TeachersList.style.height = Math.max(PresubscribersListHeight, TeachersListHeight) + 'px'

      // tick().then(() => {
      //     PresubscribersList.style.height = Math.max(PresubscribersListHeight, TeachersListHeight) + 'px'
      //     TeachersList.style.height = Math.max(PresubscribersListHeight, TeachersListHeight) + 'px'
      // })
    }
  }

  async function handleConfirmPresubscription (presubscribeAmount) {
    await updateFirestoreDoc(`classes/${serverID}/members/${$user.uid}`, {
      isPresubscriber: true,
      presubscribeAmount
    })
    isPresubscribePopupOpen = false
  }

  async function animatePresubscribersCount (newVal) {
    for (let i = tweenedPresubsCount; i <= newVal; i++) {
      // if (i === 0) await delay(200)
      tweenedPresubsCount = i
      await delay(50)
    }
  }

  async function animateNumber (newVal) {
    let i = tweenedTeacherCount
    while (tweenedTeacherCount !== newVal) {
      if (tweenedTeacherCount < newVal) i += 1
      if (tweenedTeacherCount > newVal) i -= 1
      tweenedTeacherCount = i
      await delay(50)
    }
  }

  function delay (ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }


  async function fetchPresubscribers () {
    return new Promise(async (resolve) => {
      const ref = collection(db, `classes/${serverID}/members`);

      const q = query(ref, where("isPresubscriber", "==", true))
      const result = await getFirestoreQuery(q)
      resolve(result)
    })
  }

  async function listenToTeacherDocs () {
    return new Promise(async (resolve) => {
      const ref = collection(db, `classes/${serverID}/members`)
      const q = query(ref, where("isTeacher", "==", true))
      unsubTeachersListener = onSnapshot(q, (snap) => {
        const temp = [] 
        for (const doc of snap.docs) {
          temp.push({ id: doc.id, ...doc.data() })
        }
        teacherDocs = temp
        resolve()
      })
    })
  }
</script>

<style>
  .people-list {
    max-height: 240px; 
    height: fit-content;
    min-height: 0px; 
  }

  .secondary-action {
    width: 100%;
    height: fit-content; 
    min-height: 42px;
    margin-bottom: 0.8vw; 
    border-radius: 0px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 2px solid #5d0068;
    background-color: white;
    color: #5d0068;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff2');
    /* Add more src lines for different font weights/styles as needed */
    font-weight: normal;
    font-style: normal;
  }

  .figma-inter-font {
    font-family: 'Inter', sans-serif;
  }

  .money-green {
    color: #3D8C4F;
  }

  .grey-text {
    color: #7A7A7A;
  }
</style>
