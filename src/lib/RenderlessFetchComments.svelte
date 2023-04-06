<!-- TO-DO: rename to RenderlessListenToComments -->
<slot 
  {listenToComments}  
  {allComments} 
  {newComment}
  {bindLocalValue}
  {submitNewComment}
  {isShowingComments}
  {hideComments}
  {deleteComment}
>

</slot>

<script>
import { query, collection, getFirestore, orderBy, onSnapshot, doc, writeBatch, getDocs, addDoc, updateDoc, increment, deleteDoc, arrayUnion } from 'firebase/firestore'
import { onDestroy } from 'svelte'
import { user } from '../store.js'
import { getRandomID } from '../helpers/utility.js'
import { sendTextMessage } from '../helpers/cloudFunctions.js'
import { updateFirestoreDoc } from '../helpers/crud.js'

export let dbPath
export let boardDoc
export let roomDoc
export let roomID 
export let classID

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
  newComment = newVal
}

async function submitNewComment () {
  const promises = []

  const db = getFirestore()
  const batch = writeBatch(db)
  const commentRef = doc(db, `${dbPath}/comments/${getRandomID()}`)
  batch.set(commentRef, {  
    content: newComment,
    isoStringOfDate: new Date().toISOString(),
    creatorUID: $user.uid,
    creatorName: $user.name
  })
  const blackboardRef = doc(db, dbPath)
  batch.update(blackboardRef, { numOfComments: increment(1) })
  promises.push(
    batch.commit()
  )
  
  // notify the board creator
  if ($user.uid !== boardDoc.creatorUID) {
    if (roomDoc && roomID && classID) {
      promises.push(
        sendTextMessage({
        content: `${$user.name} commented on your video in "${roomDoc.name}": "${newComment}": https://beavers.app/${classID}/${roomID}`, // assumes roomDoc.name is not ''
        toWho: boardDoc.creatorPhoneNumber
        })
      )
    } 
    else {
      promises.push(
        sendTextMessage({ 
          content: `Someone commented on your class shop video: ${newComment}`,
          toWho: boardDoc.creatorPhoneNumber
        })
      )
    }
  }

  // notify other people subscribed on the comment thread (i.e. other commenters i.e. hear back replies from the video creator)
  if (boardDoc.mobileNumbersToNotifyOnNewComment) {
    for (const number of boardDoc.mobileNumbersToNotifyOnNewComment) {
      if (roomDoc && roomID && classID) {
        if ($user.phoneNumber && $user.phoneNumber === number) {
          continue
        }
        promises.push(
          sendTextMessage({
            content: `Somebody replied to the comment thread in video ${roomDoc.name}: "${newComment}": https://beavers.app/${classID}/${roomID}`,
            toWho: number
          })
        )
      } else {
        promises.push(
          sendTextMessage({
            content: `A new comment was added to a shop video you commented in: ${newComment}`
          })
        )
      }
    }
  }

  // from now on, you are subscribed to the comment thread
  if ($user.phoneNumber && $user.uid !== boardDoc.creatorUID) {
    promises.push(updateFirestoreDoc(boardDoc.path, {
      mobileNumbersToNotifyOnNewComment: arrayUnion($user.phoneNumber)
    }))
  }

  await Promise.all(promises)
  newComment = '' 
}

function hideComments () {
  isShowingComments = false
}

async function deleteComment ({ id }) {
  const db = getFirestore()
  const batch = writeBatch(db)
  batch.delete(
    doc(db, `${dbPath}/comments/${id}`)
  )
  batch.update(
    doc(db, dbPath), 
    { numOfComments: increment(-1)}
  )
  await batch.commit()
}
</script>