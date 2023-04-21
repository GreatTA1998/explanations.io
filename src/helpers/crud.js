import { getRandomID } from './utility.js'
import { deleteField, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'

// I prefix all Firestore helper functions with `firestore` prefix
// e.g. `firestoreRef` (written by me) vs `ref` (native to library)
// TO-DO: test these functions
export function firestoreRef (path) {
  const db = getFirestore()
  return doc(db, path)
}

export function setFirestoreDoc (path, newObject) {
  return new Promise(async (resolve) => {
    const ref = firestoreRef(path)
    await setDoc(ref, newObject)
    resolve()
  })
}

export function getFirestoreDoc (path) {
  return new Promise(async (resolve) => {
    const ref = firestoreRef(path)
    const snapshot = await getDoc(ref)
    resolve(
      { id: snapshot.id, path: snapshot.ref.path, ...snapshot.data() }
    )
  })
}

export function getFirestoreCollection (path) {
  return new Promise(async (resolve) => {
    const ref = collection(getFirestore(), path)
    const snapshot = await getDocs(ref)
    const data = []
    snapshot.forEach(doc => {
      data.push({ id: doc.id, path: doc.ref.path, ...doc.data() })
    })
    resolve(data)
  })
}

export function getFirestoreQuery (query) { 
  return new Promise(async (resolve) => {
    const snapshot = await getDocs(query)
    const data = []
    snapshot.forEach(doc => {
      data.push({ id: doc.id, path: doc.ref.path, ...doc.data() })
    })
    resolve(data)
  })
}

export function updateFirestoreDoc (path, updateObject) {
  return new Promise(async (resolve) => {
    const ref = firestoreRef(path)
    await updateDoc(ref, updateObject)
    resolve()
  })
}

export function revertVideoToBoard ({ id, audioRefFullPath, path }, deleteAllStrokesFromDb) {
  return new Promise(async resolve => {
    if (!confirm('Are you sure you want to delete this video?')) {
      return
    }
  
    const promises = []
    const boardRef = doc(getFirestore(), path)
    if (audioRefFullPath) {
      const audioRef = ref(getStorage(), audioRefFullPath)
      promises.push(
        deleteObject(audioRef)
      )
    }
    promises.push(
      updateDoc(boardRef, {
        creator: deleteField(),
        creatorPhoneNumber: deleteField(),
        date: deleteField(),
        audioDownloadURL: deleteField(),
        audioRefFullPath: deleteField()
      })
    )
    promises.push(deleteAllStrokesFromDb())
    await Promise.all(promises)
    resolve()
  })
}

// returns the ID of the new room created
export function createRoomDoc (classPath) {
  return new Promise(async resolve => {
    const newDocID = getRandomID()
    const db = getFirestore()
    const roomRef = doc(db, classPath + `rooms/${newDocID}`)
    const blackboardRef = doc(db, classPath + `blackboards/${newDocID}`)
    await Promise.all([
      setDoc(roomRef, {
        name: '',
        blackboards: [newDocID],
        date: new Date().toISOString()
          // rooms have an order property, look at v3's drag and drop source code
      }),
      setDoc(blackboardRef, {
        recordState: 'pre_record'
      })
    ])
    resolve(newDocID)
  })
}

// returns the ID of the board created
export async function createBoardDoc (boardsDbPath, roomRef) {
  return new Promise(async resolve => {
    const newID = getRandomID();  
    const blackboardRef = doc(getFirestore(), boardsDbPath + newID)
    // TODO: use batch operation
    await Promise.all([
      setDoc(blackboardRef, { 
        recordState: 'pre_record' 
      }),
      updateDoc(roomRef, {
        blackboards: arrayUnion(newID)
      })
    ]);  
    resolve(newID)
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
    blackboards: arrayUnion(boardDoc.id)
  })
}

