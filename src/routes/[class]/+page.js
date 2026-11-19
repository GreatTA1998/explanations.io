// Bare /[class] = no room selected. Main content stays empty (drawer still shows).
export function load ({ params }) {
  return { classID: params.class }
}
