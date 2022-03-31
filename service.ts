import { Service, ServiceConfig } from 'node-windows'
import { EventLogger } from 'node-windows'

const serviceLog = new EventLogger()

const options: ServiceConfig = {
  name: 'Fsis cep',
  description: 'API para busca de cadastro de CEP e cidades',
  script: './dist/src/index.js'
}

export const srv = () => {
  const srv = new Service(options)

  srv.on('install', () => {
    srv.start()
    console.log('Fsis Cep service installed!')
    serviceLog.info('Fsis Cep service installed!')
  })

  return srv
}

srv().install()
