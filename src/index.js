const express = require('express')
const app = express()
const datasource = require('typeorm')
const path = require('path')


const AppDatasource = new datasource.DataSource({
    type: 'mariadb',
    database: 'fsis_cep',
    host: 'fsis-db.cn30ieaycffi.us-east-1.rds.amazonaws.com',
    port: 9630,
    username: 'admin',
    password: 'dY&^3ODl^wolj!Jt3YiT'
})


const connect = async() => {
    await AppDatasource.initialize().then(() => {   
        console.log('Datasource initialized')
    })
}



const server = async () => {
    console.log('-----------------------------------------------START------------------------------------------------')
  
    await connect()

  }

  

  