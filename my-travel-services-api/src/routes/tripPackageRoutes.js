const express = require('express');
const router = express.Router();
const tripPackageController = require('../controllers/tripPackageController');

router.get('/', tripPackageController.getAllTripPackages);
router.post('/', tripPackageController.createTripPackage);
router.put('/:id', tripPackageController.updateTripPackage);
router.delete('/:id', tripPackageController.deleteTripPackage);

module.exports = router;
