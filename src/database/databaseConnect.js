const datasource = require('typeorm')
const path = require('path')


export const AppDatasource = new datasource.DataSource({
    type: 'postgres',
    database: 'openproject',
    host: '172.20.10.210',
    port: 5432,
    username: 'openproject',
    password: 'openproject'
})


export const connect = async() => {
    await AppDatasource.initialize().then(() => {   
        console.log('Datasource initialized')
    })
}


export default AppDatasource