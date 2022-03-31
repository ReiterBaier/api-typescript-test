import { server } from './server'
import './config/aliases'

server().then(app => {
  app.listen(5001, () => console.log('server is running on port 5001'))
})
