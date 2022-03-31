const path = require('path')
const app = require('express')
const connect = require('./database/databaseConnect')

module.exports =  server = async () => {
  await connect()
  console.log('Start connection with database')
  return app()
}
