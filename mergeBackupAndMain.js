/**
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 * %%% MERGE BACKUP AND MAIN TWEETS %%%
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/
// [REQUIRE] Personal //
const backupTweetsCollection = require('./s-collections/backupTweetsCollection')
const tweetsCollection = require('./s-collections/tweetsCollection')


// [MERGE] //
const mergeBackupAndMain = async () => {
	// [INTI] //
	let mergeComplete = false

	// [READ-ALL-ALL]  Backup Tweets //
	const { backupTweets } = await backupTweetsCollection.readAllAll()

	// For each backup tweet
	for (let i = 0; i < backupTweets.length; i++) {
		// [READ] Check if tweet does not exist already.. //
		const { tweet: foundTweet } = await backupTweetsCollection.find(backupTweets[i])

		// If tweet does not exist //
		if (!foundTweet) {
			// [CREATE] tweet -> tweetsCollection //
			const savedTweet = await tweetsCollection.storeTweet(backupTweets[i])
			
			console.log(savedTweet)
		}
	}

	mergeComplete = true

	if (mergeComplete) {
		// [DELETE] Backup Tweets //
		const deletedBackupTweets = await backupTweetsCollection.deleteAllAll()

		return {
			executed: true,
			status: true,
			deletedBackupTweets: deletedBackupTweets,
		}
	}
}


// [EXPORT] //
module.exports = {
	mergeBackupAndMain,
}