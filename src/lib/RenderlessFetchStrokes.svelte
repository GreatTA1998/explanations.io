<slot 
  {fetchStrokes}  
  {strokesArray} 
  deleteAllStrokesFromDb={() => deleteAllStrokesFromDb({ boardPath: dbPath, strokesArray })}
>

</slot>

<script>
import { query, collection, getFirestore, orderBy, onSnapshot, doc, writeBatch, getDocs } from 'firebase/firestore'
import { deleteAllStrokesFromDb } from '../helpers/properDelete'

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
</script>