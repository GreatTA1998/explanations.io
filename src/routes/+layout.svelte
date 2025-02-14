<div>
  {#if !$hasFetchedUser}
    <h4 style="margin-left: 16px; opacity: 70%; font-weight: 400">
      Fetching your info...
    </h4>
  {:else}
    {#if $isFullServerMode}
      <TheTopNavbar isHomeScreenVisible={!$isFullServerMode}/>
    {/if}

    {#if $didRenderSplashScreen && !$isFullServerMode}
      <SplashLandingPage />
    {/if}

    <!-- Full Server Page will be injected here -->
    <slot />
  {/if}
</div>

<script>
  import SplashLandingPage from '$lib/SplashLandingPage/index.svelte'
  import TheTopNavbar from '$lib/TheTopNavbar/index.svelte'

  import { initializeDatabase } from '../database.js'
  import 'firebase/app'
  import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
  import { getFirestore, doc, deleteDoc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore'

  import { updateFirestoreDoc, getFirestoreDoc } from '/src/helpers/crud.js'
  import { getRandomColor } from "/src/helpers/utility.js"
  import { handleServerRedirect } from '/src/helpers/everythingElse.js'

  import { hasFetchedUser, user, userInfoFromAuthProvider, isFullServerMode, didRenderSplashScreen } from '../store.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  import posthog from 'posthog-js'

  import { translateJSConstantsToCSSVariables } from '../helpers/CONSTANTS.js'
  import "../app.scss"

  initializeDatabase()
  const auth = getAuth()
  const db = getFirestore()

  let unsubUserDocListener = null 

  onMount(async () => {
    translateJSConstantsToCSSVariables()

    onAuthStateChanged(auth, reactToUserChange)

    createSessionRecording()
    
    window.addEventListener('scroll', handleOnScroll)
  })

  function handleOnScroll (e) {
    const scrollTriggerBuffer = 120
    if (window.scrollY >= window.innerHeight - scrollTriggerBuffer) {
      isFullServerMode.set(true)
    }
  }
  
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
      isFullServerMode.set(true)

      const { uid } = resultUser 

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
    } 

    // user not logged in
    else {
      try {
        didRenderSplashScreen.set(true)

        const algebraAndNumberTheoryServer = await getFirestoreDoc(`classes/${'I90n3qyz45VmY0azjbhh'}`)
        handleServerRedirect(algebraAndNumberTheoryServer)

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

          // QUICKFIX: for some reason user.set() is still not hydrated even after `await listenToUserDocAndHandleForwarding()`, so we just 
          // handle navigation directly here
          // only redirect from the home page '/' path, for specific URLs don't fuck with it

          // COMMENTED OUT FOR TESTING
          if ($page.url.pathname === '/' && $user.mostRecentServerID) {
            goto(`/${$user.mostRecentServerID}/question`)
          }

          resolve()
        }
      })
    })
  }
</script>

