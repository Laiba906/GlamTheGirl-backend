const express = require('express');
const app = express();
const SubServicesRoute = express.Router();
const mongoose = require("mongoose");

// Bus model
let subServices = require('../models/subServices.model');

SubServicesRoute.route('/createSubServices').post(async (req, res, next) => {
  try {
      const newSalon = await subServices.create(req.body); // Use async/await
      res.status(201).json(newSalon);
  } catch (error) {
      next(error); // Pass the error to error-handling middleware
  }
});

// Get All Bus
SubServicesRoute.route('/getAllSubServices').get(async (req, res, next) => {
  try {
      const service = await subServices.find(); // Use async/await
      res.status(200).json(service);
  } catch (error) {
      next(error); // Pass the error to error-handling middleware
  }
});

SubServicesRoute.route('/getAllSubServices/:salonId/:serviceId').get(async (req, res, next) => {
  try {
    // Query the 'SubService' collection to find subservices by salon_id and service_id
    const data = await subServices.find({ salon_id: req.params.salonId, service_id: req.params.serviceId });
    res.json(data); // Return the list of subservices as JSON response
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

module.exports = SubServicesRoute;