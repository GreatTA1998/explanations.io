import { readable } from 'svelte/store'

export const viewport = readable({ 
  isMobile: false,
  isTablet: false,
  isDesktop: false
}, (set) => {
  const checkWidth = () => {
    const width = window.innerWidth;
    set({
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024
    })
  }

  if (typeof window !== 'undefined') {
    checkWidth();
    window.addEventListener('resize', () => {
      requestAnimationFrame(checkWidth)
    });
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', checkWidth)
    }
  }
})