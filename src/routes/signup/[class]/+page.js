// OPTION !
export function load ({ data, params }) {
  // this corresponds to the `data` object
  return {
    classID: params.class,
    // roomID: params.room
  }
}  

// OPTION 2
// export async function load ({ data }) {
//   return data
// }
