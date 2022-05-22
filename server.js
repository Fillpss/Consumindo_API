// Colocando a dependencia express dentro de uma variável pra ser usada depois
const express = require('express');

// Iniciando a variável express criada anteriormente
const app = express();

// Criado a rota básica
app.get('/', (req, res) => {
    // Retornando em formato de JSON uma mensagem
    return res.json([
        { name: 'Filipe'},
        { name: "Pedro"},
    ]);
});

// Porta que será "Ouvida"
app.listen('4567');