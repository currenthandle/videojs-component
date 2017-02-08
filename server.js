const express = require('express')
const http = require('http')
const path = require('path')

const webpack = require('webpack')
const config = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const server = http.createServer(app)

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname + '/public'))

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

server.listen(3000, () => console.log('listening on 3000'))
