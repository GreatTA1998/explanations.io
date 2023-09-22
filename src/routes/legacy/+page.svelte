{#if legacyServers}
  {#each legacyServers as legacyServer}
    <div on:click={() => goto(legacyServer.id + '/' + legacyServer.id)}>
        <u style="color: blue;">{legacyServer.name}</u>
  
    </div>
        
  {/each}
{/if}

<script>
  import TopBannerWarnExperimental from '$lib/TopBannerWarnExperimental.svelte';
  import ExperimentalTable from '$lib/ExperimentalTable.svelte'
  import { goto } from '$app/navigation';
  import { getFirestore, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { setFirestoreDoc, updateFirestoreDoc, getFirestoreCollection } from '../../helpers/crud.js'
  import PopupSignInWithOptions from '$lib/PopupSignInWithOptions.svelte'
  import { getRandomID } from '../../helpers/utility.js'
  import ButtonPopupCreateNewClass from '$lib/ButtonPopupCreateNewClass.svelte'
  import { user } from '../../store.js'
  import { signOut, getAuth } from 'firebase/auth'
  import { onDestroy, onMount } from 'svelte'
  import ReusableButton from '$lib/ReusableButton.svelte';
  import Checkbox from '@smui/checkbox'

  let legacyServers = null
  fetchLegacyServers()

  function fetchLegacyServers () {
    return new Promise(async resolve => {
      const ref = collection(getFirestore(), 'classes')
      const q = query(ref, where('isYoutubeClass', '==', false))
      onSnapshot(q, (snap) => {
        const temp = [] 
        snap.docs.forEach(doc => {
          temp.push({
            id: doc.id, 
            path: doc.ref.path,
            ...doc.data()
          })
        })
        legacyServers = temp
        resolve()
      }) 
    })
  }
</script>