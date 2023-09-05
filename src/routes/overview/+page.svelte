<div style="margin-top: 2%; margin-left: 2%; ">
  <div style="display: flex; align-items: center">
    <img  
      style="cursor: pointer;"
      on:click={() => goto('/')} 
      src="/logo.png" 
      width="60"
      height="54" 
      alt="web-logo" 
      class="logo-image"
    >
    <h1 style="margin-left: 12px; font-family: sans-serif;">
      All servers
    </h1>
  </div>

  <ButtonPopupCreateNewClass/>

  {#if $user.phoneNumber}
    <button on:click={logOut}>
      Log out
    </button>
  {/if}

  <div style="width: 200px; margin-top: 20px;">
    <div style="display: flex">
      <hr style="
        display: block;
        flex: 1 1 0px;
        max-width: 100%;
        height: 0;
        max-height: 0;
        border: solid;
        border-width: thin 0 0 0;
        transition: inherit;
        border-color: rgba(0,0,0,.12);
      ">
      <div style="margin-left: 8px; margin-right: 8px; color: rgba(0,0,0,.6) !important; font-weight: 500;">Sign in with</div>
      <hr style="
        display: block;
        flex: 1 1 0px;
        max-width: 100%;
        height: 0;
        max-height: 0;
        border: solid;
        border-width: thin 0 0 0;
        transition: inherit;
        border-color: rgba(0,0,0,.12);
      ">
    </div>

    <div style="margin-top: 20px;">
    </div>
    
    <TouchstoneLogin/>

    <div 
      on:click={() => isShowingPhoneLogin = true}
      style="
      color: blue; 
      border: 1px solid blue; 
      margin-bottom: 2px;
      width: 200px;
      padding-top: 6px;
      padding-bottom: 6px;
      border-radius: 8px;
      align-text: center;
      display: flex;
      justify-content: center;
      align-items: center;
    ">
      <span class="material-icons" style="margin-right: 6px;">
        phone
      </span>
      Phone
    </div>    

    {#if isShowingPhoneLogin}
      <PhoneLogin/>
    {/if}
  </div>
</div>

<div style="margin-bottom: 2%"></div>

{#if sortedYoutubeClasses.length > 0} 
  <ExperimentalTable initialItems={sortedYoutubeClasses}/>
{/if}

<script>
  import ExperimentalTable from '$lib/ExperimentalTable.svelte'
  import { goto } from '$app/navigation';
  import { getFirestore, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { setFirestoreDoc, updateFirestoreDoc, getFirestoreCollection } from '../../helpers/crud.js'
  import { getRandomID } from '../../helpers/utility.js'
  import ButtonPopupCreateNewClass from '$lib/ButtonPopupCreateNewClass.svelte'
  import { user } from '../../store.js'
  import { signOut, getAuth } from 'firebase/auth'
  import { onDestroy } from 'svelte'
  import ReusableButton from '$lib/ReusableButton.svelte';
  import Checkbox from '@smui/checkbox'

  import TouchstoneLogin from '$lib/TouchstoneLogin.svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'

  let youtubeClasses = [] 
  let sortedYoutubeClasses = [] 

  let isShowingPhoneLogin = false

  fetchYoutubeClasses().then(() => {
    // then compute secondary statistics
    for (const c of youtubeClasses) {
      // update the statistics, it'll lag but it'll be correct
      // for the next fetch
      getFirestoreCollection(`classes/${c.id}/tutors`).then(classHelpers => {
        updateFirestoreDoc(`classes/${c.id}`, {
          minutesViewed: classHelpers.reduce((acc, helper) => acc + Number(helper.minutesViewed || 0), 0),
          paidMonthlySubscriptions: classHelpers.reduce((acc, helper) => acc + Number(helper.numOfStudents || 0), 0),
        })
      })
    }
    computeSortedYoutubeClasses()
  })

  async function logOut () {
    if ($user.uid) {
      const auth = getAuth()
      await signOut(auth)
    }
    goto('/')
  }

  // snapshot listener of all the classes
  function fetchYoutubeClasses () {
    return new Promise(resolve => {
      const ref = collection(getFirestore(), 'classes')
      const q = query(ref, where('isYoutubeClass', '==', true))
      onSnapshot(q, (snap) => {
        const temp = [] 
        snap.docs.forEach(doc => {
          temp.push({
            id: doc.id, 
            path: doc.ref.path,
            ...doc.data()
          })
        })
        youtubeClasses = temp
        resolve()
      }) 
    })
  }

  function computeSortedYoutubeClasses () {
    sortedYoutubeClasses = youtubeClasses.sort((a, b) => {
      if (a.numOfQuestions !== b.numOfQuestions) {
        return b.numOfQuestions - a.numOfQuestions
      } 
      else if (a.numOfHelpers !== b.numOfHelpers) {
        return b.numOfHelpers - a.numOfHelpers
      }
      else if (a.paidMonthlySubscriptions !== b.paidMonthlySubscriptions) {
        return b.paidMonthlySubscriptions - a.paidMonthlySubscriptions
      }
      else {
        return 0
      }
    })
  }
</script>

<style>

</style>