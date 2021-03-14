/**
 * %%%%%%%%%%%%%%%%%% *
 * %%% INDEX PAGE %%% *
 * %%%%%%%%%%%%%%%%%% *
*/
// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Twitter = require('twitter')


// [REQUIRE] Personal //
const config = require('../../s-config')
const tweetsCollection = require('../../s-collections/tweetsCollection')
const timeService = require('../../s-services/timeService')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/:hashtag',
	async (req, res) => {
		try {
			// [INIT] //
			const users = []

			// [TWITTER] //
			const client = new Twitter({
				consumer_key: config.consumer_key,
				consumer_secret: config.consumer_secret,
				access_token_key: config.access_token_key,
				access_token_secret: config.access_token_secret
			})

			// This is the params or query for what you want see
			let params = {
				//q: `#${req.params.hashtag} is:verified`,
				q: `#${req.params.hashtag} -RT`,
				count: 15,
			}

			// [GET] Twitter Client //
			const tweets = await client.get('search/tweets', params)

			// [USERS] //
			tweets.statuses.forEach(t => { users.push(t.user.verified) })

			res.send({
				executed: true,
				status: true,
				users: users,
				tweets: tweets,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				message: `/pages/quote: Error --> ${err}`,
				error: err,
			})
		}
	}
)


// [EXPORT] //
module.exports = router