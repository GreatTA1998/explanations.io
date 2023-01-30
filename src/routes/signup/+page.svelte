<!-- 
  For the time being, this will be hard-coded as 14.01's page,
  which will also be the default page for reference 
  when exploring pricing and availability

  TO-DO: 
  
  As well as last semester's top videos, stats, and a brief bio for the teacher.

  Don't make unnecessary enemies with the TAs

  NEW CLASS
  Communicate that you can sign up for any class, including ASEs. The goal is to get students who believe in this 
  product so much they're willing to sign-up and pay. This is the most important signal. 

  Explain what happens with their money - if the department funds it, you'll be refunded, 75% off. 
  And yes, it's a free market economy. 
  If for some reason it doesn't happen, you get a full refund. 
-->

<div class="webflow-container">
  <div class="header-flex">
    <div class="header-title">
      14.01 
    </div>

    <div class="header-subcopy-wrapper">
      <!-- <div class="header-subcopy">
        The platform covers refunds anytime, any reason - so both student & tutor are protected
      </div> -->
      <div style="display: flex;">
        <Button color="secondary" variant="raised" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
          <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
            Sign-up for $10/week
          </Label>
        </Button>
        <Button on:click={() => goto('/Mev5x66mSMEvNz3rijym')} variant="outlined" style="height: 60px; margin-left: 20px; border-radius: 0px;">
          <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 50px; padding-bottom: 50px; font-size: 1rem; border-radius: 6px; font-weight: 600">
            Fall '22 server
          </Label>
        </Button>
      </div>
    </div>
  </div>

  <!-- WRITE SHORT EDITORIAL HERE
      We're forced to overlap 2-3 different 3D graphs onto 2D, 
      with one-color, and try to make sense of it. 
      Math is therefore the most common source of confusion, 
      yet it's easily solved by a 10-minute review of f(x, y) constrained optimization of two variables.
    -->

  <!-- <div class="section-subtitle">
    Because lectures doesn't cover math, f(x, y) constrained optimization is the source of lots of questions
  </div> -->

  <div style="margin-top: 1%; margin-bottom: 1%" class="section-container">
    <h2 style="font-family: sans-serif">
      Tutor gallery
    </h2>

    <div style="display: flex">
      <div style="display: flex;">
        {#if classTutorsDocs}
          <div class="tutor-business-card" class:orange-border={selectedTutorUID === eltonUID}>
            <Card style="height: 150px;">
              <PrimaryAction on:click={() => { selectedTutorUID = eltonUID }} padded style="height: 100%">
                <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                  Elton Lin 
                </h2>
                <br>

                <TextAreaAutoResizing 
                  value={'6-14, class of 2020, 600 total view-minutes for Fall 2022'} 
                  placeholder="e.g. year, major, wrote a textbook, made several Piazza posts with ~20 thanks (provide links)"
                  readonly={$user.uid !== eltonUID}
                  nonFocusedPlaceholderOpacity={0.6}
                  numberOfInitialRowsIfEmpty={2}
                  fontSizeIncludeUnits={'1rem'}
                />
              </PrimaryAction>
            </Card>
          </div>

          {#each classTutorsDocs as tutorDoc}
            <div class="tutor-business-card" style="margin-left: 20px;" class:orange-border={selectedTutorUID === tutorDoc.uid}>
              <Card style="height: 150px;">
                <PrimaryAction on:click={() => { selectedTutorUID = tutorDoc.uid }} padded style="height: 100%">
                  { tutorDoc.firstName + ' ' + tutorDoc.lastName }
                  <br>
                  id: { tutorDoc.id }
                  uid: { tutorDoc.uid }
                  <br>
                </PrimaryAction>
              </Card>
            </div>
          {/each}

          <!-- TO-DO: hide if user already signed up as tutor -->
          <!-- <div class="tutor-business-card" style="margin-left: 20px;" class:orange-border={selectedTutorUID === ''}>
            {#if selectedTutorUID !== ''}
              <Card style="height: 150px;">
                <PrimaryAction on:click={() => selectedTutorUID = ''} padded style="height: 100%;">
                  <p>Sign up as tutor</p>
                  <div>It's simple to setup shop:</div>
                  <ol>
                    <li>Log in</li>
                    <li>Record an example video</li>
                    <li>Fill out everything else another time</li>
                  </ol>
                </PrimaryAction>
              </Card>
            {:else}
              {#if !$user.phoneNumber}
                <div>Phone login</div>
                <PhoneLogin/>
              {:else}
                <div>
                  success - you're logged in, shop will be auto-saved
                </div>

                {#if !$user.firstName || !$user.lastName}
                  <div>First name</div>
                  <input bind:value={inputFieldFirstName} placeholder="Alice, Bob, Charlie"/>

                  <div>Last name</div>
                  <input bind:value={inputFieldLastName} placeholder=""/>

                  <Button on:click={createTutorDoc({ classID: id })}>
                    Submit
                  </Button>
                {/if}
                
                <div>bio</div>
                <input placeholder="class, year, relevant class experience, links and stats to any Piazza posts, Youtube, blogs, resources you created">
              {/if}
            {/if}
          </div> -->
        {/if}
      </div><!-- End of flexbox-->
    </div> <!-- End of section -->
  </div>
</div>


<div bind:clientWidth={carouselWidth} style="margin-left: 1%;">
  {#key selectedTutorUID + rerenderKeyForCarousel}
    <div use:setupCarouselData>
      {#if carouselWidth}
        <ImageCarousel numOfImages={designatedRoomBoardIDs.length + 1} resizeOnChange={carouselWidth}>
          {#if designatedRoomBoardIDs.length > 0}
            {#each designatedRoomBoardIDs as id}
              <div class="card">
                <RenderlessListenToBoard dbPath={boardsCollectionDbPath + id} let:boardDoc={boardDoc}> 
                  {#if boardDoc}
                    <!-- <div style="font-family: sans-serif !important; color: grey; font-size: 0.7rem; margin-left: 2px; margin-top: 8px; margin-bottom: 4px;">
                      Minutes viewed: {boardDoc.viewMinutes ? boardDoc.viewMinutes.toFixed(1) : 0}
                    </div> -->

                    <!-- JUST COPY FROM [room]/[class].svelte -->
                    <div style="width: {carouselWidth}px; margin-top: 0px; margin-bottom: 0px">
                      <TextAreaAutoResizing 
                        value={boardDoc.description || ''} 
                        on:input={(e) => debouncedUpdateBoardDescription(e, id)}
                        placeholder="Video ideas: talk about why the class can be hard, give a foresighted overview of the class, explain a concept that many students don't get, solve an example question, etc. so students can get a sense of your explanation style :)"
                        readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
                        nonFocusedPlaceholderOpacity={0.6}
                        numberOfInitialRowsIfEmpty=3
                      />
                    </div>

                    {#if boardDoc.audioDownloadURL}
                      <ReusableDoodleVideo 
                        {boardDoc}
                        boardDbPath={boardsCollectionDbPath + id}
                        canvasWidth={carouselWidth}
                        canvasHeight={carouselWidth * 3/4 - 100}
                      />
                    {:else}
                      <ReusableLiveBlackboard
                        {boardDoc}
                        boardID={id}
                        boardsDbPath={boardsCollectionDbPath}
                        canvasWidth={carouselWidth}
                        canvasHeight={carouselWidth * 3/4 - 100}
                        hasFullscreenButton={false}
                        on:video-uploaded={updateNewBlackboardLocation}
                      />
                    {/if}
                  {/if}
                </RenderlessListenToBoard>
              </div>
            {/each}
            
            <!-- DO SOMETHING TO GUARANTEE A NEW BOARD WILL BE CREATED -->
            <!-- THE PRESENCE OF THIS BREAKS THE CAROUSEL IN UNEXPECTED WAYS, E.G YOU NEED A NEW PAGE, WHICH BRINGS A 
            INTRUSIVE RIGHT ARROW ONTO THE NEW BLACKBOARD -->
            <!-- DEFENSIVE PROGRAMMING: in case the reload finishes before the new blackboard doc is created -->
            <div class="card">
              <div on:click={updateNewBlackboardLocation} style="display: flex; place-items: center; background-color: hsl(0,0%,0%, 0.80); color: white; width: {carouselWidth}px; height: {200}px">
                <div style="font-size: 4rem; margin-left: auto; margin-right: auto;">
                  click for new board
                </div>
              </div>
            </div>
          {/if}
        </ImageCarousel>
      {/if}
    </div>
  {/key}
</div>



    <!-- End of page container -->
<script>
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';

  import TabBar from '@smui/tab-bar'
	import Tab, { Icon, Label } from '@smui/tab'
  import Textfield from '@smui/textfield'
  import Button from '@smui/button';
  import Drawer, { AppContent } from '@smui/drawer'
  import List, { Item, Text } from '@smui/list'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import ReusableLiveBlackboard from '$lib/ReusableLiveBlackboard.svelte'
  import { collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ImageCarousel from '$lib/ImageCarousel.svelte';
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import { user } from '../../store.js'
  import { portal, lazyCallable } from '../../helpers/actions.js'
  import Blackboard from '$lib/Blackboard.svelte'
  import { getRandomID } from '../../helpers/utility.js';
  import { createRoomDoc, createBoardDoc } from '../../helpers/crud.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  // HOW TUTOR SIGN UP WORKS AT THE DATABASE LEVEL: 
  // 1. On initial sign-up, fully initialize a normal room, and link it to tutorDoc.designatedRoomID property
  // 2. Whenever a video finishes uploading, it will create a new room
  let tutorRoomVideosIDs = [] 
  let designatedRoomBoardIDs = []

  const id = 'Mev5x66mSMEvNz3rijym' // 14.01
  const boardsCollectionDbPath = `classes/${id}/blackboards/`

  const eltonUID = 'xC05mXTCFIRxLnyxfKnxY7oNBPi2'
  let classTutorsDocs = null
  let selectedTutorUID = eltonUID

  let rerenderKeyForCarousel = 0

  let isSigningUpAsTutor = false
  let inputFieldFirstName = ''
  let inputFieldLastName = '' 

  let carouselWidth

  onMount(() => {
    fetchClassTutors()
  })

  async function setupCarouselData () {
    await fetchVideoPortfolio()
  }

  async function fetchClassTutors () {
    const db = getFirestore()
    const tutorsRef = collection(db, `classes/${id}/tutors`)
    const tutorsSnapshot = await getDocs(tutorsRef)
    const temp = [] 
    tutorsSnapshot.forEach(doc => {
      temp.push({ id: doc.id, ...doc.data()})
    })
    classTutorsDocs = [...temp]
  }

  async function createTutorDoc ({ classID }) {
    const classDbPath = `classes/${classID}/`
    const classTutorDocPath = classDbPath + `tutors/${getRandomID()}`
    const designatedRoomID = await createRoomDoc(`classes/${classID}/`) 
    const tutorObject = {
      uid: $user.uid,
      firstName: inputFieldFirstName,
      lastName: inputFieldLastName,
      designatedRoomID
    }
    const db = getFirestore()

    await setDoc(doc(db, classTutorDocPath), tutorObject)
  }

  function fetchVideoPortfolio () {
    return new Promise(async resolve => {
      designatedRoomBoardIDs = []
      if (selectedTutorUID === '') {
        return // the user has to login first before the room exists
      }
      await fetchTopFiveVideos()
      // await fetchVideosOfTutorRoom()
      resolve()
    })
  }

  // take a parameter ideally
  async function fetchVideosOfTutorRoom (tutorUID) {
    return new Promise(async resolve => {
      let tutor 
      for (const t of classTutorsDocs) {
        if (t.uid === selectedTutorUID) {
          tutor = t 
        }
      }
      if (!tutor) {
        console.log('cant find tutor')
        return
      }

      // fetch the room
      const db = getFirestore()
      const roomSnapshot = await getDoc(doc(db, `classes/${id}/rooms/${tutor.designatedRoomID}`))
      const roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }

      tutorRoomVideosIDs = [...roomDoc.blackboards]

      designatedRoomBoardIDs = [...roomDoc.blackboards]

      resolve()
    })
  }

  // fetch top 5 explanations in 14.01, with the text and the videos
  // have tutors be able to offer classes all by themselves (almost like Shopify, all you need is an iPad)
  // short on cash? 
  async function fetchTopFiveVideos (node) {
    const db = getFirestore()
    const blackboardsRef = collection(db, boardsCollectionDbPath)

    const q = query(blackboardsRef, where('creatorUID', '==', selectedTutorUID), orderBy('viewMinutes', 'desc'), limit(5))
    
    const querySnapshot = await getDocs(q) 
    const temp = []
    querySnapshot.forEach(doc => {
      temp.push(doc.id)
    })

    designatedRoomBoardIDs = [...temp]

    return {
      // try empty
    }
  }

  async function updateNewBlackboardLocation () {
    const boardsDbPath = `classes/${id}/blackboards/`
    const db = getFirestore()

    let tutor
    for (const t of classTutorsDocs) {
      if (t.uid === selectedTutorUID) {
        tutor = t 
      }
    }
    if (!tutor) {
      alert("tutor is undefined, can't update new blackboard location")
      return 
    }
    const roomRef = doc(db, `classes/${id}/rooms/${tutor.designatedRoomID}`)
    await createBoardDoc(boardsDbPath, roomRef)
    rerenderKeyForCarousel += 1

    // because everything is re-rendered, the video portfolio will be refetched, and the new blackboard location will be re-decided
    // all we had to do is just create the docs here
  }

  async function debouncedUpdateBoardDescription ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateBoardDescription({ detail }, id),
      3000
    ) 
    debouncedVersion({ detail }, id)
  }

  async function updateBoardDescription ({ detail }, id) {
    const boardRef = doc(getFirestore(), boardsDbPath + id)
    await updateDoc(boardRef, {
      description: detail
    })
  }
</script>

<style>
  .drawer-container {
    height: 100vh;
    position: relative;
    display: flex;
  }

  .section-container {
    padding: 5px 5px; 
  }

  .section-title {
    font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);
  }

  .section-subtitle {
    font-size: 1.8rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); opacity: 0.8
  }

  .editorial-font-styles {
    font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.4rem;
  }

  .mozilla-documentation-styles {
    font-family: "Segoe UI", Roboto, sans-serif; 
    font-size: 1.4rem;
    line-height: 1.6;
    letter-spacing: 0.001em;
    color: rgba(1, 11, 1, 1);
  }

  .card:hover {
    background-size: auto 100%;
  }
  .card {
    margin-right: 10px;
  }
  .card:first-child { 
    margin-left: 0; 
  }
  .card:last-child { 
    margin-right: 0; 
  }

  .card p {
    margin: 0;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 10vw;
    color: white;
    transition: all 0.3s;
    transform: scale(1);
  }
  .card:hover p {
    background-color: rgba(0,0,0,0.3);
    transform: scale(1.3);
  }

  .tutor-business-card {
    max-width: 400px; 
    width: 90%;
    /* This is to match SMUI's card's border radius */
    border-radius: 5px;
  }

  .orange-border {
    border: 2px solid orange;
  }
</style>