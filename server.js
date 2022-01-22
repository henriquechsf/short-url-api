const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb+srv://mongo:mongopass@cluster0.es145.mongodb.net/encurtador_url?retryWrites=true&w=majority")

app.get('/', (req, res) => {
    res.json({
      projeto: 'Encurtador de URL',
      versao: '1.0.0',
      aluno: 'Carlos Henrique de S. Ferreira'
    })
  })

const routes = require('./src/routes');
app.use(routes);

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
})
