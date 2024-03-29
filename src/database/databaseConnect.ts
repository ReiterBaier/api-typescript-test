import path from 'path'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const entitiesPath = path.resolve(__dirname, '..', 'entities', '*')

export const AppDatasource = new DataSource({
  type: 'mariadb',
  database: 'database',
  host: 'host',
  port: 0,
  username: 'username',
  password: 'password',
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
