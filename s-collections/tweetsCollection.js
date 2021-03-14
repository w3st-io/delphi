/**
 * %%%%%%%%%%%%%%%%%%%%%%%%% *
 * %%% TWEETS COLLECTION %%% *
 * %%%%%%%%%%%%%%%%%%%%%%%%% *
 * 
 * Timeline Example (X: time)
 * <----(timePointA)-----(timePointB)---->
*/
// [REQUIRE] Personal //
const TweetModel = require('../s-models/TweetModel')

/******************* [CRUD] *******************/
// [CREATE] //
const storeTweet = async (tweet) => {
	try {
		const storedTweet = await new TweetModel(tweet).save()

		return {
			executed: true,
			status: true,
			tweet: storedTweet,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `tweetsCollection: Caught Error --> ${err}`,
		}
	}
}


// [READ-ALL-ALL] //
const readAllAll = async () => {
	try {
		const backupTweets = await TweetModel.find()

		return {
			executed: true,
			status: true,
			backupTweets: backupTweets,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: true,
			message: `tweetsCollection: Caught Error --> ${err}`,
		}
	}
}


// [READ-ALL] timePointA < Tweets < timePointB //
const recentTweets = async (timePointA, timePointB) => {
	try {
		const tweets = await TweetModel.find({
			'user.verified': true,
			created_at: {
				$gte: timePointA,
				$lte: timePointB
			}
		}).limit(5).sort({ created_at: -1 })

		return {
			executed: true,
			status: true,
			tweets: tweets,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `tweetsCollection: Caught Error --> ${err}`,
		}
	}
}


// [READ-ALL] timePointA < Tweets < timePointB //
const popularTweetWithinTime = async (timePointA, timePointB) => {
	try {
		const tweets = await TweetModel.find({
			created_at: {
				$gte: timePointA,
				$lte: timePointB
			}
		})

		return {
			executed: true,
			status: true,
			tweets: tweets,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `tweetsCollection: Caught Error --> ${err}`,
		}
	}
}


// [READ] By id_str //
const findTweet = async (id_str) => {
	try {
		const foundTweet = await TweetModel.find({ id_str })

		return {
			executed: true,
			status: true,
			tweet: foundTweet,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `tweetsCollection: Caught Error --> ${err}`,
		}
	}
}


/******************* [COUNT] *******************/
const c_countTimeFrame = async (timePointA, timePointB) => {
	try {
		// [READ-ALL] timePointA < Tweets < timePointB //
		const count = await TweetModel.countDocuments({
			created_at: {
				$gte: timePointA,
				$lte: timePointB
			}
		})

		return {
			executed: true,
			status: true,
			count: count,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `tweetsCollection: Caught Error --> ${err}`,
		}
	}
}


const c_countTimeFrameHashtag = async (timePointA, timePointB, hashtag) => {
	try {
		// [READ-ALL] timePointA < Tweets < timePointB //
		const count = await TweetModel.countDocuments({
			$or: [
				// Tweet //
				{
					'entities.hashtags': {
						$elemMatch: {
							text: { $regex: new RegExp(`\\b${hashtag}\\b`, 'ig') }
						}
					},
				},
				{
					'extended_tweet.entities.hashtags': {
						$elemMatch: {
							text: { $regex: new RegExp(`\\b${hashtag}\\b`, 'ig') }
						}
					},
				},
				// retweet //
				{
					'retweeted_status.entities.hashtags': {
						$elemMatch: {
							text: { $regex: new RegExp(`\\b${hashtag}\\b`, 'ig') }
						}
					},
				},
				{
					'retweeted_status.extended_tweet.entities.hashtags': {
						$elemMatch: {
							text: { $regex: new RegExp(`\\b${hashtag}\\b`, 'ig') }
						}
					},
				},
				// quoted tweet //
				{
					'quoted_status.entities.hashtags': {
						$elemMatch: {
							text: { $regex: new RegExp(`\\b${hashtag}\\b`, 'ig') }
						}
					},
				},
				{
					'quoted_status.extended_tweet.entities.hashtags': {
						$elemMatch: {
							text: { $regex: new RegExp(`\\b${hashtag}\\b`, 'ig') }
						}
					},
				},
			],
			created_at: {
				$gte: timePointA,
				$lte: timePointB
			}
		})

		return {
			executed: true,
			status: true,
			count: count,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `tweetsCollection: Caught Error --> ${err}`,
		}
	}
}


const c_updateDataOfVerifiedTweets = async () => {
	// Get Tweets within a timeframe 

	// Get the tweet from the api 

	// update the tweet in the database
}


// [EXPORT] //
module.exports = {
	storeTweet,
	readAllAll,
	recentTweets,
	findTweet,
	popularTweetWithinTime,
	c_countTimeFrame,
	c_countTimeFrameHashtag,
	c_updateDataOfVerifiedTweets,
}