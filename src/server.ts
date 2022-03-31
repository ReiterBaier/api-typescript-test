import { Express } from 'express'
import { createExpressServer, RoutingControllersOptions } from 'routing-controllers'
import path from 'path'
import { connect } from './database/databaseConnect'

const controllerPath = path.resolve(__dirname, 'api', 'routes', '**', 'controller.*')

const serverConfigs: RoutingControllersOptions = {
  cors: '*',
  defaultErrorHandler: true,
  controllers: [controllerPath]
}

const app: Express = createExpressServer(serverConfigs)

export const server = async () => {
  console.log('----------------------------------INICIANDO O SERVIDOR---------------------------------------------')

  await connect()

  return app
}
