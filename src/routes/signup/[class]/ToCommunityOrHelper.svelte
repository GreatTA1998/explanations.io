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

      <div style="display: flex; align-items: center; width: 70%;">
        <slot name="past-videos-button">
          
        </slot> 
      </div>
    </div>

    <slot name="editorial-or-blog-paragraph">
    </slot>
  {/if}


  <ToCommunityOrHelperCards
    on:community-asking
    on:helper-asking
    {isAskingCommunityOrHelper}
    {classTutorsDocs}
    {selectedTutorDoc}
    {selectedTutorUID} on:input={e => onTutorCardSelect(e)}
    {classID}
    {classDoc}
  />
</div>

<div style="margin-top: 20px;"></div>

<script>
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
  import PopupHelperProfile from '$lib/PopupHelperProfile.svelte'
  import ToCommunityOrHelperCards from './ToCommunityOrHelperCards.svelte';

  export let classID
  export let isAskingCommunityOrHelper

  let classDoc
  let classTutorsDocs = null
  let sortedClassTutorsDocs = null
  let selectedTutorUID = null
  let selectedTutorDoc
  let unsubTutorsListener
  let unsubClassDocListener
  let isRearrangeVideosPopupOpen = false
  let incrementWhenGalleryRearranged = 0
  let isHelperProfilePopupOpen

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
    isHelperProfilePopupOpen = true
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

