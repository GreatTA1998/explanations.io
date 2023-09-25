{#if legacyServers}
  {#each legacyServers as legacyServer}
    <div on:click={() => handleClassServerClick({id: legacyServer.id})}>
        <u style="color: blue;">{legacyServer.name}</u>
    </div>
  {/each}
{/if}

{#if isLogInPopupOpen}
  <PopupSignInWithOptions on:popup-close={() => isLogInPopupOpen = false}/>
{/if}

<script>
  import PopupSignInWithOptions from '$lib/PopupSignInWithOptions.svelte'
  import { user, idOfServerNewUserWantedToEnter } from '../../store.js'
  import { goto } from '$app/navigation';
  import { getFirestore, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { createEventDispatcher } from 'svelte'

  let legacyServers = null
  const dispatch = createEventDispatcher()
  fetchLegacyServers()
  let isLogInPopupOpen = false

  function handleClassServerClick (item) {
    if (!$user.uid) {
      idOfServerNewUserWantedToEnter.set(item.id)
      dispatch('login-required')

      // quick-fix
      isLogInPopupOpen = true

    } else { 
      goto(`${item.id}/request-video`)
    }
  }

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