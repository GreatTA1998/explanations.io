
export function lightDismiss (node, options) {
  let current = options
  const settings = () => typeof current === 'function' ? { close: current } : (current || {})
  const menuSurface = () => node.classList.contains('mdc-menu-surface')
    ? node
    : node.querySelector('.mdc-menu-surface')
  const isOpen = () => {
    const { always } = settings()
    if (always) return true
    const surface = menuSurface()
    return !!surface && surface.classList.contains('mdc-menu-surface--open')
  }
  const targetElement = (event) => {
    const target = event.target
    return target instanceof Element ? target : target && target.parentElement
  }
  function onPointer (event) {
    const { close, ignore } = settings()
    if (!close || !isOpen()) return
    const element = targetElement(event)
    if (!element || node.contains(element) || (ignore && element.closest(ignore))) return
    close()
    if (element.closest('canvas')) { event.preventDefault(); event.stopPropagation() }
  }
  function onKey (event) {
    const { close } = settings()
    if (event.key === 'Escape' && close && isOpen()) close()
  }
  const types = ['pointerdown', 'mousedown', 'touchstart']
  for (const type of types) document.addEventListener(type, onPointer, true)
  document.addEventListener('keydown', onKey)
  return {
    update (next) { current = next },
    destroy () {
      for (const type of types) document.removeEventListener(type, onPointer, true)
      document.removeEventListener('keydown', onKey)
    }
  }
}
