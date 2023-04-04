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
      { id: snapshot.id, path: snapshot.path, ...snapshot.data() }
    )
  })
}

export function getFirestoreCollection (path) {
  return new Promise(async (resolve) => {
    const ref = collection(getFirestore(), path)
    const snapshot = await getDocs(ref)
    const data = []
    snapshot.forEach(doc => {
      data.push({ id: doc.id, path: doc.path, ...doc.data() })
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
    const roomRef = doc(getFirestore(), classPath + `rooms/${newDocID}`)
    const blackboardRef = doc(getFirestore(), classPath + `blackboards/${newDocID}`)
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