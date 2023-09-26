// see https://kit.svelte.dev/faq
//     https://www.reddit.com/r/sveltejs/comments/qp1cck/cant_make_environment_variables_work_in_sveltekit/
// to put environment variables in this project, edit .env file
// to put environment variables in production (Vercel), directly enter it on their website
// then, the below code will work in both production and local environments

export const API_KEY_SECRET = import.meta.env.VITE_DAILY_API_KEY
export const MIXPANEL_PROJECT_TOKEN = import.meta.env.VITE_MIXPANEL_PROJECT_TOKEN