const express = require('express');

const server = express();

server.listen(3000, () => {
    console.log("Servidor em execução");
});

server.get('/',(req,res)=>{
    res.send("CU")
})

server.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    //usandoHifen
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const dist = pontoA-pontoB;
    res.send(`A distancia entre ${pontoA} e ${pontoB} é de ${dist}`);
})

server.get('/distancia/:pontoA.:pontoB',(req,res)=>{
    //usando ponto
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const dist = pontoA-pontoB;
    res.send(`A distancia entre ${pontoA} e ${pontoB} é de ${dist}`);
})