const jwt = require('../middleware/jwt')
const db = require('../models/index')

module.exports = (async (req, res, next)=>{
    await db.User.findAll({
        where:{
            email:'vid.bukovec8361@gmail.com',
            password:'test123'
        }
    }).then(data=>{
       res.json({
           "data": data,
           "token": jwt.generateToken()
        })
    })
    .catch(err=>{
        res.send(err)
    })

    next()
})