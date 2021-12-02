{#if !$hasFetchedUser}
  <h2>Fetching user data...</h2>
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

  onMount(() => {
    initializeDatabase()

    // USER LOGIN
    onAuthStateChanged(getAuth(), async (resultUser) => {
      hasFetchedUser.set(true) 
      if (resultUser) {
        // partially hydrate the user
        user.set({ 
          phoneNumber: resultUser.phoneNumber, 
          uid: resultUser.uid, 
          pencilColors: [] 
        })

        // hydrate the user doc fully
        const userRef = doc(
          getFirestore(), 
          'users/' + resultUser.uid
        )
        let dbUserSnapshot = await getDoc(userRef)
        if (dbUserSnapshot.exists()) {
          console.log('user exists, data =', dbUserSnapshot.data())
          user.set({ id: dbUserSnapshot.id, ...dbUserSnapshot.data()})
        } else {
          await setDoc(userRef, {
            name: resultUser.displayName, 
            uid: resultUser.uid,
            phoneNumber: resultUser.phoneNumber,
            pencilColors: ['white', "#F69637", "#A9F8BD", "#6EE2EA"] 
          })
          let dbUserSnapshot = await getDoc(userRef)
          user.set({ id: dbUserSnapshot.id, ...dbUserSnapshot.data()})
        }
      } 
      else {
        user.set({})
        console.log('user is not logged in')
      }
    })
  })
</script>

