<div class="webflow-container" style="width: 95%">
  {#if classDoc}
    <div style="display: flex; align-items: center">
      {#if $classDetailsDrawerWidth === 0}
        <Button on:click={toggleClassDetailsDrawerWidth} style="margin-right: 16px">
          <span class="material-icons" style="font-size: 3rem;">
            start
          </span>
        </Button>  
      {/if} 
<!-- 
      <div class="header-title" style="font-size: 2rem;">
        { classDoc.name } 
      </div> -->

      <div style="display: flex; align-items: center; width: 70%;">
        <slot name="past-videos-button">
          
        </slot> 

        {#if isSubscriber || isTutor}
          <Button on:click={() => goto(`/${classID}/${classID}`)} color="secondary" variant="outlined" style="height: 60px; margin-top: 16px; margin-bottom: 1rem; border-radius: 0px;">
            <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
              { classDoc.name } server (videos are subscribers-only, but made freely available at end of semester)
            </Label>
          </Button>
        {:else}
          <!-- <div class="header-subcopy-wrapper"> -->
            <Button disabled color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 1rem; border-radius: 0px;">
              <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
                { classDoc.name } server (videos are subscribers-only, but made freely available at end of semester)
              </Label>
            </Button>
          <!-- </div> -->
        {/if}
      </div>
    </div>

    <!-- {#if classID === 'cLF9unbCuplsl3JmHRbu'}
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
    {/if} -->

    <slot name="editorial-or-blog-paragraph">
      <!-- CAN INCLUDE YOUTUBE FOR SHAUNTICLAIR -->
    </slot>
  {/if}

  <DetailedClassPageTutorCards 
    {classTutorsDocs}
    {selectedTutorDoc}
    {selectedTutorUID} on:input={e => onTutorCardSelect(e)}
    {classID}
    {classDoc}
  />
</div>

<div style="margin-top: 20px;"></div>
<!-- `key` needed to need to refetch new videos when different tutors are clicked --> 
{#key selectedTutorUID}
  {#if classTutorsDocs && selectedTutorUID}
    {#key incrementWhenGalleryRearranged}
      <RenderlessFetch {selectedTutorUID} {classID} let:galleryBoardIDs={galleryBoardIDs}>
        {#if galleryBoardIDs}
          <DetailedClassPageBoardsAndVideos
            on:video-rearrange={() => isRearrangeVideosPopupOpen = true}
            {galleryBoardIDs}
            {selectedTutorUID}
            {classTutorsDocs}
            {classID}
            {selectedTutorDoc}
          />
          {#if isRearrangeVideosPopupOpen}
            <PopupRearrangeVideos
              {galleryBoardIDs}
              {selectedTutorDoc}
              {classID}
              on:popup-close={() => isRearrangeVideosPopupOpen = false}
              on:confirm-clicked={() => {}}
              on:video-rearranged={() => incrementWhenGalleryRearranged += 1}
            />
          {/if}
        {/if}
      </RenderlessFetch>
    {/key}
  {/if}
{/key}

<script>
  import DetailedClassPageTutorCards from './DetailedClassPageTutorCards.svelte'
  import DetailedClassPageBoardsAndVideos from './DetailedClassPageBoardsAndVideos.svelte'
  import PopupRearrangeVideos from '$lib/PopupRearrangeVideos.svelte'
  import RenderlessListenToRoom from './RenderlessListenToRoom.svelte'
  import RenderlessFetch from './RenderlessFetch.svelte'
  import Button, { Label } from '@smui/button';
  import { onDestroy, onMount, tick } from 'svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { user, classDetailsDrawerWidth } from '../../../store.js'
  import { goto } from '$app/navigation'
  import { toggleClassDetailsDrawerWidth } from '../../../helpers/everythingElse.js'
  import ReusableButton from '$lib/ReusableButton.svelte'

  export let classID
  export let fetchVideosFunc

  let classDoc
  let classTutorsDocs = null
  let sortedClassTutorsDocs = null
  let selectedTutorUID = null
  let selectedTutorDoc
  let unsubTutorsListener
  let unsubClassDocListener
  let isRearrangeVideosPopupOpen = false
  let incrementWhenGalleryRearranged = 0

  $: isSubscriber = $user.idsOfSubscribedClasses ? $user.idsOfSubscribedClasses.includes(classID) : false
  $: isTutor = $user.idsOfTutoringClasses ? $user.idsOfTutoringClasses.includes(classID) : false

  onMount(async () => {
    if (unsubTutorsListener) unsubTutorsListener()
    listenToClassDoc()
    await listenToClassTutors()

    // by default select the first tutor's shop gallery
    if (classTutorsDocs.length > 0) {
      const copy = [...classTutorsDocs]
      sortedClassTutorsDocs = copy.sort((t1, t2) => (t2.numOfVideos || 0) - (t1.numOfVideos || 0))

      selectedTutorDoc = sortedClassTutorsDocs[0]
      selectedTutorUID = sortedClassTutorsDocs[0].uid
    }
  })

  onDestroy(() => {
    if (unsubTutorsListener) unsubTutorsListener()
    if (unsubClassDocListener) unsubClassDocListener()
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
          temp.push({ id: doc.id, path: doc.ref.path, ...doc.data() })
        }
        classTutorsDocs = [...temp]

        resolve() // only the initial resolve timing matters
      })
    })
  }


  async function listenToClassDoc () {
    const db = getFirestore()
    const ref = doc(db, `classes/${classID}`)
    unsubClassDocListener = onSnapshot(ref, (snapshot) => {
      classDoc = { id: snapshot.id, ...snapshot.data()}
    })
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

