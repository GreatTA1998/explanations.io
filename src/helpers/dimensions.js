import { HEIGHTS, ASPECT_RATIO, PAGE_PADDING } from '/src/helpers/CONSTANTS.js'

export const VIDEO_LAYOUT = {
  MOBILE_VERTICAL: 'mobile-vertical',
  SIDE_BY_SIDE: 'side-by-side',
  TRANSPARENT_OVERLAY: 'transparent-overlay'
}

// Live boards and playback share this size. Controls sit on the canvas, so a
// video is not given a shorter board to leave a strip for the player.
// pageInset matches beta/main: leave PAGE_PADDING on each side of the main column.
// Cinema / fullscreen passes pageInset: false so the board can fill the window.
export function getBoardWidth ({ containerWidth, containerHeight, pageInset = true }) {
  return fitCanvas({
    availableWidth: pageInset ? containerWidth - 2 * PAGE_PADDING : containerWidth,
    availableHeight: containerHeight - HEIGHTS.BOARD_CHANGER
  })
}

function fitCanvas ({ availableWidth, availableHeight }) {
  if (availableWidth / ASPECT_RATIO <= availableHeight) {
    return availableWidth
  }
  return availableHeight * ASPECT_RATIO
}
