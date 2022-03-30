const path = require('path')
const datasource = require('typeorm')

module.exports = AppDatasource = new datasource.DataSource({
    type: 'mariadb',
    database: 'fsis_cep',
    host: 'fsis-db.cn30ieaycffi.us-east-1.rds.amazonaws.com',
    port: 9630,
    username: 'admin',
    password: 'dY&^3ODl^wolj!Jt3YiT'
})

module.exports =  connect  = async() => {
    await AppDatasource.initialize().then(() => {   
        console.log('Datasource initialized')
    })
}

