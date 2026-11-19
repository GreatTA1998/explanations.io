import { deleteField } from 'firebase/firestore'
import { updateFirestoreDoc } from './crud.js'

// A doodle animation is a saved blackboard that replays its strokes.
// v3 marked these with `creator` + `date` and no audio. `isDoodleAnimation`
// is the same switch for boards saved from this app. Strokes stay put.
export function isDoodleAnimation (boardDoc) {
  if (!boardDoc || boardDoc.audioDownloadURL) return false
  return Boolean(boardDoc.isDoodleAnimation || (boardDoc.creator && boardDoc.date))
}

export async function saveBoardAsAnimation ({ boardDoc, userDoc }) {
  if (!boardDoc || !boardDoc.path) return

  const name = (userDoc && userDoc.name) || ''
  const parts = name.trim().split(/\s+/).filter(Boolean)

  try {
    await updateFirestoreDoc(boardDoc.path, {
      isDoodleAnimation: true,
      creatorUID: (userDoc && userDoc.uid) || '',
      creatorName: name,
      creator: {
        email: (userDoc && userDoc.email) || '',
        uid: (userDoc && userDoc.uid) || '',
        firstName: parts[0] || '',
        lastName: parts.slice(1).join(' ')
      },
      date: new Date().toISOString()
    })
  } catch (error) {
    alert(error && error.message ? error.message : error)
  }
}

export async function revertAnimationToBoard ({ boardDoc, userDoc }) {
  if (!boardDoc || !boardDoc.path) return

  const creatorUID = boardDoc.creatorUID || (boardDoc.creator && boardDoc.creator.uid) || ''
  const creatorEmail = (boardDoc.creator && boardDoc.creator.email) || ''
  const uid = (userDoc && userDoc.uid) || ''
  const email = (userDoc && userDoc.email) || ''

  if (creatorEmail && email && creatorEmail !== email) {
    alert('You need to be the creator to revert this animation')
    return
  }
  if (creatorUID && uid && creatorUID !== uid) {
    alert('You need to be the creator to revert this animation')
    return
  }

  try {
    await updateFirestoreDoc(boardDoc.path, {
      isDoodleAnimation: deleteField(),
      creator: deleteField(),
      creatorUID: deleteField(),
      creatorName: deleteField(),
      date: deleteField()
    })
  } catch (error) {
    alert(error && error.message ? error.message : error)
  }
}
