{#if !$hasFetchedUser}
  <h4 style="margin-left: 16px; opacity: 70%; font-weight: 400">
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
  import { getRandomColor } from "/src/helpers/utility.js"
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { mixpanelLibrary } from '/src/mixpanel.js'
  import posthog from 'posthog-js'

  initializeDatabase()
  const auth = getAuth()
  const db = getFirestore()

  let unsubUserDocListener = null 

  onMount(async () => {
    onAuthStateChanged(auth, reactToUserChange)
    createSessionRecording()
  })
  
  function createSessionRecording () {
    posthog.init('phc_RDoJMmgzdM17agrOGJ92bC2GpY4whyQgjv8hIjEnBs7',
      {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
      }
    )
  }

  async function reactToUserChange (resultUser) {
    if (resultUser) {
      const { uid } = resultUser 

      if ($idOfServerNewUserWantedToEnter) {
        console.log('from a previous redirect request')
        goto(`/${$idOfServerNewUserWantedToEnter}/request-video`)
      }

      // NOTE: the partial hydration will give incorrect UIDs for accounts that need forwarding
      // partially hydrate the user so we can start rendering the page in parallel
      user.set({ 
        // email: resultUser.email || '', // email information is unavailable because Touchstone has some encoding for the properties
        phoneNumber: resultUser.phoneNumber || '', // '' means it's an anonymous new user playing around
        uid: resultUser.uid,
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
      else {
        await migrateOldUserSchemaToNew(mirrorUser.data())
      }

      await listenToUserDocAndHandleForwarding(resultUser.uid)

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

  async function createMirrorUser ({ uid, firstName, lastName, name, phoneNumber, email, userRef }) {
    return new Promise(async (resolve) => {
      mixpanelLibrary.track('Sign Up', {
        isPhoneAccount: phoneNumber ? true : false
      })

      const metadataRef = doc(db, 'metadata/78tDSRCiMHGnf8zcXkQt')
      const metadataSnap = await getDoc(metadataRef)

      const exampleClass = {
        name: '14.01', 
        description: "Principles of Microeconomics",
        id: 'Mev5x66mSMEvNz3rijym'
      }
      await Promise.all([
        setDoc(userRef, {
          name: name || `Beaver #${metadataSnap.data().numOfUsers}`, 
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

  async function listenToUserDocAndHandleForwarding (uid) {
    return new Promise((resolve, reject) => {
      // https://docs.mixpanel.com/docs/tracking/how-tos/identifying-users
      mixpanelLibrary.reset()
      mixpanelLibrary.identify(uid)
      const mirrorUserRef = doc(db, `/users/${uid}`)

      unsubUserDocListener = onSnapshot(mirrorUserRef, (snap) => {
        if (!snap.exists()) {
          reject("Error in listenToUserDoc snapshot listener: uid doesn't exist for ref =", mirrorUserRef.path)
          user.set(null)
        } else {
          const userDoc = snap.data()
          // keep forwarding to another account until we find a destination
          //   e.g. Ben uses Touchstone but his old videos are with his phone account
          if (userDoc.forwardingAccountUID) {
            unsubUserDocListener()
            listenToUserDocAndHandleForwarding(userDoc.forwardingAccountUID)
          } 
          else {
            // arrived at destination
            user.set({ 
              id: snap.id, 
              ...userDoc
            })
          }
          resolve()
        }
      })
    })
  }
</script>

