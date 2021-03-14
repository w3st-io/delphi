/**
 * %%%%%%%%%%%%%%%%%%%%%%%
 * %%% HASHTAG PROJECT %%%
 * %%%%%%%%%%%%%%%%%%%%%%%
*/
// [REQUIRE] //
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()


// [REQUIRE] Personal //
const config = require('./s-config')
const a_ = require('./s-routes/api')
const p_ = require('./s-routes/pages')
const p_quote = require('./s-routes/pages/quote')


// [EXPRESS + SERVER] //
const app = express()
const server = http.createServer(app)


// [MONGOOSE-CONNECTION] //
mongoose.connect(
	config.mongoURI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, connected) => {
		if (connected) { console.log('Mongoose Connected to DB') }
		else { console.log(`Mongoose Connection Error --> ${err}`) }
	}
)
mongoose.set('useFindAndModify', false)


// [USE] //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


// [USE] Personal //
app.use('/api', a_)
app.use('/pages', p_)
app.use('/pages/quote', p_quote)


// [HEROKU] Set Static Folder for Heroku //
if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [LISTEN] //
server.listen(config.port, () => {
	console.log(`Server Running on Port: ${config.port}`)
})