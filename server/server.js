const express = require('express')

const server = express()
const listRoutes = require('./routes/users')

//middleware
server.use(express.json())

//listen for list api
server.use('/api/list', listRoutes)

module.exports = server