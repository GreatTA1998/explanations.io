import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection, getDocs, getDoc, query, where  } from "firebase/firestore"; 

initializeApp({
  apiKey: "AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",
  authDomain: "feynman-mvp.firebaseapp.com",
  databaseURL: "https://feynman-mvp.firebaseio.com",
  projectId: "feynman-mvp",
  storageBucket: "feynman-mvp.appspot.com",
  messagingSenderId: "148720897081",
  appId: "1:148720897081:web:fdf5c605dcc74b56",
  measurementId: "G-DR4M7QGV7Z"
});

const db = getFirestore()

export default db

export async function fetchDocs (dbPath) {
  return new Promise(async (resolve) => {
    const snapshot = await getDocs(collection(db, dbPath))
    const data = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })
    resolve(data)
  })
}

export async function fetchDoc (dbPath) {
  return new Promise(async (resolve) => {
    const snapshot = await getDoc(doc(db, dbPath))
    const data = { id: snapshot.id, ...snapshot.data() }
    resolve(data)
  })
}

