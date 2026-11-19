// One outside-tap for popups and menus. A phone canvas calls preventDefault on
// touch, which swallows the click these menus used to wait for, so this listens
// earlier (pointer and touch) and also closes on Escape.

export function lightDismiss (node, options) {
  let current = options

  function settings () {
    if (typeof current === 'function') return { close: current }
    return current || {}
  }

  function menuSurface () {
    if (node.classList.contains('mdc-menu-surface')) return node
    return node.querySelector('.mdc-menu-surface')
  }

  function isOpen () {
    const { always } = settings()
    if (always) return true
    const surface = menuSurface()
    return !!surface && surface.classList.contains('mdc-menu-surface--open')
  }

  function targetElement (event) {
    const target = event.target
    if (target instanceof Element) return target
    return target && target.parentElement
  }

  function onPointer (event) {
    const { close, ignore } = settings()
    if (!close || !isOpen()) return
    const element = targetElement(event)
    if (!element) return
    if (node.contains(element)) return
    if (ignore && element.closest(ignore)) return
    close()
    // The dismiss tap should not also start a stroke.
    if (element.closest('canvas')) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  function onKey (event) {
    const { close } = settings()
    if (event.key !== 'Escape' || !close || !isOpen()) return
    close()
  }

  const types = ['pointerdown', 'mousedown', 'touchstart']
  for (const type of types) document.addEventListener(type, onPointer, true)
  document.addEventListener('keydown', onKey)

  return {
    update (next) {
      current = next
    },
    destroy () {
      for (const type of types) document.removeEventListener(type, onPointer, true)
      document.removeEventListener('keydown', onKey)
    }
  }
}
