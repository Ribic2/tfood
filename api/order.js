const express = require('express')
const router = express.Router();
const jwt = require('../middleware/jwt')

router.get('/', (req, res) => {
    res.json({
        "Order": jwt.generateToken(),
    })
})

router.get('/about',jwt.authenticateToken,(req, res) => {
   res.json({
       "response" : req.user
   })
})
module.exports = router