// TO-DO: these are not currently injected into equivalent CSS variables
export const DRAWER_EXPANDED_WIDTH = 300
export const SUBPAGE_INDENATION_PX = 12
export const TABLET_MIN_WIDTH = 768

export const WIDTHS = Object.freeze({
  LOGO: 50,
  SEARCH_BAR_COMPACT: 172
})

// TO-DO: ensure these heights are passed throughout the apps as JS in CSS styles
export const HEIGHTS = Object.freeze({
  TITLE: 30 + 12, // the board description could be multi-line, but we allocate space for one line, includes bottom margin
  BOARD_CHANGER: 36 + 16, // includes padding
  AUDIO_SLIDER: 50, // assume it's constant, don't scale it for this version
})

export function translateJSConstantsToCSSVariables () {
  for (const [key, value] of Object.entries({ ...WIDTHS, ...HEIGHTS })) {
    document.documentElement.style.setProperty(`--${key}`, `${value}px`)
  }
}
