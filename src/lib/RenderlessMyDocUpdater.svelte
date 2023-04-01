
<!-- Used in [class]/__layout.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte'
  import { getDatabase, ref, onDisconnect, onValue } from 'firebase/database'
  import { getFirestore, doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore'
  import { getRandomID } from '../helpers/utility.js'
  import { browserTabID, user, isFirestoreDocCreated, roomToPeople, hasJoinedVoice } from '../store.js'

  export let classID
  export let roomID

  let myFirestoreRef
  let onDisconnectRef
  let unsubBrowserTabAndDatabaseHeartbeatListener

  $: myName = $user.name ? $user.name : 'Beaver #' 

  // react to `roomID` changes]
  // $user.name reaction needed because we only partial hydrated it in the root __layout for speed
  $: if ($isFirestoreDocCreated && $user.name) {
    updateDoc(myFirestoreRef, {
      currentRoomID: roomID || 'request-video',
      name: $user.name,
      hasJoinedVoice: $hasJoinedVoice
    })
  }

  onMount(() => {
    // roomToPeople.set({}) // annoying, don't know why __layout is re-rendered UPDATE: new version of Svelte doesn't seem to re-render in localhost, removing for now
    const isConnectedRef = ref(getDatabase(), '.info/connected')
    // we use 'info.connected' e.g. when user is AFK in background, even though the page is open,
    // the heartbeat would be dead
    unsubBrowserTabAndDatabaseHeartbeatListener = onValue(isConnectedRef, async (snap) => {
      if (snap.val() === true) {
        const disconnectID = getRandomID()
        const myFirebaseRef = ref(getDatabase(), `/class/${classID}/room/${roomID}/participants/${disconnectID}`)
        onDisconnectRef = onDisconnect(myFirebaseRef)

        // NOTE 2: I deleted the `await`, and got ghost participants as a Heisenbug. For 100% reliability, keep it in. 
        await onDisconnectRef.set({ // NOTE: we're `awaiting` the disconnect hook to setup - NOT the eventual .set() operation
          hasDisconnected: true,
          userUID: $user.uid // Cloud Functions will use `userUID` to set `isOnline` to false for the right user document
                             // and delete the participant document
        })
        // set a Firestore document .set() operation
        myFirestoreRef = doc(getFirestore(), `classes/${classID}/participants/${disconnectID}`)
        setDoc(myFirestoreRef, {
          uid: $user.uid,
          browserTabID: $browserTabID,
          currentRoomID: roomID || 'request-video',
          name: myName,
          disconnectID,
        })
        isFirestoreDocCreated.set(true)
      } else {
        // disconnected, Cloud Functions will remove my doc, so I'm done.
      }
    })
  })

  onDestroy(() => {
    if (unsubBrowserTabAndDatabaseHeartbeatListener) unsubBrowserTabAndDatabaseHeartbeatListener(); // `.on()` and `.off()` are not asynchronous, so no need for an if statement
    if ($isFirestoreDocCreated) {
      deleteDoc(myFirestoreRef)
      isFirestoreDocCreated.set(false)
      // doesn't truly matter if it's async
    }
    if (onDisconnectRef) onDisconnectRef.cancel()
  })
</script>

