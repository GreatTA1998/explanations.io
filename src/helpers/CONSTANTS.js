// NOTE: these are not currently injected into equivalent CSS variables
export const PAGE_PADDING = 16
export const SUBPAGE_INDENATION_PX = 12
export const ASPECT_RATIO = 4/3

export const WIDTHS = Object.freeze({
  DRAWER_EXPANDED: 300,
  LOGO: 50,
  SEARCH_BAR_COMPACT: 172,
  SMALLEST_TABLET: 768
})

// TO-DO: ensure these heights are passed throughout the apps as JS in CSS styles
export const HEIGHTS = Object.freeze({
  NAVBAR: 56,
  TITLE: 30 + 12, // the board description could be multi-line, but we allocate space for one line, includes bottom margin
  BOARD_CHANGER: 36 + 16, // includes padding
  AUDIO_SLIDER: 50, // assume it's constant, don't scale it for this version
})

export function translateJSConstantsToCSSVariables () {
  for (const [key, value] of Object.entries(WIDTHS)) {
    document.documentElement.style.setProperty(
      `--width-${key}`.toLowerCase().replace(/_/g, '-'),
      `${value}px`
    )
  }
  for (const [key, value] of Object.entries(HEIGHTS)) {
    document.documentElement.style.setProperty(
      `--height-${key}`.toLowerCase().replace(/_/g, '-'),
      `${value}px`
    )
  }
}