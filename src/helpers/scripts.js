import { getFirestoreCollection, updateFirestoreDoc } from "./crud.js"

export async function updateAllServer () {
  const allClassDocs = await getFirestoreCollection(`classes`)
  for (const classDoc of allClassDocs) {
    initializeClassServerOrder(classDoc.id)
    console.log('fixing =', classDoc.name)
  }
}

export async function initializeClassServerOrder (classID) {
  const roomDocs = await getFirestoreCollection(`classes/${classID}/rooms`)
  let counter = 3
  for (const roomDoc of roomDocs) {
    const updateObject = {}
    if (!roomDoc.parentRoomID) {
      updateObject.parentRoomID = ''
    }
    if (!roomDoc.classServerOrder) {
      updateObject.classServerOrder = counter 
    }
    updateFirestoreDoc(roomDoc.path, updateObject)
    counter += 3
  }
}

// this could be useful in the future, but it's only a temporary script now
export async function moveVideoToDifferentClassServer (videoPath) {
  console.log("videoPath =", videoPath)
  const boardDoc = await getFirestoreDoc(videoPath)
  const strokesDocs = await getFirestoreCollection(videoPath + '/strokes')

  // create an independent copy of the video in the new class
  const newBoardPath = `classes/Mev5x66mSMEvNz3rijym/blackboards/${boardDoc.id}`
  const newStrokesPath = newBoardPath + '/strokes/'

  setFirestoreDoc(newBoardPath, boardDoc)
  for (const stroke of strokesDocs) {
    setFirestoreDoc(newStrokesPath + stroke.id, stroke)
  }
  console.log('initiated copying of drawing strokes')


  // you also need to create a room doc
  const newRoomID = await createRoomDoc('classes/Mev5x66mSMEvNz3rijym/')
  console.log('newRoomID =', newRoomID)
  updateFirestoreDoc('classes/Mev5x66mSMEvNz3rijym/rooms/' + newRoomID, {
    name: 'Untitled',
    blackboards: arrayUnion(boardDoc.id)
  })
}

// BACKWARDS COMPATIBILITY SCRIPT FUNCTIONS
export async function changeVideoCreatorInfo () {
  const boards = await getFirestoreCollection('classes/Mev5x66mSMEvNz3rijym/blackboards')
  for (const board of boards) {
    let n = 3
    if (board.creatorUID === 'Q0J071uuDfdJVxTubCkYVhsTAxR2') {
      console.log('found Jonathan Whyte\'s board')
      n += 3
      const creatorDoc = await getFirestoreDoc('users/' + board.creatorUID)
      await updateFirestoreDoc(`classes/Mev5x66mSMEvNz3rijym/blackboards/${board.id}`, {
        creatorName: 'Jonathan Whyte',
        shopGalleryOrder: n
      })
    }
  }
}
