import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { doc, collection, getDocs, getDoc, query, where, setDoc, deleteDoc, onSnapshot  } from "firebase/firestore";

export function initializeDatabase () {
  initializeApp({
    apiKey: "AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",
    databaseURL: "https://feynman-mvp.firebaseio.com",
    authDomain: "feynman-mvp.firebaseapp.com",
    projectId: "feynman-mvp",
    storageBucket: "feynman-mvp.appspot.com",
    messagingSenderId: "148720897081",
    appId: "1:148720897081:web:fdf5c605dcc74b56",
    measurementId: "G-DR4M7QGV7Z"
  })
}

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

export async function syncVariableWithDB ({ variable, dbPath }) {
  // return new Promise(async (resolve, reject) => {
    // try {
      const ref = collection(getFirestore(), dbPath)
      const unsubscribe = onSnapshot(ref, snapshot => { // onSnapshot does NOT return a promise
        const docs = []
        snapshot.forEach(doc => { 
          docs.push({ 
            id: doc.id, 
            ref: doc.ref.path, 
            ...doc.data() 
          })
        });
        console.log('variable =', variable)
        variable = docs // if it doesn't work consider [...]
      })
      return unsubscribe

    //   resolve(unsubscribe);
    // } catch (error) {
    //   reject(error);
    //   alert(error)
    // } 
  // });
}
