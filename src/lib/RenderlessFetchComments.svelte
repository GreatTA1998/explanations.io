<slot 
  {fetchComments}  
  {allComments} 
  {newComment}
  {bindLocalValue}
  {submitNewComment}
  {isShowingComments}
  {hideComments}
>

</slot>

<script>
import { query, collection, getFirestore, orderBy, onSnapshot, doc, writeBatch, getDocs, addDoc } from 'firebase/firestore'
import { user } from '../store.js'

export let dbPath
/**
* REMINDERS FOR FUTURE SELF: 
*   - When console.logging, use true [...array] copies, otherwise the arrays will appear to be the same even though they're not
*/
let allComments // null means unfetched, [] means no comments
const commentsRef = collection(getFirestore(), `${dbPath}/comments`)
const commentsQuery = query(commentsRef, orderBy('isoStringOfDate'))

let newComment = ''
let isShowingComments = false

// for lazy-fetching
async function fetchComments () {
  const commentsSnapshot = await getDocs(commentsQuery)
  const temp = []
  for (const doc of commentsSnapshot.docs) {
    temp.push({ id: doc.id, ...doc.data() })
  }
  allComments = temp
  isShowingComments = true
}

function bindLocalValue (newVal) {
  console.log('e =', newVal)
  newComment = newVal
}

async function submitNewComment () {
  console.log("content =", newComment)
  const commentsRef = collection(getFirestore(), `${dbPath}/comments`)
  addDoc(commentsRef, {
    content: newComment,
    isoStringOfDate: new Date().toISOString(),
    creatorUID: $user.uid
  })
  console.log('added comment')
}

function hideComments () {
  isShowingComments = false
}
</script>