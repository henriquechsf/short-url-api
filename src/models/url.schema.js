const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  url_adress: {
    type: String,
    required: true
  },
  url_short: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Url', UrlSchema);

module.exports = UrlSchema;
