const express = require('express')
const app = express()

const order = require('./api/order')

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use('/orders', order)

app.listen(8080, () => {
    console.log("Server is listening on port 8080!")
})
