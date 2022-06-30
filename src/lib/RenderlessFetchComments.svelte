<!-- TO-DO: rename to RenderlessListenToComments -->
<slot 
  {listenToComments}  
  {allComments} 
  {newComment}
  {bindLocalValue}
  {submitNewComment}
  {isShowingComments}
  {hideComments}
>

</slot>

<script>
import { query, collection, getFirestore, orderBy, onSnapshot, doc, writeBatch, getDocs, addDoc, updateDoc, increment } from 'firebase/firestore'
import { onDestroy } from 'svelte'
import { user } from '../store.js'

export let dbPath
/**
* REMINDERS FOR FUTURE SELF: 
*   - When console.logging, use true [...array] copies, otherwise the arrays will appear to be the same even though they're not
*/
let allComments // null means unfetched, [] means no comments
const commentsRef = collection(getFirestore(), `${dbPath}/comments`)
const commentsQuery = query(commentsRef, orderBy('isoStringOfDate'))
let unsubCommentsListener = null

let newComment = ''
let isShowingComments = false

onDestroy(() => {
  if (unsubCommentsListener) {
    unsubCommentsListener()
  }
})

async function listenToComments () {
  unsubCommentsListener = onSnapshot(commentsQuery, snap => {
    const temp = []
    for (const doc of snap.docs) {
      temp.push({ id: doc.id, ...doc.data() })
    }
    allComments = temp
    isShowingComments = true
  })
}

function bindLocalValue (newVal) {
  console.log('e =', newVal)
  newComment = newVal
}

async function submitNewComment () {
  const commentsRef = collection(getFirestore(), `${dbPath}/comments`)
  addDoc(commentsRef, {
    content: newComment,
    isoStringOfDate: new Date().toISOString(),
    creatorUID: $user.uid,
    creatorName: $user.name
  })
  
  const blackboardRef = doc(getFirestore(), dbPath)
  updateDoc(blackboardRef, {
    numOfComments: increment(1)
  })
}

function hideComments () {
  isShowingComments = false
}
</script>