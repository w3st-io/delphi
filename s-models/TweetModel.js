// [REQUIRE] //
const mongoose = require('mongoose')


// [SCHEMA MODEL] //
const tweetSchema = mongoose.Schema({}, { strict: false })


// [EXPORTS] //
module.exports = mongoose.model('Tweet', tweetSchema)