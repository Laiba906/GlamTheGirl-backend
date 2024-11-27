const express = require('express');
const app = express();
const SalonRoute = express.Router();
const mongoose = require("mongoose");

// Bus model
let salon = require('../models/salon.model');

// Add Bus
SalonRoute.route('/createSalon').post(async (req, res, next) => {
    try {
        const newSalon = await salon.create(req.body); // Use async/await
        res.status(201).json(newSalon);
    } catch (error) {
        next(error); // Pass the error to error-handling middleware
    }
});

// Get All Bus
SalonRoute.route('/getAllSalons').get(async (req, res, next) => {
    try {
        const salons = await salon.find(); // Use async/await
        res.status(200).json(salons);
    } catch (error) {
        next(error); // Pass the error to error-handling middleware
    }
});

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

module.exports = SalonRoute;