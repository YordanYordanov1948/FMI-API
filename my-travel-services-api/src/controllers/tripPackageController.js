const TripPackage = require('../models/TripPackage');

const tripPackageController = {
  async createTripPackage(req, res) {
    try {
      const newTripPackage = new TripPackage(req.body);
      const savedTripPackage = await newTripPackage.save();
      res.status(201).json(savedTripPackage);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getAllTripPackages(req, res) {
    try {
      const tripPackages = await TripPackage.find();
      res.json(tripPackages);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async getTripPackageById(req, res) {
    try {
      const tripPackage = await TripPackage.findById(req.params.id);
      if (!tripPackage) return res.status(404).json({ message: 'Trip package not found' });
      res.json(tripPackage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async updateTripPackage(req, res) {
    try {
      const updatedTripPackage = await TripPackage.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedTripPackage);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async deleteTripPackage(req, res) {
    try {
      await TripPackage.findByIdAndDelete(req.params.id);
      res.json({ message: 'Trip package deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = tripPackageController;
