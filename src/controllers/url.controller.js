const mongoose = require('mongoose');
const UrlSchema = require('../models/url.schema');
const Url = mongoose.model('Url', UrlSchema);

const { gerarCodigo } = require('../services/gerar-codigo');

module.exports = {

  async create(req, res) {
    const { url } = req.body;
    const hash = gerarCodigo();

    const urlSaved = await Url.create({
      url_original: url,
      url_encurtada: hash
    });

    res.json(urlSaved);
  },
  
  async getAll(req, res) {
    const { date } = req.query;
    let urls;

    if (date) {
      urls = await Url.find({ createdAt: date })
    } else {
      urls = await Url.find();
    }

    res.json(urls);
  },

  async getById(req, res) {
    const { id } = req.params;
    const result = await Url.findById(id);

    res.json(result);
  },

  async getByShortUrl(req, res) {
    const { shorUrl } = req.params;
    const result = await Url.find({ url_encurtada: shorUrl });

    res.json(result);
  },
}
