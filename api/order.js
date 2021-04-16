const express = require('express')
const router = express.Router();
const db = require('../models/index')
const jwt = require('../middleware/jwt')

router.get('/', (req, res) => {
   
    res.json({
        "Order": "test",
    })
})

router.post('/',jwt.authenticateToken,(req, res) => {
    db.order.create({
        amount: 100
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

   res.json({
       "response" : "Order was added!"
   })
})

router.delete('/',jwt.authenticateToken,(req, res) => {
    db.order.destroy({
        where:{
            id: 1
        }
    })
    res.json({
        "response" : "Order was deleted!"
    })
})

router.put('/',jwt.authenticateToken,(req, res) => {
    res.json({
        "response" : "Order was updated!"
    })
})
module.exports = router