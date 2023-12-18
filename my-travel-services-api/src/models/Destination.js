const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  country: String,
  imageUrl: String,
});

module.exports = mongoose.model('Destination', destinationSchema);
