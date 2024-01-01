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
<div style="padding-left: 4%; padding-right: 4%; padding-top: 36px; padding-bottom: {120 + featuredVideoBleedMargin}px; background-color: #f7c686"
  bind:clientWidth={availablePageContentWidth}
>
  {#if classDoc}
    <!-- 36px is the original title size-->
    <div style="font-size: 2.8vw; font-weight: 600; color: rgb(20, 20, 20)">
      {classDoc.name}
    </div>
    <div style="font-size: 20px; margin-top: 12px;">
      {classDoc.description}
    </div>
  {/if}
</div>

<!-- Video gallery section -->
<div style="position: relative; display: flex; align-items: end; margin-top: {-76 + finalAdjustment - featuredVideoBleedMargin}px; margin-left: 4%; flex-wrap: nowrap;">
  {#key mostWatchedExplanations}
    {#each mostWatchedExplanations as explanation, i}
      {#if i === currentlyWatchingIdx}
        <!-- we set an explicit width & height on the container, so that the layout doesn't shift from the delayed mounting of <DoodleVideo/>  -->
        <div style="margin-right: {0.02 * availablePageContentWidth}px; width: {featuredItemWidth}px; min-height: {featuredItemWidth * 3/4}px; border-radius: 12px; overflow: hidden;">
          <RenderlessListenToBoard dbPath={explanation.path} let:boardDoc={boardDoc}>
            <ReusableDoodleVideo
              {boardDoc}
              canvasWidth={featuredItemWidth} 
              canvasHeight={featuredItemWidth * 3/4}
              showEditDeleteButtons={false}
              boardDbPath={explanation.path}
            />
          </RenderlessListenToBoard>
        </div>
      {:else}
        {#if carouselItemPreviewWidth}
          <div 
            on:click={() => rotateCarousel(i)} 
            style="
              width: {carouselItemPreviewWidth}px; 
              height: {carouselItemPreviewWidth * 3/4 + 17}px; 
              overflow: hidden; 
              margin-right: {i <= 2 ? `${0.02 * availablePageContentWidth}px` : ''};
            "
          >
            <div class="my-truncated-text" style="font-size: 14px; margin-bottom: 4px; z-index: 20; width: 100%">
              {explanation.title || explanation.description}
            </div>
            
            <div style="border-radius: 6px; width: {carouselItemPreviewWidth * 0.98}px; height: {carouselItemPreviewWidth * 3/4 * 0.97}px; overflow: hidden;">
              <RenderlessFetchStrokes 
                dbPath={explanation.path}
                let:fetchStrokes={fetchStrokes}
                let:strokesArray={strokesArray}
                autoFetchStrokes={false}
              > 
                <!-- Note: there will be rounding error with the scaling up & back of the NewHDBlackboard, causing some 1-4px shifts in the margin -->
                <NewHDBlackboard
                  {strokesArray}
                  thumbnailWidth={carouselItemPreviewWidth}
                  hideToolbar={true}
                  on:intersect={fetchStrokes}
                />
              </RenderlessFetchStrokes>
            </div>
          </div>
        {/if}
      {/if}
    {/each}
  {/key}

  {#if mostWatchedExplanations.length > 0 && featuredItemWidth}
    <!-- Display featured video title, description and stats -->
    <!-- {featuredItemWidth + 212}px -->
    <!-- 50% (featured item), 8% (left right padding), 2% gap from featured video, 40%-->
    <div style="
      position: absolute; 
      max-height: {availablePageContentWidth * 0.24}px; 
      width: {0.4 * availablePageContentWidth }px;
      left: calc({featuredItemWidth}px + {availablePageContentWidth * 0.01}px); 
      right: auto; 
      top: 0px; 
      bottom: auto; 
      padding: 16px; 
      background-color: hsl(0,0%,0%, 0.6); 
      color: white; 
      border-radius: 12px;"
    >
      <div style="color: rgb(200, 200, 200); font-weight: 400; font-size: 14px;">
        Most watched explanation
      </div>
      <div style="font-size: 24px; font-weight: 500; width: 100%; color: white" class="my-truncated-text">
        {mostWatchedExplanations[currentlyWatchingIdx].title || mostWatchedExplanations[currentlyWatchingIdx].description}
      </div>
      <div style="margin-top: 24px; font-size: 14px; width: 100%;" class="my-truncated-paragraph">
        {mostWatchedExplanations[currentlyWatchingIdx].description}
      </div>
      <!-- Statistics -->
      <div style="margin-top: 24px; font-size: 16px; font-style: underline">
        <!-- <u>Full explanation</u> -->
        {roundedToFixed(mostWatchedExplanations[currentlyWatchingIdx].viewMinutes, 0)} minutes viewed, 
       
        {mostWatchedExplanations[currentlyWatchingIdx].numOfComments || 0} comments
      </div>
    </div>
  {/if}
</div>

<div style="padding-left: 4%; padding-right: 4%;">
  <div style="margin-bottom: 48px;"></div>

  {#if classDoc}
    <div style="display: flex; align-items: center; width: 100%; justify-content: space-around; border: 0px solid red;">
      <img src="https://cdn-icons-png.flaticon.com/512/2246/2246969.png" style="width: 80px">

      <div style="margin-left: 12px; margin-right: 12px; width: 70%; border: 0px solid purple;">
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

    <PopupCrowdfund
      let:isPopupOpen={isPopupOpen}
      let:setIsPopupOpen={setIsPopupOpen}
      {classID}
    > 
      <!-- #036E15 -->
      <div on:click={() => setIsPopupOpen({ newVal: true })} style="cursor: pointer; width: 150px; margin-top: 9px; height: 40px; font-size: 16px; background-color: #036E15; color: white; border-radius: 30px; display: flex; align-items: center; justify-content: center; padding-left: 24px; padding-right: 24px;">
        Add to crowdfund
      </div>
    </PopupCrowdfund>

    </div>

    <div style="margin-top: 24px;"></div>
  {/if}

  <div style="display: flex; width: calc(100% - 400px - 80px + 480px); padding-top: 24px; padding-bottom: 24px; padding-left: 6px; padding-right: 6px;">    
    <!-- Pre-subscribers section -->
    {#if presubscriberDocs}
      <div style="min-width: 340px; max-width: 50%; height: 400px;">
        <div style="display: flex; align-items: flex-end;">
          <div style="font-size: 80px; min-width: 50px;" class="figma-inter-font">
              {tweenedPresubsCount}
          </div>

          <div style="margin-left: 16px; margin-bottom: 30px; font-size: 20px;">
            Learners
          </div>

          <div style="margin-right: 0; margin-left: auto; margin-bottom: 20px;">
            <PopupConfirmLearner
              {classID}
              let:isPopupOpen={isPopupOpen}
              let:setIsPopupOpen={setIsPopupOpen}
            >
              <!-- background color:  -->
              <ReusableRoundButton on:click={() => setIsPopupOpen({ newVal: true})} backgroundColor="#5d0068" textColor="white">
                <span class="material-symbols-outlined" style="font-size: 26px;">
                  school
                </span>
                <div style="margin-left: 8px;">
                  Sign up as learner
                </div>
              </ReusableRoundButton>
            </PopupConfirmLearner>
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

                  <div class="figma-inter-font" style="max-width: 320px">
                    {#if presubscriberDoc.presubscribeAmount}
                      ${presubscriberDoc.presubscribeAmount}
                    {:else if presubscriberDoc.crowdfundAmount}
                      <b>{presubscriberDoc.crowdfundAmount}</b>
                      <div>{presubscriberDoc.reasonForCrowdfunding}</div>
                    {:else if presubscriberDoc.reasonForLearning}
                      {presubscriberDoc.reasonForLearning}
                    {/if}
                  </div>
                </div>
              </div>
            {/each}
        </div>

        <div style="margin-top: 40px;"></div>
      </div>
    {/if}


    <!-- VERTICAL LINE THAT SPLITS THE FLEXBOX -->
    <div style="border-left: 1px solid lightgrey; height: {TeachersListHeight + 240}px; width: 1px; margin-left: {24}px; margin-right: {24-1}px;"></div>

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

        <div style="margin-left: 32px; margin-bottom: 20px;">
          <PopupConfirmTeacher 
            {classID}
            let:isPopupOpen={isPopupOpen}
            let:setIsPopupOpen={setIsPopupOpen}
          >
            <ReusableRoundButton on:click={() => setIsPopupOpen({ newVal: true})} backgroundColor="#5d0068" textColor="white">
              <span class="material-symbols-outlined" style="font-size: 30px">
                stylus_note
              </span>
              <div style="margin-left: 8px;">
                Sign up as teacher
              </div>
            </ReusableRoundButton>
          </PopupConfirmTeacher>
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
    </div>
  {/if}
  </div>
</div>

{#if isPresubscribePopupOpen}
  <PopupConfirmLearner
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
  import PopupConfirmLearner from '$lib/PopupConfirmLearner.svelte'
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte'
  import PopupConfirmTeacher from '$lib/PopupConfirmTeacher.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import HDBlackboard from '$lib/HDBlackboard.svelte'
  import NewHDBlackboard from '$lib/NewHDBlackboard.svelte'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import { user, assumedCanvasWidth } from '/src/store.js'
  import { roundedToFixed } from '/src/helpers/utility.js'
  import PopupCrowdfund from '$lib/PopupCrowdfund.svelte'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'

  export let data;

  let { classID } = data
  $: ({ classID } = data)

  let classDoc
  let tweenedTeacherCount = 0
  let tweenedPresubsCount = 0
  let isInitialLoad = true
  let unsubTeachersListener = null

  let featuredVideoBleedMargin 
  let finalAdjustment = 8
  let featuredItemWidth 
  let carouselItemPreviewWidth
  let gapBetweenEachVideo = 36
  let availablePageContentWidth 

  $: featuredItemWidth = availablePageContentWidth * 0.5
  $: carouselItemPreviewWidth = availablePageContentWidth * 0.13
  $: featuredVideoBleedMargin = availablePageContentWidth * 0.2

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
    // quick-fix: don't care about the resultant order, just make sure the clicked item becomes FIRST
    let copy = [...mostWatchedExplanations]
    const removedElem = copy.splice(i, 1)[0]
    copy = [removedElem, ...copy]
    mostWatchedExplanations = copy
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
    const q2 = query(q1, limit(4))
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

      const q = query(ref, where("isLearner", "==", true))
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
  .my-truncated-paragraph {
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

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