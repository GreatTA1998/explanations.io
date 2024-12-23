import { readable } from 'svelte/store'
import { createThrottledFunction } from '../helpers/debounce.js'

export const viewport = readable(
  { 
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0
  }, 
  (set) => {
    const checkWidth = () => {
      const width = window.innerWidth;
      set({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        width
      })
    }

    const throttledCheckWidth = createThrottledFunction(checkWidth, 100)

    if (typeof window !== 'undefined') {
      checkWidth()
      window.addEventListener('resize', () => {
        throttledCheckWidth()
      })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkWidth)
      }
    }
  }
)