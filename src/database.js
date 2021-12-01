import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { doc, collection, getDocs, getDoc, query, where, setDoc, deleteDoc  } from "firebase/firestore";

export function initializeDatabase () {
  initializeApp({
    apiKey: "AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",
    authDomain: "feynman-mvp.firebaseapp.com",
    databaseURL: "https://feynman-mvp.firebaseio.com",
    projectId: "feynman-mvp",
    storageBucket: "feynman-mvp.appspot.com",
    messagingSenderId: "148720897081",
    appId: "1:148720897081:web:fdf5c605dcc74b56",
    measurementId: "G-DR4M7QGV7Z"
  })
}

// export const db = getFirestore()
// export const auth = getAuth()

export async function fetchDocs (dbPath) {
  return new Promise(async (resolve) => {
    const snapshot = await getDocs(collection(getFirestore(), dbPath))
    const data = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })
    resolve(data)
  })
}

export async function fetchDoc (dbPath) {
  return new Promise(async (resolve) => {
    const snapshot = await getDoc(
      doc(getFirestore(), dbPath)
    )
    const data = { id: snapshot.id, ...snapshot.data() }
    resolve(data)
  })
}

// TODO: listener and writers 
export async function createDoc (collectionName, docID, docObject) {
  return new Promise(async (resolve) => {
    const dbDoc = await setDoc(
      doc(getFirestore(), collectionName, docID), 
      docObject
    )
    resolve(dbDoc)
  })
}

export async function wipeDoc (collectionName, docID) {
  console.log('wipeDoc: collectionName =', collectionName)
  console.log('wipeDoc: docID =', docID)
  return new Promise(async (resolve) => {
    await wipeDoc(
      doc(getFirestore(), collectionName, docID)
    )
    resolve()
  })
}
