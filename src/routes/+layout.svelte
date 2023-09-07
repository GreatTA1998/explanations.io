{#if !$hasFetchedUser}
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
  import { hasFetchedUser, idOfServerNewUserWantedToEnter, user, userInfoFromAuthProvider } from '../store.js'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  initializeDatabase()
  const auth = getAuth()
  const db = getFirestore()

  onMount(async () => {
    onAuthStateChanged(auth, reactToUserChange)
  })

  async function reactToUserChange (resultUser) {
    if (resultUser) {
      const { uid } = resultUser 

      if ($idOfServerNewUserWantedToEnter) {
        console.log('from a previous redirect request')
        goto(`/${$idOfServerNewUserWantedToEnter}/my-profile`)
      }

      // partially hydrate the user so we can start rendering the page in parallel
      user.set({ 
        // email: resultUser.email || '', // email information is unavailable because Touchstone has some encoding for the properties
        phoneNumber: resultUser.phoneNumber || '', // '' means it's an anonymous new user playing around
        uid,
        pencilColors: [] 
      })

      // fetch full user information in the background
      const userRef = doc(db, 'users/' + uid)
      let mirrorUser = await getDoc(userRef)

      // new user creation
      if (!mirrorUser.exists()) {      
        await createMirrorUser({ 
          uid, 
          userRef, 
          ...$userInfoFromAuthProvider 
        })
      } 

      await migrateOldUserSchemaToNew(mirrorUser.data())

      await listenToUserDoc(uid)
      // this promise resolves when we receive full user snapshot for the first time,
      // exactly the place to handle redirection
      if ($page.url.pathname === '/' && $user.mostRecentClassAndRoomID) {
        goto($user.mostRecentClassAndRoomID)
      }
    } 

    // user not logged in
    else {
      try {
        // await signInAnonymously(auth)
      } catch (error) {
        console.error(error)
        alert("Error code & message, see console for details =", error.code + ' ' + error.message)
      }
    }
    
    hasFetchedUser.set(true) 
  }

  function migrateOldUserSchemaToNew (mirrorUserDoc) {
    return new Promise(async (resolve) => {
      const correctionObj = {}
      if (!mirrorUserDoc.pencilColors) {
        correctionObj.pencilColors = ['white', "#F69637", "#A9F8BD", "#6EE2EA", "hsla(147,100%,60%,1)", "hsla(6,100%,60%,1)", "hsla(143,100%,60%,1)"]
      }
      if (!mirrorUserDoc.pencilWidths) {
        correctionObj.pencilWidths = [1, 1, 1, 1, 1, 1, 1]
      }
      if (!mirrorUserDoc.name) {
        const metadataRef = doc(db, 'metadata/78tDSRCiMHGnf8zcXkQt')
        const metadataSnap = await getDoc(metadataRef)
        correctionObj.name = `Beaver #${metadataSnap.data().numOfUsers}`
      }
      if (!mirrorUserDoc.beaverProfilePicColor) {
        function getRandomColor () {
            return "hsla(" + ~~(360 * Math.random()) + "," + // hue i.e. the "color"
                          "100%,"+  // 100% saturation i.e. maximize on its vividness and purity
                          "60%,1)"; // 60% lightness (how much black / white mix, otherwise too faded), 1 alpha
        }
        correctionObj.beaverProfilePicColor = getRandomColor()
      }
      // ...more if statements can be added

      if (Object.keys(correctionObj).length > 0) {
        console.log('correctionObj =', correctionObj)
        await updateFirestoreDoc(`users/${mirrorUserDoc.uid}`, correctionObj)
        console.log('migrated to new schema')
      }
      resolve()
    })
  }

  async function createMirrorUser ({ uid, firstName, lastName, fullName, phoneNumber, email, userRef }) {
    return new Promise(async (resolve) => {
      const metadataRef = doc(db, 'metadata/78tDSRCiMHGnf8zcXkQt')
      const metadataSnap = await getDoc(metadataRef)

      const exampleClass = {
        name: '14.01', 
        description: "Principles of Microeconomics",
        id: 'Mev5x66mSMEvNz3rijym'
      }
      await Promise.all([
        setDoc(userRef, {
          name: `Beaver #${metadataSnap.data().numOfUsers}`, 
          firstName: firstName || '',
          lastName: lastName || '',
          uid,
          phoneNumber: phoneNumber || '', // anonymous user has no phone number
          email: email || '',
          enrolledClasses: [exampleClass],
          mostRecentClassAndRoomID: '', // AF('') means no class was visited
          pencilColors: ['white', "#F69637", "#A9F8BD", "#6EE2EA", "hsla(147,100%,60%,1)", "hsla(6,100%,60%,1)", "hsla(143,100%,60%,1)"],
          pencilWidths: [1, 1, 1, 1, 1, 1, 1],
          willReceiveText: !!phoneNumber // can be toggled in future
        }),
        updateDoc(metadataRef, {
          numOfUsers: increment(1)
        })
      ])

      resolve()
    })
  }

  async function listenToUserDoc (uid) {
    return new Promise((resolve, reject) => {
      const mirrorUserRef = doc(db, `users/${uid}`)

      // no need to unsub because it'd mean we quit the application
      onSnapshot(mirrorUserRef, userDoc => {
        if (!userDoc.exists) {
          reject("Error in listenToUserDoc: uid doesn't exist")
          user.set(null)
        } else {
          user.set({ 
            id: userDoc.id, 
            ...userDoc.data() 
          })
          resolve()
        }
      })
    })
  }
</script>

