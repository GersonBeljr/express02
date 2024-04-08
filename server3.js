const express = require('express');

const server = express();

server.listen(3000, () => {
    console.log("Servidor em execução");
});

server.get('/', (req, res) => {
    res.send("teste1");
})

server.get('/ola/:nome', (req, res) => {
    res.send("Teste2" + req.params.nome);
})

//rota com dois parametros

server.get('/ola/:nome/:idade', (req, res) => {
    res.send("Teste3 " + req.params.nome + " sua idade é: " + req.params.idade);
})

server.get('/ola/:nome/:valor2/:valor1', (req, res) => {
    res.send("Teste3 " + req.params.nome + " a soma é: " + (parseInt(req.params.valor2) + parseInt(req.params.valor1)));
})