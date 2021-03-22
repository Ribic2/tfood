const express = require('express')
const router = express.Router();
const jwt = require('../middleware/jwt')

router.get('/', jwt.authenticateToken ,(req, res) => {
    res.json({
        "Order": "test",
    })
})

router.post('/',jwt.authenticateToken,(req, res) => {
   res.json({
       "response" : "test"
   })
})

router.delete('/',jwt.authenticateToken,(req, res) => {
    res.json({
        "response" : "test"
    })
})

router.put('/',jwt.authenticateToken,(req, res) => {
    res.json({
        "response" : "test"
    })
})
module.exports = router