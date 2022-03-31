import { Service } from 'node-windows'
import { path } from 'path'

const script = 'yarn dev'

const svc = new Service({
  name: 'FSIS Cep',
  description: 'API para cadastro de cep e cidades',
  script: script
})

svc.on('install', function () {
  svc.start()
})

svc.install()
