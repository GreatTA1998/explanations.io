<DetailedClassPage
  fetchVideosFunc={fetchTopFiveVideos}
  price={1}
  classID={'Mev5x66mSMEvNz3rijym'}
>
  <Button slot="past-videos-button">
    See Past videos
  </Button>

  <Button slot="private-tutoring-button">
    Sign up for traditional tutoring $0/week
  </Button>

  <div slot="editorial-or-blog-paragraph" style="font-family: sans-serif;">
    14.01, personally, has one of the most exciting lectures. What's hard about the class is the psets - the jump between the intuitive concepts to the 
    hard math in psets can be abrupt, and there's only one math recitation each week.
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

  import Button from '@smui/button';
  import { onMount } from 'svelte'
  import { collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { createRoomDoc, createBoardDoc } from '../../helpers/crud.js'

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

  onMount(async () => {
    await fetchClassTutors()
  })


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

