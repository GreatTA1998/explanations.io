<slot 
  {fetchStrokes}  
  {strokesArray} 
  {deleteAllStrokesFromDb}
>

</slot>

<script>
import { query, collection, getFirestore, orderBy, onSnapshot, doc, writeBatch, getDocs } from 'firebase/firestore'

export let dbPath
export let autoFetchStrokes = false

/**
 * REMINDERS FOR FUTURE SELF: 
 *   - When console.logging, use true [...array] copies, otherwise the arrays will appear to be the same even though they're not
 * 

 WARNING: 
 * This is unsafe when multiple people draw while recording
 * think of a better solution after launch // i.e.`currentTime` && timeStamp, choose one, not both. 
 */
let strokesArray // null means unfetched, [] means empty board
const strokesRef = collection(getFirestore(), `${dbPath}/strokes`)
const strokesQuery = query(strokesRef, orderBy('timestamp'))

if (autoFetchStrokes) {
  fetchStrokes()
}

// for lazy-fetching
async function fetchStrokes () {
  const strokesSnapshot = await getDocs(strokesQuery)
  const temp = []
  for (const doc of strokesSnapshot.docs) {
    temp.push({ id: doc.id, ...doc.data() })
  }
  strokesArray = temp
}

async function deleteAllStrokesFromDb () {
  return new Promise(async (resolve) => {
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
    
    // quickfix when deleting a video
    // the snapshot listener will not notice any "deletions", it just notices
    // an empty blackboard. Yet it doesn't bind `strokesArray = []` because 
    // strokesArray is not null
    strokesArray = [] 
    resolve()
  })
}
</script>