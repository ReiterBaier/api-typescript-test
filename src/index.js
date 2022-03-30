const path = require('path')
const server = require('./server')




server().then(app =>{
    app.listen(5001, () => console.log('server is running on port 5001'))
})



