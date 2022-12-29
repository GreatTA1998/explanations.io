{#if !hasFetchedUser}
  <h4 style="margin-left: 16px; font-family: Roboto, sans-serif; opacity: 70%; font-weight: 400">
    Fetching your info...
  </h4>
{:else}
  <slot>

  </slot>
{/if}

<script>
	import "../app.scss";
  import 'firebase/app'
  import { initializeDatabase } from '../database.js'
  import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
  import { getFirestore, doc, deleteDoc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore'
  import { hasFetchedUser, user } from '../store.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  initializeDatabase()
 
  onMount(async () => {
    // USER LOGIN
    const auth = getAuth()
    onAuthStateChanged(auth, async (resultUser) => {
      if (resultUser) {
        // partially hydrate the user so we can redirect away ASAP
        user.set({ 
          phoneNumber: resultUser.phoneNumber || '', // can be anonymous new user playing around
          uid: resultUser.uid, 
          pencilColors: [] 
        })

        // hydrate the user doc fully
        const exampleClassID = 'Mev5x66mSMEvNz3rijym' // 14.01 (used to be 8.01 'O00mSbBEYQxTnv3cKkbe')
        const userRef = doc(getFirestore(), 'users/' + resultUser.uid)
        let dbUserSnapshot = await getDoc(userRef)
        if (!dbUserSnapshot.exists()) {
          const metadataRef = doc(getFirestore(), 'metadata/78tDSRCiMHGnf8zcXkQt')
          const metadataSnap = await getDoc(metadataRef)
          // TO-DO: change to 14.01
          const exampleClass = {
            id: exampleClassID,
            name: '14.01', 
            description: "Principles of Microeconomics"
          }
          await setDoc(userRef, {
            name: `Beaver #${metadataSnap.data().numOfUsers}`, 
            uid: resultUser.uid,
            phoneNumber: resultUser.phoneNumber || '', // anonymous user has no phone number
            enrolledClasses: [exampleClass],
            mostRecentClassAndRoomID: '', // AF('') means no class was visited
            pencilColors: ['white', "#F69637", "#A9F8BD", "#6EE2EA", "hsla(147,100%,60%,1)", "hsla(6,100%,60%,1)", "hsla(143,100%,60%,1)"],
            pencilWidths: [1, 1, 1, 1, 1, 1, 1],
            willReceiveText: !!resultUser.phoneNumber // can be toggled in future
          })
          updateDoc(metadataRef, {
            numOfUsers: increment(1)
          })
          dbUserSnapshot = await getDoc(userRef) // seems like a redundant fetch, but keep for now
        } 

        listenToUserDoc(dbUserSnapshot.id)

        user.set({ 
          id: dbUserSnapshot.id,
          ...dbUserSnapshot.data()
        })
        
        // if not a direct URL visit, resume to the most recent class
        const { params } = $page 
        if (!params.class && !params.room) { 
          if ($user.mostRecentClassAndRoomID) {
            goto($user.mostRecentClassAndRoomID)
          }
        }
      } 

      // user not logged in
      else {
        try {
          await signInAnonymously(auth)
        } catch (error) {
          console.error(error)
          alert("Error code & message =", error.code + ' ' + error.message)
        }
      }
      // now display the home page or server page
      hasFetchedUser.set(true) 
    })
  })

  async function listenToUserDoc (uid) {
    return new Promise((resolve, reject) => {
      const db = getFirestore()
      const mirrorUserRef = doc(db, `users/${uid}`)

      // no need to unsub because that means we quit the application
      const unsub = onSnapshot(mirrorUserRef, userDoc => {
        if (!userDoc.exists) {
          reject("Error in listenToUserDoc: uid doesn't exist")
          user.set(null) // context.commit("SET_USER", null);
        } else {
          user.set(userDoc.data()) // context.commit("SET_USER", userDoc.data());
          resolve()
        }
      })
    })
  }
</script>

