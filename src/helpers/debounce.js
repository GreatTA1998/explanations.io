/**
 * Creates a debounced version of a function
 * @param {Function} func - The function to debounce
 * @param {number} waitFor - The number of milliseconds to wait
 * @returns {Function} - The debounced function
 */
export function createDebouncedFunction(func, waitFor) {
  let timeout;

  const debouncedFn = (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, waitFor);
  };

  debouncedFn.cancel = () => {
    clearTimeout(timeout);
  };

  return debouncedFn;
}

export const createThrottledFunction = (func, delay) => {
  let timeout = null

  return function (...args) {
    if (timeout === null) {
      // fire immediately
      func.apply(this, args)
      
      // trailing call
      timeout = setTimeout(() => {
        func.apply(this, args)
        clearTimeout(timeout)
        timeout = null
      }, delay)
    }
    else {
      // ignore calls that came too soon after the first call
    }
  }
}