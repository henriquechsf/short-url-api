const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  url_original: {
    type: String,
    required: true
  },
  url_encurtada: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Url', UrlSchema);

module.exports = UrlSchema;
