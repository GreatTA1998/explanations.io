{#if !$hasFetchedUser}
  <h4 style="margin-left: 16px; font-family: Roboto, sans-serif; opacity: 70%; font-weight: 400">
    Fetching your info...
  </h4>
{:else}
  <slot>

  </slot>
{/if}

<script>
	import '../app.css';
  import 'firebase/app'
  import { initializeDatabase } from '../database.js'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { getFirestore, doc, deleteDoc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore'
  import { hasFetchedUser, user } from '../store.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
 
  onMount(async () => {
    initializeDatabase()

    // USER LOGIN
    onAuthStateChanged(getAuth(), async (resultUser) => {
      if (resultUser) {
        // partially hydrate the user so we can redirect away ASAP
        user.set({ 
          phoneNumber: resultUser.phoneNumber || '', // can be anonymous new user playing around
          uid: resultUser.uid, 
          pencilColors: [] 
        })

        // hydrate the user doc fully
        const exampleClassID = 'O00mSbBEYQxTnv3cKkbe'
        const userRef = doc(getFirestore(), 'users/' + resultUser.uid)
        let dbUserSnapshot = await getDoc(userRef)
        if (!dbUserSnapshot.exists()) {
          const metadataRef = doc(getFirestore(), 'metadata/78tDSRCiMHGnf8zcXkQt')
          const metadataSnap = await getDoc(metadataRef)
          const exampleClass = {
            id: exampleClassID,
            name: '8.01', 
            description: "Classical Mechanics"
          }
          await setDoc(userRef, {
            name: `Beaver #${metadataSnap.data().numOfUsers}`, 
            uid: resultUser.uid,
            phoneNumber: resultUser.phoneNumber || '',
            enrolledClasses: [exampleClass],
            mostRecentClassAndRoomID: `/${exampleClassID}/${exampleClassID}`,
            pencilColors: ['white', "#F69637", "#A9F8BD", "#6EE2EA"],
            willReceiveText: !!resultUser.phoneNumber // can be toggled
          })
          updateDoc(metadataRef, {
            numOfUsers: increment(1)
          })
          dbUserSnapshot = await getDoc(userRef) // seems like a redundant fetch, but keep for now
        } 

        user.set({ 
          id: dbUserSnapshot.id,
          ...dbUserSnapshot.data()
        })
        
        // if not a direct URL visit, resume to the most recent class
        const { params } = $page 
        if (!params.class && !params.room) { 
          goto($user.mostRecentClassAndRoomID)
        }
      } 
      else {
        user.set({})
      }
      
      // now display the home page or server page
      hasFetchedUser.set(true) 
    })
  })
</script>

