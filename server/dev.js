const express = require('express')
const {createBundle, serveBundle} = require('./util')

const server = express()

// serve app bundle
const appBundle = createBundle('./app/src/index.js')
serveBundle(server, '/build.js', appBundle)
server.use(express.static('./app/'))
server.use('/css', express.static('./app/css'))
// start the server
const port = '9009'
server.listen(port)
console.log(`FathomFrontend listening on port ${port}`)
