const express = require('express')
const app = express()

const order = require('./api/order')
const user = require('./api/user')
const offer = require('./api/offer')

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use('/api/order', order)
app.use('/api/user', user)
app.use('/api/offer', offer)

app.listen(8080, () => {
    console.log("Server is listening on port 8080!")
})
