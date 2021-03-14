// [REQUIRE] //
const mongoose = require('mongoose')


// [SCHEMA MODEL] //
const BackupTweetSchema = mongoose.Schema({}, { strict: false })


// [EXPORTS] //
module.exports = mongoose.model('BackupTweet', BackupTweetSchema)