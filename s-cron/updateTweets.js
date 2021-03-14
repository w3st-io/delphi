/**
 * %%%%%%%%%%%%%%%%%%%%%%%%%% *
 * %%% CRON UPDATE TWEETS %%% *
 * %%%%%%%%%%%%%%%%%%%%%%%%%% *
*/
// [REQUIRE] //
const cron = require('node-cron')


// [REQUIRE] Personal //
const TweetModel = require('../s-models/TweetModel')


// [CRON-JOB] //
cron.schedule('*/1 * * * * *', async () => {
	console.log('running..')
	
	
})