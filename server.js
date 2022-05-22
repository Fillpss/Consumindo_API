// Colocando a dependencia de acesso Cors dentro de uma variável para ser utilizada
const cors = require('cors');

// Colocando a dependencia express dentro de uma variável pra ser usada depois
const express = require('express');

// Iniciando a variável express criada anteriormente
const app = express();

// Utilizando o cors na aplicação
app.use(cors());

// Criado a rota básica
app.get('/', (req, res) => {
    // Retornando em formato de JSON uma mensagem
    return res.json([
        { name: 'Filipe'},
        { name: "Pedro"}
    ]);
});

// Porta que será "Ouvida"
app.listen('4567');