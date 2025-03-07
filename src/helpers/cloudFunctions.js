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

export function uploadToYoutube({ videoUrl, title, description, tags = [], creatorName = 'Anonymous' }) {
  const functions = getFunctions()
  const uploadToYoutube = httpsCallable(functions, 'uploadToYoutube')
  return new Promise(async (resolve, reject) => {
    try {
      const result = await uploadToYoutube({ videoUrl, title, description, tags, creatorName })
      resolve(result.data)
    } catch (error) {
      console.error('Error uploading to YouTube:', error)
      reject(error)
    }
  })
}