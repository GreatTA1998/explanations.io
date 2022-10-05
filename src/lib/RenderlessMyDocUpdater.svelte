
<!-- Used in [class]/__layout.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte'
  import { getDatabase, ref, onDisconnect, onValue } from 'firebase/database'
  import { getFirestore, doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore'
  import { getRandomID } from '../helpers/utility.js'
  import { browserTabID, user, isFirestoreDocCreated, roomToPeople, hasJoinedVoice } from '../store.js'

  export let classID
  export let roomID

  let myFirebaseRef
  let myFirestoreRef
  let isConnectedRef
  let onDisconnectRef
  let unsubIsConnected
  $: myName = $user.name ? $user.name : 'Beaver #' 

  // react to `roomID` changes]
  // $user.name reaction needed because we only partial hydrated it in the root __layout for speed
  $: if ($isFirestoreDocCreated && $user.name) {
    updateDoc(myFirestoreRef, {
      currentRoomID: roomID,
      name: $user.name,
      hasJoinedVoice: $hasJoinedVoice
    })
  }

  onDestroy(() => {
    if (unsubIsConnected) unsubIsConnected(); // `.on()` and `.off()` are not asynchronous, so no need for an if statement
    if ($isFirestoreDocCreated) {
      deleteDoc(myFirestoreRef)
      isFirestoreDocCreated.set(false)
      // doesn't truly matter if it's async
    }
    if (onDisconnectRef) onDisconnectRef.cancel()
  })

  onMount(() => {
    roomToPeople.set({}) // annoying, don't know why __layout is re-rendered
    isConnectedRef = ref(getDatabase(), '.info/connected')
    unsubIsConnected = onValue(isConnectedRef, async (snap) => {
      if (snap.val() === true) {
        const disconnectID = getRandomID()
        myFirebaseRef = ref(getDatabase(), `/class/${classID}/room/${roomID}/participants/${disconnectID}`)
        onDisconnectRef = onDisconnect(myFirebaseRef)
        onDisconnectRef.set({ // NOTE: we're `awaiting` the disconnect hook to setup - NOT the .set() operation
          hasDisconnected: true,
          userUID: $user.uid // Cloud Functions will use `userUID` to set `isOnline` to false for the right user document
        })
        // set a Firestore document .set() operation
        myFirestoreRef = doc(getFirestore(), `classes/${classID}/participants/${disconnectID}`)
        setDoc(myFirestoreRef, {
          uid: $user.uid,
          browserTabID: $browserTabID,
          currentRoomID: roomID,
          name: myName
        })
        isFirestoreDocCreated.set(true)
      } else {
        // disconnected, Cloud Functions will remove my doc, so I'm done.
      }
    })
  })
</script>

