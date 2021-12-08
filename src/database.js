import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, getDocs, getDoc } from "firebase/firestore";

export function initializeDatabase () {
  return initializeApp({
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
