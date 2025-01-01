export function portal(node, name) {
  // find an element with this ID somewhere in the document
  let slot = document.getElementById(name);
  // move this node to that element
  slot?.appendChild(node);

  return {
    destroy() {
      // remove the node when component is destroyed
      node.remove()
    }
  }
}

export function lazyCallable (node, callback) {
  let observer = new IntersectionObserver (
    (entries) => {
      // for some god damn reason the callbacks fire on initialization, even when there is no intersection,
      // so we have to check manually
      for (const entry of entries) {
        if (entry.isIntersecting) {
          callback()
          observer.unobserve(node)
          return
        }
      }
    }, 
    {
      root: null, // use viewport as root
      threshold: 0.2,
      rootMargin: '0px' // shrink/expand the root element's area, not very useful
    }
  )
  
  observer.observe(node)
}

export function trackWidth (node, onWidthChange) {
  const ro = new ResizeObserver((entries) => {
    const exactWidth = entries[0].contentRect.width
    onWidthChange(exactWidth)
    
    // crazy that boundingClientRect flickers between integers and decimals
  })
  
  ro.observe(node)
  
  return {
    destroy() {
      ro.disconnect()
    },
    
    // Allow updating the callback
    update(newCallback) {
      onWidthChange = newCallback
    }
  }
}
