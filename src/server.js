const express = require('express')
const connect = require('./database/databaseConnect.js')


export default server = async () => {
    console.log('-----------------------------------------------START------------------------------------------------')
  
    await connect()

  }
  