<DetailedClassPage
  isNewlyOfferedClass={false}
  fetchVideosFunc={fetchTopFiveVideos}
  classID={'Mev5x66mSMEvNz3rijym'}
>


<div slot="past-videos-button" class="header-subcopy-wrapper">
  <div class="header-subcopy">
    Note: the economics department sponsors in-person tutoring for <i>free</i>, email gking@mit.edu for details
  </div>
  <Button on:click={() => redirectToServer(id)} color="secondary" variant="outlined" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
    <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
      Fall '22 server
    </Label>
  </Button>
</div>
</DetailedClassPage>

<!-- EDITORIAL HERE
  We're forced to overlap 2-3 different 3D graphs onto 2D, 
  with one-color, and try to make sense of it. 
  Math is therefore the most common source of confusion, 
  yet it's easily solved by a 10-minute review of f(x, y) constrained optimization of two variables.
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

