<div class="webflow-container">
  {#if classDoc}
    <div class="header-flex">
      <div class="header-title">
        { classDoc.name } 
        <!-- { classDoc.description } -->
      </div>

      <div class="header-subcopy-wrapper">
        <div class="header-subcopy">
          The platform covers refunds anytime, any reason - so both student & tutor are protected
        </div>
        <Button color="secondary" variant="raised" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
          <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
            Early signup for $15/week
          </Label>
        </Button>
      </div>
    </div>
  
    <!-- TO-DO: EDITORIAL-LIKE DESCRIPTION OF CLASS
    <div>
      Insights about common pitfalls in the class
    </div> -->
  {/if}

    <div style="margin-top: 1%; margin-bottom: 1%">
      <h2 style="font-family: sans-serif">
        Tutor gallery
      </h2>
      <div style="display: flex;">
        {#if classTutorsDocs}
          {#each classTutorsDocs as tutorDoc}
            <div class="tutor-business-card" style="margin-right: 20px;" class:orange-border={selectedTutorUID === tutorDoc.uid}>
              <Card style="height: 150px;">
                <PrimaryAction on:click={() => { selectedTutorUID = tutorDoc.uid }} padded style="height: 100%">
                  <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                    { tutorDoc.firstName + ' ' + tutorDoc.lastName }
                  </h2>

                  <TextAreaAutoResizing 
                    value={tutorDoc.bio || ''} 
                    on:input={(e) => debouncedUpdateTutorBio(e, tutorDoc.id)}
                    placeholder="e.g. year, major, wrote a textbook, made several Piazza posts with ~20 thanks (provide links)"
                    readonly={$user.uid !== tutorDoc.uid}
                    nonFocusedPlaceholderOpacity={0.6}
                    numberOfInitialRowsIfEmpty={2}
                    fontSizeIncludeUnits={'1rem'}
                  />
                </PrimaryAction>
              </Card>
            </div>
          {/each}
        {/if}
  
        {#if !didUserAlreadySignUpAsTutor}
          <div class="tutor-business-card" style="" class:orange-border={selectedTutorUID === ''}>
            {#if selectedTutorUID !== ''}
              <Card style="height: 150px;">
                <PrimaryAction on:click={() => selectedTutorUID = ''} padded style="height: 100%;">
                  <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                    Become a tutor in just 3 steps:
                  </h2>
                  <div style="font-family: sans-serif;">
                    <ol>
                      <li>Log in with phone</li>
                      <li>Record 1 example video</li>
                      <li>Add your Venmo</li>
                    </ol>
                  </div>
                </PrimaryAction>
              </Card>
            {:else}
              {#if !$user.phoneNumber}
                <Content>
                  <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                    1. Log in with phone
                  </h2>
                  <PhoneLogin/>
                </Content>
              {:else}
                <Content>
                  <div>
                    { $user.name } - you're logged in, create shop?
                  </div>
           
                  {#if !$user.name}
                    <div>First name</div>
                    <input bind:value={inputFieldFirstName} placeholder="Alice, Bob, Charlie"/>
    
                    <div>Last name</div>
                    <input bind:value={inputFieldLastName} placeholder=""/>
    
                    <Button on:click={createTutorDoc({ classID, firstName: inputFieldFirstName, lastName: inputFieldLastName })}>
                      Submit
                    </Button>
                  {:else if $user.name && !didUserAlreadySignUpAsTutor}
                    <Button on:click={createTutorDoc({ classID, firstName: $user.name.split(" ")[0], lastName: $user.name.split(" ")[1] })}>
                      Create shop
                    </Button>
                  {:else}
                    <div>bio</div>
                    <!-- TextAreaAutoResizing -->
                    <input placeholder="class, year, relevant class experience, links and stats to any Piazza posts, Youtube, blogs, resources you created">
                  {/if}
                </Content>
              {/if}
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <div style="margin-top: 20px;"></div>


  {#if classTutorsDocs}
    {#key selectedTutorUID + rerenderKeyForCarousel}
      <div use:setupCarouselData>
        <ImageCarousel numOfImages={designatedRoomBoardIDs.length} let:carouselWidth={carouselWidth}>
          {#if carouselWidth}
            {#if designatedRoomBoardIDs.length > 0}
              {#each designatedRoomBoardIDs as id}
                <div class="card">
                  <RenderlessListenToBoard dbPath={boardsCollectionDbPath + id} let:boardDoc={boardDoc}> 
                    {#if boardDoc}
                      <!-- <div style="font-family: sans-serif !important; color: grey; font-size: 0.7rem; margin-left: 2px; margin-top: 8px; margin-bottom: 4px;">
                        Minutes viewed: {boardDoc.viewMinutes ? boardDoc.viewMinutes.toFixed(1) : 0}
                      </div> -->

                      <!-- JUST COPY FROM [room]/[class].svelte -->
                      <div style="width: {Math.max(carouselWidth, 300)}px; margin-top: 0px; margin-bottom: 0px">
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
                          canvasWidth={Math.max(carouselWidth, 300)}
                          canvasHeight={Math.max(carouselWidth, 300) * 3/4 - 100}
                        />
                      {:else}
                        <ReusableLiveBlackboard
                          {boardDoc}
                          boardID={id}
                          boardsDbPath={boardsCollectionDbPath}
                          canvasWidth={Math.max(carouselWidth, 300)}
                          canvasHeight={Math.max(carouselWidth, 300) * 3/4 - 100}
                          on:video-uploaded={updateNewBlackboardLocation}
                        />
                      {/if}
                    {/if}
                  </RenderlessListenToBoard>
                </div>
              {/each}

              <!-- THE PRESENCE OF THIS BREAKS THE CAROUSEL IN UNEXPECTED WAYS, E.G YOU NEED A NEW PAGE, WHICH BRINGS A 
              INTRUSIVE RIGHT ARROW ONTO THE NEW BLACKBOARD -->
              <!-- DEFENSIVE PROGRAMMING: in case the reload finishes before the new blackboard doc is created -->
              <!-- <div class="card">
                <div style="background-color: hsl(0,0%,0%, 0.80); width: {carouselWidth}px; height: {200}px">
                  <Button on:click={updateNewBlackboardLocation} style="font-size: 4rem; color: white;">
                    Backup Create Board Button
                  </Button>
                </div>
              </div> -->
            {/if}
          {/if}

        </ImageCarousel>
      </div>
    {/key}
  {/if}
<!-- </div> -->


<script>
  import ImageCarousel from '$lib/ImageCarousel.svelte'
  import Card, { PrimaryAction, Content } from '@smui/card'
  import Button, { Label } from '@smui/button';
  import { user } from '../../../store.js'
  import { onDestroy, onMount, tick } from 'svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { getRandomID } from '../../../helpers/utility.js'
  import { createRoomDoc, createBoardDoc } from '../../../helpers/crud.js'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import ReusableLiveBlackboard from '$lib/ReusableLiveBlackboard.svelte'

  // export let data
  // let { classID } = data
  // $: ({ classID } = data) // so it stays in sync when `data` changes
  
  export let classID

  $: classID, fetchPageData()
  
  let classDoc

  let classTutorsDocs = null
  let designatedRoomBoardIDs = []
  let rerenderKeyForCarousel = 0
  let selectedTutorUID = null
  let inputFieldFirstName = '' 
  let inputFieldLastName = ''
  const boardsCollectionDbPath = `classes/${classID}/blackboards/`

  let isInitialFetch = true

  let unsubTutorsListener

  let didUserAlreadySignUpAsTutor = false
  $: if (classTutorsDocs) {
    didUserAlreadySignUpAsTutor = false
    for (const tutor of classTutorsDocs) {
      if (tutor.uid === $user.uid) didUserAlreadySignUpAsTutor = true
    }
  }

  function fetchPageData () {
    if (unsubTutorsListener) unsubTutorsListener()

    isInitialFetch = true
    fetchClassDoc()
    listenToClassTutors()
  }

  function listenToClassTutors () {
    const db = getFirestore()
    const ref = collection(db, `classes/${classID}/tutors`)
    unsubTutorsListener = onSnapshot(ref, snap => {
      const temp = [] 
      for (const doc of snap.docs) {
        temp.push({ id: doc.id, ...doc.data() })
      }
      classTutorsDocs = [...temp]
    })
  }

  onMount(() => {

  })

  onDestroy(() => {
    if (unsubTutorsListener) unsubTutorsListener()
  })

  async function fetchClassDoc () {
    const db = getFirestore()
    const ref = doc(db, `classes/${classID}`)
    const snapshot = await getDoc(ref)
    classDoc = { id: snapshot.id, ...snapshot.data()}
  }



  async function createTutorDoc ({ classID, firstName, lastName }) {
    // const userDbPath = `users/${$user.uid}/`
    const classDbPath = `classes/${classID}/`
    const classTutorDocPath = classDbPath + `tutors/${getRandomID()}`
    const designatedRoomID = await createRoomDoc(`classes/${classID}/`) 
    const tutorObject = {
      uid: $user.uid,
      firstName,
      lastName,
      designatedRoomID
    }
    const db = getFirestore()

    await setDoc(doc(db, classTutorDocPath), tutorObject)
    await tick()
    selectedTutorUID = tutorObject.uid
  }

  async function fetchClassTutors () {
    const db = getFirestore()
    const tutorsRef = collection(db, `classes/${classID}/tutors`)
    const tutorsSnapshot = await getDocs(tutorsRef)
    const temp = [] 
    tutorsSnapshot.forEach(doc => {
      temp.push({ id: doc.id, ...doc.data()})
    })
    classTutorsDocs = [...temp]
  }

  async function setupCarouselData () {
    await fetchVideoPortfolio()
  }

  function fetchVideoPortfolio () {
    return new Promise(async resolve => {
      if (isInitialFetch) {
        selectedTutorUID = classTutorsDocs[0].uid
        isInitialFetch = false
      }
      if (selectedTutorUID === '') {
        return // the user has to login first before the room exists
      }
      designatedRoomBoardIDs = []
      await fetchVideosOfTutorRoom()
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
      const roomSnapshot = await getDoc(doc(db, `classes/${classID}/rooms/${tutor.designatedRoomID}`))
      const roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }
      designatedRoomBoardIDs = [...roomDoc.blackboards]

      resolve()
    })
  }

  async function debouncedUpdateBoardDescription ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateBoardDescription({ detail }, id),
      3000
    ) 
    debouncedVersion({ detail }, id)
  }

  async function updateBoardDescription ({ detail }, id) {
    const boardsDbPath = `classes/${classID}/blackboards/`
    const boardRef = doc(getFirestore(), boardsDbPath + id)

    await updateDoc(boardRef, {
      description: detail
    })
    console.log("updated board, description =", detail)
  }

  async function debouncedUpdateTutorBio ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateTutorBio({ detail }, id),
      3000
    ) 
    debouncedVersion({ detail }, id)
  }

  async function updateTutorBio ({ detail }, idNotUID) {
    const tutorRef = doc(getFirestore(), `classes/${classID}/tutors/${idNotUID}`)
    updateDoc(tutorRef, {
      bio: detail
    })
  }

  
  let t = { promise: null, cancel: _ => void 0 }

  // Snippet from: https://stackoverflow.com/a/68228099/7812829
  // NOTE: this literally returns a function (you still have to call it)
  function debounce (task, ms) {
    return async (...args) => {
      try {
        t.cancel()
        t = deferred(ms)
        await t.promise
        await task(...args)
      }
      catch (_) { 
        /* prevent memory leak */ 
      }
    }
  }

  function deferred (ms) {
    let cancel, promise = new Promise((resolve, reject) => {
      cancel = reject
      setTimeout(resolve, ms)
    })
    return { promise, cancel }
  }

  async function updateNewBlackboardLocation () {
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
    const boardsDbPath = `classes/${classID}/blackboards/`
    const roomRef = doc(db, `classes/${classID}/rooms/${tutor.designatedRoomID}`)
    await createBoardDoc(boardsDbPath, roomRef)
    rerenderKeyForCarousel += 1

    // because everything is re-rendered, the video portfolio will be refetched, and the new blackboard location will be re-decided
    // all we had to do is just create the docs here
  }
</script>

<style>
  .tutor-business-card {
    max-width: 400px; 
    width: 90%;
    /* This is to match SMUI's card's border radius */
    border-radius: 5px;
  }

  .section-title {
    font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);
  }

  .section-container {
    padding: 16px 16px; 
  }

  .orange-border {
    border: 2px solid orange;
  }
</style>

