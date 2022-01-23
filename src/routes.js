const express = require('express');
const routes = express.Router();

const urlController = require('./controllers/url.controller')

routes.get('/urls', urlController.getAll);

routes.get('/urls/:id', urlController.getById);

routes.post('/urls', urlController.create);

routes.get('/:shortUrl', urlController.getByShortUrl);

module.exports = routes;
