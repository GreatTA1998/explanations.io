{#if !$hasFetchedUser}
  <h4 style="margin-left: 10px; font-family: Roboto, sans-serif; opacity: 70%; font-weight: 400">Fetching your info...</h4>
{:else}
  <slot>

  </slot>
{/if}

<script>
	import '../app.css';
  import 'firebase/app'
  import { initializeDatabase, fetchDoc, createDoc, wipeDoc } from '../database.js'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { getFirestore, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
  import { hasFetchedUser, user } from '../store.js'
  import { onMount } from 'svelte'
  import { browser } from '$app/env'

  onMount(async () => {
    if (!browser) return // can't handle authentication logic in the server, also database I'm GUESSING
    initializeDatabase()

    // USER LOGIN
    onAuthStateChanged(getAuth(), async (resultUser) => {
      hasFetchedUser.set(true) 
      if (resultUser) {
        // partially hydrate the user so we can redirect away ASAP
        user.set({ 
          phoneNumber: resultUser.phoneNumber, 
          uid: resultUser.uid, 
          pencilColors: [] 
        })

        // hydrate the user doc fully
        const userRef = doc(getFirestore(), 'users/' + resultUser.uid)
        let dbUserSnapshot = await getDoc(userRef)
        if (!dbUserSnapshot.exists()) {
          const metadataSnap = await getDoc(
            doc(getFirestore(), 'metadata/78tDSRCiMHGnf8zcXkQt')
          )
          await setDoc(userRef, {
            name: `Beaver #${metadataSnap.data().numOfUsers}`, 
            uid: resultUser.uid,
            phoneNumber: resultUser.phoneNumber,
            pencilColors: ['white', "#F69637", "#A9F8BD", "#6EE2EA"],
            willReceiveText: true // can be toggled
          })
          dbUserSnapshot = await getDoc(userRef) // seems like a redundant fetch, but keep for now
        } 
        user.set({ id: dbUserSnapshot.id, ...dbUserSnapshot.data()})
      } 
      else {
        user.set({})
      }
    })
  })
</script>

