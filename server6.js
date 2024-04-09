const express = require('express');

const server = express();

const funcoes = require('./functions.js')

server.listen(3000, () => {
    console.log("Servidor em execução");
});

server.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.add(a,b);
    res.send(`Os valores ${a} e ${b} tem como resultado <br>Soma: ${resultado}`);
})

server.get('/sub/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.sub(a,b);
    res.send(`Os valores ${a} e ${b} tem como resultado <br>Subtração: ${resultado}`);
})

server.get('/mul/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.mul(a,b);
    res.send(`Os valores ${a} e ${b} tem como resultado <br>Subtração: ${resultado}`);
})

server.get('/div/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.div(a,b);
    res.send(`Os valores ${a} e ${b} tem como resultado <br>Subtração: ${resultado}`);
})