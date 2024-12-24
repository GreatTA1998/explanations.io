import { writable, readable } from 'svelte/store';
import { getRandomID } from './helpers/utility.js'
import { WIDTHS } from './helpers/CONSTANTS.js';

// to scale the pencil stroke width for smaller/bigger devices
export const assumedCanvasHeight = writable(900) // 4:3 aspect ratio
export const assumedCanvasWidth = writable(1200)

export const hasFetchedUser = writable(false)
export const user = writable({}) // {} means not logged in, cannot be null
export const userInfoFromAuthProvider = writable({})

export const currentTool = writable({
    type: 'pencil',
    color: 'hsla(0, 0, 100%, 0)',
    lineWidth: 3
})
export const onlyAllowApplePencil = writable(true)
export const browserTabID = writable(getRandomID())

export const recordState = writable('pre_record') // mid_record and post_record
export const baseMicStream = writable(null)
export const willPreventPageLeave = writable(false)

export const adminUIDs = readable(['xC05mXTCFIRxLnyxfKnxY7oNBPi2'])

export const drawerWidth = writable(WIDTHS.DRAWER_EXPANDED)

export const whatIsBeingDragged = writable('')
export const whatIsBeingDraggedID = writable('')

export const classServerDoc = writable({})
export const recentSearchedServerDoc = writable({})

// dimensions
export const blackboardWidth = writable(0)
export const videoPreviewWidth = writable(0)
export const videoCinemaWidth = writable(0)

export const videoCinemaLayout = writable('')

export const isFullServerMode = writable(false)
export const didRenderSplashScreen = writable(false)