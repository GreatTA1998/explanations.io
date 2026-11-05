import { HEIGHTS, ASPECT_RATIO } from '/src/helpers/CONSTANTS.js'

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

// Canvas fills the width it is given. Title rows keep their own inset.
export function getPreviewVideoWidth ({ containerWidth, containerHeight }) {
  return getCanvasWidth({
    availableWidth: containerWidth,
    availableHeight: containerHeight - (HEIGHTS.BOARD_CHANGER + HEIGHTS.TITLE + HEIGHTS.AUDIO_SLIDER)
  })
}

export function getBlackboardModuleSize ({ containerWidth, containerHeight }) {
  return getCanvasWidth({
    availableWidth: containerWidth,
    availableHeight: containerHeight - HEIGHTS.BOARD_CHANGER
  })
}

function getCanvasWidth ({ availableWidth, availableHeight }) { 
  if (availableWidth/ASPECT_RATIO <= availableHeight) {
    return availableWidth
  } 
  else return availableHeight * ASPECT_RATIO
}