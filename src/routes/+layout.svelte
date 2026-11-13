<svelte:window on:keydown={restoreDrawerOnEscape} />

<div>
  {#if !$hasFetchedUser}
    <h4 style="margin-left: 16px; opacity: 70%; font-weight: 400">
      Fetching your info...
    </h4>
  {:else}
    {#if $isFullServerMode && !$page.params.class && $page.url.pathname !== '/' && !$sidebarFullscreen}
      <NavSideDrawer floating />
    {/if}

    {#if $sidebarFullscreen && $page.url.pathname !== '/'}
      <button
        type="button"
        class="show-drawer-toggle"
        aria-label="Show the drawer"
        title="Show the drawer"
        on:click={() => sidebarFullscreen.set(false)}
      >
        <HandDrawnDrawerArrow pointing="right" />
      </button>
    {/if}

    {#if $didRenderSplashScreen && !$isFullServerMode}
      <SplashLandingPage />
    {/if}

    <!-- Full Server Page will be injected here -->
    <slot />
  {/if}
</div>

<script>
  import NavSideDrawer from '$lib/NavSideDrawer/index.svelte'
  import HandDrawnDrawerArrow from '$lib/NavSideDrawer/HandDrawnDrawerArrow.svelte'
  import SplashLandingPage from '$lib/SplashLandingPage/index.svelte'

  import { initializeDatabase } from '../database.js'
  import 'firebase/app'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { getFirestore, doc, deleteDoc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore'

  import { updateFirestoreDoc, getFirestoreDoc } from '/src/helpers/crud.js'
  import { getRandomColor } from "/src/helpers/utility.js"
  import {
    DEFAULT_HOMEPAGE_SERVER_ID,
    homepageServerPath,
    loadErrorAlert,
    loggedInRootDestination,
    loggedOutEntry
  } from '/src/helpers/visitorEntry.js'

  import { hasFetchedUser, user, userInfoFromAuthProvider, isFullServerMode, didRenderSplashScreen, sidebarFullscreen } from '../store.js'
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
  let rootEntryToken = 0

  onMount(async () => {
    translateJSConstantsToCSSVariables()

    onAuthStateChanged(auth, reactToUserChange)

    createSessionRecording()

    window.addEventListener('scroll', handleOnScroll)
  })

  function handleOnScroll () {
    const scrollTriggerBuffer = 120
    if (window.scrollY >= window.innerHeight - scrollTriggerBuffer) {
      isFullServerMode.set(true)
    }
  }

  function restoreDrawerOnEscape (event) {
    if (event.key === 'Escape' && $sidebarFullscreen) {
      sidebarFullscreen.set(false)
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
    else if (loggedOutEntry($page.url.pathname) === 'homepage') {
      didRenderSplashScreen.set(true)
      isFullServerMode.set(false)
    }
    else if (!$didRenderSplashScreen) {
      // A shared server or room URL is the destination. Show that page
      // instead of a homepage splash or another server.
      isFullServerMode.set(true)
    }
    
    hasFetchedUser.set(true) 
  }

  // Auth runs once. Back, and any later client visit to /, has to open the
  // homepage again. Direct links never enter this branch.
  $: if ($hasFetchedUser && $page.url.pathname === '/') {
    openRootPage($user && $user.uid, $user && $user.mostRecentServerID)
  }

  function openRootPage (uid, mostRecentServerID) {
    if ($page.url.pathname !== '/') return
    const token = ++rootEntryToken
    if (uid) {
      const destination = loggedInRootDestination('/', mostRecentServerID)
      if (destination) goto(destination, { replaceState: true })
      return
    }
    openLoggedOutHomepage(token)
  }

  async function openLoggedOutHomepage (token) {
    didRenderSplashScreen.set(true)
    isFullServerMode.set(false)
    let server = null
    try {
      server = await getFirestoreDoc(`classes/${DEFAULT_HOMEPAGE_SERVER_ID}`)
    } catch (error) {
      console.error(error)
      if (token !== rootEntryToken) return
      alert(loadErrorAlert(error))
    }
    if (token !== rootEntryToken || $page.url.pathname !== '/') return
    const path = homepageServerPath(server)
    // The splash is already on screen. Keep whatever the visitor has scrolled.
    if (path) await goto(path, { replaceState: true, noScroll: true })
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

          resolve()
        }
      })
    })
  }
</script>

<style>
  .show-drawer-toggle {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 24px;
    border: 1px solid lightgrey;
    background: white;
    color: black;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
  }

</style>

