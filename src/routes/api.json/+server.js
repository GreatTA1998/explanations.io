import { json as json$1 } from '@sveltejs/kit';

export async function GET() {
  return json$1({
  hello: 'world'
})
}

// EXAMPLE CODE FOR USE IN A PAGE COMPONENT:

// export async function load ({ fetch }) {
//   const res = await fetch('/api.json');
//   if (res.ok) {
//     const json = await res.json()
//     console.log('json =', json)
//     return { props: json }
//   } else {
//     console.log('res.status =', res.status)
//     return {
//       status: res.status,
//       error: {
//         message: 'Something went wrong'
//       }
//     }
//   }
// }