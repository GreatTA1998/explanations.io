import { 
  getFirestore, 
  doc, 
  collection, 
  writeBatch, 
  arrayRemove, 
  deleteField, 
  increment, 
  query,
  where
}  from 'firebase/firestore'

import { 
  getFirestoreCollection, 
  getFirestoreDoc, 
  updateFirestoreDoc, 
  deleteFirestoreDoc, 
  getFirestoreQuery 
} from '/src/helpers/crud.js'

import { goto } from '$app/navigation'
import { deleteObject, getStorage, ref } from 'firebase/storage'

// TO-DO:
// 1. Deleting the question that was used as "mostRecentShowcase" for the server will cause the server to not work properly

// every deletion function will also take into account side-effects like updating parent pointers
// for strokes deletion, use batch delete not recursive delete (faster, even if more inefficient)

/**
 * Properly deletes the room:
 *   1. Delete audio files, if any boards are recorded 
 *   2. Delete stroke subcollections
 *   3. Delete the room doc itself
 */
export async function deleteRoom ({ room, classID }) {
  if (!confirm('Are you sure you want to delete this room?')) {
    return
  }

  alert('Initiated a delete, this might take 10 seconds, the UI will update')

  const classPath = `classes/${classID}`
  const db = getFirestore()

  const boardPromises = []
  for (const boardID of room.blackboards) {
    const promise = getFirestoreDoc(`${classPath}/blackboards/${boardID}/`)
      .then(boardDoc => deleteArbitraryMultiboard({ boardDoc, roomDoc: room }))
      .catch(error => alert(error))
    boardPromises.push(promise)
  }
  await Promise.all(boardPromises)

  // MOVE CHILDREN: move all the children OUT of the folder getting deleted
  // 1. fetch all the sub-rooms
  // 2. update all the parent pointers
  const folderPromises = []
  const roomsRef = collection(db, `classes/${classID}/rooms/`)
  const q = query(roomsRef, where('parentRoomID', '==', room.id))
  const subRooms = await getFirestoreQuery(q)
  for (const subRoom of subRooms) {
    folderPromises.push(
      updateFirestoreDoc(subRoom.path, {
        parentRoomID: room.parentRoomID
      })
    )
  }

  // update grandparent's children count (though if deleted room's children would end up at the top level, 
  // the grandparent doesn't exist, hence if statement 
  if (room.parentRoomID) {
    folderPromises.push(
      updateFirestoreDoc(`classes/${classID}/rooms/${room.parentRoomID}`, {
        numOfChildren: increment(subRooms.length)
      })
    )
  }

  await Promise.all(folderPromises)

  // finally delete the room doc itself
  await deleteFirestoreDoc(classPath + `/rooms/${room.id}`)
  // note, the [room].svelte page knows how to handle itself when its `roomDoc` no longer exists

  goto(`/${classID}/overview`)
}

// not allowed to delete the videos if it has videos
// TO-DO: also delete attachments in the future
// assumes all the blackboards in question uses the modern "multiboard" 
export async function deleteQuestion ({ questionDoc, classID }) {
  if (!confirm('Are you sure you want to delete this question? This might take 10 seconds before the UI updates.')) {
    return
  }

  const classPath = `classes/${classID}`

  // DELETE VIDEOS & BLACKBOARDS
  // Note: this is a dangerous, but a necessary operation for correctness. 
  // In practice, we don't allow users to delete questions until all its videos have been moved somewhere, so this question will 
  // never be directly called until it's safe to do so. 
  const promises = []
  for (const boardID of questionDoc.blackboardIDs) {
    const promise = getFirestoreDoc(`${classPath}/blackboards/${boardID}/`)
      .then(boardDoc => deleteArbitraryMultiboard({ boardDoc, roomDoc: questionDoc }))
      .catch(error => alert(error))
    promises.push(promise)
  }

  // note the double plural here attachment`S`StoragePaths
  if (questionDoc.attachmentsStoragePaths) {
    for (const path of questionDoc.attachmentsStoragePaths) {
      promises.push(
        deleteObjectFromStorage(path)
      )
    }
  }
  await Promise.all(promises)

  // finally delete the room doc itself
  await deleteFirestoreDoc(classPath + `/questions/${questionDoc.id}/`)

  goto(`/${classID}/question`)
}

function deleteObjectFromStorage (path) {
  // if you want to use try-catch, you can't push it into a promise array
  try {
    deleteObject(
      ref(getStorage(), path)
    )
  } catch (error) {
    alert(error)
  }
}

