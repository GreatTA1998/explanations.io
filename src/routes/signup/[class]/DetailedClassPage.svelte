<div class="webflow-container">
  {#if classDoc}
    <div class="header-flex">
      <div class="header-title">
        { classDoc.name } 
        <!-- { classDoc.description } -->
      </div>

      <!-- class="header-subcopy-wrapper" -->
      <div style="display: flex; align-items: center; width: 70%; margin-left: 4%; margin-top: 2%;">
        <slot name="past-videos-button">
          
        </slot>

        <Button on:click={() => isExplainTutoringPopupOpen = true} color="secondary" variant="outlined" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
          <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
            Explain tutoring: ${price}/week
          </Label>
        </Button>

        {#if isExplainTutoringPopupOpen}
          <!-- <BasePopup>
            <h2 slot="title">Explain-style tutoring</h2>

            <div slot="popup-content">
              Information: 
                - How to pay: Venmo elton-lin-2 with description "14.01 and your phone number" 
                - Refund policy: can refund anytime for any reason

                  <div class="header-subcopy">
                The platform covers refunds anytime, any reason - so both student & tutor are protected
              </div>
            </div>

            <Button slot="popup-buttons">

            </Button>
          </BasePopup> -->
        {/if}
  
        <slot name="private-tutoring-button">

        </slot>
      </div>
    </div>

    <slot name="editorial-or-blog-paragraph">
      <!-- CAN INCLUDE YOUTUBE FOR SHAUNTICLAIR -->
    </slot>
  {/if}

  <DetailedClassPageTutorCards 
    {classTutorsDocs}
    {selectedTutorUID} on:input={e => onTutorCardSelect(e)}
    {classID}
  />
</div>

<div style="margin-top: 20px;"></div>

{#if isNewlyOfferedClass && selectedTutorDoc}
  <RenderlessListenToRoom dbPath={`/classes/${classID}/rooms/${selectedTutorDoc.designatedRoomID}`} let:roomDoc={roomDoc}>
    {#if roomDoc}
      <DetailedClassPageBoardsAndVideos
        galleryBoardIDs={roomDoc.blackboards}
        {selectedTutorUID}
        {classTutorsDocs}
        {classID}
      />
    {/if}
  </RenderlessListenToRoom>
{:else}
  {#if classTutorsDocs && selectedTutorUID}
    <RenderlessFetch {fetchVideosFunc} {selectedTutorUID} let:galleryBoardIDs={galleryBoardIDs}>
      {#if galleryBoardIDs}
        <DetailedClassPageBoardsAndVideos
          {galleryBoardIDs}
          {selectedTutorUID}
          {classTutorsDocs}
          {classID}
        />
      {/if}
    </RenderlessFetch>
  {/if}
{/if}

<script>
  import DetailedClassPageTutorCards from './DetailedClassPageTutorCards.svelte'
  import DetailedClassPageBoardsAndVideos from './DetailedClassPageBoardsAndVideos.svelte'
  import RenderlessListenToRoom from './RenderlessListenToRoom.svelte'
  import RenderlessFetch from './RenderlessFetch.svelte'
  import Button, { Label } from '@smui/button';
  import { onDestroy, onMount, tick } from 'svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'

  export let classID
  export let isNewlyOfferedClass = true
  export let price = 20
  export let fetchVideosFunc

  let classDoc
  let classTutorsDocs = null
  let selectedTutorUID = null
  let selectedTutorDoc

  let unsubTutorsListener

  let galleryBoardIDs
  let isExplainTutoringPopupOpen = false

  onMount(async () => {
    if (unsubTutorsListener) unsubTutorsListener()
    fetchClassDoc()
    await listenToClassTutors()

    // by default select the first tutor's shop gallery
    if (classTutorsDocs.length > 0) {
      selectedTutorUID = classTutorsDocs[0].uid
      for (const tutorDoc of classTutorsDocs) {
        if (tutorDoc.uid === selectedTutorUID) {
          selectedTutorDoc = tutorDoc
        }
      }
    }
  })

  onDestroy(() => {
    if (unsubTutorsListener) unsubTutorsListener()
  })

  function onTutorCardSelect (e) {
    selectedTutorUID = e.detail.selectedTutorUID
    selectedTutorDoc = e.detail.selectedTutorDoc
  }

  // resolves when data is hydrated
  function listenToClassTutors () {
    return new Promise(resolve => {
      const db = getFirestore()
      const ref = collection(db, `classes/${classID}/tutors`)
      unsubTutorsListener = onSnapshot(ref, snap => {
        const temp = [] 
        for (const doc of snap.docs) {
          temp.push({ id: doc.id, ...doc.data() })
        }
        classTutorsDocs = [...temp]

        resolve() // only the initial resolve timing matters
      })
    })
  }

  async function fetchClassDoc () {
    const db = getFirestore()
    const ref = doc(db, `classes/${classID}`)
    const snapshot = await getDoc(ref)
    classDoc = { id: snapshot.id, ...snapshot.data()}
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
</script>

