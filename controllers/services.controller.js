const express = require('express');
const app = express();
const ServicesRoute = express.Router();
const mongoose = require("mongoose");

// Bus model
let services = require('../models/services.model');

// Add Bus
ServicesRoute.route('/createServices').post((req, res, next) => {
    services.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Bus
ServicesRoute.route('/getAllServices').get((req, res) => {
    services.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Bus
// BusRoute.route('/readBus/:id').get((req, res) => {
//     bus.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


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