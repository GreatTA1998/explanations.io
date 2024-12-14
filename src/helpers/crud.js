import { getRandomID } from './utility.js'
import { 
  deleteField, 
  collection, 
  query, 
  orderBy, 
  limit, 
  setDoc, getDoc, getDocs, updateDoc, deleteDoc,
  getFirestore, 
  arrayUnion, arrayRemove, 
  increment, 
  doc, 
  where 
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
import { deleteRecursively } from '/src/helpers/cloudFunctions.js'

// I prefix all Firestore helper functions with `firestore` prefix
// e.g. `firestoreRef` (written by me) vs `ref` (native to library)
// TO-DO: test these functions
export function firestoreRef (path) {
  const db = getFirestore()
  return doc(db, path)
}

export function firestoreCollection (path) {
  const db = getFirestore()
  return collection(db, path)
}

export function setFirestoreDoc (path, newObject) {
  return new Promise(async (resolve) => {
    const ref = firestoreRef(path)
    await setDoc(ref, newObject)
    resolve()
  })
}

export function getFirestoreDoc (path) {
  return new Promise(async (resolve, reject) => {
    const ref = firestoreRef(path)
    const snapshot = await getDoc(ref)
    if (snapshot.exists()) {
      resolve(
        { id: snapshot.id, path: snapshot.ref.path, ...snapshot.data() }
      )
    } else {
      reject('Doc doesn not exist for path =', path)
    }
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

export function deleteFirestoreDoc (path) {
  return new Promise(async (resolve) => {
    const ref = firestoreRef(path)
    await deleteDoc(ref)
    resolve()
  })
}

export function createFirestoreQuery ({ collectionPath, criteriaTerms }) {
  const db = getFirestore()
  const ref = collection(db, collectionPath)
  const q = query(ref, where(criteriaTerms[0], criteriaTerms[1], criteriaTerms[2]))
  return q
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
        creatorUID: deleteField(),
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

export function deleteFromStorage ({ path }) {
  deleteObject(
    ref(getStorage(), path)
  )
}

// returns the ID of the new room created
export function createRoomDoc (classPath) {
  return new Promise(async resolve => {
    const classDoc = await getFirestoreDoc(classPath)

    const newDocID = getRandomID()
        
    const idOfSlide2 = getRandomID() 
    const idOfSlide3 = getRandomID()


    const db = getFirestore()
    const roomRef = doc(db, classPath + `rooms/${newDocID}`)
    const blackboardRef = doc(db, classPath + `blackboards/${newDocID}`)
    await Promise.all([
      setDoc(roomRef, {
        name: '',
        blackboards: [newDocID],
        date: new Date().toISOString(),
        classServerOrder: classDoc.maxClassServerOrder + 3 || 3,
        parentRoomID: ''
        // rooms have an order property, look at v3's drag and drop source code
      }),
      setDoc(blackboardRef, {
        recordState: 'pre_record',
        slideIDs: [newDocID, idOfSlide2, idOfSlide3],
        isMultiboard: true
      }),
      setFirestoreDoc(classPath + `blackboards/${newDocID}/slides/${newDocID}`, {
        // empty doc matters because it can then be updated with background images etc.
      }),
      setFirestoreDoc(classPath + `blackboards/${newDocID}/slides/${idOfSlide2}`, {
        // empty doc matters because it can then be updated with background images etc.
      }),
      setFirestoreDoc(classPath + `blackboards/${newDocID}/slides/${idOfSlide3}`, {

      }),
      updateFirestoreDoc(classPath, {
        maxClassServerOrder: classDoc.maxClassServerOrder + 3
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

// update metadata/statistics
// MUST BE DONE BEFORE CHANGING OPERATIONS - you must update statistics before parentRoomID literally becomes
// the exact same room i.e. the droppedRoom
// it's silently correct when dragging to its own folder, 
// because +1 -1 = 0  
export async function updateNumOfSubfolders ({ draggedRoomID, droppedRoomID, basePath }) {
  return new Promise(async (resolve) => {
    const draggedRoomDoc = await getFirestoreDoc(basePath + draggedRoomID)
    if (draggedRoomDoc.parentRoomID) {
      await updateFirestoreDoc(basePath + draggedRoomDoc.parentRoomID, {
        numOfChildren: increment(-1)
      })
    }
    // note: dropping to top level would mean there is no `droppedRoomID`
    if (droppedRoomID) {
      await updateFirestoreDoc(basePath + droppedRoomID, {
        numOfChildren: increment(1)
      })
    }
    resolve()
  })
}

export async function createNewMultiboard ({ baseDocPath, boardsPath }) {
  return new Promise(async (resolve) => {
    const newID = getRandomID()
    const boardPath = `${boardsPath}${newID}/`
  
    await setFirestoreDoc(boardPath, { 
      recordState: 'pre_record',
      slideIDs: [newID],
      isMultiboard: true
    })
  
    await Promise.all([
      setFirestoreDoc(boardPath + `slides/${newID}/`, {
        // empty doc matters because it can then be updated with background images etc.
      }),
      updateFirestoreDoc(baseDocPath, {
        blackboardIDs: arrayUnion(newID)
      })
    ])
    resolve()
  })
}

export async function deleteArbitraryBlackboard ({ boardDoc, classID }) {
  if (boardDoc.audioRefFullPath) {
    try {
      // we no longer push it onto this promise array - otherwise it'll be resolved OUTSIDE of catch block and interrupt the entire function when audio is empty
      // subdeleteRequests.push(
        deleteObject(
          ref(getStorage(), boardDoc.audioRefFullPath)
        )
      // )
    } catch (error) {
      console.alert(error)
    }
  }
  await deleteRecursively({
    path: `/classes/${classID}/blackboards/${boardDoc.id}` 
  })
  console.log(`Successfully deleted board with ID ${boardDoc.id}`)
}