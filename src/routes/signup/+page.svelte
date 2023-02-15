<DetailedClassPage
  isNewlyOfferedClass={false}
  fetchVideosFunc={fetchTopFiveVideos}
  price={1}
  classID={'Mev5x66mSMEvNz3rijym'}
>
  <Button on:click={() => redirectToServer(id)} slot="past-videos-button" color="secondary" variant="outlined" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
    <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
      Fall '22 server
    </Label>
  </Button>

  <!-- <Button slot="private-tutoring-button" color="secondary" variant="outlined" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
    <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
      traditional tutoring: $0/week
    </Label>
  </Button> -->

  <div slot="editorial-or-blog-paragraph" class="webflow-paragraph-1" style="font-family: sans-serif; margin-bottom: 2%; opacity: 0.8;">
    <!-- "14.01 lectures are probably the most exciting I've experienced in my 4 years here. Only thing is they don't cover the math needed for psets; therefore recitation and Office Hours play an extra-important role, and inspired the explanations here." -->
    Note: the economics department also offers in-person tutoring for <i>free</i>, email gking@mit.edu for details
    <br><br>
    <!-- Commonly, questions arise because of implicit complexity - we superimpose 3D graphs onto only a 2D domain,
    and not only that, super-impose not just one, but multiple graphs, all with the same color. Arguing optimality
    becomes hard if we aren't already familiar with the constrained optimization of f(x, y). But a simple visualization and review of the fundamental math often does the trick." -->
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
  import { collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { createRoomDoc, createBoardDoc } from '../../helpers/crud.js'
  import { goto } from '$app/navigation'

  let designatedRoomBoardIDs = []

  const id = 'Mev5x66mSMEvNz3rijym' // 14.01
  const boardsCollectionDbPath = `classes/${id}/blackboards/`

  const eltonUID = 'xC05mXTCFIRxLnyxfKnxY7oNBPi2'

  function redirectToServer (classID) {
    goto(`/${id}/${id}`)
  }

  // take a parameter ideally

  // fetch top 5 explanations in 14.01, with the text and the videos
  // have tutors be able to offer classes all by themselves (almost like Shopify, all you need is an iPad)
  // short on cash? 
  async function fetchTopFiveVideos (selectedTutorUID) {
    return new Promise(async resolve => {
      const db = getFirestore()
      const blackboardsRef = collection(db, boardsCollectionDbPath)

      const q = query(blackboardsRef, where('creatorUID', '==', selectedTutorUID), orderBy('viewMinutes', 'desc'), limit(5))
      
      const querySnapshot = await getDocs(q) 
      const temp = []
      querySnapshot.forEach(doc => {
        temp.push(doc.id)
      })

      designatedRoomBoardIDs = [...temp]
      resolve(designatedRoomBoardIDs)
      // return designatedRoomBoardIDs
    })
  }
</script>

