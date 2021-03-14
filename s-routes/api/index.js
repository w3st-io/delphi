/**
 * %%%%%%%%%%%%%%%%%%% *
 * %%% INDEX ROUTE %%% *
 * %%%%%%%%%%%%%%%%%%% *
*/
// [REQUIRE] //
const cors = require('cors')
const express = require('express')
require('dotenv').config()


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req, res) => {
		res.send('Hashtag Project API!')
	}
)


// [EXPORT] //
module.exports = router