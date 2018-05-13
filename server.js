'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new webpackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallbac: true,
  stats: {colors: true}
}).listen(3000,(err)=>{
  if(err) {
    return console.log(err)
  }
  console.log('Escutando em http://localhost:3000')
})
