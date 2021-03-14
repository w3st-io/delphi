// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [MONGO + PORT] //
	mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/twitter',
	port: process.env.PORT || 5000,

	// [TWITTER] //
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}