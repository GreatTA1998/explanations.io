<DetailedClassPage
  fetchVideosFunc={fetchTopFiveVideos}
  price={1}
  classID={'Mev5x66mSMEvNz3rijym'}
>
  <Button on:click={() => redirectToServer(id)} slot="past-videos-button" color="secondary" variant="outlined" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
    <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
      video archive
    </Label>
  </Button>

  <Button slot="private-tutoring-button" color="secondary" variant="outlined" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
    <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
      traditional tutoring: $0/week
    </Label>
  </Button>

  <div slot="editorial-or-blog-paragraph" class="webflow-paragraph-1" style="font-family: sans-serif;">
    What's special about 14.01 is that lectures focus on high-level intuition. While the in-class experience is very exciting, psets can feel disconnected because of the sudden need for math. Friday recitation and Office Hours therefore play a crucial role, and inspire a lot of the explanations here. 
    <br><br>
    Luckily, 90% of the math needed reduces to the constrained optimization of two variables f(x, y).
    Besides math, common questions asked across semesters are: why the supply curve for perfection competition is completely flat, 
    what happens when there are multiple firms, shutdown condition, income & substitution effect and cost minimization. Luckily - again, they call can be derived quickly in a few simple steps.
  </div>
</DetailedClassPage>

<!-- EDITORIAL HERE
  We're forced to overlap 2-3 different 3D graphs onto 2D, 
  with one-color, and try to make sense of it. 
  Math is therefore the most common source of confusion, 
  yet it's easily solved by a 10-minute review of f(x, y) constrained optimization of two variables.
-->

<!-- 
<div class="header-subcopy">
  The platform covers refunds anytime, any reason - so both student & tutor are protected
</div> 
-->

<script>
  import DetailedClassPage from './[class]/DetailedClassPage.svelte'
  import Button, { Label } from '@smui/button';
  import { onMount } from 'svelte'
  import { collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { createRoomDoc, createBoardDoc } from '../../helpers/crud.js'
  import { goto } from '$app/navigation'

  // HOW TUTOR SIGN UP WORKS AT THE DATABASE LEVEL: 
  // 1. On initial sign-up, fully initialize a normal room, and link it to tutorDoc.designatedRoomID property
  // 2. Whenever a video finishes uploading, it will create a new room
  let tutorRoomVideosIDs = [] 
  let designatedRoomBoardIDs = []

  const id = 'Mev5x66mSMEvNz3rijym' // 14.01
  const boardsCollectionDbPath = `classes/${id}/blackboards/`

  const eltonUID = 'xC05mXTCFIRxLnyxfKnxY7oNBPi2'
  let selectedTutorUID = eltonUID

  let rerenderKeyForCarousel = 0

  let isSigningUpAsTutor = false
  let inputFieldFirstName = ''
  let inputFieldLastName = '' 

  let carouselWidth

  function redirectToServer (classID) {
    goto(`/${id}/${id}`)
  }

  // take a parameter ideally

  // fetch top 5 explanations in 14.01, with the text and the videos
  // have tutors be able to offer classes all by themselves (almost like Shopify, all you need is an iPad)
  // short on cash? 
  async function fetchTopFiveVideos (selectedTutorUID) {
    const db = getFirestore()
    const blackboardsRef = collection(db, boardsCollectionDbPath)

    const q = query(blackboardsRef, where('creatorUID', '==', selectedTutorUID), orderBy('viewMinutes', 'desc'), limit(5))
    
    const querySnapshot = await getDocs(q) 
    const temp = []
    querySnapshot.forEach(doc => {
      temp.push(doc.id)
    })

    designatedRoomBoardIDs = [...temp]
    return designatedRoomBoardIDs
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

