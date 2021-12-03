
<!-- Used in [class]/__layout.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte'
  import { getDatabase, ref, onDisconnect, onValue } from 'firebase/database'
  import { getFirestore, doc, setDoc, deleteDoc } from '@firebase/firestore'
  import { getRandomID } from '../helpers/utility.js'
  import { user } from '../store.js'

  export let classID
  export let roomID

  let myFirebaseRef
  let myFirestoreRef
  let isConnectedRef
  let onDisconnectRef
  let unsubIsConnected
  let isFirestoreDocCreated
  let myName = `Beaver #${Math.floor(Math.random()*(999-100+1)+100)}`

  $: if (isFirestoreDocCreated) {
    // react to `roomID` changes]
    setDoc(myFirestoreRef, {
      uid: $user.uid,
      currentRoomID: roomID,
      name: myName
    })
  }

  onDestroy(() => {
    if (unsubIsConnected) unsubIsConnected(); // `.on()` and `.off()` are not asynchronous, so no need for an if statement
    if (isFirestoreDocCreated) deleteDoc(myFirestoreRef)
    if (onDisconnectRef) onDisconnectRef.cancel()
  })

  onMount(() => {
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
          currentRoomID: roomID,
          name: myName
          // currentBoardID: '',
          // currentBoardNumber: 1
        })
        isFirestoreDocCreated = true
      } else {
        // disconnected, Cloud Functions will remove my doc, so I'm done.
      }
    })
  })
</script>

