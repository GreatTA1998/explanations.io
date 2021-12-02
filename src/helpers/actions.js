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