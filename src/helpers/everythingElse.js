import { classDetailsDrawerWidth } from "../store.js"
import { get } from 'svelte/store'
import { getFirestoreDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
import { arrayUnion } from 'firebase/firestore'
import { sendEmail } from '/src/helpers/cloudFunctions.js'

export const drawerExpandedWidth = 240

export function  toggleClassDetailsDrawerWidth () {
  if (get(classDetailsDrawerWidth) === drawerExpandedWidth) {
    classDetailsDrawerWidth.set(0)
  }
  else if (get(classDetailsDrawerWidth) === 0) {
    classDetailsDrawerWidth.set(drawerExpandedWidth)
  }
}


export function handleVideoUploadEmailNotifications (classID, roomDoc, userDoc) {
  return new Promise(async resolve => {
    if (roomDoc.askerUID) {
      const askerDoc = await getFirestoreDoc(`classes/${classID}/members/${roomDoc.askerUID}`)
      if (askerDoc.email) {
        console.log("sending an email to asker =", askerDoc.email)
        sendEmail({ 
          toWho: askerDoc.email,
          subject: 'Your teacher replied [explanations.app]', 
          content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in response to your question: 
          <a href="https://explanations.app/${classID}/${roomDoc.id}">Link here</a>`
        })
      }
    } 

    if (roomDoc.questionParticipantUIDs) {
      for (const uid of roomDoc.questionParticipantUIDs) {
        const participantDoc = await getFirestoreDoc(`classes/${classID}/members/${uid}`)
        if (!participantDoc) continue
        if (!participantDoc.email) continue

        console.log('sending email to =', participantDoc.email)

        sendEmail({ 
          toWho: participantDoc.email,
          subject: 'New follow-up [explanations.app]', 
          content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in a question thread you participated in.
          <br>
          <br>
          <a href="https://explanations.app/${classID}/${roomDoc.id}">Link to question</a>`
        })
      }
    }

    await updateFirestoreDoc(`classes/${classID}/rooms/` + roomDoc.id, {
      questionParticipantUIDs: arrayUnion(userDoc.uid)
    })
    resolve()
  })
}