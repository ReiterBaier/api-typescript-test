import path from 'path'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const entitiesPath = path.resolve(__dirname, '..', 'entities', '*')

export const AppDatasource = new DataSource({
  type: 'mariadb',
  database: 'fsis_cep',
  host: 'fsis-db-master.cn30ieaycffi.us-east-1.rds.amazonaws.com',
  port: 9631,
  username: 'admin',
  password: 'dY&^3ODl^glej!Ot6YiK',
  entities: [entitiesPath]
})

export const connect = async () => {
  await AppDatasource.initialize()
    .then(() => {
      console.log('connection with database inicialized ')
    })
    .catch(error => {
      console.log(error)
    })
}
