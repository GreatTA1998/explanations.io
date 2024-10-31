import { getFunctions, httpsCallable } from 'firebase/functions'

// the function params injects into the original Cloud Function 'data' param
export function sendTextMessage ({ content, toWho }) {
  const functions = getFunctions()
  const sendTextMessage = httpsCallable(functions, 'sendTextMessage')
  return new Promise(async resolve => {
    await sendTextMessage({ content, toWho })
    resolve()
  })
}

export function sendEmail ({ subject, content, toWho }) {
  const functions = getFunctions()
  const sendEmail = httpsCallable(functions, 'sendEmail')
  return new Promise(async resolve => {
    await sendEmail({ subject, content, toWho })
    resolve()
  })
}

export function deleteRecursively ({ path }) {
  const functions = getFunctions()
  const deleteRecursively = httpsCallable(functions, 'deleteRecursively')
  return new Promise(async resolve => {
    await deleteRecursively({ path })
    resolve()
  })
}