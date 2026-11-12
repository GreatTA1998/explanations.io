import { HEIGHTS, ASPECT_RATIO } from '/src/helpers/CONSTANTS.js'

export const VIDEO_LAYOUT = {
  MOBILE_VERTICAL: 'mobile-vertical',
  SIDE_BY_SIDE: 'side-by-side',
  TRANSPARENT_OVERLAY: 'transparent-overlay'
}

// Live boards and playback share this size. Controls sit on the canvas, so a
// video is not given a shorter board to leave a strip for the player.
export function getBoardWidth ({ containerWidth, containerHeight }) {
  return fitCanvas({
    availableWidth: containerWidth,
    availableHeight: containerHeight - HEIGHTS.BOARD_CHANGER
  })
}

function fitCanvas ({ availableWidth, availableHeight }) {
  if (availableWidth / ASPECT_RATIO <= availableHeight) {
    return availableWidth
  }
  return availableHeight * ASPECT_RATIO
}
