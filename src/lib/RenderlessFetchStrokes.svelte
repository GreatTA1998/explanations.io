<slot 
  {fetchStrokes}  
  {strokesArray} 
  deleteAllStrokesFromDb={() => deleteAllStrokesFromDb({ boardPath: dbPath, strokesArray })}
  deleteNonInitialStrokesFromDb={() => deleteNonInitialStrokesFromDb({ boardPath: dbPath, strokesArray })}
  deleteStrokesWithParam={({ boardPath, strokesArray }) => deleteNonInitialStrokesFromDb({ boardPath, strokesArray})}
>

</slot>

<script>
import { query, collection, getFirestore, orderBy, onSnapshot, doc, writeBatch, getDocs } from 'firebase/firestore'
import { deleteAllStrokesFromDb, deleteNonInitialStrokesFromDb } from '../helpers/properDelete'
import { onMount, createEventDispatcher } from 'svelte'

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

let isFirstTime = true

const dispatch = createEventDispatcher()

if (autoFetchStrokes) {
  fetchStrokes()
}


$: if (isFirstTime && strokesArray && dbPath) {
  isFirstTime = false
  dispatch('mounted', {
    deleteFunc: () => deleteNonInitialStrokesFromDb({ boardPath: dbPath, strokesArray })
  })
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