export const OVERLAY_LOOK_KEY = 'transcriptOverlayLook'
export const OVERLAY_LOOK_TUNE_KEYS = {
  1: 'transcriptLook1',
  2: 'transcriptLook2',
  3: 'transcriptLook3'
}
export const OVERLAY_LOOK_DEFAULTS = {
  1: { h: 0, a: 0.5 },
  2: { h: 0, a: 0.62 },
  3: { h: 46, a: 0.66 }
}

export function readOverlayLook () {
  let look = 1
  try {
    const n = Number(localStorage.getItem(OVERLAY_LOOK_KEY))
    if (n >= 1 && n <= 3) look = n
  } catch (_) {}

  const fallback = OVERLAY_LOOK_DEFAULTS[look]
  let h = fallback.h
  let a = fallback.a
  try {
    const t = JSON.parse(localStorage.getItem(OVERLAY_LOOK_TUNE_KEYS[look]) || 'null')
    if (t && t.h >= 0 && t.h <= 360) h = +t.h
    if (t && t.a >= 0 && t.a <= 1) a = +t.a
  } catch (_) {}

  return { look, h, a }
}
