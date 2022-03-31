const express = require('express')
const router = express.Router()


router.get('/zid_code/:cep', async function (req, res) {
    res.end()
})


module.exports = router