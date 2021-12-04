// import DailyIFrame from '@daily-co/daily-js'
// console.log('in .js file, DailyIFrame =', DailyIFrame)

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	const article = 'The Economist predicts the collapse of the economy in 2030' // await db.get(slug);

	if (article) {
		return {
			body: {
				article
			}
		};
	}
}