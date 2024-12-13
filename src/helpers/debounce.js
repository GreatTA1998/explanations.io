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