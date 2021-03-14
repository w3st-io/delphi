// [REQUIRE] //
const Twitter = require('twitter')


// [REQUIRE] Personal //
const config = require('../s-config')


async function queryTwitter() {
	// [GET] Twitter Client //
	try {
		// [TWITTER] //
		const client = new Twitter({
			consumer_key: config.consumer_key,
			consumer_secret: config.consumer_secret,
			access_token_key: config.access_token_key,
			access_token_secret: config.access_token_secret
		})
		
		const params = {
			q: 'health is:verified -RT',

			// YYYY-MM-DD (Cannot be farther then a week ago) //
			//until: '2020-10-03',

			count: 100
		}

		// [GET-REQUEST] //
		const tweets = await client.get('search/tweets', params)
		
		// [LOG] //
		tweets.statuses.forEach(tweet => {
			console.log(tweet.user.screen_name, tweet.user.verified)
			console.log(tweet.user)
		})
	}
	catch (err) { console.log('Error -->', err) }
}


queryTwitter()


