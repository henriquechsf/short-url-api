const mongoose = require('mongoose');
const UrlSchema = require('../models/url.schema');
const Url = mongoose.model('Url', UrlSchema);

const { hashGenerate } = require('../services/hash-generate.service');

module.exports = {

  async create(req, res) {
    const { url } = req.body;
    const hash = hashGenerate();

    const urlSaved = await Url.create({
      url_adress: url,
      url_short: hash
    });

    res.json(urlSaved);
  },
  
  async getAll(req, res) {
    const { date } = req.query;
    let urls;

    if (date) {
      urls = await Url.find({ created_at: date })
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
    const { shortUrl } = req.params;
    const result = await Url.find({ url_short: shortUrl });

    res.json(result);
  },
}
