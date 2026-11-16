import { 
  getFirestore, 
  doc, 
  collection, 
  writeBatch, 
  arrayRemove, 
  deleteField, 
  increment, 
  query,
  where,
  orderBy
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
import { destinationAfterRoomDelete } from '/src/helpers/roomDeleteNav.js'
import { shouldDeleteBoardLevelStrokes } from '/src/helpers/boardDeletePath.js'

export { destinationAfterRoomDelete, shouldDeleteBoardLevelStrokes }

/** Delete room boards/media, re-parent children, then the room doc; navigate away. */
export async function deleteRoom ({ room, classID }) {
  if (!confirm(`Are you sure you want to delete the room "${room.name || '(untitled)'}"?`)) {
    return
  }

  const classPath = `classes/${classID}`
  const db = getFirestore()

  const boardPromises = []
  for (const boardID of room.blackboards || []) {
    const promise = getFirestoreDoc(`${classPath}/blackboards/${boardID}/`)
      .then(boardDoc => deleteArbitraryMultiboard({ boardDoc, roomDoc: room }))
      .catch(error => alert(error))
    boardPromises.push(promise)
  }

  if (room.attachmentsStoragePaths) {
    for (const path of room.attachmentsStoragePaths) {
      boardPromises.push(deleteObjectFromStorage(path))
    }
  }
  await Promise.all(boardPromises)

  const folderPromises = []
  const roomsRef = collection(db, `classes/${classID}/rooms/`)

  const siblingsQuery = query(
    roomsRef,
    where('parentRoomID', '==', room.parentRoomID || ''),
    orderBy('classServerOrder', 'asc')
  )
  const siblings = await getFirestoreQuery(siblingsQuery)
  const deleteDestination = destinationAfterRoomDelete({
    classID,
    parentRoomID: room.parentRoomID,
    roomId: room.id,
    siblingIdsInOrder: siblings.map(sibling => sibling.id)
  })

  const q = query(roomsRef, where('parentRoomID', '==', room.id))
  const subRooms = await getFirestoreQuery(q)
  for (const subRoom of subRooms) {
    folderPromises.push(
      updateFirestoreDoc(subRoom.path, {
        parentRoomID: room.parentRoomID || ''
      })
    )
  }

  if (room.parentRoomID) {
    folderPromises.push(
      updateFirestoreDoc(`classes/${classID}/rooms/${room.parentRoomID}`, {
        numOfChildren: increment(subRooms.length - 1)
      })
    )
  }

  await Promise.all(folderPromises)
  await deleteFirestoreDoc(classPath + `/rooms/${room.id}`)
  goto(deleteDestination)
}

export async function deleteQuestion ({ questionDoc, classID }) {
  if (!confirm('Are you sure you want to delete this question? This might take 10 seconds before the UI updates.')) {
    return
  }

  const classPath = `classes/${classID}`
  const promises = []
  for (const boardID of questionDoc.blackboardIDs) {
    const promise = getFirestoreDoc(`${classPath}/blackboards/${boardID}/`)
      .then(boardDoc => deleteArbitraryMultiboard({ boardDoc, roomDoc: questionDoc }))
      .catch(error => alert(error))
    promises.push(promise)
  }

  if (questionDoc.attachmentsStoragePaths) {
    for (const path of questionDoc.attachmentsStoragePaths) {
      promises.push(
        deleteObjectFromStorage(path)
      )
    }
  }
  await Promise.all(promises)
  await deleteFirestoreDoc(classPath + `/questions/${questionDoc.id}/`)
  goto(`/${classID}/question`)
}

function deleteObjectFromStorage (path) {
  return deleteObject(ref(getStorage(), path)).catch(error => {
    alert(error)
  })
}

export async function revertToBoard ({ boardDoc, slideIDToStrokesArray }) {
  const promises = []
  promises.push(
    deleteObjectFromStorage(boardDoc.audioRefFullPath)
  )
  if (boardDoc.webmDownloadURL) {
    promises.push(
      deleteObjectFromStorage(boardDoc.webmRefFullPath)
    )
  }
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

function deleteArbitraryMultiboard ({ roomDoc, boardDoc }) {
  return new Promise(async (resolve) => {
    const promises = []
    if (boardDoc.audioRefFullPath) {
      promises.push(
        deleteObjectFromStorage(boardDoc.audioRefFullPath)
      )
    }
    if (boardDoc.webmRefFullPath) {
      promises.push(
        deleteObjectFromStorage(boardDoc.webmRefFullPath)
      )
    }
    promises.push(
      deleteMultislideBlackboard({ roomDoc, boardDoc })
    )
    await Promise.all(promises)
    resolve()
  })
}

export async function deleteMultislideBlackboard ({ roomDoc, boardDoc }) {  
  return new Promise(async (resolve) => {
    const promises = []
    if (shouldDeleteBoardLevelStrokes(boardDoc)) {
      const strokesArray = await getFirestoreCollection(`${boardDoc.path}/strokes`)
      promises.push(deleteStrokesFromSlide({ strokesArray }))
      if (boardDoc.backgroundImageStoragePath) {
        promises.push(deleteObjectFromStorage(boardDoc.backgroundImageStoragePath))
      }
    } else {
      for (const slideID of boardDoc.slideIDs) {
        promises.push(
          deleteSlideFromMultislide({ 
            slideID,
            multislidePath: boardDoc.path 
          })
        )
      }
    }
    await Promise.all(promises)

    promises.push(
      updateFirestoreDoc(roomDoc.path, {
        blackboards: arrayRemove(boardDoc.id),
        blackboardIDs: arrayRemove(boardDoc.id)
      })
    )
    promises.push(
      deleteFirestoreDoc(boardDoc.path)
    )
    await Promise.all(promises)
    resolve()
  })
}

export async function deleteSlideFromMultislide ({ slideID, multislidePath }) {
  const slidePath = multislidePath + `/slides/${slideID}`
  const strokesArray = await getFirestoreCollection(slidePath + '/strokes')
  const promises = []
  promises.push(
    deleteStrokesFromSlide({ strokesArray, slidePath})
  )
  const slideDoc = await getFirestoreDoc(slidePath)
  if (slideDoc.backgroundImageStoragePath) {
    promises.push(
      deleteBackgroundImageFromSlide(slideDoc)
    )
  }
  promises.push(
    updateFirestoreDoc(multislidePath, {
      slideIDs: arrayRemove(slideID)
    })
  )
  await Promise.all(promises)
  await deleteFirestoreDoc(slidePath)
}

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
