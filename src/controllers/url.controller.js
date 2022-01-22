const mongoose = require('mongoose');
const UrlSchema = require('../models/url.schema');
const Url = mongoose.model('Url', UrlSchema);

const { gerarCodigo } = require('../services/gerar-codigo');

module.exports = {

  async create(req, res) {
    const { url } = req.body;
    const urlEncurtada = `http://localhost:3000/${gerarCodigo()}`;

    const urlSaved = await Url.create({
      url_original: url,
      url_encurtada: urlEncurtada
    })

    res.json(urlSaved);
  },
  
  async getAll(req, res) {
    res.send('todas urls encurtadas')
  }

}
