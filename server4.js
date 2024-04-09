const express = require('express');

const server = express();

server.listen(3000, () => {
    console.log("Servidor em execução");
});

//dados dos clientes

const clientes = [
    {
        id: 1,
        nome: 'Alatir',
        telefone: 11111111,
        email: "ala@drowmail.com"
    },
    {
        id: 2,
        nome: 'Zamins',
        telefone: 22222222,
        email: "ZaminsOMachadodeGuerra@drowmail.com"
    },
    {
        id: 3,
        nome: 'Northend',
        telefone: 33333333,
        email: "Northend.Drow@drowmail.com"
    },
    {
        id: 4,
        nome: 'Greelane',
        telefone: 44444444,
        email: "Gregre@drowmail.com"
    },
    {
        id: 5,
        nome: 'Aramil',
        telefone: 55555555,
        email: "VENDODROGA@drowmail.com"
    }
]

//rota

server.get("/", (req, res) => {
    res.send("API de cliclicli")
})

//rota com total de clientes

server.get('/total_clientes', (req, res) => {
    res.send('O total de cliente: ' + clientes.length)
})

server.get('/clientes/:id', (req, res) => {
    const cliente = clientes.find(c=>c.id===parseInt(req.params.id));

    if(!cliente)res.status(404).send("error404");

    res.send(`O Cliente é: ${cliente.nome}, Telefone: ${cliente.telefone}, Email: ${cliente.email}`)
    
})