const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const tripPackageRoutes = require('./src/routes/tripPackageRoutes');
const destinationRoutes = require('./src/routes/destinationRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/trip-packages', tripPackageRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
