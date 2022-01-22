const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb+srv://mongo:mongopass@cluster0.es145.mongodb.net/encurtador_url?retryWrites=true&w=majority")

const routes = require('../app/routes');
routes(app);

module.exports = app;
