const express = require('express');
const app = express();
const ServicesRoute = express.Router();
const mongoose = require("mongoose");

// Bus model
let services = require('../models/services.model');

ServicesRoute.route('/createServices').post(async (req, res, next) => {
  try {
      const newSalon = await services.create(req.body); // Use async/await
      res.status(201).json(newSalon);
  } catch (error) {
      next(error); // Pass the error to error-handling middleware
  }
});


ServicesRoute.route('/getAllServices').get(async (req, res, next) => {
  try {
      const service = await services.find(); // Use async/await
      res.status(200).json(service);
  } catch (error) {
      next(error); // Pass the error to error-handling middleware
  }
});

// Get single Bus
ServicesRoute.route('/getAllServices/:salonId').get(async (req, res, next) => {
  try {
    // Query the 'Service' collection to find services by salon_id
    const data = await services.find({ salon: req.params.salonId });
    res.json(data); // Return the list of services as JSON response
  } catch (error) {
    next(error); // If error occurs, pass it to the error handler
  }
});




// Update Bus
// BusRoute.route('/updatebus/:id').put((req, res, next) => {
//     bus.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Data updated successfully')
//     }
//   })
// })

// Delete Bus
// BusRoute.route('/deletebus/:id').delete((req, res, next) => {
//     bus.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id), (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = ServicesRoute;