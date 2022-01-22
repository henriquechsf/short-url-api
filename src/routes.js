const express = require('express');
const routes = express.Router();

const urlController = require('./controllers/url.controller')

routes.get('/url', urlController.getAll);

routes.get('/url/:id', urlController.getById);

routes.post('/url', urlController.create);

module.exports = routes;
