const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  phoneNumber: String,
  tripPackage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TripPackage' // Референция към TripPackage модела
  },
  numberOfPeople: Number,
  bookingDate: Date
});

module.exports = mongoose.model('Booking', bookingSchema);
