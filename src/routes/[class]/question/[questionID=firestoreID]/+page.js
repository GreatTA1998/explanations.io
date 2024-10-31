
export function load ({ data, params }) {
  // this corresponds to the `data` object
  return {
    classID: params.class,
    questionID: params.questionID
  }
}