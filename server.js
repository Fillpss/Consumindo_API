// Colocando a dependencia de acesso Cors dentro de uma variável para ser utilizada
const cors = require('cors');

// Colocando a dependencia express dentro de uma variável pra ser usada depois
const express = require('express');

// Iniciando a variável express criada anteriormente
const app = express();

// Um "fatch" porém para o back
const axios = require('axios');
const { acceptsEncodings } = require('express/lib/request');

// Utilizando o cors na aplicação
app.use(cors());

// Criado a rota básica
app.get('/', async(req, res) => {

    try {
    // Response é a resposta do axios MAS eu tiro o datade dentro do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    console.log(data )
    // o axios ja possui um "const data = await response.json()" embutido";

    return res.json(data);
    } catch (error) {
        console(error);
    }

});

// Porta que será "Ouvida"
app.listen('4567');