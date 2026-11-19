import { redirect } from '@sveltejs/kit'

// Teacher/learner overview deprecated — keep old /overview links working.
export function load ({ params }) {
  throw redirect(307, `/${params.class}`)
}
