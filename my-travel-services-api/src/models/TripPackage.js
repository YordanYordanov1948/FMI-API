const mongoose = require('mongoose');

const tripPackageSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  duration: Number,
});

module.exports = mongoose.model('TripPackage', tripPackageSchema);
