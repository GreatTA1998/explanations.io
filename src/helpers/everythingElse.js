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

export async function handleNewQuestionNotifications ({ classID, questionID, userDoc, questionTitleInput}) {
  return new Promise(async (resolve) => {
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
      <a href="https://explanations.io/${classID}/${questionID}">
        Link to question
      </a>
      `
    }

    for (const teacher of serverTeachers) { 
      sendEmail({ 
        toWho: teacher.email,
        ...emailSubjectAndContent
      })
    }
  
    sendEmail({ 
      toWho: 'elton@explanations.io',
      ...emailSubjectAndContent
    })
  
    sendEmail({
      toWho: userDoc.email,
      subject: '[explanations.io] Question received!',
      content: `Hello! This is an auto-reply to confirm that your question has been received, and that your teacher should respond within 2 days. Have a great week!
      (BTW anytime you encounter any problems, you can always directly email me for troubleshooting etc. You can also give me honest, negative feedback about explanations.io anytime :> so I have a chance to improve the experience for you and be successful)`
    })

    resolve()
  })
}

export function handleVideoUploadEmailNotifications ({ classID, questionDoc, userDoc }) {
  return new Promise(async resolve => {
    if (questionDoc.askerUID) {
      const askerDoc = await getFirestoreDoc(`/users/${questionDoc.askerUID}`)

      const emailSubjectAndContent = {
        subject: '[explanations.io] Your teacher replied!', 
        content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in response to your question: 
        <a href="https://explanations.io/${classID}/${questionDoc.id}">Link here</a>`
      }

      sendEmail({ 
        toWho: askerDoc.email,
        ...emailSubjectAndContent
      })

      sendEmail({ 
        toWho: 'elton@explanations.io',
        ...emailSubjectAndContent
      })
    } 

    if (questionDoc.questionParticipantUIDs) {
      for (const uid of questionDoc.questionParticipantUIDs) {
        const participantDoc = await getFirestoreDoc(`/users/${uid}`)
        if (!participantDoc) continue
        if (!participantDoc.email) continue

        console.log('emailing participant:', participantDoc.email)

        sendEmail({ 
          toWho: participantDoc.email,
          subject: '[explanations.io] New follow-up', 
          content: `<strong>${userDoc.name.split(" ")[0]}</strong> uploaded a video in a question thread you participated in.
          <br>
          <br>
          <a href="https://explanations.io/${classID}/${questionDoc.id}">Link to question</a>`
        })
      }
    }
    
    await updateFirestoreDoc(`/classes/${classID}/questions/` + questionDoc.id, {
      questionParticipantUIDs: arrayUnion(userDoc.uid)
    })
    
    resolve()
  })
}