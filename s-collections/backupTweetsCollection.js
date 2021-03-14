/**
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% *
 * %%% BACKUP TWEETS COLLECTION %%% *
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% *
 * 
 * Timeline Example (X: time)
 * <----(timePointA)-----(timePointB)---->
*/
// [REQUIRE] Personal //
const BackupTweetModel = require('../s-models/BackupTweetModel')


/******************* [CRUD] *******************/
// [CREATE] //
const storeTweet = async (tweet) => {
	try {
		const storedTweet = await new BackupTweetModel(tweet).save()

		return {
			executed: true,
			status: true,
			backupTweet: storedTweet,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `backupTweetsCollection: Caught Error --> ${err}`,
		}
	}
}


// [READ-ALL-ALL] //
const readAllAll = async () => {
	try {
		const backupTweets = await BackupTweetModel.find()

		return {
			executed: true,
			status: true,
			backupTweets: backupTweets,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `backupTweetsCollection: Caught Error --> ${err}`,
		}
	}
}


// [READ-ALL-ALL] //
const deleteAllAll = async () => {
	try {
		//const deletedBackupTweets = await BackupTweetModel.deleteMany()

		return {
			executed: true,
			status: true,
			backupTweets: deletedBackupTweets,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `backupTweetsCollection: Caught Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	storeTweet,
	readAllAll,
	deleteAllAll,
}