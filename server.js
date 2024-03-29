const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const swaggerUI = require('swagger-ui-express');
const yaml = require('yamljs');

const spec = yaml.load('./swagger.yml');
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spec));

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CREDENTIALS);

app.get('/', (req, res) => {
  res.json({
    projeto: 'Encurtador de URL',
    versao: '1.0.0',
    aluno: 'Carlos Henrique de S. Ferreira',
    curso: 'MBA Desenvolvimento Mobile'
  })
})

const routes = require('./src/routes');
const config = require('./src/config/config');
app.use(routes);

app.listen(config.PORT, () => {
  console.log('Server running...');
})
