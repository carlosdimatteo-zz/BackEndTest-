const config = require('./config')
const pgp = require('pg-promise')()
const db = pgp(config.url)

module.exports = db