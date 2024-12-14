// import DailyIFrame from '@daily-co/daily-js'
// console.log('in .js file, DailyIFrame =', DailyIFrame)

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params, fetch }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	const article = 'The Economist predicts the collapse of the economy in 2030' // await db.get(slug);

	const response = await fetch("https://api.daily.co/v1/rooms", {
		"method": "POST",
		"headers": {
			"content-type": "application/json", // remove this allows your room to beb created
			// "Authorization": "Bearer " + API_KEY_SECRET
		},
	 mode: "cors",
		body: JSON.stringify({
			name: roomID,
			properties: {
				exp: Math.round(Date.now() / 1000) + SECONDS_IN_TWO_HOURS,
				eject_at_room_exp: true,
				start_video_off: true
			}
		})
	})
}

		// if (article) {
	// 	return {
	// 		body: {
	// 			article
	// 		}
	// 	};
	// }
