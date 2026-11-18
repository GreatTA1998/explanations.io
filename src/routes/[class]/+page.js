import { redirect } from '@sveltejs/kit'

// Bare /[class] matched the layout but had no page → 404 hang.
// Same fallback as homepageServerPath when no featured room/question.
export function load ({ params }) {
  throw redirect(307, `/${params.class}/overview`)
}
