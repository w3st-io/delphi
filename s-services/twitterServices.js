/**
 * %%%%%%%%%%%%%%%%%%%%%%%
 * %%% HASHTAG PROJECT %%%
 * %%%%%%%%%%%%%%%%%%%%%%%
*/
// [REQUIRE] //
const Twitter = require('twitter')
require('dotenv').config()


// [REQUIRE] Personal //
const config = require('../s-config')


// [TWITTER] //
const client = new Twitter({
	consumer_key: config.consumer_key,
	consumer_secret: config.consumer_secret,
	access_token_key: config.access_token_key,
	access_token_secret: config.access_token_secret
})


const queryTwitter = async (query, count) => {
	// [VALIDATE] //
	if (!count) count = 10
	
	// [INIT] //
	const params = {
		q: query,
		count: count
	}

	// [GET] Twitter Client //
	try {
		const tweets = await client.get('search/tweets', params)

		console.log('queryTwitter', tweets)

		return {
			executed: true,
			status: true,
			tweets: tweets,
		}
	}
	catch (err) {
		console.log('Error -->', err)

		return {
			executed: false,
			status: false,
			message: `Error --> ${err}`,
		}
	}
}


getTweetById_str = async (id_str) => {
	const params2 = { id: id_str }

	// [GET] Twitter Client //
	try {
		const tweet = await client.get('statuses/show', params2)

		//console.log('tweet:', tweet)

		return {
			executed: true,
			status: true,
			tweet: tweet,
		}
	}
	catch (err) {
		console.log('Error -->', err)

		return {
			executed: false,
			status: false,
			message: `Error --> ${err}`,
		}
	}
}


// Run this //
queryTwitter('#hack OR #hacked', 10)
getTweetById_str('1308000281133805570')


// [EXPORT] //
module.exports = {
	queryTwitter,
	getTweetById_str,
}