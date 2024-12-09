import { videoCinemaLayout } from '/src/store.js'

export const VIDEO_LAYOUT = {
  MOBILE_VERTICAL: 'mobile-vertical',
  SIDE_BY_SIDE: 'side-by-side',
  TRANSPARENT_OVERLAY: 'transparent-overlay'
}

// TO-DO: ensure these heights are passed throughout the apps as JS in CSS styles
export const HEIGHTS = Object.freeze({
  TITLE: 30 + 12, // the board description could be multi-line, but we allocate space for one line, includes bottom margin
  BOARD_CHANGER: 36 + 16, // includes padding
  AUDIO_SLIDER: 50, // assume it's constant, don't scale it for this version
})

export const ASPECT_RATIO = 4/3
export const SIDE_PADDING = 16

export function getCinemaVideoSize () {
  // title will be displayed in the comment-transcript section
  // maximum space utilization for the video, no drawer, but has an audio slider and the board changer
  let remainingWidth = window.innerWidth
  let remainingHeight = window.innerHeight

  remainingHeight -= (HEIGHTS.BOARD_CHANGER + HEIGHTS.AUDIO_SLIDER)

  const canvasWidth = getCanvasWidth({ 
    availableWidth: remainingWidth, 
    availableHeight: remainingHeight 
  })

  // determine the layout type
  if (remainingWidth <= 800) { // anything too small makes the 25% overlay column too narrow
    videoCinemaLayout.set(VIDEO_LAYOUT.MOBILE_VERTICAL)
  } else if (remainingWidth - canvasWidth >= 240) {
    videoCinemaLayout.set(VIDEO_LAYOUT.SIDE_BY_SIDE)
  } else {
    videoCinemaLayout.set(VIDEO_LAYOUT.TRANSPARENT_OVERLAY)
  } 

  return canvasWidth
}

export function getPreviewVideoWidth ({ containerWidth, containerHeight }) {
  let remainingWidth = containerWidth
  let remainingHeight = containerHeight
  remainingHeight -= (HEIGHTS.BOARD_CHANGER + HEIGHTS.TITLE + HEIGHTS.AUDIO_SLIDER)
  remainingWidth -= 2 * SIDE_PADDING

  return getCanvasWidth({ 
    availableWidth: remainingWidth, 
    availableHeight: remainingHeight 
  })
  // it'll naturally react to drawer expand/collapse via `containerWidth`
}

export function getBlackboardModuleSize ({ containerWidth, containerHeight }) {
  // needs to fit board changer + blackboard (respecting drawer width)
  // respects the drawer width (and achieves fullscreen by closing the drawer. The advantage is 
  let remainingWidth = containerWidth
  let remainingHeight = containerHeight

  remainingHeight -= HEIGHTS.BOARD_CHANGER
  remainingWidth -= 2 * SIDE_PADDING

  return getCanvasWidth({ 
    availableWidth: remainingWidth, 
    availableHeight: remainingHeight 
  })
}

function getCanvasWidth ({ availableWidth, availableHeight }) { 
  if (availableWidth/ASPECT_RATIO <= availableHeight) {
    return availableWidth
  } 
  else return availableHeight * ASPECT_RATIO
}