{#if $hasFetchedUser}
  <slot>

  </slot>
{/if}

<script>
  import 'firebase/app'
  import { initializeDatabase, fetchDoc, createDoc, wipeDoc } from '../database.js'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { getFirestore, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
  import { hasFetchedUser, user } from '../store.js'
  import { onMount } from 'svelte'

  onMount(() => {
    console.log('__layout.svelte: initializeDatabase()')
    initializeDatabase()

    onAuthStateChanged(getAuth(), async (resultUser) => {
      hasFetchedUser.set(true) 
      if (resultUser) {
        // await wipeDoc('users', resultUser.uid)
        // console.log('deleted')
        console.log('result user =', resultUser)

        // partially hydrate the user
        user.set({ 
          phoneNumber: resultUser.phoneNumber, 
          uid: resultUser.uid, 
          pencilColors: [] 
        })
        console.log('partially hydrated $user =', $user)

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
          console.log('successfully set document')
          let dbUserSnapshot = await getDoc(userRef)
          user.set({ id: dbUserSnapshot.id, ...dbUserSnapshot.data()})
        }
        console.log('at the end of __layout, $user =', $user)
      } 
      else {
        user.set({})
        console.log('user is not logged in')
      }
    })
  })
</script>

