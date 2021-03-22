const jwt = require('jsonwebtoken')
require('dotenv').config()

// Authenticates token
module.exports.authenticateToken = function (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_TOKEN, (err, user)=>{
       if(err) return res.sendStatus(401)

        req.user = user
        next()
    })
}

// Generates token
// Returns user data when token is verified
module.exports.generateToken = (req, res, next) => {
    return jwt.sign({"id": 1}, process.env.JWT_TOKEN, { expiresIn: '1h' })
}
