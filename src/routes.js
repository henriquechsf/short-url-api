const express = require('express');
const routes = express.Router();

const urlController = require('./controllers/url.controller')

routes.post('/url', (req, res) => {
    const { url } = req.body;
    const codigo = gerarCodigo();

    res.send(`https://localhost:3000/${codigo}`);
  })

  routes.get('/url', (req, res) => {
    res.send('todas urls encurtadas')
  })

function gerarCodigo() {
    let text = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for(let i = 0; i < 5; i++) {
      text += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return text;
  }

module.exports = routes;
