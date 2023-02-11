{#if classTutorsDocs}
  <div style="margin-top: 3%; margin-bottom: 1%">
    <h2 style="font-family: sans-serif; color: grey; font-size: 1.3rem; font-weight: 400;">
      Video gallery
    </h2>

    <div style="display: flex; overflow-x: auto;">
      {#each classTutorsDocs as tutorDoc}
        <div class="tutor-business-card" style="margin-right: 1%;" class:orange-border={selectedTutorUID === tutorDoc.uid}>
          <Card style="height: 200px;" variant="outlined">
            <PrimaryAction on:click={() => { dispatch('input', { selectedTutorUID: tutorDoc.uid, selectedTutorDoc: tutorDoc })}} padded style="height: 100%">
              <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                { tutorDoc.name }
              </h2>

              <div style="margin-top: 16px;"></div>

              {#if $user.uid === tutorDoc.uid}
                <TextAreaAutoResizing 
                  value={tutorDoc.bio || ''} 
                  on:input={(e) => debouncedUpdateTutorBio(e, tutorDoc.id)}
                  placeholder="e.g. year, major, your teaching style/philosophy"
                  readonly={$user.uid !== tutorDoc.uid}
                  nonFocusedPlaceholderOpacity={0.6}
                  numberOfInitialRowsIfEmpty={2}
                  fontSizeIncludeUnits={'1rem'}
                />
              {:else}
                <div style="font-family: sans-serif; font-size: 1rem;">{tutorDoc.bio || 'No bio yet'}</div>
              {/if}
            </PrimaryAction>
          </Card>
        </div>
      {/each}

      {#if !didUserAlreadySignUpAsTutor}
        <div class="tutor-business-card" style="" class:orange-border={selectedTutorUID === ''}>
          {#if selectedTutorUID !== ''}
            <Card style="height: 200px;" variant="outlined">
              <PrimaryAction on:click={() => { dispatch('input', { selectedTutorUID: '' })}} padded style="height: 100%;">
                <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                  Setup your shop
                </h2>
                <div style="font-family: sans-serif;">
                  <ol>
                    <li>Log in with phone</li>
                    <li>Record example videos</li>
                    <li>Add your Venmo</li>
                    <li>Technical issues? Call 503 250 3868</li>
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
                  Welcome { $user.name || '' }, create shop?
                </div>
          
                {#if !$user.name || ($user.name && $user.name.split(' ')[0] === 'Beaver')}
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
                {/if}
              </Content>
            {/if}
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}

<script>
  import Card, { PrimaryAction, Content } from '@smui/card'
  import Button, { Label } from '@smui/button';
  import { user } from '../../../store.js'
  import { createEventDispatcher, tick } from 'svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { getRandomID } from '../../../helpers/utility.js'
  import { createRoomDoc, createBoardDoc } from '../../../helpers/crud.js'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import BasePopup from '$lib/BasePopup.svelte'

  export let classTutorsDocs
  export let selectedTutorUID
  export let classID

  const dispatch = createEventDispatcher()

  let inputFieldFirstName = '' 
  let inputFieldLastName = ''

  let didUserAlreadySignUpAsTutor = false

  $: if (classTutorsDocs) {
    didUserAlreadySignUpAsTutor = false
    for (const tutor of classTutorsDocs) {
      if (tutor.uid === $user.uid) didUserAlreadySignUpAsTutor = true
    }
  }

  async function createTutorDoc ({ classID, firstName, lastName }) {
    if (!firstName || !lastName) return
    // const userDbPath = `users/${$user.uid}/`
    const classDbPath = `classes/${classID}/`
    const classTutorDocPath = classDbPath + `tutors/${getRandomID()}`
    const designatedRoomID = await createRoomDoc(`classes/${classID}/`) 
    const tutorObject = {
      uid: $user.uid,
      name: firstName + ' ' + lastName,
      designatedRoomID
    }
    const db = getFirestore()

    await setDoc(doc(db, classTutorDocPath), tutorObject)
    await tick()
    selectedTutorUID = tutorObject.uid
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

  // WARNING: COULD BE DANGEROUS THAT THE DEBOUNCED VARIABLE T IS SHARED BETWEEN TWO FUNCTIONS, THEY COULD DEBOUNCE EACH OTHER WHICH IS BAD
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
</script>

<style>
  .tutor-business-card {
    max-width: 400px; 

    width: 90%;
    /* This is to match SMUI's card's border radius */
    border-radius: 5px;
  }

  .orange-border {
    border: 2px solid orange;
  }
</style>
