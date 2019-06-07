const express = require('express')

const authRoutes = require('./routes/auth')

const server = express()

// JSON API Middleware
server.use(express.json())

// Static file serving middleware
server.use(express.static('./public'))

//Add routes
server.use('/api/v1/auth', authRoutes)

module.exports = server