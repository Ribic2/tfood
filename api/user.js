const express = require('express')
const router = express.Router()
const jwt = require('../middleware/jwt')
const login = require('../services/login')

router.get('/login', login ,(req, res)=>{})

module.exports = router