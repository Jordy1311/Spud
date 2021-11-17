const knex = require('knex')
const config = require('./knexfile')

const env = process.env.ENVIRONMENT || 'development'
const connection = knex(config[env])

module.exports = connection