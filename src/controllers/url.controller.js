const mongoose = require('mongoose');
const UrlSchema = require('../models/url.schema');
const Url = mongoose.model('Url', UrlSchema);

const { gerarCodigo } = require('../services/gerar-codigo');

module.exports = {

  async create(req, res) {
    const { url } = req.body;
    const urlEncurtada = `http://localhost:3000/${gerarCodigo()}`;
    console.log(url)
    console.log(urlEncurtada)

    const urlSaved = await Url.create({
      url_original: url,
      url_encurtada: urlEncurtada
    });

    res.json(urlSaved);
  },
  
  async getAll(req, res) {
    const urls = await Url.find();

    res.json(urls);
  },

  async getById(req, res) {
    const { id } = req.params;
    const url = await Url.findById(id);

    res.json(url);
  }

}
