import { classDetailsDrawerWidth } from "../store.js"
import { get } from 'svelte/store'
import { 
  getFirestoreDoc, 
  updateFirestoreDoc, 
  getFirestoreQuery,
  createFirestoreQuery
} from '/src/helpers/crud.js'
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

export async function handleNewCommentEmailNotifications ({ boardDoc, userDoc, classID, roomID, commentString }) {
  // board creator
  if (userDoc.uid !== boardDoc.creatorUID) {
    const creatorDoc = await getFirestoreDoc(`/users/${boardDoc.creatorUID}`)
    if (creatorDoc && creatorDoc.email) {
      console.log("sending email to creator =,", creatorDoc.email)
      sendEmail({ 
        toWho: creatorDoc.email,
        subject: 'New comment on your video [explanations.io]', 
        content: `<strong>${userDoc.name.split(" ")[0]}</strong> commented on your video: "${commentString}"
        <a href="https://explanations.io/${classID}/${roomID}">Link here</a>`
      })
    }
  }

  if (boardDoc.commentParticipantUIDs) {
    for (const uid of boardDoc.commentParticipantUIDs) {
      const participantDoc = await getFirestoreDoc(`/users/${uid}`)
      if (!participantDoc) continue
      if (!participantDoc.email) continue
      console.log("sending email to participant =", participantDoc.email)
      sendEmail({ 
        toWho: participantDoc.email,
        subject: 'New comment follow-up [explanations.io]', 
        content: `<strong>${userDoc.name.split(" ")[0]}</strong> added a new comment on a thread you participated in: "${commentString}"
        <a href="https://explanations.io/${classID}/${roomID}">Link here</a>`
      })
    }
  }

  updateFirestoreDoc(`classes/${classID}/blackboards/` + boardDoc.id, {
    commentParticipantUIDs: arrayUnion(userDoc.uid)
  })
}

export async function handleNewQuestionNotifications ({ classID, roomID, userDoc, questionTitleInput}) {
   const q = createFirestoreQuery({ 
    collectionPath: `classes/${classID}/members`, 
    criteriaTerms: ['isTeacher', '==', true]
  })
  const serverTeachers = await getFirestoreQuery(q)

  for (const teacher of serverTeachers) { 
    if (teacher.email) {
      sendEmail({ 
        toWho: teacher.email,
        subject: 'New question [explanations.io]', 
        content: `<strong>${userDoc.name}</strong> asked: "${questionTitleInput}"
        <br>
        <br>
        <a href="https://explanations.io/${classID}/${roomID}">
          Link to question
        </a>
        `
      })
    } 
  }

  // also send it to me the founder
  sendEmail({ 
    toWho: 'elton@explanations.io',
    subject: 'Activity alert: student asked a question', 
    content: `<strong>${userDoc.name}</strong> asked: "${questionTitleInput}"
    <br>
    <br>
    <a href="https://explanations.io/${classID}/${roomID}">Link to question</a>`
  })
}


export function handleVideoUploadEmailNotifications (classID, roomDoc, userDoc) {
  return new Promise(async resolve => {
    if (roomDoc.askerUID) {
      console.log('roomDoc.askerUID =', roomDoc.askerUID)
      const askerDoc = await getFirestoreDoc(`/users/${roomDoc.askerUID}`)
      if (askerDoc.email) {
        console.log("emailing asker =", askerDoc.email)
        sendEmail({ 
          toWho: askerDoc.email,
          subject: 'Your teacher replied [explanations.io]', 
          content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in response to your question: 
          <a href="https://explanations.io/${classID}/${roomDoc.id}">Link here</a>`
        })

        sendEmail({ 
          toWho: 'elton@explanations.io',
          subject: 'Activity alert: teacher replied with video', 
          content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in response to your question: 
          <a href="https://explanations.io/${classID}/${roomDoc.id}">Link here</a>`
        })
      }
    } 

    if (roomDoc.questionParticipantUIDs) {
      for (const uid of roomDoc.questionParticipantUIDs) {
        const participantDoc = await getFirestoreDoc(`/users/${uid}`)
        if (!participantDoc) continue
        if (!participantDoc.email) continue

        console.log('emailing participant:', participantDoc.email)

        sendEmail({ 
          toWho: participantDoc.email,
          subject: 'New follow-up [explanations.io]', 
          content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in a question thread you participated in.
          <br>
          <br>
          <a href="https://explanations.io/${classID}/${roomDoc.id}">Link to question</a>`
        })
      }
    }
    
    await updateFirestoreDoc(`classes/${classID}/rooms/` + roomDoc.id, {
      questionParticipantUIDs: arrayUnion(userDoc.uid)
    })
    
    resolve()
  })
}