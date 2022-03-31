const Service = require('node-windows').Service

// Create a new service object
const svc = new Service({
  name: 'Fsis cep',
  description: 'API para dados de CEPs e cidades',
  script: './dist/src/index.js'
})

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  svc.start()
})

svc.install()
