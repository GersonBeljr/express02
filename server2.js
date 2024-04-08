const express = require('express')
var morgan = require('morgan')
const server = express()

server.listen(3000)

server.use(morgan('Metodo = :method |Status = :status|URL = :url'))

server.get('/',(req,res)=>{
    res.send("CINDERELA BAIHANA");
})