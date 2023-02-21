// Copied from: https://stackoverflow.com/a/68228099/7812829
// after 3 hours, I realized the mistake is I keep calling debounce()
// when it can only be called once
// which is why setting obj to global worked because it prevented 
// setting obj independently each time
export function debounce (func, ms) { 
  // `obj` will be accessible by every instance of the inner function `debouncedFunc`
  // but also inaccessible and independent from other `debounce ()` contexts
  // @see Javascript Lexical Scoping
  let obj = { p: null, rejectP: _ => void 0 }

  async function debouncedFunc (...args) {
    try {
      obj.rejectP() // this causes the previous, ongoing function call to skip to catch block without resolving func
      
      // obj.p is a promise that will auto-resolve in `ms` milliseconds if `rejectP` isn't called by somewhere else
      obj = createObjContainingPromiseAndReject(ms)
      await obj.p

      func(...args) // actually perform the expensive operation
    }

    catch (error) { 
      // console.log('cancelled')
    }
  }
  
  return debouncedFunc
}

function createObjContainingPromiseAndReject (milliseconds) {
  let rejectP
  let p = new Promise((resolve, reject) => {
    rejectP = reject 
    setTimeout(resolve, milliseconds)
  }) 
  return { p, rejectP }
}



export function getRandomID () {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';
  for (let i = 0; i < 20; i++) {
    autoId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return autoId;
}

/**
 * Displays the date in the user's local time
 * 
 * @param {String} isoString 
 * @returns a human readable form of the date e.g. March 24th 5:46
 */
 export const displayDate = function (isoString, format = {
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'utc',
}) 
{ 
  const deserializedDate = new Date(isoString)
  let currentTimeZoneOffset = deserializedDate.getTimezoneOffset() * 60000;
  return new Date(deserializedDate - currentTimeZoneOffset).toLocaleDateString(
    'en-US',
    format
  );
} 

// rounds to nearest 0.1, see https://stackoverflow.com/a/12698296/7812829
export function roundedToFixed(input, digits) {
  var rounded = Math.pow(10, digits);
  return (Math.round(input * rounded) / rounded).toFixed(digits);
}