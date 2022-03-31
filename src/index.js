import path from 'path'
const server = require('./server')
const express = require('express')
const app = express()


app.use('/', require('./api/routes/zip_code/request'))


server().then(app =>{
    app.listen(5001, () => console.log('server is running on port 5001'))
})






