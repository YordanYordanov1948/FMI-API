const Destination = require('../models/Destination');

const destinationController = {
  async createDestination(req, res) {
    try {
      const newDestination = new Destination(req.body);
      const savedDestination = await newDestination.save();
      res.status(201).json(savedDestination);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getAllDestinations(req, res) {
    try {
      const destinations = await Destination.find();
      res.json(destinations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async getDestinationById(req, res) {
    try {
      const destination = await Destination.findById(req.params.id);
      if (!destination) return res.status(404).json({ message: 'Destination not found' });
      res.json(destination);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async updateDestination(req, res) {
    try {
      const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedDestination);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async deleteDestination(req, res) {
    try {
      await Destination.findByIdAndDelete(req.params.id);
      res.json({ message: 'Destination deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = destinationController;
