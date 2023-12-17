<!-- A great overview page has 3 requirements: 
  - Makes it easy to visualize the lively activity within the server (including people who haven't subscribed but asks questions)
  - (start with 2 broad categories, learners and teachers, and then prioritize people who crowdfunded, who subscribed etc. This also
    allows freemium to co-exist with each other
  - Makes it easy to sign up to teach / or crowdfund new teachers
-->

<!--
  Previous colors: 
  #e2dddd
  #ffad42
 -->
<div style="padding-left: 36px; padding-right: 36px; padding-top: 24px; padding-bottom: {100 + featuredVideoBleedMargin}px; background-color: #f7c686">
    {#if classDoc}
      <div style="font-size: 36px; font-weight: 600; color: rgb(20, 20, 20)">
        {classDoc.name}
      </div>
      <div style="font-size: 20px; margin-top: 12px;">
        {classDoc.description}
      </div>
    {/if}
</div>

<!-- Video gallery section -->
<div style="display: flex; align-items: end; margin-top: {-76 + finalAdjustment - featuredVideoBleedMargin}px; margin-left: 36px; margin-right: 36px; position: relative;">
  {#key mostWatchedExplanations}
    {#each mostWatchedExplanations as explanation, i}
      {#if i === currentlyWatchingIdx}
        <div style="margin-right: {gapBetweenEachVideo}px; border-radius: 12px; overflow: hidden;">
          <RenderlessListenToBoard dbPath={explanation.path} let:boardDoc={boardDoc}>
            <ReusableDoodleVideo
              {boardDoc}
              canvasWidth={600}
              canvasHeight={450}
              showEditDeleteButtons={false}
              boardDbPath={explanation.path}
            />
          </RenderlessListenToBoard>
        </div>
      {:else}
        <!-- 17px is the title height -->
        <!-- Rotate the gallery -->
        <div 
          on:click={() => rotateCarousel(i)} 
          style="
            width: {carouselItemPreviewWidth}px; 
            height: {carouselItemPreviewWidth * 3/4 + 17}px; 
            overflow: hidden; 
            margin-right: {gapBetweenEachVideo}px;
            position: {i === 0 ? 'absolute' : ''};
            left: {i === 0 ? -260 : 0}px
          "
        >
          <div class="my-truncated-text" style="font-size: 14px; margin-bottom: 4px; z-index: 20; width: 200px">
            {explanation.title || explanation.description}
          </div>
          
          <div>
            <RenderlessFetchStrokes 
              dbPath={explanation.path}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
              autoFetchStrokes={false}
            > 
              <HDBlackboard
                {strokesArray}
                canvasWidth={$assumedCanvasWidth * 0.7}
                canvasHeight={$assumedCanvasWidth * 3/4 * 0.7}
                thumbnailWidth={200}
                thumbnailHeight={200 * 3/4}
                hideToolbar={true}
                on:intersect={fetchStrokes}
              />
            </RenderlessFetchStrokes>
          </div>
        </div>
      {/if}
    {/each}
  {/key}

  {#if mostWatchedExplanations.length > 0}
    <!-- Display featured video title, description and stats -->
    <div style="border-radius: 12px; position: absolute; left: {400 + 212}px; right: auto; top: 0px; bottom: auto; padding: 16px; background-color: rgb(251, 251, 251)">
      <div style="color: rgb(90, 90, 90); font-size: 16px;">
        Most watched explanation
      </div>
      <div style="font-size: 24px; font-weight: 500; max-width: 600px;" class="my-truncated-text">
        {mostWatchedExplanations[currentlyWatchingIdx].title || mostWatchedExplanations[currentlyWatchingIdx].description}
      </div>
      <div style="margin-top: 28px; font-size: 14px;">
        {mostWatchedExplanations[currentlyWatchingIdx].description}
      </div>
      <!-- Statistics -->
      <div style="margin-top: 28px; font-size: 16px;">
        {roundedToFixed(mostWatchedExplanations[currentlyWatchingIdx].viewMinutes, 0)} minutes viewed 
        | 
        See all {mostWatchedExplanations[currentlyWatchingIdx].numOfComments} comments
      </div>
    </div>
  {/if}
</div>

<div style="padding-left: 36px; padding-right: 36px;">
  <div style="margin-bottom: 24px;"></div>

  {#if classDoc}
    <div style="display: flex; align-items: center; width: 100%;">
      <img src="https://cdn-icons-png.flaticon.com/512/2246/2246969.png" style="width: 80px">

      <div style="margin-left: 24px; width: 100%;">
        <div style="display: flex; align-items: center;">
          <div style="font-size: 24px; color: #036E15; font-weight: 500;">
            $0 raised 
          </div>
        </div>

        <div style="height: 8px; width: 100%; background-color: #7AEB8D; margin-top: 12px; position: relative; opacity: 0.4;">
          <div style="height: 8px; width: {0}px; background-color: #036E15; margin-top: 12px; position: absolute;">
      
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top: 12px;"></div>
    
    <PopupCrowdfund
      let:isPopupOpen={isPopupOpen}
      let:setIsPopupOpen={setIsPopupOpen}
    >
      <div on:click={() => setIsPopupOpen({ newVal: true })} style="width: 136px; height: 40px; font-size: 16px; background-color: #036E15; color: white; border-radius: 30px; display: flex; align-items: center; justify-content: center; padding-left: 24px; padding-right: 24px;">
        Add to crowdfund
      </div>
    </PopupCrowdfund>
  {/if}

  <div style="display: flex; width: calc(100% - 400px - 80px); padding-top: 24px; padding-bottom: 24px;">    
    {#if teacherDocs}     
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

        <div style="margin-bottom: 16px;"></div>

        <div class="people-list" bind:this={TeachersList} bind:clientHeight={TeachersListHeight}>
          {#each teacherDocs as teacherDoc}
            <div style="display: flex; align-items: center;">
              <PresentationalBeaverPreview 
                helperDoc={teacherDoc}
                classID={classID}
                style="margin-bottom: 8px; margin-right: 20px; width: 280px;"
              >
              </PresentationalBeaverPreview>
            </div>
          {/each}
        </div>

        <div style="margin-top: 40px;"></div>

        <!-- <Button on:click={() => isTeacherPopupOpen = true} color="secondary" style={secondaryActionStringCSS} class="secondary-action" 
        >
          <Label style="text-transform: none; padding-left: 12px; padding-right: 12px; padding-top: 8px; padding-bottom: 8px; font-size: 20px;">
            Start teaching
          </Label>

          <span class="material-symbols-outlined" style="font-size: 1.6rem;">
            draw
          </span>
        </Button> -->
      </div>
    {/if}

    <!-- VERTICAL LINE THAT SPLITS THE FLEXBOX -->
    <div style="border-left: 1px solid lightgrey; height: {TeachersListHeight + 240}px; width: 1px; margin-left: {24}px; margin-right: {24-1}px;"></div>

    <!-- Pre-subscribers section -->
    {#if presubscriberDocs}
      <div style="min-width: 340px; width: 50%; height: 400px;">
        <div style="display: flex; align-items: flex-end;">
          <div style="font-size: 80px; min-width: 50px;" class="figma-inter-font">
              {tweenedPresubsCount}
          </div>

          <div style="margin-left: 16px; margin-bottom: 30px; font-size: 20px;">
            Learners
          </div>
        </div>

        <div style="margin-bottom: 24px;"></div>

        <div class="people-list" bind:this={PresubscribersList} bind:clientHeight={PresubscribersListHeight}>
            {#each presubscriberDocs as presubscriberDoc}
              <div style="display: flex; align-items: center;">
                <span class="material-symbols-outlined" style="font-size: 54px; color: #9A9A9A; margin-top: 0px;">
                  school
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
        </div>

        <div style="margin-top: 40px;"></div>

        <!-- <Button on:click={() => isPresubscribePopupOpen = true} color="secondary" style={secondaryActionStringCSS} class="secondary-action">
          <Label style="text-transform: none; padding-left: 1px; padding-right: 1px; padding-top: 8px; padding-bottom: 8px; font-size: 16px;">
            Start learning
          </Label>
          <span class="material-symbols-outlined">
            money
          </span>
        </Button> -->
      </div>
    {/if}
  </div>
</div>

{#if isPresubscribePopupOpen}
  <PopupConfirmPresubscription
    classID={classID}
    on:confirm-clicked={(e) => handleConfirmPresubscription(e.detail.presubscribeAmount)}
    on:popup-close={() => isPresubscribePopupOpen = false}
  />
{/if}


{#if isTeacherPopupOpen}
  <PopupConfirmTeacher
    {classID}
    on:confirm-clicked={() => { isTeacherPopupOpen = false}}
    on:popup-close={() => isTeacherPopupOpen = false}
  />
{/if}

<script>
  import { onMount, tick } from 'svelte'
  import { getFirestoreDoc, getFirestoreQuery, updateFirestoreDoc, firestoreCollection } from '/src/helpers/crud.js'
  import { query, getFirestore, collection, where, onSnapshot, limit, orderBy } from 'firebase/firestore'
  import PopupConfirmPresubscription from '$lib/PopupConfirmPresubscription.svelte'
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte'
  import PopupConfirmTeacher from '$lib/PopupConfirmTeacher.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import HDBlackboard from '$lib/HDBlackboard.svelte'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import { user, assumedCanvasWidth } from '/src/store.js'
  import { roundedToFixed } from '/src/helpers/utility.js'
  import PopupCrowdfund from '$lib/PopupCrowdfund.svelte'

  export let data;

  let { classID } = data
  $: ({ classID } = data)

  let classDoc
  let tweenedTeacherCount = 0
  let tweenedPresubsCount = 0
  let isInitialLoad = true
  let unsubTeachersListener = null
  const featuredVideoBleedMargin = 200 
  let finalAdjustment = 8
  let carouselItemPreviewWidth = 212
  let gapBetweenEachVideo = 36

  $: if (teacherDocs) {
    animateNumber(teacherDocs.length)
    // normalizeListHeights()
  }

  $: if (presubscriberDocs) {
    animatePresubscribersCount(presubscriberDocs.length)
    // normalizeListHeights()
  }

  let mostWatchedExplanations = []
  let currentlyWatchingIdx = 0

  const mobileWidth = 400
  const navbarHeight = 24

  let TeachersList
  let PresubscribersList 
  let PresubscribersListHeight
  let TeachersListHeight

  let serverObj
  let backgroundWidth
  let db = getFirestore()

  let teacherDocs = null
  let presubscriberDocs = null
  let isPresubscribePopupOpen = false

  let isTeacherPopupOpen = false

  const secondaryActionStringCSS = `
    width: 100%;
    height: 60px; 
    min-height: 42px;
    margin-bottom: 0.8vw; 
    border-radius: 30px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 2px solid #5d0068;
    background-color: white;
    color: #5d0068;
  `

  // you need to fetch the server
  onMount(async () => {
    fetchMostWatchedExplanations()

    getFirestoreDoc(`/classes/${classID}`).then(result => classDoc = result)
    getFirestoreDoc(`classes/${classID}`).then(result => serverObj = result)

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    backgroundWidth = 0.8 * vw

    fetchPresubscribers().then(docs => presubscriberDocs = docs)
    listenToTeacherDocs()
  })

  function rotateCarousel (i) {
    const copy = [...mostWatchedExplanations]
    for (let j = 0; j < i; j += 1) {
      const removedElems = copy.splice(j, 1) // remove jth element
      copy.push(removedElems[0]) // put it in the back instead
    }
    mostWatchedExplanations = []
    mostWatchedExplanations = copy
    mostWatchedExplanations = [...mostWatchedExplanations]
  }

  async function fetchMostWatchedExplanations () { 
    // query orderBy('viewMinutes') I assume it's a number
    // createFirestoreQuery({ 
    //   collectionPath: `classes/${classID}/blackboards`,
    //   criteriaTerms: []
    // })
    // orderBy `viewMinutes`
    // limit by 3

    const q0 = firestoreCollection(`classes/${classID}/blackboards`)
    const q1 = query(q0, orderBy('viewMinutes', 'desc'))
    const q2 = query(q1, limit(3))
    const result = await getFirestoreQuery(q2)
    mostWatchedExplanations = result
  }


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
    await updateFirestoreDoc(`classes/${classID}/members/${$user.uid}`, {
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
      const ref = collection(db, `classes/${classID}/members`);

      const q = query(ref, where("isPresubscriber", "==", true))
      const result = await getFirestoreQuery(q)
      resolve(result)
    })
  }

  async function listenToTeacherDocs () {
    return new Promise(async (resolve) => {
      const ref = collection(db, `classes/${classID}/members`)
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