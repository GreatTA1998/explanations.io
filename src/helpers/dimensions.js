import { HEIGHTS, ASPECT_RATIO, PAGE_PADDING } from '/src/helpers/CONSTANTS.js'

export const VIDEO_LAYOUT = {
  MOBILE_VERTICAL: 'mobile-vertical',
  SIDE_BY_SIDE: 'side-by-side',
  TRANSPARENT_OVERLAY: 'transparent-overlay'
}

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

  return canvasWidth
}

export function getPreviewVideoWidth ({ containerWidth, containerHeight }) {
  let remainingWidth = containerWidth
  let remainingHeight = containerHeight
  remainingHeight -= (HEIGHTS.BOARD_CHANGER + HEIGHTS.TITLE + HEIGHTS.AUDIO_SLIDER)
  remainingWidth -= 2 * PAGE_PADDING

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
  remainingWidth -= 2 * PAGE_PADDING

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