// assumes it's a video
export async function revertToBoard ({ boardDoc, slideIDToStrokesArray }) {
  // this should preserve the strokes like it used to do when it was single slide
  // blackboards
  const promises = []
  
  promises.push(
    deleteObjectFromStorage(boardDoc.audioRefFullPath)
  )

  promises.push(
    updateFirestoreDoc(boardDoc.path, {
      creator: deleteField(),
      date: deleteField(),
      audioDownloadURL: deleteField(),
      audioRefFullPath: deleteField()
    })
  )

  for (const slideID of boardDoc.slideIDs) {
    promises.push(
      deleteStrokesFromSlide({ 
        strokesArray: slideIDToStrokesArray[slideID],
        preserveInitialStrokes: true 
      })
    )
  }
  await Promise.all(promises)
  console.log('done reverting to board, all 3 operations finished')
}

// deletes the board regardless of whether it's a video or not
function deleteArbitraryMultiboard ({ roomDoc, boardDoc }) {
  return new Promise(async (resolve) => {
    const promises = []
    if (boardDoc.audioRefFullPath) {
      promises.push(
        deleteObjectFromStorage(boardDoc.audioRefFullPath)
      )
    }
    promises.push(
      deleteMultislideBlackboard({ roomDoc, boardDoc })
    )
    await Promise.all(promises)
    resolve()
  })
}

// this was the implementation from OnlineMultislideBlackboard.svelte
// only use it for non-video blackboards
export async function deleteMultislideBlackboard ({ roomDoc, boardDoc }) {  
  return new Promise(async (resolve) => {
    const promises = []
    for (const slideID of boardDoc.slideIDs) {
      promises.push(
        deleteSlideFromMultislide({ 
          slideID,
          multislidePath: boardDoc.path 
        })
      )
    }
    await Promise.all(promises)

    // delete the references from its parent first, so it doesn't reference a non-existent doc
    //// delete the pointer from its parent doc (called `roomDoc` for legacy reasons, for now)
    //// TO-DO: unify the APIs of rooms and questions

    promises.push(
      updateFirestoreDoc(roomDoc.path, {
        blackboards: arrayRemove(boardDoc.id), // used by rooms
        blackboardIDs: arrayRemove(boardDoc.id) // used by questions
      })
    )

    promises.push(
      deleteFirestoreDoc(boardDoc.path)
    )

    await Promise.all(promises)
    resolve()
  })
}

// delete the strokes, background image (N/A for now), the affected pointers in its parent, and the slide itself  
export async function deleteSlideFromMultislide ({ slideID, multislidePath }) {
  const slidePath = multislidePath + `/slides/${slideID}`
  const strokesArray = await getFirestoreCollection(slidePath + '/strokes')

  const promises = []

  // talk about how .then()'s parallelism advantages is mirrored by encapsulating async/await into functions of equal size
  promises.push(
    deleteStrokesFromSlide({ strokesArray, slidePath})
  )

  // delete the background image if any 
  const slideDoc = await getFirestoreDoc(slidePath)
  if (slideDoc.backgroundImageStoragePath) {
    promises.push(
      deleteBackgroundImageFromSlide(slideDoc)
    )
  }

  // delete the pointer first so the parent doesn't reference a non-existent slide
  // technically doesn't matter but...helps with sanity
  promises.push(
    updateFirestoreDoc(multislidePath, {
      slideIDs: arrayRemove(slideID)
    })
  )

  await Promise.all(promises)

  // delete the slide itself
  deleteFirestoreDoc(slidePath)
}

// this is from `Renderless/ListenToStrokes.svelte`
// note legacy blackboards are behave as "slides" too
export async function deleteStrokesFromSlide ({ strokesArray, preserveInitialStrokes = false }) {
  return new Promise(async (resolve) => {
    const db = getFirestore() 

    const promises = []
    let currentBatch = writeBatch(db)
    let currentBatchSize = 0

    for (const stroke of strokesArray) {
      if (preserveInitialStrokes && stroke.startTime === 0 && stroke.endTime === 0) {
        continue
      }

      if (currentBatchSize >= 500) {
        promises.push(currentBatch.commit())
        currentBatch = writeBatch(db)
        currentBatchSize = 0
      } 
      currentBatch.delete(
        doc(db, stroke.path)
      )
      currentBatchSize += 1
    }

    // last batch
    promises.push(currentBatch.commit())

    await Promise.all(promises)

    resolve()
  })
}

export async function deleteBackgroundImageFromSlide (slideDoc) {
  return new Promise(async (resolve) => {
    const promises = []
    promises.push(
      deleteObjectFromStorage(slideDoc.backgroundImageStoragePath)
    )
    promises.push(
      updateFirestoreDoc(slideDoc.path, {
        backgroundImageDownloadURL: deleteField(),
        backgroundImageStoragePath: deleteField()
      }) 
    )
    await Promise.all(promises)
    resolve()
  })
}
