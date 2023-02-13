<div class="webflow-container" style="width: 95%">
  {#if classDoc}
    <div class="header-flex">
      <div class="header-title">
        { classDoc.name } 
        <!-- { classDoc.description } -->
      </div>

      <!-- class="header-subcopy-wrapper" -->
      <div style="display: flex; align-items: center; width: 70%; margin-left: 4%; margin-top: 2%;">
        {#if classID === 'lvzQqyZIV1wjwYnRV9hn'}
          <Button on:click={() => handleLoginAndEnterServer({ classID })} color="secondary" variant="outlined" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
            <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
              Spring '23 server
            </Label>
          </Button>
        {/if}

        <slot name="past-videos-button">
          
        </slot>

        <Button on:click={() => isExplainTutoringPopupOpen = true} color="secondary" variant="outlined" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
          <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
            Youtube-style tutoring: ${price}/week
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

    {#if classID === 'cLF9unbCuplsl3JmHRbu'}
      <div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 0; margin-bottom: 10px">
        <iframe 
          style="margin-bottom: 30px;" 
          width="{400}" height="{250}" 
          src="https://www.youtube-nocookie.com/embed/EKiZgooMjb8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        
        <div class="blog-text-section-container">
          <h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
            Story behind 6.036 Piazza: Shaunticlair Ruiz
          </h1>
          <div style="margin-bottom: 20px; opacity: 0.8" class="blog-description-font-styles">
            "There's a very common belief, especially at MIT, that if you derive it all yourself, if you put it all together yourself, you're a better learner. And I'd say, maybe if you have the time to do this rigorously and carefully, but there's lots of problems like students can form misconceptions, students can spend significantly longer and actually be less efficient. And the students may not care about a very specific kind of deep understanding they get."
          </div>	
          <a href="https://eltonlin.substack.com/publish/post/99258345" target="_blank" style="text-decoration: none !important;">
            <Button variant="outlined">
              Read story
            </Button>		
          </a>
        </div>	
      </div>
    {/if}

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
  {#key selectedTutorUID}
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
  {/key}
{:else}
  <!-- `key` needed to need to refetch new videos when different tutors are clicked --> 
  {#key selectedTutorUID}
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
  {/key}
{/if}

<script>
  import DetailedClassPageTutorCards from './DetailedClassPageTutorCards.svelte'
  import DetailedClassPageBoardsAndVideos from './DetailedClassPageBoardsAndVideos.svelte'
  import RenderlessListenToRoom from './RenderlessListenToRoom.svelte'
  import RenderlessFetch from './RenderlessFetch.svelte'
  import Button, { Label } from '@smui/button';
  import { onDestroy, onMount, tick } from 'svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { user } from '../../../store.js'
  import { goto } from '$app/navigation'

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

  function handleLoginAndEnterServer ({ classID }) {
    goto(`/${classID}/${classID}`)
  }

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

