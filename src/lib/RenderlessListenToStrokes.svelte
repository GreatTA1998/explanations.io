
<slot 
  {listenToStrokes} 
  {strokesArray} 
  {handleNewlyDrawnStroke}
>

</slot>

<script>
import { onDestroy, tick } from 'svelte'
import { query, collection, getFirestore, orderBy, onSnapshot, doc, setDoc, serverTimestamp, writeBatch } from 'firebase/firestore'

export let dbPath

/**
 * REMINDERS FOR FUTURE SELF: 
 *   - When console.logging, use true [...array] copies, otherwise the arrays will appear to be the same even though they're not
 * 

 WARNING: 
 * This is unsafe when multiple people draw while recording
 * think of a better solution after launch. 
 */
let strokesArray = null // null means unfetched, [] means empty board
let isFetchingStrokes = false // TODO: deprecate because `strokesArray` AF already covers it
let unsubStrokesListener
const db = getFirestore()
const strokesRef = collection(db, `${dbPath}/strokes`)
const strokesQuery = query(strokesRef, orderBy('timestamp'))

onDestroy(() => {
  if (unsubStrokesListener) {
    unsubStrokesListener()
  }
})

/**
 * NOTE: the snapshot listener is triggered TWICE whenever a new stroke is added. 
 * answer: it's because I use `serverTimestamp` which changes value twice
 * 
 *   // latency compensation: if it's your own change, you don't want a delay 
    // for your own data change, you want immediate effect.
 * 
 * It's actually FASTER to trigger snapshot twice, which takes 10 milliseconds,
 * then to do a if statement takes 100 milliseconds (10x as long)
 *  const source = snapshot.metadata.hasPendingWrites ? 'Local' : 'Server'
    if (source === 'Local') {
      return
    }
 */
async function listenToStrokes () {
  isFetchingStrokes = true

  unsubStrokesListener = onSnapshot(strokesQuery, async (snapshot) => {     
    const m = snapshot.size // much faster than snapshot.docs.length
    if (!strokesArray) {
      isFetchingStrokes = false
      strokesArray = [] 
    }
    const n = strokesArray.length

    if (m > n) {
      // render each stroke, this takes O(m - n) time which is fine
      for (let i = n; i < m; i++) {
        const doc = snapshot.docs[i]
        const stroke = convertDocToStroke(doc)
        strokesArray.push(stroke)
      }
      strokesArray = strokesArray // this is more verbose, but faster than `strokesArray = [...strokesArray, stroke]`
    }
    else if (m === n) {
      return 
    }
    else if (m < n) {
      handleBoardWipeOperation(snapshot)
    }
  })
}

async function handleBoardWipeOperation (snapshot) {
  // trigger <Blackboard/> to wipe the canvas UI via resetting `strokesArray` 
  strokesArray = []; 
  /* Wait 1 tick, otherwise <Blackboard/> can't react to `strokesArray = []`,
      because of Vue's reactivity caveat: "If the same watcher is triggered multiple times, it will be pushed into the queue only once."
      More info here: https://vuejs.org/v2/guide/reactivity.html */
  await tick()

  /* If people added strokes while Firestore was still deleting documents,
    then the blackboard should NOT end up being empty. */
  if (snapshot.docs.length > 0) {
    snapshot.docs.forEach(doc => {
      strokesArray.push(
        convertDocToStroke(doc)
      )
    })
  }
}

function handleNewlyDrawnStroke (stroke) {
  try {
    // takes about 0.015 seconds
    stroke.timestamp = serverTimestamp()
    setDoc(
      doc(db, `${dbPath}/strokes/${stroke.id}`),
      stroke
    )
  } catch (error) {
    alert(error)
  }
}

// artifically add a 0.5 second grace period to the stroke so it doesn't appear too abruptly
function convertDocToStroke (doc) {
  const strokeObject = {
    id: doc.id,
    path: doc.ref.path,
    ...doc.data(),
  }

  // make the timestamp subjective
  strokeObject.startTime = 0
  strokeObject.endTime = 0

  // strokeObject.startTime = blackboard.currentTime; 
  // strokeObject.endTime = blackboard.currentTime; 
  if (!doc.data().isErasing) {
    // artifically add a 0.5 second period to the stroke
    strokeObject.endTime += 0.5;
  } 
  return strokeObject
}
</script>