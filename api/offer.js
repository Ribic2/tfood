const express = require('express')
const router = express.Router()
const db = require('../models/index')

router.get('/', (req, res)=>{
    db.offer.find({
        where:{
            productName:{
                [Op.like]: 'foo%'
            }
        }
    })
    console.log("yo")
})

module.exports = router