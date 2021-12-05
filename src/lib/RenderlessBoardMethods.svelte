
<slot 
  {boardDoc} 
  {fetchStrokes} 
  {listenToStrokes} 
  {isFetchingStrokes} 
  {strokesArray} 
  {handleNewlyDrawnStroke}
  {deleteAllStrokesFromDb}
>

</slot>

<script>
  import { fetchDoc, fetchDocs } from '../database.js'
  import { onDestroy, tick } from 'svelte'
  import { query, collection, getFirestore, orderBy, onSnapshot, doc, setDoc, serverTimestamp, writeBatch, onSnapshotsInSync } from 'firebase/firestore'
 
  export let dbPath
  export let autoFetchStrokes = false

  let strokesArray // null means unfetched, [] means empty board
  let isFetchingStrokes = false
  let boardDoc
  let unsubStrokesListener
  const strokesRef = collection(getFirestore(), `${dbPath}/strokes`)

  const boardRef = doc(getFirestore(), dbPath)
  onSnapshot(boardRef, (snapshot) => {
    boardDoc = { id: snapshot.id, ...snapshot.data() }
  })

  if (autoFetchStrokes) {
    fetchStrokes()
  }

  onDestroy(() => {
    if (unsubStrokesListener) {
      unsubStrokesListener()
    }
  })

  // for lazy-fetching
  async function fetchStrokes () {
    isFetchingStrokes = true
    strokesArray = await fetchDocs(dbPath + '/strokes')
  }

  /**
   * NOTE: the snapshot listener is triggered TWICE whenever a new stroke is added. 
   * I'm guessing it's because I use `serverTimestamp` which changes value twice
   */
  async function listenToStrokes () {
    isFetchingStrokes = true

    const strokesQuery = query(strokesRef, orderBy('timestamp'))
    unsubStrokesListener = onSnapshot(strokesQuery, async (snapshot) => {      
      // CASE 1: wipe board operation
      const removedDocs = snapshot.docChanges().filter(change => change.type === "removed"); 
      if (removedDocs.length > 0) {
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
            );
          });
        }
      } 
      // CASE 2: add stroke operation
      else {
        if (!strokesArray) {
          isFetchingStrokes = false
          strokesArray = []
        }

        // a: stroke added by the user himself/herself
        if (snapshot.docs.length === strokesArray.length) {
          // do nothing
        } 
        // b: stroke added by someone else 
        else {
          snapshot.docChanges().filter(change => change.type === "added").forEach(change => {
            strokesArray = [...strokesArray, convertDocToStroke(change.doc)] // see reactivity caveat: https://svelte.dev/tutorial/updating-arrays-and-objects
          });
        }
      }
    })
  }

  function handleNewlyDrawnStroke (stroke) {
    strokesArray.push(stroke)
    try {
      setDoc(
        doc(getFirestore(), `${dbPath}/strokes/${stroke.id}`),
        { timestamp: serverTimestamp(), ...stroke }
      )
    } catch (error) {
      alert(error)
    }
  }

  function convertDocToStroke (doc) {
    const strokeObject = {
      id: doc.id,
      ...doc.data(),
    };
    // make the timestamp subjective
    
    strokeObject.startTime = 0
    strokeObject.endTime = 0


    // strokeObject.startTime = blackboard.currentTime; 
    // strokeObject.endTime = blackboard.currentTime; 
    if (!doc.data().isErasing) {
      // artifically add a 0.5 second period to the stroke
      strokeObject.endTime += 0.5;
    } 
    return strokeObject;
  }

  async function deleteAllStrokesFromDb () {
    const batchDeleteRequests = [];
    let currentBatch = writeBatch(getFirestore())
    let currentBatchSize = 0;
    for (const stroke of strokesArray) {
      if (currentBatchSize >= 500) {
        batchDeleteRequests.push(currentBatch.commit());
        currentBatch = writeBatch(getFirestore())
        currentBatchSize = 0; 
      } 
      const ref = doc(getFirestore(), `${dbPath}/strokes/${stroke.id}`)
      currentBatch.delete(ref)
      currentBatchSize += 1;
    }
    batchDeleteRequests.push(currentBatch.commit()); 
    await Promise.all(batchDeleteRequests);
  }

</script>