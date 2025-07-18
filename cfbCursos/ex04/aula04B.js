// Na "aula04B", criando um servidor usando express

const express = require('express');
const app = express();
const porta = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Seja bem vindo!');
});

app.get('/canal', (req, res) => {
    res.json({canal:'CFB Cursos'});
});

app.listen(porta || 3000, () => {console.log('Servidor rodando')});