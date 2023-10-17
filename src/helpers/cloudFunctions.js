import { getFunctions, httpsCallable } from 'firebase/functions'

export function sendTextMessage ({ content, toWho }) {
  const functions = getFunctions()
  const sendTextMessage = httpsCallable(functions, 'sendTextMessage')
  return new Promise(async resolve => {
    await sendTextMessage({ content, toWho })
    resolve()
  })
}

export function sendEmail () {
  const functions = getFunctions()
  const sendEmail = httpsCallable(functions, 'sendEmail')
  return new Promise(async resolve => {
    await sendEmail()
    resolve()
  })
}