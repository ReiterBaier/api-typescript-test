import { server } from './server'
import './config/aliases'

server().then(app => {
  app.listen(4000, () => console.log('server is running on port 4000'))
})
