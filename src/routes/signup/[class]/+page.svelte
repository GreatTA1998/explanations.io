<div>
  <div class="section-container">
    {#if classDoc}
      <h2 class="section-title">
        { classDoc.name }: { classDoc.description }
      </h2>
    {/if}

    <Button color="secondary" variant="raised" style="height: 75px; margin-top: 40px;">
      <Label style="text-transform: none; padding-left: 20px; padding-right: 20px; padding-top: 50px; padding-bottom: 50px; font-size: 1.2rem; border-radius: 6px; font-weight: 600">
        Early signup for $1
      </Label>
    </Button>
  </div>

  
  <div class="section-container">
    <h2 style="font-family: sans-serif">Tutor gallery</h2>
    <div style="display: flex; justify-content: space-between;">
      {#if classTutorsDocs}
        {#each classTutorsDocs as tutorDoc}
          <div class="tutor-business-card" style="margin-left: 20px;" class:orange-border={selectedTutorUID === tutorDoc.uid}>
            <Card style="height: 150px;">
              <PrimaryAction on:click={() => { selectedTutorUID = tutorDoc.uid }} padded style="height: 100%">
                { tutorDoc.firstName + ' ' + tutorDoc.lastName }
                <br>
                <div>uid: { tutorDoc.uid }</div>
                <div>designatedRoomID: { tutorDoc.designatedRoomID}</div>
                <br>
              </PrimaryAction>
            </Card>
          </div>
        {/each}
      {/if}

      <div class="tutor-business-card" style="margin-left: 20px;" class:orange-border={selectedTutorUID === ''}>
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

            <!-- PROBLEM: it won't detect if user has name or not
              , and even if it does, you must manually call "createTutorDoc"
              even if it doesn't auto-register name.Page
              For now, you can just type it once.
            -->

            <!-- Check if the class doc exists -->
            {#if !doesUserHaveTutorDoc($user.uid)}
              {#if !$user.name}
                <div>First name</div>
                <input bind:value={inputFieldFirstName} placeholder="Alice, Bob, Charlie"/>

                <div>Last name</div>
                <input bind:value={inputFieldLastName} placeholder=""/>

                <Button on:click={createTutorDoc({ classID, firstName: inputFieldFirstName, lastName: inputFieldLastName })}>
                  Submit
                </Button>
              {:else}
                <Button on:click={createTutorDoc({ classID, firstName: $user.name.split(" ")[0], lastName: $user.name.split(" ")[1] })}>
                  Create shop
                </Button>
              {/if}
            {/if}
              
            <div>bio</div>
            <input placeholder="class, year, relevant class experience, links and stats to any Piazza posts, Youtube, blogs, resources you created">
          {/if}
        {/if}
      </div>
    </div>
  </div>

  <div style="margin-top: 20px;"></div>


  {#if classTutorsDocs}
    {#key selectedTutorUID + rerenderKeyForCarousel}
      <div use:setupCarouselData class="section-container">
        <ImageCarousel numOfImages={designatedRoomBoardIDs.length + 1} let:carouselWidth={carouselWidth}>
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
                          placeholder="Describe the blackboard..."
                          readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
                        />
                      </div>

                      {#if boardDoc.audioDownloadURL}
                        <ReusableDoodleVideo 
                          {boardDoc}
                          boardDbPath={boardsCollectionDbPath + id}
                          canvasWidth={Math.max(carouselWidth, 300)}
                          canvasHeight={Math.max(carouselWidth, 300) * 3/4 - 100}
                        />
                
                        <div style="max-height: {carouselWidth * 3/4}" class="mozilla-documentation-styles">
                          {boardDoc.description || 'No description.'}
                        </div>

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

              <!-- DEFENSIVE PROGRAMMING: in case the reload finishes before the new blackboard doc is created -->
              <div class="card">
                <div style="background-color: hsl(0,0%,0%, 0.80); width: {carouselWidth}px; height: {200}px">
                  <Button on:click={updateNewBlackboardLocation} style="font-size: 4rem; color: white;">
                    Create New Board
                  </Button>
                </div>
              </div>
            {/if}
          {/if}

        </ImageCarousel>
      </div>
    {/key}
  {/if}

  <h2 class="section-title">   
    Editorial
  </h2>
  <div>
    Insights about common pitfalls in the class
  </div>
</div>


<script>
  import ImageCarousel from '$lib/ImageCarousel.svelte'
  import Card, { PrimaryAction } from '@smui/card'
  import Button, { Label } from '@smui/button';
  import { user } from '../../../store.js'
  import { onMount } from 'svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { getRandomID } from '../../../helpers/utility.js'
  import { createRoomDoc } from '../../../helpers/crud.js'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import ReusableLiveBlackboard from '$lib/ReusableLiveBlackboard.svelte'

  export let data
  let { classID } = data
  $: ({ classID } = data) // so it stays in sync when `data` changes
  
  $: classID, fetchPageData()
  
  let classDoc

  let classTutorsDocs = null
  let designatedRoomBoardIDs = []
  let rerenderKeyForCarousel = 0
  let selectedTutorUID = ''
  let inputFieldFirstName = '' 
  let inputFieldLastName = ''
  const boardsCollectionDbPath = `classes/${classID}/blackboards/`

  let unsubTutorsListener

  console.log('classID =', classID)

  function fetchPageData () {
    console.log("classID changed fetching page data")
    if (unsubTutorsListener) unsubTutorsListener()
    fetchClassDoc()
    // fetchClassTutors()
    listenToClassTutors()
  }

  function listenToClassTutors () {
    const db = getFirestore()
    const ref = collection(db, `classes/${classID}/tutors`)
    // const q = query()
    unsubTutorsListener = onSnapshot(ref, snap => {
      const temp = [] 
      for (const doc of snap.docs) {
        temp.push({ id: doc.id, ...doc.data() })
      }
      classTutorsDocs = [...temp]
    })
  }

  onMount(() => {
    console.log("class page mounted")
    // fetchClassDoc()
    // fetchClassTutors()
  })

  async function fetchClassDoc () {
    const db = getFirestore()
    const ref = doc(db, `classes/${classID}`)
    const snapshot = await getDoc(ref)
    classDoc = { id: snapshot.id, ...snapshot.data()}
  }


  function doesUserHaveTutorDoc (uid) {
    // if (!classTutorDocs) return false 
    // for (const tutor of classTutorDocs) {
    //   if (tutor.uid === uid) return true
    // }
    return false
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
      designatedRoomBoardIDs = []
      if (selectedTutorUID === '') {
        return // the user has to login first before the room exists
      }
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
      console.log('roomDoc =', roomDoc)
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
    const boardRef = doc(getFirestore(), boardsDbPath + id)
    await updateDoc(boardRef, {
      description: detail
    })
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

