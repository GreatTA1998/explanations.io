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
import { goto } from '$app/navigation'

export const drawerExpandedWidth = 240

export function  toggleClassDetailsDrawerWidth () {
  if (get(classDetailsDrawerWidth) === drawerExpandedWidth) {
    classDetailsDrawerWidth.set(0)
  }
  else if (get(classDetailsDrawerWidth) === 0) {
    classDetailsDrawerWidth.set(drawerExpandedWidth)
  }
}

export async function handleNewCommentEmailNotifications ({ boardDoc, userDoc, classID, questionID, commentString, linkToQuestion }) {
  // handle the new commentor
  if (userDoc.uid !== boardDoc.creatorUID) {
    updateFirestoreDoc(`classes/${classID}/blackboards/` + boardDoc.id, {
      commentParticipantUIDs: arrayUnion(userDoc.uid)
    })

    getFirestoreDoc(`/users/${boardDoc.creatorUID}`).then(creatorDoc => {
      if (creatorDoc?.email) {
        sendEmail({ 
          toWho: creatorDoc.email,
          subject: 'New comment on your video [explanations.io]', 
          content: `<strong>${userDoc.name.split(" ")[0]}</strong> commented on your video: "${commentString}"
          <a href="${linkToQuestion}">Link here</a>`
        })
      }
    })
  }
  
  // email other participants
  if (boardDoc.commentParticipantUIDs) {
    for (const uid of boardDoc.commentParticipantUIDs) {
      if (uid === userDoc.uid) continue

      const participantDoc = await getFirestoreDoc(`/users/${uid}`)
      if (!participantDoc?.email) continue
      
      sendEmail({ 
        toWho: participantDoc.email,
        subject: '[explanations.io] New comment follow-up', 
        content: `<strong>${userDoc.name.split(" ")[0]}</strong> added a new comment on a thread you participated in: "${commentString}"
        <a href="${linkToQuestion}">Link here</a>`
      })
    }
  }
}

export async function handleNewQuestionNotifications ({ classID, questionID, userDoc, questionTitleInput, linkToQuestion }) {
  return new Promise(async (resolve) => {
    const promises = []

    const q = createFirestoreQuery({ 
      collectionPath: `/classes/${classID}/members`, 
      criteriaTerms: ['isTeacher', '==', true]
    })
    const serverTeachers = await getFirestoreQuery(q)
    
    const emailSubjectAndContent = {
      subject: '[explanations.io] Student asked a question',
      content: `<strong>${userDoc.name}</strong> asked: "${questionTitleInput}"
      <br>
      <br>
      <a href="${linkToQuestion}">Link to question</a>
      `
    }

    for (const teacher of serverTeachers) { 
      promises.push(
        sendEmail({ 
          toWho: teacher.email,
          ...emailSubjectAndContent
        })
      )
    }
    
    promises.push(
      sendEmail({ 
        toWho: 'elton@explanations.io',
        ...emailSubjectAndContent
      })
    )
    
    promises.push(
      sendEmail({
        toWho: userDoc.email,
        subject: '[explanations.io] Question received!',
        content: `Hello! This is an auto-reply to confirm that your question has been received, and your teacher usually replies within 48 hours. Have a great week!
        (BTW anytime you encounter any problems, you can always directly email me for troubleshooting etc. You can also give me honest, negative feedback about explanations.io anytime :> so I have a chance to improve the experience for you and be successful)`
      })
    )

    await Promise.all(promises)

    resolve()
  })
}

export function handleVideoUploadEmailNotifications ({ classID, questionDoc, userDoc, linkToQuestion }) {
  return new Promise(async resolve => {
    const promises = []

    if (questionDoc.askerUID) {
      const askerDoc = await getFirestoreDoc(`/users/${questionDoc.askerUID}`)

      const emailSubjectAndContent = {
        subject: '[explanations.io] Your teacher replied!', 
        content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in response to your question: 
        <a href="${linkToQuestion}">Link here</a>`
      }

      promises.push(
        sendEmail({ 
          toWho: askerDoc.email,
          ...emailSubjectAndContent
        })
      )
    
      promises.push(
        sendEmail({ 
          toWho: 'elton@explanations.io',
          ...emailSubjectAndContent
        })
      )
    } 

    if (questionDoc.questionParticipantUIDs) {
      for (const uid of questionDoc.questionParticipantUIDs) {
        const participantDoc = await getFirestoreDoc(`/users/${uid}`)
        if (!participantDoc) continue
        if (!participantDoc.email) continue

        console.log('emailing participant:', participantDoc.email)

        promises.push(
          sendEmail({ 
            toWho: participantDoc.email,
            subject: '[explanations.io] New follow-up', 
            content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in a question thread you participated in.
            <br>
            <br>
            <a href="${linkToQuestion}">Link to question</a>`
          })
        )
      }
    }
    
    promises.push(
      updateFirestoreDoc(`/classes/${classID}/questions/` + questionDoc.id, {
        questionParticipantUIDs: arrayUnion(userDoc.uid)
      })
    )
   
    await Promise.all(promises)
    resolve()
  })
}

export function handleServerRedirect (serverObj) {
  if (serverObj.recentQuestionID) {
    goto(`/${serverObj.id}/question/${serverObj.recentQuestionID}`)
  } 
  else if (serverObj.featuredRoomID) {
    goto(`/${serverObj.id}/${serverObj.featuredRoomID}`)
  }
  else {
    goto(`/${serverObj.id}/overview`)
  }
}