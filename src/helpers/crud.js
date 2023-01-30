import { getRandomID } from './utility.js'
import { deleteField, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'

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
    resolve()
  })
}