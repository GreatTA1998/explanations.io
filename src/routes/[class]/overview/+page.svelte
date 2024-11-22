<!-- NOTE, bind:clientWidth will set the element to position relative, which means it'll create a new stacking context and cover other non-relative element,
  which is very subtle
-->

<div>
  <!-- <div style="padding-left: 4%; padding-right: 4%; padding-top: 36px; height: 240px; background-color: #f7c686;">

  </div> -->

  <!-- Crowdfund section & two-sided marketplace section 
    position: relative prevents it from getting covered by the orange background (which would take priority because it's relative due to its `bind:clientWidth` directive)
  -->
  <div style="position: relative; padding-left: 4%; padding-right: 4%; padding-top: 12px;">

    <div style="display: flex; width: calc(100% - 400px - 80px + 480px); padding-top: 24px; padding-bottom: 24px;">    
      {#if teacherDocs}     
        <div style="flex: 2 0 auto; height: 400px;">
          <div style="display: flex; align-items: flex-end;">
            <!-- Need width otherwise digits jump 0 takes less width than 1  -->
            <div style="font-size: 80px; min-width: 50px;" class="figma-inter-font">
              {tweenedTeacherCount}
            </div>

            <div style="margin-left: 16px; margin-bottom: 30px; font-size: 20px;">
              Teachers
            </div>

            <div style="margin-right: 12px; margin-left: auto; margin-bottom: 20px;">
              <PopupConfirmTeacher 
                {classID}
                let:setIsPopupOpen={setIsPopupOpen}
              >
                <ReusableRoundButton on:click={() => setIsPopupOpen({ newVal: true})} backgroundColor="#5d0068" textColor="white">
                  <span class="material-symbols-outlined" style="font-size: 30px">
                    stylus_note
                  </span>
                  <div style="margin-left: 8px; font-weight: 500;">
                    Sign up to teach
                  </div>
                </ReusableRoundButton>
              </PopupConfirmTeacher>
            </div>
          </div>

          <div style="margin-bottom: 16px;"></div>

          <div class="people-list" bind:this={TeachersList} bind:clientHeight={TeachersListHeight} style="width: 100%;">
            {#each teacherDocs as teacherDoc}
              <TeacherInformationCard 
                on:click={() => showTeacherHighlightVideos(teacherDoc.uid)}
                helperDoc={teacherDoc}
                {currentTeacherUID}
                {classID}
                style="margin-bottom: 8px; width: 100%;"
              />
            {/each}
          </div>
        </div>
      {/if}

      <!-- VERTICAL LINE THAT SPLITS THE FLEXBOX -->
      <div style="border-left: 1px solid lightgrey; height: {TeachersListHeight + 240}px; width: 1px; margin-left: {24}px; margin-right: {24-1}px;"></div>

      {#if learnerDocs}
        <div style="flex: 2 0 auto; height: 400px;">
          <div style="display: flex; align-items: flex-end;">
            <div style="font-size: 80px; min-width: 50px;">
              {tweenedPresubsCount}
            </div>

            <div style="margin-left: 16px; margin-bottom: 30px; font-size: 20px;">
              Learners
            </div>

            <div style="margin-right: 12px; margin-left: auto; margin-bottom: 20px;">
              {#if teacherDocs}
                <PopupConfirmLearner {classID} {teacherDocs} {currentTeacherUID} let:setIsPopupOpen={setIsPopupOpen}>
                  <ReusableRoundButton on:click={() => setIsPopupOpen({ newVal: true})} backgroundColor="#5d0068" textColor="white">
                    <span class="material-symbols-outlined" style="font-size: 26px;">
                      person_raised_hand
                    </span>
                    <div style="margin-left: 8px; font-weight: 500;">
                      Sign up to learn
                    </div>
                  </ReusableRoundButton>
                </PopupConfirmLearner>
              {/if}
            </div>
          </div>

          <div style="margin-bottom: 24px;"></div>

          <div class="people-list" bind:this={PresubscribersList} bind:clientHeight={PresubscribersListHeight}>
            {#each learnerDocs as learnerDoc}
              <div style="display: flex; align-items: center; margin-bottom: 48px;">
                <div style="margin-right: 12px;"></div>

                <div style="width: 100%;">
                  <div style="display: flex; align-items: center;">
                    <span class="material-symbols-outlined" style="font-size: 26px; margin-top: 0px; margin-right: 8px;">
                      person_raised_hand
                    </span>
      
                    <div style="color: rgb(60, 60, 60); font-size: 20px; font-weight: 500;">
                      {learnerDoc.name.split(" ")[0]}
                    </div>

                    <div style="margin-right: 0px; margin-left: auto; font-size: 14px; color: green; font-weight: 600;">
                      {#if learnerDoc.subscribedTeacherUID}
                        <div>Subscribed for 1 month</div>
                      {:else}
                        <div style="margin-right: 0px; margin-left: auto; font-size: 14px; color: green;">Prepaid learner</div>
                      {/if}
                    </div>
                  </div>

                  <div style="max-width: 360px; margin-top: 12px;">
                    "{learnerDoc.reasonForLearning}"
                  </div>
                </div>
              </div>
            {/each}
          </div>

          <div style="margin-top: 40px;"></div>
        </div>
      {/if}
    </div>
  </div>
</div>

<script>
  import { onMount, tick } from 'svelte'
  import { getFirestoreDoc, getFirestoreQuery, updateFirestoreDoc, firestoreCollection } from '/src/helpers/crud.js'
  import { query, getFirestore, collection, where, onSnapshot, limit, orderBy } from 'firebase/firestore'
  import PopupConfirmLearner from '$lib/PopupConfirmLearner.svelte'
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
  import TeacherInformationCard from '$lib/TeacherInformationCard.svelte'
  import BackwardsCompatibleReusableMultislideVideo from '$lib/BackwardsCompatibleReusableMultislideVideo.svelte'

  export let data;

  let { classID } = data
  $: ({ classID } = data)

  let classDoc
  let tweenedTeacherCount = 0
  let tweenedPresubsCount = 0
  let isInitialLoad = true

  let unsubLearnersListener
  let unsubTeachersListener = null

  let featuredVideoBleedMargin 
  let finalAdjustment = 8
  let featuredItemWidth 
  let carouselItemPreviewWidth
  let gapBetweenEachVideo = 36


  $: if (teacherDocs) {
    animateNumber(teacherDocs.length)
    // normalizeListHeights()
  }

  $: if (learnerDocs) {
    animatePresubscribersCount(learnerDocs.length)
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
  let learnerDocs = null
  let currentTeacherUID = ''

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

    listenToLearnerDocs()
    listenToTeacherDocs()
  })

  function showTeacherHighlightVideos (uid) {
    fetchMostWatchedExplanations(uid)
    currentTeacherUID = uid
  }

  function rotateCarousel (i) {
    // quick-fix: don't care about the resultant order, just make sure the clicked item becomes FIRST
    let copy = [...mostWatchedExplanations]
    const removedElem = copy.splice(i, 1)[0]
    copy = [removedElem, ...copy]
    mostWatchedExplanations = copy
  }

  async function fetchMostWatchedExplanations (creatorUID = "") { 
    let q = firestoreCollection(`classes/${classID}/blackboards`)
    q = query(q, orderBy('viewMinutes', 'desc'))
    q = query(q, limit(4))
    if (creatorUID) {
      q = query(q, where('creatorUID', '==', creatorUID))
    } 

    const result = await getFirestoreQuery(q)
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

  async function listenToLearnerDocs () {
    return new Promise(async (resolve) => {
      const ref = collection(db, `classes/${classID}/members`)
      const q = query(ref, where("isLearner", "==", true))
      unsubLearnersListener = onSnapshot(q, (snap) => {
        const temp = [] 
        for (const doc of snap.docs) {
          temp.push({ id: doc.id, ...doc.data() })
        }
        learnerDocs = temp
        resolve()
      })
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
        temp.sort((a, b) => {
          let a1 = (Number(a.minutesViewed) || 0)
          let b1 = (Number(b.minutesViewed) || 0)
          if (a1 !== b1) return b1 - a1 
          else return b.numOfVideos - a.numOfVideos
        })
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

  .money-green {
    color: #3D8C4F;
  }

  .grey-text {
    color: #7A7A7A;
  }
</style>