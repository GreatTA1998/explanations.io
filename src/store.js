import { writable, readable } from 'svelte/store';
import { getRandomID } from './helpers/utility.js'

export const canvasHeight = writable(0)
export const canvasWidth = writable(0)

export const hasFetchedUser = writable(false)
export const user = writable({}) // {} means not logged in, cannot be null

export const currentTool = writable({
    type: 'pencil',
    color: 'white',
    lineWidth: 3
})

export const recordState = writable('pre_record') // mid_record and post_record

export const dailyMicStream = writable(null)

export const roomToPeople = writable({})

export const dailyRoomParticipants = writable({})

export const browserTabID = readable(getRandomID())

export const isMicOn = writable(false)

export const isFirestoreDocCreated = writable(false)